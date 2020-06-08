var myLatLng = {lat: 3.13192, lng: 101.684059 };
var mapOptions = {
    center: myLatLng,
    zoom: 7,
};

document.getElementById("output").style.display = "none";

var map = new google.maps.Map(document.getElementById("google-map"), mapOptions);

var directionsService = new google.maps.DirectionsService();

var directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map);

function calcRoute() {
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }

    directionsService.route(request, function (result, status) {
        if (status == google.mapsDirectionsStatus.OK) {

            $("#output").html("<div class='result-distance'> Driving distance: " + result.routes[0].legs[0].distance.text + ".<br />Duration: " + result.routes[0].legs[0].duration.text + ".</div>");

            document.getElementById("output").style.display = "block";
            
            directionsDisplay.setDirections(result);

        }else{

            directionsDisplay.setDirections({routes: [] });

            map.setCenter(myLatLng);

            alert("Can't find road! Please try again !");
            clearRoute();

        }
    })
}

function clearRoute(){
    document.getElementById ("output").style.display = "none";
    document.getElementById ("from").value;
    document.getElementById ("to").value;
    directionsDisplay.setDirections({ routes: [] });

}

var options = {

    types: ['(cities)']

}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete1 = new google.maps.places.Autocomplete(input2, options);
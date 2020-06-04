function validation(){
    var name = document.getElementById("name").Value;
    var subject = document.getElementById("subject").Value;
    var phone = document.getElementById("phone").Value;
    var email = document.getElementById("email").Value;
    var message = document.getElementById("message").Value;
    var error_message = document.getElementById("error_message");
    var text;


    error_message.style.padding = "10px";

    if(name.length <5){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(subject.length <5){
        text = "Please Enter Valid Subject";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <= 50){
        text = "Please Enter More than 50 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Succesfully!")
    return true;

}
function sendMail(event) {
    console.log(event)
    event.preventDefault();

    var valid = validation();

    if(valid) {
        emailjs.send("gmail", "syafiq", {
        "from_name":"syafiq",
        "from_email":"syafiq_razak@hotmail.com",
        "question":"avaiable careers",
        "from_phone":"0123245341"})
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );

    return true
    }

    alert("Error!")
    
    return false;
}
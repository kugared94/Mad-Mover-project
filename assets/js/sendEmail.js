function sendMail(contactForm) {
    emailjs.send("gmail", "syafiq", {
        "from_name":"syafiq",
        "from_email":"syafiq_razak@hotmail.com",
        "question":"avaiable careers",
        "from_phone":"+60123245341"})
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}
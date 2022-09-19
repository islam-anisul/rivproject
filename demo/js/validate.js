// form validation
function validateform() {
    "use strict"
    var fname = document.getElementById("name").value;
    var mailID = document.getElementById("emailID").value;
    var message = document.getElementById("msg").value;

    // first name validation
    if ((fname == "") || (fname == null)) {
        document.getElementById("fNameErr").innerHTML = "*Required Full Name"
        return false;
    } else if (fname.length < 2) {
        document.getElementById("fNameErr").innerHTML = "*Name can't be less than 2 characters"
        return false;
    } else {
        document.getElementById("fNameErr").innerHTML = null;
    };

    // mail vlaidation
    if ((mailID == "") || (mailID == null)) {
        document.getElementById("EmailIDErr").innerHTML = "*Required Email ID"
        return false;
    } else if (mailID.indexOf('@') <= 0) {
        document.getElementById("EmailIDErr").innerHTML = "*Invalid Email format"
        return false;
    } else if ((mailID.charAt(mailID.length - 4) != '.') && (mailID.charAt(mailID.length - 3) != '.')) {
        document.getElementById("EmailIDErr").innerHTML = "*Invalid Email format"
        return false;
    } else {
        document.getElementById("EmailIDErr").innerHTML = null;
    }

    // message validation
    if ((message == "") || (message == null)) {
        document.getElementById("msgErr").innerHTML = "*MSG can't be blank"
        return false;
    } else if (message.length < 10) {
        document.getElementById("msgErr").innerHTML = "*MSG can't be less than 10 characters"
        return false;
    } else {
        document.getElementById("msgErr").innerHTML = null;
    }
};
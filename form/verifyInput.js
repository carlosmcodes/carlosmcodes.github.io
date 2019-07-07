var checkr = document.forms.form;
var message = document.getElementById("message");

checkr.value

checkr.onsubmit = function () {
    
    if (checkr.first.value > 60) {
        message.innerHTML("try a shorter name");
        return false;
    }
    if (checkr.first.value == "") {
        message.innerHTML = "please enter a first name";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }


};
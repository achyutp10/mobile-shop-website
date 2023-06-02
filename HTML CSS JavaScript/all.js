
// email regex (for any typing mistake or field empty as well)
function subimtform(e) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (x == '') {
        alert("Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("email must be filled out");
        return false;
    }
    if (y.match(regexEmail)) {

    } else {
        alert("email must be of email type example abc@gmail.com");
    }
    if (z == "") {
        alert("subject must be filled out");
        return false;
    }

    if (w == "Enter your message") {
        alert("message must be filled out");
        return false;
    } else if (w == "") {
        alert("message must be filled out");
    } else {
        alert('message sent successfully');
    }
}
// form validation
function validateForm() {
	var email = document.forms["messageform"]["email"].value;
	var password = document.forms["messageform"]["password"].value;

	if (email == "" || password == ""){
		alert("Empty fields found. Please fill the form.");
	}
	else {
		alert("Thank you for your Login.");
	}
}

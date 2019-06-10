/*
** This script validates the content for a form based on specific rules
** for each item in the form
*/
window.onload = init;
function init() {
// when page loads attach event to validate form
    var formsubmit = document.getElementById("submit");
    if (formsubmit) {
        formsubmit.onclick = checkForm;
    }
}
function checkForm() {
// test the fields in the form
// FIRSTNAME: Required, at least two letters long
    var firstname = document.getElementById('firstname').value;
    var firstname_msg = document.getElementById('firstname_msg');
    var valid = true;
    if (firstname.length < 2) {
        firstname_msg.innerHTML = "First name should be at least 2 letters in length";
        firstname_msg.className = 'error';
        valid = false;
    } else {
        firstname_msg.innerHTML = "";
        firstname_msg.className = '';
    }
// FAMILYNAME: Required, at least two letters long
    var familyname = document.getElementById('familyname').value;
    var familyname_msg = document.getElementById('familyname_msg');
    if (familyname.length < 2) {
        familyname_msg.innerHTML = "Family name should be at least 2 letters in length";
        familyname_msg.className = 'error';
        valid = false;
    } else {
        familyname_msg.innerHTML = "";
        familyname_msg.className = '';
    }
// EMAIL: Not required, but if not blank, then must be valid email address
    var email = document.getElementById('email').value;
    var email_msg = document.getElementById('email_msg');
// regular expression for validatin
    var emailRegExp = /^(\w+@[a-z\d]+?([a-z-\d_\.]*?)\.[a-z]{2,6})$/i;
    if (email !== "" && !emailRegExp.test(email)) {
        email_msg.innerHTML = "Must be a valid email address, or left blank.";
        email_msg.className = 'error';
        valid = false;
    } else {
        email_msg.innerHTML = "";
        email_msg.className = '';
    }
// SEX: must be either male or female
    var sex_male = document.getElementById('sex_male').checked;
    var sex_female = document.getElementById('sex_female').checked;
    var sex_msg = document.getElementById('sex_msg');
    if (!sex_male && !sex_female) {
        sex_msg.innerHTML = "Please select either male or female.";
        sex_msg.className = 'error';
        valid = false;
    } else {
        sex_msg.innerHTML = "";
        sex_msg.className = '';
    }
// INTERESTS: must pick at least two of the checkboxes
    var interests = document.contactform['interests[]'];
    var interests_msg = document.getElementById('interests_msg');
    var interestcount = 0;
    for (var i = 0; i < interests.length; i++) {
        if (interests[i].checked) {
            interestcount++;
        }
    }
    if (interestcount < 1) {
        interests_msg.innerHTML = "Please select two or more interests.";
        interests_msg.className = 'error';
        valid = false;
    } else {
        interests_msg.innerHTML = "";
        interests_msg.className = '';
    }
// REGION: must pick one of the valid choices, not the 'choose' option
    var region = document.getElementById('region').value;
    var region_msg = document.getElementById('region_msg');
    if (region === -1) {
        region_msg.innerHTML = "You must choose a region.";
        region_msg.className = 'error';
        valid = false;
    } else {
        region_msg.innerHTML = "";
        region_msg.className = '';
    }
// TANDCAGREE: must be checked
    var tandcagree = document.getElementById('tandcagree').checked;
    var tandcagree_msg = document.getElementById('tandcagree_msg');
    if (!tandcagree) {
        tandcagree_msg.innerHTML = "You must agree to the terms and conditions to continue.";
        tandcagree_msg.className = 'error';
        valid = false;
    } else {
        tandcagree_msg.innerHTML = "";
        tandcagree_msg.className = '';
    }
    return valid;
}



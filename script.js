let email = document.getElementById("mail");
let msg = document.getElementById("error");
// let pass = document.getElementById("password");
let name = document.getElementById("name");
let phn = document.getElementById("num");
let fedbck = document.getElementById("emsg");

function check(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
        msg.innerHTML = "";
        email.style.border = "3px solid green";
        return true;
    }
    else{
        msg.innerHTML = "Please enter a valid email id.";
        msg.style.color = "red";
        email.style.border = "3px solid red";
        return false;
    }   
}
function validate(){
    var phoneregexp =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneregexp.test(phn.value)){
        fedbck.innerHTML = "";
        phn.style.border = "3px solid green";
        return true;
    }
    else{
        fedbck.innerHTML = "Please enter a valid phone number. You can use XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX formats.";
        fedbck.style.color = "red";
        phn.style.border = "3px solid red";
        return false;
    }
}
function isGood(password) {
    var password_strength = document.getElementById("password-text");

    //TextBox left blank.
    if (password.length == 0) {
      password_strength.innerHTML = "";
      return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
      if (new RegExp(regex[i]).test(password)) {
        passed++;
      }
    }

    //Display status.
    var strength = "";
    switch (passed) {
      case 0:
      case 1:
      case 2:
        strength = "<small class='progress-bar bg-danger' style='width: 40%'>Weak</small>";
        break;
      case 3:
        strength = "<small class='progress-bar bg-warning' style='width: 60%'>Medium</small>";
        break;
      case 4:
        strength = "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
        break;

    }
    password_strength.innerHTML = strength;

  }
    

    
    





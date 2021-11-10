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
function show(){
  var x = document.getElementById("password");
  if(x.type === "password"){
    x.type = "text";
  }
  else{
    x.type = "password";
  }
}
var pass = document.getElementById("password");
pass.addEventListener("keyup",function(){
      checkPassword(pass.value)
})
function checkPassword(password){
    var strengthBar = document.getElementById("strength");
    var strength = 0;
    if(password.match(/[a-z]+/)){
      strength +=1;
    }
    if(password.match(/[A-Z]+/)){
      strength +=1;
    }
    if(password.match(/[0-9]+/)){
      strength += 1;
    }
    if(password.length >= 8){
      strength +=1;
    }
    switch(strength){
      case 0:
        strengthBar.value = 0;
        break;
      case 1:
        strengthBar.value = 25;
        break;
      case 2:
        strengthBar.value = 50;
        strengthBar.style.color = "yellow";
        break;
      case 3:
        strengthBar.value = 75;
        strengthBar.style.color = "yellow";
        break; 
      case 4:
          strengthBar.value = 100;
          strengthBar.style.color = "green";
          break;   
    }
}
    

    
    





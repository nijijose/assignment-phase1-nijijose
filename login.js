let email = document.getElementById("mail");
let msg = document.getElementById("error");
let pword = document.getElementById("password");
let epass = document.getElementById("perror");

function checker(){
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

function show(){
    var x = document.getElementById("password");
    if(x.type === "password"){
      x.type = "text";
    }
    else{
      x.type = "password";
    }
  }

  function validate(){
    var passregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(passregexp.test(pword.value)){
        epass.innerHTML = "";
        pword.style.border = "3px solid green";
        return true;
    }
    else{
      epass.innerHTML = "Please enter the password that contain minimum 8 characters, at least one lowercase letter and uppercase letter, and atleast one number";
      epass.style.color = "red";
      pword.style.border = "3px solid red";
      return false;
    }
}

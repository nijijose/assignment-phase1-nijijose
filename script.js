let email = document.getElementById("mail");
let msg = document.getElementById("error");
let pass = document.getElementById("pwd");
let name = document.getElementById("name");
let phn = document.getElementById("num");
let fedbck = document.getElementById("emsg");

function check(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let phno = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
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


    

    
    





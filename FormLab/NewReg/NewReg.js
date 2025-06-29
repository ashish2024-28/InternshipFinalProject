
// check user enter captcha and password and conformPassword and mobileNO then call otp and call store Application No an password

function Verify() {

    let Ecap = document.getElementById("CAPTCHA").value.trim();
    let cap = document.getElementById("cap").value.trim();

    let pass = document.getElementById("password").value;
    let Cpass = document.getElementById("Cpass").value;

    if (pass !== Cpass) {
        alert("Password Not Match, Try Again !")
        return false
    }

    if (Ecap !== cap) {
        alert("Wrong CAPTCHA Entered !");
        RCap();
        return false;
    }

    let MNo = document.getElementById("Mob").value;
    if (MNo.length != 10) {
        alert("Enter Valid Mobile Number")
        return false;
    }
    if(!OTP()){
        return false;
    }

    AppNoStore();
    return true;

}


function OTP() {
    let MNo = document.getElementById("Mob").value;
    // let OTP = Math.floor(Math.random() * 1000000);
    // ALWAYS DIGITES
    let OTP = Math.floor(100000+Math.random() * 900000);
    alert("You OTP : " + OTP);
    let i = 3;
    while (i > 0) {
        let enterOtp = prompt("Enter OTP {Send on Given Mobile No:- " + MNo + "\n");
        if (enterOtp == OTP) {
            alert("OTP Verified Successfully");
            return true;
        } else {
            alert("Incorrect OTP. Attempts left: " + ((--i)));
        }
    }
    alert("Too many incorrect attempts. Please try again later.");
        return false;

}


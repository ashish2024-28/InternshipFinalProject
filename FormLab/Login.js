

// check user enter captcha and password and conformPassword and mobileNO then call otp and call store Application No an password

function verify() {
    let AppNo = document.getElementById("AppNo").value.trim();
    let Pass = document.getElementById("password").value.trim;
    let Ecap = document.getElementById("CAPTCHA").value.trim();
    let cap = document.getElementById("cap").value.trim();

    if (Ecap !== cap.toUpperCase()) {
        alert("Wrong CAPTCHA Entered !");
        RCap();
        return false;
    }


    for (let i = 0; i < SApNo.length; i++) {

        if (AppNo == SApNo[i] && Pass == Password[i]) {
            alert("Login Sccessflly");
            document.forms[myForm].action = "Profile/Profile.html";
            return true;
        }
        if (AppNo == SApNo[i]) {
            alert("Enter Correct Password !")
            return false;
        }
        else {
            alert("*Enter Valid Application Number ! \n*Enter Valid Password !");
            return false;
        }
    }

}







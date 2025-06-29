

// check user enter captcha and password and conformPassword and mobileNO then call otp and call store Application No an password

function verify() {
    let AppNo = document.getElementById("AppNo").value.trim();
    let Pass = document.getElementById("password").value.trim();
    let Ecap = document.getElementById("CAPTCHA").value.trim();
    let cap = document.getElementById("cap").value.trim();

    
    if (Ecap !== cap) {
        alert("Wrong CAPTCHA Entered !");
        RCap();
        return false;
    }
    
    

// worke only store values (Application No and Password) 

    // Befor change
    // this is for secure because Not any other Know your Application NO 
    // where You Login so you Know very well you Application No

    // for (let i = 0; i < SApNo.length; i++) {

    //     if (AppNo == SApNo[i] && Pass == Password[i]) {
    //         alert("Login Sccessflly");
    //         document.forms["myForm"].action = "/FormLab/Profile/Profile.html";
    //         return true;

    //     }
    //     if (i == SApNo.length - 1) {
    //         alert("*Enter Valid Application Number ! \n*Enter Valid Password !");
    //         return false;
    //     }

    // }


    // change using chatgpt method

    let found = false;
    for (let i = 0; i < SApNo.length; i++) {
        if (AppNo == SApNo[i]) {
            found = true;
            if (Pass == Password[i]) {
                alert("Login Successfully");
                document.forms["myForm"].action = "/FormLab/Profile/Profile.html";
                return true;
            } else {
                alert("Enter Correct Password !");
                return false;
            }
        }
    }
    if (!found) {
        alert("*Enter Valid Application Number ! \n*Enter Valid Password !");
        return false;
    }

// worke only store values (Application No and Password) 

}







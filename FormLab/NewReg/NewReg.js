
// check user enter captcha and password and conformPassword and mobileNO then call otp and call store Application No an password

function Verify(){

    let Ecap = document.getElementById("CAPTCHA").value.trim();
    let cap = document.getElementById("cap").value.trim();
    
    let pass = document.getElementById("pass").value;
    let Cpass = document.getElementById("Cpass").value;

    if(pass !== Cpass){
        alert("Password Not Match, Try Again !")
        return false
    }

    if (Ecap !== cap.toUpperCase()) {
        alert("Wrong CAPTCHA Entered !");
        // document.getElementById("fcap").innerHTML = "*Wrong CAPTCHA Entered";
        RCap();
        return false;
    }
    
    let MNo = document.getElementById("Mob").value;
    if (MNo.length != 10) {
        alert("Enter Valid Mobile Number")
        return false;
    }
    OTP();

    AppNoStore();
}


function OTP() {
     let MNo = document.getElementById("Mob").value;
        let OTP = Math.floor(Math.random() * 1000000);
        alert("You OTP : " + OTP);
       let enterOtp = prompt("Enter OTP {Send on Given Mobile No:- "+ MNo + "\n");
        if(enterOtp == OTP ){
            alert("OTP Verifying... \n");
            return true;
        }else{
            alert("Wrong OTP , Try Again!");
            OTP();
        }
}


// // function to store Application Number and Password

// function AppNoStore() {
//     let SApNo = [24101010043];
//     let Password = ["Ashish"];
//     SApNo[SApNo.length] = (SApNo[SApNo.length-1] + 1); 
//     Password[Password.length]= document.getElementById("Cpass").value
//     // Password[Password.length]= "ashish";
//     alert("You Successfuly get Application Number :- " +SApNo[SApNo.length-1] + "\nAnd Password is "+Password[Password.length-1]);
//     // console.log( SApNo[SApNo.length-1]);
//     // console.log( Password[Password.length-1]);
// }

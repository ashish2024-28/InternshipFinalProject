
// RCap() for Random Captcha Generate 
// method 1

const char = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const Nmb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// this method2 is not good because it return ony alphabet sometime
// const char = ['A', '1','B','2' ,'C','3','D','4', 'E','5', 'F','6', 'G','7', 'H','8', 'I', '9', 'J', '0', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

RCap()
function RCap() {
    let CAPTCHA = '';
    // method 1
    for (let i = 0; i < 3; i++) {
        let Cindex = Math.floor(Math.random() * char.length);
        let Nindex = Math.floor(Math.random() * Nmb.length);
        CAPTCHA += Nmb[Nindex] + char[Cindex];
    }

    // method 2
    // for(let j = 0; j < 6 ; j++){
    //     let CAP = Math.floor(Math.random() * char.length);
    //     CAPTCHA += char[CAP] ;
    // }

    document.getElementById("cap").value = CAPTCHA;
}

// Home Nav open when click
let HN = document.getElementById("HomeNav");
HN.style.display = "none";
function HomeNav() {
    if (HN.style.display == "none") {
        HN.style.display = "block";
        return true;
    } else {
        HN.style.display = "none";
        return true
    }
}

// showPass() to show/hide the passworda

function showPass() {
    let EnterPass = document.getElementById("password");
    let sHimg = document.getElementById("sHideimg");
    if (EnterPass.type == "password") {
        EnterPass.type = "text"
        sHimg.src = "/FormLab/items/visibility_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
    } else {
        EnterPass.type = "password"
        sHimg.src = "/FormLab/items/visibility_off_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
    }
}




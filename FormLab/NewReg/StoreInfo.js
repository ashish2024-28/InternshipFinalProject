
let SApNo = [24101010043,24101010044];
let Password = ["Ashish123","Abhi1234"];
function AppNoStore() {

    SApNo[SApNo.length] = (SApNo[SApNo.length-1] + 1); 
    Password[Password.length]= document.getElementById("Cpass").value;

// alert (popup) user Application Number and Password
    alert("You Successfuly get Application Number :- " +SApNo[SApNo.length-1] + "\nAnd Password is "+Password[Password.length-1]);
    return true;    

    // for check on console
    // Password[Password.length]= "ashish";

    // alert("You Successfuly get Application Number :- " +SApNo + "\nAnd Password is "+Password);
    
    
}

// for check on console
// AppNoStore()
// console.log("You Successfuly get Application Number :- " +SApNo + "\nAnd Password is "+Password)
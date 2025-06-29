
let SApNo = [24101010043,24101010044];
let Password = ["Ashish123","Abhi1234"];
function AppNoStore() {

    SApNo[SApNo.length] = (SApNo[SApNo.length-1] + 1); 
    Password[Password.length]= document.getElementById("Cpass").value;

    alert("You Successfuly get Application Number :- " +SApNo[SApNo.length-1] + "\nAnd Password is "+Password[Password.length-1]);
    return true;        
}



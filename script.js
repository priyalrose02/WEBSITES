let signbtn = document.getElementById("signInBtn");
let msg = document.getElementById("messageText");

let names = document.getElementById("inputElement");
let pass = document.getElementById("passwordElement");

signbtn.onclick = function() {
    if (names.value === "") {
        msg.textContent = "Please Enter Username";
    } 
    else if (pass.value === "") {
        msg.textContent = "Please Enter Password";
    } 
    else {
        msg.textContent = "Welcome";
    }
};

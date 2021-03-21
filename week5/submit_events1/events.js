/*
It is important to note that any button placed inside of <form> tags will automatically fire a “submit” event for the form to capture and use.
Your task for this assignment is to create a form on an html file that has at least 3 inputs and a button.


X • When the button is clicked, the inputs should be displayed in an “alert” window using the alert() method.  
X • After the alert is closed, the inputs should clear themselves out.
*/

var pwd1 = document.getElementById("pswd1"),
    pwd2 = document.getElementById("pswd2");

function verify(){
    if(pwd1.value != pwd2.value){
        pwd2.setCustomValidity("Passwords do not match.");
    } else {
        pwd2.setCustomValidity("Passwords match.");
    }
}

pwd1.addEventListener('change', verify);
pwd2.addEventListener('keyup', verify);

var btnClick = document.getElementById("sub");
btnClick.addEventListener('click', (event) => {
    var fn = document.getElementById("firstName").value;//firstn
    var ln = document.getElementById("lastName").value;//lastn
    var eml = document.getElementById("email").value;//email
    var dob = document.getElementById("dob").value;//dob
    var usrn = document.getElementById("username").value;//usr
    var pw1 = document.getElementById("pswd1").value;//pw1
    var pw2 = document.getElementById("pswd2").value;//pw2
    alert(`First Name: ${fn} \nLast Name: ${ln} \nEmail: ${eml} \nDate of Birth: ${dob} \nUsername: ${usrn}`);
    if (fn.length > 1){
        document.getElementById('firstName').value = "";
    }
    if (ln.length > 1){
        document.getElementById('lastName').value = "";
    }
    if (eml.length > 1){
        document.getElementById('email').value = "";
    }
    if (dob.length > 1){
        document.getElementById('dob').value = "";
    }
    if (usrn.length > 1){
        document.getElementById('username').value = "";
    }
    if (pw1.length > 1){
        document.getElementById('pswd1').value = "";
    }
    if (pw2.length > 1){
        document.getElementById('pswd2').value = "";
    }
});




/* 
var btnClick = document.getElementById("sub");

btnClick.addEventListener('click', (event) => {
    //
})

function alertTime(a){
    if(btnClick){
        //
    } else {
        //
    }
}
*/
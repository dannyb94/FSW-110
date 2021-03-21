/*
It is important to note that any button placed inside of <form> tags will automatically fire a “submit” event for the form to capture and use.
Your task for this assignment is to create a form on an html file that has at least 3 inputs and a button.


• When the button is clicked, the inputs should be displayed in an “alert” window using the alert() method.  
• After the alert is closed, the inputs should clear themselves out.
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
    //
})

function alertTime(a){
    if(btnClick){
        //
    } else {
        //
    }
}
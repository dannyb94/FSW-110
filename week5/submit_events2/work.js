/*
You should collect the following information from the user:

X First name (text input)
X Last name (text input)
X Age (number input)
X A question that has a yes or no answer (should use radio buttons) ex) Have you shopped with us before?
X A question with a single possible response but multiple options (select box with at least 3 options) ex) How likely are you to recommend this product to a friend? [not likely, somewhat likely, likely, ... etc]
X A question with multiple possible answers (check boxes with at least 3 options) ex) Do you have any dietary restrictions? [gluten free, keto, vegetarian, .... etc]
*/

var style = document.createElement('style');
style.innerHTML = `h2{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
    color: slategray;
}
form {
    font-size: 12px;
    font-family: sans-serif;
}
.subSect{
    color: lightslategray;
}
#slider{
    margin: 0 15px;
}
#btn{
    background-color: lightslategray;
    color: white;
    border-radius: 5px;
}`;
document.head.appendChild(style);

var btnClick = document.getElementById("btn");

btnClick.addEventListener('click', (event) => {
    console.log(document.getElementsByClassName('gender')[1].value)

    var fn = document.getElementById('firstName').value;
    var ln = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var gndr = document.getElementsByName('gender')[0].value;
    var dietRstrct = document.getElementsByClassName('diet');
    var diet = ""
    for(var i = 0; i < dietRstrct.length; i++){
        if(dietRstrct[i].checked){
            diet += dietRstrct[i].value
        }
    }
    alert(`First Name: ${fn} \nLast Name: ${ln} \nAge: ${age} \nGender: ${gndr} \nDiet Restrictions: ${diet}`);

    if (fn.length > 1){
        document.getElementById('firstName').value = "";
    }
    if (ln.length > 1){
        document.getElementById('lastName').value = "";
    }
    if (age.length > 1){
        document.getElementById('age').value = "";
    }
});
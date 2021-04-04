/*
Project Requirements:

X The form must have at least 2 inputs (ex: title, description).
On submit, the form should clear inputs and the user’s text should show up in the list below the form.
Each of the items listed out should also display a delete button that removes that item from the list when clicked.
X Site must be fully styled and responsive.

G-Fonts:
font-family: 'Loved by the King', cursive;
font-family: 'Montserrat', sans-serif;
*/
//window.onload = initForm;

var style = document.createElement('style');
style.innerHTML = `html {
    background-color: whitesmoke;
}
#head-name {
    font-family: 'Loved by the King', cursive;
    font-size: 100px;
    text-align: center;
    margin: 0px;
    padding: 0px;
    text-shadow: 3px 2px #E53C89;
    color: white;
    -webkit-text-stroke: 2px darkslategray;
    top: 0px;
}
body {
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: darkslategray;
    text-align: center;
}
#title-sect {
    margin: 15px 0;
}
.title-main {
    font-weight: 600;
}
input {
    border: 1px solid slategray;
    border-radius: 3px;
    margin: 5px 0;
    padding: 7px;
    font-size: 15px;
    color: #E53C89;
}
#btn {
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 5px;
    background-color: transparent;
    color: slategray;
    border: 2px solid slategray;
    margin-bottom:20px;
}
#btn:hover {
    background-color: slategray;
    color: whitesmoke;
    border: transparent;
    border: 2px solid slategray;
    margin-bottom:20px;
}
footer {
    background-color: #f7ce47;
    color: whitesmoke;
    position: sticky;
}
section {
    margin: 7px 0;
    padding: 10px;
}
#the-list {
    list-style-type: circle;
}
.delete {
    background-color: lightgray;
    border: 1px solid lightgray;
    margin-left: 5px;
    color: black;
}
.delete:hover {
    background-color: darkgray;
    color: white;
    border: 1px solid darkgray;
}
/*#print {
    border: 1px solid #E53C89;
    border-radius: 3px;
    margin: 5px 0;
    padding: 7px;
}*/`;
document.head.appendChild(style);

var btnClick = document.getElementById('btn');
var listTitle = document.getElementById('title-input');
var listItems = document.getElementsByName('list-item');
var deleteLine = document.getElementsByClassName('delete');
var finalOutput = document.getElementById('output');



btnClick.addEventListener('click', (e) => {
    console.log(listItems.value, listTitle.value);
    
    e.preventDefault()
    if (e.target.id == 'btn'){
        document.getElementById('output').textContent = `${listTitle.value}\n${listItems.value}`;
    } 
    if(listItems.value && listTitle.value > 1){
        var li = document.createElement('li');
        document.getElementById('output').append(li);
        document.getElementById('outout').textContent = `${listTitle.value}\n${listItems.value}`;
    } else if(e.target.id == 'btn'){
        listTitle.value = "";
        listItems.value = "";
    }
});




/*button.addEventListener("click", addItem);
list.addEventListener("click", (e) => {
    var btn = document.getElementsByClassName("del");
    for(i=0; i<btn.length; i++){
        if(e.target == btn[i]){
        let li = btn[i].parentNode;
        list.removeChild(li);
    }
}});*/
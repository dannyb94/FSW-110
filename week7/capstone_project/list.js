/*
Project Requirements:

X The form must have at least 2 inputs (ex: title, description).
On submit, the form should clear inputs and the user’s text should show up in the list below the form.
Each of the items listed out should also display a delete button that removes that item from the list when clicked.
Site must be fully styled and responsive.

G-Fonts:
font-family: 'Loved by the King', cursive;
font-family: 'Montserrat', sans-serif;
*/

var style = document.createElement('style');
style.innerHTML = `html{
    background-color: whitesmoke;
}#head-name {
    font-family: 'Loved by the King', cursive;
    font-size: 60px;
    text-align: center;
    margin: 5px;
    padding: 0px;
    text-shadow: 2px 2px red;
}
body {
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    font-weight: 400;
}
#title-sect {
    margin: 15px 0;
}
.title-main {
    font-weight: 600;
}
input {
    border: 2px solid slategray;
    border-radius: 2px;
}
#btn {
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 5px;
    background-color: transparent;
    color: slategray;
    border: 2px solid slategray;
}
#btn:hover {
    background-color: slategray;
    color: whitesmoke;
    border: transparent;
}`;
document.head.appendChild(style);

var btnClick = document.getElementById('btn');
var listItem = document.getElementsByClassName('list-item');
var listTitle = document.getElementById('title-input');

btnClick.addEventListener('click', (e) => {
    console.log(listItem.value, listTitle.value);
    /*function print(){
        `${title}\n${list}`;
    }*/
    if(listTitle.length > 1){
        document.getElementById('title-input').value = "";
    } else if(listItem.length > 1){
        document.getElementsByName('list-item').value = "";
    }
});

button.addEventListener("click", addItem);
list.addEventListener("click", (e) => {
    var btn = document.getElementsByClassName("del");
    for(i=0; i<btn.length; i++){
        if(e.target == btn[i]){
        let li = btn[i].parentNode;
        list.removeChild(li);
    }
}});
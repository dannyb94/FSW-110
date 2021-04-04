/*
Project Requirements:

X The form must have at least 2 inputs (ex: title, description).
X On submit, the form should clear inputs and the user’s text should show up in the list below the form.
X Each of the items listed out should also display a delete button that removes that item from the list when clicked.
X Site must be fully styled and responsive.

G-Fonts:
font-family: 'Loved by the King', cursive;
font-family: 'Montserrat', sans-serif;
*/

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
#delete {
    background-color: lightgray;
    border: 1px solid lightgray;
    margin-left: 5px;
    color: black;
}
#delete:hover {
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
var finalOutput = document.getElementById('output');
var listTitle = document.getElementById('title-input');
var listItems = document.getElementsByName('list-item');
//var deleteAll = document.getElementsByClassName('delete');

btnClick.addEventListener('click', (e) => {
    
    if (e.target.id == 'btn'){
        finalOutput.textContent = listTitle.value;
    }
    if(listTitle.value > 1){
        finalOutput.textContent = listTitle.value;
    } else if(e.target.id == 'btn'){
        listTitle.value = "";
    }
   for(i = 0; i < listItems.length; i++){
        if(listItems[i].value.length > 0){
            var li = document.createElement('li');
            finalOutput.append(li);
            li.textContent = listItems[i].value
        } if(e.target.id == 'btn'){
            listItems[i].value = "";
        }
    }
});

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(e.target.id)
    //console.log(document.getElementById(e.target.id))
    //console.log(e.target.closest('.list-item'))
    document.getElementById(e.target.id).remove()
    e.target.remove()
});/**/

/*const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => e.preventDefault());
}
document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(e.target.id)
    //console.log(document.getElementById(e.target.id))
    //console.log(e.target.closest('.list-item'))
    document.getElementById(e.target.id).remove()
    e.target.remove()
});*/

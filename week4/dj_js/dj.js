/*
The square's color will change as follows:

X White to start as a base color.
X Black upon complete loading of the HTML page *you might have to look up how to do this*
X Green when the mouse hovers over the square
X Yellow when the mouse button is held down over the square
X Blue when the mouse button is let go over the square
X Red when the mouse is double clicked in the square
Purple when the mouse scroll is used somewhere in the window (not just over the square). *Try adding more content to your page with JS if you can not scroll.
You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color. Check this site for a full list of keyboard key codes (Links to an external site.).
*/

var myContr = document.createElement("div");
myContr.id = 'container';
document.body.appendChild(myContr);

var style = document.createElement('style');
style.innerHTML = `div {
    background-color: white;
    width: 200px;
    height: 200px;
}`;
document.head.appendChild(style);

window.addEventListener('keydown', (event) => {
    if(event.key == 'g'){
        myContr.style.backgroundColor = 'green';
    } else if(event.key == 'y'){
        myContr.style.backgroundColor = 'yellow';
    } else if(event.key == 'b'){
        myContr.style.backgroundColor = 'blue';
    } else if(event.key == 'r'){
        myContr.style.backgroundColor = 'red';
    } else if(event.key == 'p'){
        myContr.style.backgroundColor = 'purple';
    }
});

myContr.addEventListener('mouseover', (event) => {
    myContr.style.backgroundColor = 'blue';
});

myContr.addEventListener('pointerdown', (event) => {
    myContr.style.backgroundColor = 'red';
});

myContr.addEventListener('pointerup', (event) => {
    myContr.style.backgroundColor = 'yellow';
});

myContr.addEventListener('dblclick', (event) => {
    myContr.style.backgroundColor = 'green';
});

window.addEventListener('mousewheel', (event) => {
    myContr.style.backgroundColor = 'orange';
});

window.addEventListener('load', (event) => {
    myContr.style.backgroundColor = 'black';
})
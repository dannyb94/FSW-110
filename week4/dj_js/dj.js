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

/**/var colorMap = {
    'g' : 'green',
    'y' : 'yellow',
    'b' : 'blue',
    'r' : 'red',
    'p' : 'purple'
};

myContr.addEventListener('keypress', function(_event) {
    //if(event.key == 71){
        document.getElementById('container').style.backgroundColor = colorMap;
        //return 'green';
    //}
    //console.log(e.key)
});

/*myContr.addEventListener('keydown', (event) => {
    if (event.key == 'g'){
        return colorMap;
    }
})*/

myContr.addEventListener('mouseover', (event) => {
    myContr.style.backgroundColor = 'green';
});

myContr.addEventListener('pointerdown', (event) => {
    myContr.style.backgroundColor = 'yellow';
});

myContr.addEventListener('pointerup', (event) => {
    myContr.style.backgroundColor = 'blue';
});

myContr.addEventListener('dblclick', (event) => {
    myContr.style.backgroundColor = 'red';
});

window.addEventListener('scroll', (event) => {
    myContr.style.backgroundColor = 'purple';
});

window.addEventListener('load', (event) => {
    myContr.style.backgroundColor = 'black';
})
var mousey = document.querySelector('div')
mousey.addEventListener('mousemove', (event) => {
    var x = event.clientX;
    var y = event.clientY;
    document.querySelector('div').innerHTML = `Your mouse location is at ${x}, ${y}`;
});
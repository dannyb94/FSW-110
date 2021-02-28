let h1Node = document.getElementById('inTheBeginning');
h1Node.textContent = 'Welcome to my JS site';

document.querySelector('p').textContent = 'All of this was created with Javascript';

var pillow = document.querySelectorAll('.pillow');
console.log(Array.from(pillow));
for (var i = 0; i < pillow.length; i++){
    pillow[0].textContent = "It Was Good Until It Wasn't";
    pillow[1].textContent = "Good to Know";
    pillow[2].textContent = "Table For Two";
}
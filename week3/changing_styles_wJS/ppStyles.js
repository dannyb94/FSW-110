/*
This assignment will help you practice adding CSS styles to elements created in Javascript.

X 1. Create a new project with an HTML file, a linked JS file, and a linked CSS file.
X 2. In the JS file, create a list of 5 H2 elements on the DOM using a for loop (Hint: this was covered in the previous assignment). Give them whatever text you would like.
X 3. Using the .style property, edit the element’s styles in your js to have:


X Font-size: 20px
X Font-weight: lighter
X Font-family: sans-serif
X Color: cornflowerblue


X 4. Go to your CSS file and create a class called .border that has:


X 2px solid black border, 
X 5px padding 
X 5px margin


X 5. Back in your JS, add that class to the elements being created using classList.
*/

var myHeader1 = document.createElement("h2");
myHeader1.textContent = "Lorem";
document.body.appendChild(myHeader1);

var myHeader2 = document.createElement("h2");
myHeader2.textContent = "ipsum";
document.body.appendChild(myHeader2);

var myHeader3 = document.createElement("h2");
myHeader3.textContent = "dolor";
document.body.appendChild(myHeader3);

var myHeader4 = document.createElement("h2");
myHeader4.textContent = "sit";
document.body.appendChild(myHeader4);

var myHeader5 = document.createElement("h2");
myHeader5.textContent = "amet";
document.body.appendChild(myHeader5);

var style = document.createElement('style');
style.innerHTML = `h2 {
    color: cornflowerblue;
    font-family: sans-serif;
    font-weight: lighter;
    font-size: 20px;
}`;
document.head.appendChild(style);

var h2Elements = document.querySelectorAll('h2');
for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].classList.add('border');
}
/*
X 1. Create an HTML page from scratch and link a JS file to it.
X 2. Create an H1 tag with the text “Hello World”, and append it to the DOM (test and make sure it is showing up on the website).
X 3. Create a for-loop, repeat this process 10 times so that 10 H1’s with the text “Hello World” show up when the website is visited. 
X 4. Add some style to the H1's in Step 3.
X 5. Create a new array using the following information:

 
const names = [“steve”, “larry”, “joe”, “shirley”, “steph”, “nate”, “rick”, “emily”];


6. Create a for loop that iterates through the array in Step 5 and displays it on the page.
*/

var myHeader = document.createElement("h1");
myHeader.textContent = "Hello World";
document.body.appendChild(myHeader);

for (var i = 0; i < 9; i++){
    var h1 = document.createElement("h1");
    h1.textContent = 'Hello World';
    document.body.appendChild(h1)
}

var style = document.createElement('style');
style.innerHTML = `h1 {
    color: blue;
    font-family: Courier, monospace;
    }`;
document.head.appendChild(style);

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
const names2 = names;
names2.push(["jessica", "alex", "damien"]);

for (var i = 0; i < 4; i++){
    var newPar = document.createElement("p");
    newPar.textContent = names2;
    document.body.appendChild(newPar);
};
 
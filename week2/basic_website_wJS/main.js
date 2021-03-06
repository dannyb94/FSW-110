/*
Requirements:
• No css styling required
• Must link a JS file to HTML file
-Site must have:
    • a navbar with links (doesn’t need to work)
    • An h1 tag
    • A p tag
    • A list
    • Footer
-You will append created elements to the <body> tag of your html page to produce the entire site, so the only HTML tag they will add to your HTML page is the script tag.
*/

var myNavBar = document.createElement("nav");
myNavBar.id = 'myNav';
document.body.appendChild(myNavBar);

var myLink1 = document.createElement("a");
myLink1.textContent = "Home";
myNavBar.append(myLink1)

var myLink2 = document.createElement("a");
myLink2.textContent = "More";
myNavBar.append(myLink2)

var myLink3 = document.createElement("a");
myLink3.textContent = "Contact";
myNavBar.append(myLink3)

var style = document.createElement('style');
style.innerHTML = `a {
    margin: 10px;
}`;
document.body.appendChild(style);

var myHeader = document.createElement("h1");
myHeader.innerHTML = "<h1>Header</h1>";
document.body.appendChild(myHeader);


var myPar = document.createElement("p");
myPar.innerHTML = "<p>Hey paragraph!</p>";
document.body.appendChild(myPar);

 
var myUl = document.createElement("ul");
myUl.id = 'myList';
document.body.appendChild(myUl);
for (var i = 0; i < 3; i++){
    var li = document.createElement("li");
    li.textContent = 'Welcome';
    myUl.append(li)
}


var myFooter = document.createElement("footer");
myFooter.id = 'footerId';
document.body.appendChild(myFooter);

var x = "\u00A9 This was created by D.";
var myFooterElmt = document.createElement("section");
myFooterElmt.textContent = x;
myFooter.append(myFooterElmt);
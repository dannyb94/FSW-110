var myHeader1 = document.createElement("h1");
myHeader1.id = "inTheBeginning";
myHeader1.textContent = "Welcome to my JS site";
document.body.appendChild(myHeader1);

var myPar1 = document.createElement("p");
myPar1.textContent = "All of this was created with Javascript";
document.body.appendChild(myPar1);

var myList = document.createElement("ol");
document.body.appendChild(myList);

var listItems = document.createElement("li");
listItems.classList.add("pillow");
listItems.textContent = "It Was Good Until It Wasn't";
myList.appendChild(listItems);

var listItems = document.createElement("li");
listItems.classList.add("pillow");
listItems.textContent = "Good to Know";
myList.appendChild(listItems);

var listItems = document.createElement("li");
listItems.classList.add("pillow");
listItems.textContent = "Table For Two";
myList.appendChild(listItems);
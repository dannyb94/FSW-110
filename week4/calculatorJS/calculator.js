/*
For this project, you are going to create a simple calculator that can add, subtract, and multiply.

Requirements:

X You will have one section (<div>) for each math operation (so 3 sections) total
X Each section has two inputs to take the first and second numbers
X Each section will have a button to perform the operation
X You will inject the result into the HTML (not an alert)
X Your website will have 3 colors
X Your website will have proper padding/spacing to lay things out nicely.
** Forms are covered in the next week, so for this you will use <input /> tags, give them an “id”, and use click events to capture the values and append the appropriate output to the DOM.
*/

document.body.style.backgroundColor = 'whitesmoke';

//------------------------ADD-----------------------------------
var myContr1 = document.createElement("div");
myContr1.id = 'container1';
document.body.appendChild(myContr1);

var myInput1 = document.createElement("input");
myInput1.id = 'firstNum';
myContr1.append(myInput1);

var myInput2 = document.createElement("input");
myInput2.id = 'scndNum';
myContr1.append(myInput2);

var mySpace = document.createElement("br");
myContr1.append(mySpace);

var myBtn = document.createElement("button");
myBtn.id = 'btnAdd';
myBtn.textContent = "Add";
myContr1.append(myBtn);
myBtn.addEventListener('click', add);

var mySpace = document.createElement("br");
myContr1.append(mySpace);

//------------------------SUB-----------------------------------
var myContr2 = document.createElement("div");
myContr2.id = 'container2';
document.body.appendChild(myContr2);

var mySubInput1 = document.createElement("input");
mySubInput1.id = 'firstSubNum';
myContr2.append(mySubInput1);

var mySubInput2 = document.createElement("input");
mySubInput2.id = 'scndSubNum';
myContr2.append(mySubInput2);

var mySpace = document.createElement("br");
myContr2.append(mySpace);

var myBtn2 = document.createElement("button");
myBtn2.id = 'btnSub';
myBtn2.textContent = "Subtract";
myContr2.append(myBtn2);
myBtn2.addEventListener('click', subtract);

var mySpace = document.createElement("br");
document.body.appendChild(mySpace);

//------------------------DIV-----------------------------------
var myContr3 = document.createElement("div");
myContr3.id = 'container3';
document.body.appendChild(myContr3);

var myDivInput1 = document.createElement("input");
myDivInput1.id = 'firstDivNum';
myContr3.append(myDivInput1);

var myDivInput2 = document.createElement("input");
myDivInput2.id = 'scndDivNum';
myContr3.append(myDivInput2);

var mySpace = document.createElement("br");
myContr3.append(mySpace);

var myBtn3 = document.createElement("button");
myBtn3.id = 'btnDiv';
myBtn3.textContent = "Divide";
myContr3.append(myBtn3);
myBtn3.addEventListener('click', divide);

var mySpace = document.createElement("br");
document.body.appendChild(mySpace);

//------------------------MUL-----------------------------------
var myContr4 = document.createElement("div");
myContr4.id = 'container4';
document.body.appendChild(myContr4);

var myMulInput1 = document.createElement("input");
myMulInput1.id = 'firstMulNum';
myContr4.append(myMulInput1);

var myMulInput2 = document.createElement("input");
myMulInput2.id = 'scndMulNum';
myContr4.append(myMulInput2);

var mySpace = document.createElement("br");
myContr4.append(mySpace);

var myBtn4 = document.createElement("button");
myBtn4.id = 'btnMul';
myBtn4.textContent = "Multiply";
myContr4.append(myBtn4);
myBtn4.addEventListener('click', multiply);

var mySpace = document.createElement("br");
document.body.appendChild(mySpace);

//--------------------------RESULT/CLEAR----------------------------
var words = document.createElement("h2");
words.id = 'result';
document.body.appendChild(words);

var myOutput = document.createElement("output");
myOutput.id = 'lblAnswer';
words.textContent = "Answer: "
words.append(myOutput);

var mySpace = document.createElement("br");
document.body.appendChild(mySpace);

var myClearBtn = document.createElement("button");
myClearBtn.id = 'btnClear';
myClearBtn.textContent = "Clear";
document.body.appendChild(myClearBtn);
myClearBtn.addEventListener('click', add);
myClearBtn.addEventListener('click', subtract);
myClearBtn.addEventListener('click', divide);
myClearBtn.addEventListener('click', multiply);

function add(event){
    if (event.target.id == 'btnAdd'){
        //console.log(myInput1, myInput2)
        //console.log((Number(myInput1.value) , Number(myInput2.value)))
        document.getElementById('lblAnswer').textContent = (Number(myInput1.value) + Number(myInput2.value));
    } else if (event.target.id == 'btnClear'){
        document.getElementById('firstSubNum').value = "";
        document.getElementById('scndSubNum').value = "";
        document.getElementById('lblAnswer').textContent = "";
    }
}

function subtract(event){
    if (event.target.id == 'btnSub'){
        document.getElementById('lblAnswer').textContent = (Number(mySubInput1.value) - Number(mySubInput2.value));
    } else if (event.target.id == 'btnClear'){
        document.getElementById('firstNum').value = "";
        document.getElementById('scndNum').value = "";
        document.getElementById('lblAnswer').textContent = "";
    }
}

function divide(event){
    if (event.target.id == 'btnDiv'){
        document.getElementById('lblAnswer').textContent = (Number(myDivInput1.value) / Number(myDivInput2.value));
    } else if (event.target.id == 'btnClear'){
        document.getElementById('firstDivNum').value = "";
        document.getElementById('scndDivNum').value = "";
        document.getElementById('lblAnswer').textContent = "";
    }
}

function multiply(event){
    if (event.target.id == 'btnMul'){
        document.getElementById('lblAnswer').textContent = (Number(myMulInput1.value) * Number(myMulInput2.value));
    } else if (event.target.id == 'btnClear'){
        document.getElementById('firstMulNum').value = "";
        document.getElementById('scndMulNum').value = "";
        document.getElementById('lblAnswer').textContent = "";
    }
}

//------------------------------STYLES------------------------------
var style = document.createElement('style');
style.innerHTML = `input {
    border: 1px solid lightgray;
    border-radius: 5px;
}
#result {
    color: steelblue;
}
button {
    background-color: lightsteelblue;
    color: whitesmoke;
    border-radius: 5px;
    border: 0;
}`;
document.head.appendChild(style);/**/

myBtn.addEventListener('click', (event) => {
    if(event.target.id == 'btnAdd'){
        document.body.style.backgroundColor = 'yellow';
    }
});

myBtn2.addEventListener('click', (event) => {
    if(event.target.id == 'btnSub'){
        document.body.style.backgroundColor = 'lightgreen';
    }
});

myBtn3.addEventListener('click', (event) => {
    if(event.target.id == 'btnDiv'){
        document.body.style.backgroundColor = 'lightblue';
    }
});

myBtn4.addEventListener('click', (event) => {
    if(event.target.id == 'btnMul'){
        document.body.style.backgroundColor = 'lightpink';
    }
});

myClearBtn.addEventListener('click', (event) => {
    if(event.target.id == 'btnClear'){
        document.body.style.backgroundColor = 'whitesmoke';
    }
});
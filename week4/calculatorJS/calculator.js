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


//------------------------ADD-----------------------------------
var myContr1 = document.createElement("div");
myContr1.id = 'container1';
document.body.appendChild(myContr1);

var myAddInput1 = document.createElement("input");
myAddInput1.id = 'firstNum';
myContr1.append(myAddInput1);

var myAddInput2 = document.createElement("input");
myAddInput2.id = 'scndNum';
myContr1.append(myAddInput2);

var mySpace = document.createElement("br");
myContr1.append(mySpace);

var myOutput = document.createElement("output");
myOutput.id = 'lblAnswer';
myContr1.append(myOutput);

var mySpace = document.createElement("br");
myContr1.append(mySpace);

var myBtn = document.createElement("button");
myBtn.id = 'btnAdd';
myBtn.textContent = "Add";
myContr1.append(myBtn);
myBtn.addEventListener('click', add);

var myClearBtn = document.createElement("button");
myClearBtn.id = 'btnClear';
myClearBtn.textContent = "Clear";
myContr1.append(myClearBtn);
myClearBtn.addEventListener('click', add);

function add(event){
    if (event.target.id == 'btnAdd'){
        //console.log(myAddInput1, myAddInput2)
        //console.log((Number(myAddInput1.value) , Number(myAddInput2.value)))
        document.getElementById('lblAnswer').textContent = (Number(myAddInput1.value) + Number(myAddInput2.value));
    } else if (event.target.id == 'btnClear'){
        document.getElementById('firstNum').value = "";
        document.getElementById('scndNum').value = "";
        document.getElementById('lblAnswer').textContent = "";
    }
}


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

var myOutput2 = document.createElement("output");
myOutput2.id = 'lblAnswer2';
myContr2.append(myOutput2);

var mySpace = document.createElement("br");
myContr2.append(mySpace);

var myBtn2 = document.createElement("button");
myBtn2.id = 'btnSub';
myBtn2.textContent = "Subtract";
myContr2.append(myBtn2);
myBtn2.addEventListener('click', subtract);

var myClearBtn2 = document.createElement("button");
myClearBtn2.id = 'btnClear2';
myClearBtn2.textContent = "Clear";
myContr2.append(myClearBtn2);
myClearBtn2.addEventListener('click', subtract);

function subtract(event){
    if (event.target.id == 'btnSub'){
        document.getElementById('lblAnswer2').textContent = (Number(mySubInput1.value) +- Number(mySubInput2.value));
    } else if (event.target.id == 'btnClear2'){
        document.getElementById('firstSubNum').value = "";
        document.getElementById('scndSubNum').value = "";
        document.getElementById('lblAnswer2').textContent = "";
    }
}


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

var myOutput3 = document.createElement("output");
myOutput3.id = 'lblAnswer3';
myContr3.append(myOutput3);

var mySpace = document.createElement("br");
myContr3.append(mySpace);

var myBtn3 = document.createElement("button");
myBtn3.id = 'btnDiv';
myBtn3.textContent = "Divide";
myContr3.append(myBtn3);
myBtn3.addEventListener('click', divide);

var myClearBtn3 = document.createElement("button");
myClearBtn3.id = 'btnClear2';
myClearBtn3.textContent = "Clear";
myContr3.append(myClearBtn3);
myClearBtn3.addEventListener('click', divide);

function divide(event){
    if (event.target.id == 'btnDiv'){
        document.getElementById('lblAnswer3').textContent = (Number(myDivInput1.value) / Number(myDivInput2.value));
    } else if (event.target.id == 'btnClear2'){
        document.getElementById('firstDivNum').value = "";
        document.getElementById('scndDivNum').value = "";
        document.getElementById('lblAnswer3').textContent = "";
    }
}


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

var myOutput4 = document.createElement("output");
myOutput4.id = 'lblAnswer4';
myContr4.append(myOutput4);

var mySpace = document.createElement("br");
myContr4.append(mySpace);

var myBtn4 = document.createElement("button");
myBtn4.id = 'btnMul';
myBtn4.textContent = "Multiply";
myContr4.append(myBtn4);
myBtn4.addEventListener('click', multiply);

var myClearBtn4 = document.createElement("button");
myClearBtn4.id = 'btnClear4';
myClearBtn4.textContent = "Clear";
myContr4.append(myClearBtn4);
myClearBtn4.addEventListener('click', multiply);

function multiply(event){
    if (event.target.id == 'btnMul'){
        document.getElementById('lblAnswer4').textContent = (Number(myMulInput1.value) * Number(myMulInput2.value));
    } else if (event.target.id == 'btnClear4'){
        document.getElementById('firstMulNum').value = "";
        document.getElementById('scndMulNum').value = "";
        document.getElementById('lblAnswer4').textContent = "";
    }
}

/**/
var style = document.createElement('style');
style.innerHTML = `#container1 {
    background-color: yellow;
    width: 200px;
    height: 90px;
    padding:30px;
    margin: 30px auto;
    text-align: center;
}
#container2 {
    background-color: lightgreen;
    width: 200px;
    height: 90px;
    padding:30px;
    margin: 30px auto;
    text-align: center;
}
#container3 {
    background-color: lightblue;
    width: 200px;
    height: 90px;
    padding:30px;
    margin: 30px auto;
    text-align: center;
}
#container4 {
    background-color: lightgray;
    width: 200px;
    height: 90px;
    padding:30px;
    margin: 30px auto;
    text-align: center;
}
#lblAnswer4, #lblAnswer3, #lblAnswer2, #lblAnswer {
    margin 2px;
    padding: 0px 73px;
    font-size: 13px;
}`;
document.head.appendChild(style);

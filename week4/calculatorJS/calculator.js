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

var myContr = document.createElement("div");
myContr.id = 'container1';
document.body.appendChild(myContr);

var myInput1 = document.createElement("input");
myInput1.id = 'firstNum';
myContr.append(myInput1);

var myInput2 = document.createElement("input");
myInput2.id = 'scndNum';
myContr.append(myInput2);

var mySpace = document.createElement("br");
myContr.append(mySpace);

var myOutput = document.createElement("output");
myOutput.id = 'lblAnswer';
myContr.append(myOutput);

var mySpace = document.createElement("br");
myContr.append(mySpace);

//Operation Buttons

var myBtn = document.createElement("button");
myBtn.id = 'btnAdd';
myBtn.textContent = "Add";
myContr.append(myBtn);
myBtn.addEventListener('click', add);

var myBtn2 = document.createElement("button");
myBtn2.id = 'btnSub';
myBtn2.textContent = "Subtract";
myContr.append(myBtn2);
myBtn2.addEventListener('click', subtract);

var myBtn3 = document.createElement("button");
myBtn3.id = 'btnDiv';
myBtn3.textContent = "Divide";
myContr.append(myBtn3);
myBtn3.addEventListener('click', divide);

var myBtn4 = document.createElement("button");
myBtn4.id = 'btnMul';
myBtn4.textContent = "Multiply";
myContr.append(myBtn4);
myBtn4.addEventListener('click', multiply);

//Clear Button

var myClearBtn = document.createElement("button");
myClearBtn.id = 'btnClear';
myClearBtn.textContent = "Clear";
myContr.append(myClearBtn);
myClearBtn.addEventListener('click', add);

function add(event){
    if (event.target.id == 'btnAdd'){
        //console.log(myInput1, myInput2)
        //console.log((Number(myInput1.value) , Number(myInput2.value)))
        document.getElementById('lblAnswer').textContent = (Number(myInput1.value) + Number(myInput2.value));
    } else if (event.target.id == 'btnClear'){
        document.getElementById('firstNum').value = "";
        document.getElementById('scndNum').value = "";
        document.getElementById('lblAnswer').textContent = "";
    }
}

function subtract(event){
    if (event.target.id == 'btnSub'){
        //console.log(myInput1, myInput2)
        //console.log((Number(myInput1.value) , Number(myInput2.value)))
        document.getElementById('lblAnswer').textContent = (Number(myInput1.value) - Number(myInput2.value));
    } else if (event.target.id == 'btnClear'){
        document.getElementById('firstNum').value = "";
        document.getElementById('scndNum').value = "";
        document.getElementById('lblAnswer').textContent = "";
    }
}

function divide(event){
    if (event.target.id == 'btnDiv'){
        //console.log(myInput1, myInput2)
        //console.log((Number(myInput1.value) , Number(myInput2.value)))
        document.getElementById('lblAnswer').textContent = (Number(myInput1.value) / Number(myInput2.value));
    } else if (event.target.id == 'btnClear'){
        document.getElementById('firstNum').value = "";
        document.getElementById('scndNum').value = "";
        document.getElementById('lblAnswer').textContent = "";
    }
}

function multiply(event){
    if (event.target.id == 'btnMul'){
        //console.log(myInput1, myInput2)
        //console.log((Number(myInput1.value) , Number(myInput2.value)))
        document.getElementById('lblAnswer').textContent = (Number(myInput1.value) * Number(myInput2.value));
    } else if (event.target.id == 'btnClear'){
        document.getElementById('firstNum').value = "";
        document.getElementById('scndNum').value = "";
        document.getElementById('lblAnswer').textContent = "";
    }
}

var style = document.createElement('style');
style.innerHTML = `#container1 {
    background-color: lightgray;
    width: 200px;
    height: 90px;
    padding:30px;
    margin: 30px auto;
    text-align: center;
}
#lblAnswer {
    margin 2px;
    padding: 0px 73px;
    font-size: 13px;
}`;
document.head.appendChild(style);

myBtn.addEventListener('click', (event) => {
    if(event.target.id == 'btnAdd'){
        myContr.style.backgroundColor = 'yellow';
    }
});

myBtn2.addEventListener('click', (event) => {
    if(event.target.id == 'btnSub'){
        myContr.style.backgroundColor = 'lightgreen';
    }
});

myBtn3.addEventListener('click', (event) => {
    if(event.target.id == 'btnDiv'){
        myContr.style.backgroundColor = 'lightblue';
    }
});

myBtn4.addEventListener('click', (event) => {
    if(event.target.id == 'btnMul'){
        myContr.style.backgroundColor = 'lightpink';
    }
});

myClearBtn.addEventListener('click', (event) => {
    if(event.target.id == 'btnClear'){
        myContr.style.backgroundColor = 'lightgray';
    }
});
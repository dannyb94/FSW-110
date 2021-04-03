/*
X .concat()
.indexOf()
.lastIndexOf()
.match()
.replace()
X .split()
X .splice()
X .toLowerCase()
X .toUpperCase()
.substr()
 */

var cheese = ["Mozzarella", "Cheddar", "Bleu", "Ricotta"];
var crackers = ["Wheat", "Oatcakes", "Sesame", "Crisps"];
var food = crackers.concat(cheese)

function methods(){
};
console.log(cheese.toUpperCase());
console.log(food.toLowerCase());

//------------------------------------------------
const months = ['Jan', 'March', 'April', 'June'];
function newYear(){
    var newNew = months.splice(1, 0, 'Feb');
    newNew.split('June');
}
console.log(newYear())
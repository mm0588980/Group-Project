var total;
var taxRate = 0.07;
var salesRate = 0.5;

function calcTotal ()
{
    var item1 = 6.5;
    var item2 = 1000;
    var item3 = 1000;
    var item4 = 200;

    var subtotal = item1 + item2 + item3 + item4;

    total = (subtotal * salesRate) + (subtotal *taxRate);
    document.getElementById("total").innerHTML = Math.round(total*100) / 100;
}
function submitInfo() {
	var nameinput = document.getElementById("nameinput");
    var emailinput = document.getElementById("emailinput");
    var addressinput = document.getElementById("addressinput");
    var cityinput = document.getElementById("cityinput");
    var stateinput = document.getElementById("stateinput");
	var cardName = document.getElementById("cardnameinput");
	var cardNum = document.getElementById("cardnuminput");
	var expMonth = document.getElementById("expmonthinput");
	var expYear = document.getElementById("expyearinput");
	var cvv = document.getElementById("cvvinput");
	(nameinput.value && emailinput && addressinput && cityinput && stateinput && cardName.value && cardNum.value && expMonth.value && expYear.value && cvv.value) ? alert("Thanks for your order!") : alert("Please fill in all form fields.");
}
document.getElementById("submit").addEventListener("click", submitInfo, false);
calcTotal();

var cartAry = [["Plumbus", 6.5], ["Portal Gun", 1000], ["Portal Gun", 1000], ["Interdimensional Cable Box", 200]];
function printCart() {
  for (cell = 0, i = 0; cell < 8; cell += 2, i++) {
    document.getElementsByTagName("td")[cell].innerHTML = cartAry[i][0];
    document.getElementsByTagName("td")[cell + 1].innerHTML = cartAry[i][1];
  }
}
window.addEventListener("load", printCart, false);

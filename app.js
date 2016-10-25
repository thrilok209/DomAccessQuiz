var marg = 0;

function identifyById() {
  console.log(document.getElementById("para1"))

}

function identifyByClass() {
console.log(document.getElementsByClassName("class1"));
}

function byTag() {
console.log(document.getElementsByTagName('p'));
}

function changeBackground() {
document.getElementById("block1").style.backgroundColor = "blue";
}

function increaseFont() {
document.getElementById("block2").style.fontSize = "6em";
}

function changeFontColor() {

      document.getElementById("block3").style.color = "green";


}

function revertColor() {


        document.getElementById("block3").style.color = "black";

}

function hide() {
document.getElementById('block4').style.visibility='hidden';
}

function changeBackColor(color, className) {
el =document.getElementsByClassName(className);
for(i=0;i<el.length;i++){
  el[i].style.backgroundColor=color;
}

}

function numbersOnly(e) {



}

function addAdjacent() {
  var node = document.createElement("p");
   var textnode = document.createTextNode("12.I got generated on the fly...");
   node.appendChild(textnode);
   document.getElementById("para2").appendChild(node);

}

function removePara() {
var list = document.getElementById("para4");
list.removeChild(list.childNodes[0]);
}

function myMove() {

}

function myFunction() {
  var x=document.getElementById("fname");
 x.value= x.value.toUpperCase();
}

function changeOn() {
  var y=document.getElementById("fname1");
 y.value= y.value.toUpperCase();
}

function preferedBrowser() {
}

function color(elem) {
  document.getElementById("myInput").style.backgroundColor = "yellow";
}

function inputxt() {
  document.getElementById("demo").style.backgroundColor = "yellow";
}

function confirmInput() {
  document.getElementById("fname").action;
}

function message() {
  alert("Carefull! you were about to reset");

}

function keydown(n) {
  console.log(n);
}

function keypress(n) {
  el = document.getElementById("keycode");
  el.textContent = n.code;

}

function keyup() {
  var y=document.getElementById("fname2");
 y.value= y.value.toUpperCase();
}

function writeMessage() {
  document.getElementById("mySecondInput").innerHTML  =document.getElementById("myInput");

}

var second;
var pluse = false,
  minus = false,
  mul = false,
  div = false;
function equal() {
  second = parseInt(document.getElementById("inputField").value);
  document.getElementById("inputField").value = first + second;

  if (plus == true) {
    document.getElementById("inputField").value = first + second;
  } else if (minus == true) {
    document.getElementById("inputField").value = first - second;
  } else if (mul == true) {
    document.getElementById("inputField").value = first * second;
  } else if (div == true) {
    document.getElementById("inputField").value = first / second;
  }
}

function plus() {
  first = parseInt(document.getElementById("inputField").value);
  document.getElementById("inputField").value = "";
  plus = true;
}

function negitive() {
  first = parseInt(document.getElementById("inputField").value);
  document.getElementById("inputField").value = "";
  minus = true;
}

function multiply() {
  first = parseInt(document.getElementById("inputField").value);
  document.getElementById("inputField").value = "";
  mul = true;
}

function divide() {
  first = parseInt(document.getElementById("inputField").value);
  document.getElementById("inputField").value = "";
  div = true;
}

var first;
$("#one").click(function () {
  var text = document.getElementById("inputField");
  text.value += 1;
  first = $("#inputField").val();
});

$("#two").click(function () {
  var text = document.getElementById("inputField");
  text.value += 2;
});

$("#three").click(function () {
  var text = document.getElementById("inputField");
  text.value += 3;
});

$("#four").click(function () {
  var text = document.getElementById("inputField");
  text.value += 4;
});
$("#five").click(function () {
  var text = document.getElementById("inputField");
  text.value += 5;
});
$("#six").click(function () {
  var text = document.getElementById("inputField");
  text.value += 6;
});
$("#seven").click(function () {
  var text = document.getElementById("inputField");
  text.value += 7;
});
$("#eight").click(function () {
  var text = document.getElementById("inputField");
  text.value += 8;
});
$("#nine").click(function () {
  var text = document.getElementById("inputField");
  text.value += 9;
});

$("#zero").click(function () {
  var text = document.getElementById("inputField");
  text.value += 0;
});

$("#clear").click(function () {
  document.getElementById("inputField").value = "";
  minus = false;
  plus = false;
  div = false;
  mul = false;
  first = 0;
  second = 0;
});

$("#correct").click(function () {
  var value = document.getElementById("inputField").value;
  if (value.length != 0) {
    document.getElementById("inputField").value = value.substring(
      0,
      value.length - 1
    );
  }
});

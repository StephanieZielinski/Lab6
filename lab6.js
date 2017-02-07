var c = toCelsius(212);
var ctext = "The temperature is  " + c + " Celsius"
var f =toFahrenheight(100);
var ftext = "The temperature is  " + f + " Fahrenheight"

function toCelsius(fahrenheight) {
  return (fahrenheight - 32) * 5/9;
}

function toFahrenheight(celsius) {
  return (celsius * 9/5) + 32;
}


function convertTemp(temp, unit){
  if (unit === "c"){
    return (temp - 32) * 5/9;
  }
  else (unit === "f");{
    return (temp * 9/5) + 32;
  }
}


console.log( convertTemp(212, "c"));
console.log( convertTemp(32, "c"));
console.log( convertTemp(65, "c"));
console.log( convertTemp(100, "f"));
console.log( convertTemp(-40, "f"));

var c = toCelsius(212);
var ctext = "The temperature is  " + c + " Celsius"
var f =toFahrenheight(100);
var ftext = "The temperature is  " + f + " Fahrenheight"

function toCelsius(fahrenheight) {
  return (5/9) * (-32);
}

function toFahrenheight(celsius) {
  return (5/9) * (arrayc+32);
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
console.log( convertTemp(212, "f"));

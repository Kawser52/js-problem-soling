function farhenheitCelcias(farenheit){
 var celcias= (farenheit-32) * (5/9);
 return celcias;
}
var unitFarenheit= farhenheitCelcias(85);
console.log(unitFarenheit.toFixed(2));
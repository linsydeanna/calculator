add = function(){
  var x = document.getElementById("numberone").value;
  var y = document.getElementById("numbertwo").value;
  var z = +x + +y;
  document.getElementById("sum").value = z;
  return z;
}

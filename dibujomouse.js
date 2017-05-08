var lienzo = document.getElementById("dibujito");
var d = lienzo.getContext("2d");
lienzo.addEventListener("mousedown", inicioDeDibujo);
lienzo.addEventListener("mouseup", finDeDibujo);
var colorcito = "green";
var xi, yi, xf, yf;
function inicioDeDibujo (evento)
{
  var xi = evento.clientX;
  var yi = evento.clientY;
  console.log (xi);
  console.log (yi);
}

function finDeDibujo(evento)
{
  var xf = evento.screenX;
  var yf = evento.screenY;
  console.log (xf);
  console.log (yf);
}

function dibujarLinea()
{
  dibujarLinea ("green", xi, yi, xf, yf);
}


function dibujarLinea (color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo (x_inicial, y_inicial);
  lienzo.lineTo (x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

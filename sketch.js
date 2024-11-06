
function setup() {
  createCanvas(400,400, WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}

function draw() {
  background(0, 0, 0); //cor de fundo
  rotateY(millis()/1000); // rotação da terra
  texture(terra); //textura da terra, imagem
  sphere(200, 200); //esfera 3D

  
}
//Posição e tamanho da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro/2;

//velocidade da bolinha
let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 100;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostraBolinha();
  movimentaBolinha();
  verificaBolinha();
  mostraRaquete();
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  ColisaoMinhaRaqueteBiblioteca();
}
  
  function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
  }
  
  function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  }
  
  function verificaBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
  }
  
  function mostraRaquete(){
    rect(xRaquete, yRaquete, raqueteLargura, raqueteAltura);
  }

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteLargura && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function ColisaoMinhaRaqueteBiblioteca(){
  collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
}
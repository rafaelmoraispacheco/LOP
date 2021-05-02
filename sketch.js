/* 
Aluno: Rafael Morais Pacheco - Turma 05
matrícula 20200079106

link YouTube
https://youtu.be/-ha8tSflvks

link p5.js

https://editor.p5js.org/rafael.pacheco.051/present/Ew1nDDNJH

https://editor.p5js.org/rafael.pacheco.051/full/Ew1nDDNJH

link github
https://github.com/rafaelmoraispacheco/LOP.git

*/

//declaração de variáveis
var tela = 1; //variável que vai definir a tela do menu
var img; //imagens criadas na plataforma canva.com
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var som; //som obtido no site opengameart.org
var erro;
var cavalo;
var croc;
var hipo;
var seahorse;
var i, j;
var score = 0;



//função para carregar arquivos na plataforma
function preload() {
  img = loadImage('1.png');
  img2 = loadImage('2.png');
  img3 = loadImage('3.png');
  img4 = loadImage('4.png');
  img5 = loadImage('5.png');
  img6 = loadImage('6.png');
  img7 = loadImage('7.png');
  img8 = loadImage('8.png');
  img9 = loadImage('9.png');
  img10 = loadImage('10.png');
  som = loadSound('Accept.mp3');
  erro = loadSound('erro.mp3');
  gato = loadSound('gato.mp3');
  cavalo = loadSound('cavalo.mp3');
  hipo = loadSound('hipo.mp3');
  croc = loadSound('croc.mp3');
  seahorse = loadSound('seahorse.mp3');
  
}



function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  
/* Quando a varável tela recebe o valor 1, o código utiliza as instruções para a tela inicial do menu
*/
  
  if ( tela == 1){
    image(img, 0, 0);
    score = 0
    
// condição para identificar o botão para mudar a tela
  if(mouseX > 45 && mouseX < 135 && mouseY > 325 && mouseY < 385){
  stroke(255, 204, 0); //faz surgir a estrutura abaixo quando a condição do if acima é verdade - o mouse sobre a área definida pelo interval x e y;
  strokeWeight(4); //define a espessura da estrutura abaixo
  line(135, 385, 45, 385); //cria uma linha
    if (mouseIsPressed) { //função identifica clique do mouse
      som.play(); //função executa arquivo de áudio
      tela = 2; /* a variável tela recebe outro valor, alterando as a condição que a função draw vai utilizar, consequentemente alterando a tela do jogo; */
    }
  }
  
  if(mouseX > 175 && mouseX < 230 && mouseY > 325 && mouseY < 385){
  stroke(255, 204, 0);
  strokeWeight(4);
  line(175, 385, 230, 385);
    if (mouseIsPressed) {
      som.play();
      tela = 4; /* a variável tela recebe outro valor, alterando as a condição que a função draw vai utilizar, consequentemente alterando a tela do jogo; */
    }
  
  }
  
  if(mouseX > 275 && mouseX < 340 && mouseY > 325 && mouseY < 385){
  stroke(255, 204, 0);
  strokeWeight(4);
  line(350, 385, 275, 385);
    if (mouseIsPressed) {
      som.play();
      tela = 3; /* a variável tela recebe outro valor, alterando as a condição que a função draw vai utilizar, consequentemente alterando a tela do jogo; */
    }
  }
}


else if ( tela == 2){
    image(img2, 0, 0);
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
  if(mouseX > 50 && mouseX < 150 && mouseY > 385 && mouseY < 395){
      line(50, 390, 150, 390);
        if (mouseIsPressed) {
          som.play();
      tela = 8;
  
}
  }
}
  else if ( tela == 3){
    image(img3, 0, 0);
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
}
  //tela da primeira fase do jogo gato
  else if ( tela == 4){
    image(img4, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
    
    fill(0);
    rect(150, 330, 110, 40);
    textSize(32);
    text('escolha a primeira sílaba', 20, 230);
       
    text('GA', 20, 300);
    text('BA', 100, 300);
    text('CE', 180, 300);
    text('DU', 260, 300);
    text('TO', 340, 300);
    
   
       
    if(mouseX > 20 && mouseX < 70 && mouseY > 270 && mouseY < 300){    
    line(20, 310, 70, 310);
      if ( mouseIsPressed) {
        text('GA', 160, 360);
        score = score + 10;
        tela = 5;
        som.play();
    }
    }
      if(mouseX > 100 && mouseX < 150 && mouseY > 270 && mouseY < 300){    
    line(100, 310, 150, 310);
      if ( mouseIsPressed) {
        text('BA', 160, 360);
        erro.play();
    }
    }
    
    if(mouseX > 180 && mouseX < 230 && mouseY > 270 && mouseY < 300){    
    line(180, 310, 230, 310);
      if ( mouseIsPressed) {
        text('CE', 160, 360);
        erro.play();
    }
    }
    
    if(mouseX > 260 && mouseX < 300 && mouseY > 270 && mouseY < 300){    
    line(260, 310, 310, 310);
      if ( mouseIsPressed) {
        text('CE', 160, 360);
        erro.play();
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 270 && mouseY < 300){    
    line(340, 310, 390, 310);
      if ( mouseIsPressed) {
        text('TO', 160, 360);
        erro.play();
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
} 
}

  
   else if ( tela == 5){
    image(img4, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
     
    fill(0);
    rect(150, 330, 110, 40);
    textSize(32);
    text('escolha a segunda sílaba', 20, 230);
       
    
    text('BA', 100, 300);
    text('CE', 180, 300);
    text('DU', 260, 300);
    text('TO', 340, 300);
    text('GA', 160, 360);
    
    
      if(mouseX > 100 && mouseX < 150 && mouseY > 270 && mouseY < 300){    
    line(100, 310, 150, 310);
      if ( mouseIsPressed) {
        text('BA', 210, 360);
        erro.play();
    }
    }
    
    if(mouseX > 180 && mouseX < 230 && mouseY > 270 && mouseY < 300){    
    line(180, 310, 230, 310);
      if ( mouseIsPressed) {
        text('CE', 210, 360);
        erro.play();
    }
    }
    
    if(mouseX > 260 && mouseX < 300 && mouseY > 270 && mouseY < 300){    
    line(260, 310, 310, 310);
      if ( mouseIsPressed) {
        text('DU', 210, 360);
        erro.play();
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 270 && mouseY < 300){    
    line(340, 310, 390, 310);
      if ( mouseIsPressed) {
        text('TO', 210, 360);
        som.play();
        tela = 6;
        score = score + 10;
      }
    }
        if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
        }
    }
  }
  
  //tela acerto gato
    else if ( tela == 6){
    image(img4, 0, 0);
    
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
      
    fill(0);
    textSize(32);
    text('GATO', 20, 230);
     if(mouseX > 20 && mouseX < 100 && mouseY > 190 && mouseY < 230){
      line(20, 240, 110, 240);
        if (mouseIsPressed) {
      gato.play();
        }
     }
     
    textSize(32);
    text('PRÓXIMA FASE', 20, 330);
      if(mouseX > 20 && mouseX < 260 && mouseY > 300 && mouseY < 330){
      line(20, 340, 260, 340);
        if (mouseIsPressed) {
          tela = 7;
        }
      }
      
      
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
} 
}
  //tela da segunda fase do jogo
  
    else if ( tela == 7){
    image(img5, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
    
      
    fill(0);
    rect(100, 350, 160, 40);
    fill('rgb(40%,40%,40%)')
    textSize(26);
    text('escolha a primeira sílaba', 20, 240);
      
    text('GO', 20, 280);
    text('CA', 100, 280);
    text('CE', 180, 280);
    text('DU', 260, 280);
    text('VA', 340, 280);
    
    text('BA', 20, 320);
    text('LO', 100, 320);
    text('MU', 180, 320);
    text('TO', 260, 320);
      
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
      //SELEÇAÕ DA PRIMEIRA SÍLABA
      if(mouseX > 20 && mouseX < 60 && mouseY > 250 && mouseY < 280){    
    line(20, 290, 60, 290);
      if ( mouseIsPressed) {
        text('GO', 110, 380);
	erro.play();
        
    }
    }
      if(mouseX > 100 && mouseX < 140 && mouseY > 250 && mouseY < 280){    
    line(100, 290, 140, 290);
      if ( mouseIsPressed) {
        text('CA', 110, 380);
        tela = 70;
        som.play();
        score = score + 10;
    }
    }
    
    if(mouseX > 180 && mouseX < 220 && mouseY > 250 && mouseY < 280){    
    line(180, 290, 220, 290);
      if ( mouseIsPressed) {
        text('CE', 110, 380);
        erro.play();
    }
    }
    
    if(mouseX > 260 && mouseX < 300 && mouseY > 250 && mouseY < 280){    
    line(260, 290, 300, 290);
      if ( mouseIsPressed) {
        text('DU', 110, 380);
        erro.play();
    }
    }

	if(mouseX > 340 && mouseX < 380 && mouseY > 250 && mouseY < 280){    
    	 line(340, 290, 380, 290);
      	  if ( mouseIsPressed) {
           text('VA', 110, 380);
           erro.play();
    }
    }

if(mouseX > 20 && mouseX < 60 && mouseY > 300 && mouseY < 320){    
    line(20, 330, 60, 330);
      if ( mouseIsPressed) {
        text('BA', 110, 380);
        erro.play();
    }
    }
    
if(mouseX > 100 && mouseX < 140 && mouseY > 300 && mouseY < 320){    
    line(100, 330, 140, 330);
      if ( mouseIsPressed) {
        text('LO', 110, 380);
        erro.play();
    }
    }

if(mouseX > 180 && mouseX < 220 && mouseY > 300 && mouseY < 320){    
    line(180, 330, 220, 330);
      if ( mouseIsPressed) {
        text('MU', 110, 380);
        erro.play();
    }
    }

    if(mouseX > 260 && mouseX < 300 && mouseY > 300 && mouseY < 320){    
    line(260, 330, 300, 330);
      if ( mouseIsPressed) {
        text('TO', 110, 380);
        erro.play();
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
} 
}//FIM DA ESCOLHA DA PRIMEIRA SÍLAVA - CAVALO
  
//ESCOLHA SEGUNDA SÍLABA
  
    else if ( tela == 70){
    image(img5, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
    
      
    fill(0);
    rect(100, 350, 160, 40);
    fill('rgb(40%,40%,40%)')
    textSize(26);
    text('escolha a primeira sílaba', 20, 240);
      
    text('GO', 20, 280);
    
    text('CE', 180, 280);
    text('DU', 260, 280);
    text('VA', 340, 280);
    
    text('BA', 20, 320);
    text('LO', 100, 320);
    text('MU', 180, 320);
    text('TO', 260, 320);
    
    text('CA', 110, 380);
      
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
      if(mouseX > 20 && mouseX < 60 && mouseY > 250 && mouseY < 280){    
    line(20, 290, 60, 290);
      if ( mouseIsPressed) {
        text('GO', 150, 380);
	erro.play();
        
    }
    }
    
    
    if(mouseX > 180 && mouseX < 220 && mouseY > 250 && mouseY < 280){    
    line(180, 290, 220, 290);
      if ( mouseIsPressed) {
        text('CE', 150, 380);
        erro.play();
    }
    }
    
    if(mouseX > 260 && mouseX < 300 && mouseY > 250 && mouseY < 280){    
    line(260, 290, 300, 290);
      if ( mouseIsPressed) {
        text('DU', 150, 380);
        erro.play();
    }
    }

	if(mouseX > 340 && mouseX < 380 && mouseY > 250 && mouseY < 280){    
    	 line(340, 290, 380, 290);
      	  if ( mouseIsPressed) {
           text('VA', 150, 380);
            tela = 71;
            som.play();
            score = score + 10;
    }
    }

if(mouseX > 20 && mouseX < 60 && mouseY > 300 && mouseY < 320){    
    line(20, 330, 60, 330);
      if ( mouseIsPressed) {
        text('BA', 150, 380);
        erro.play();
    }
    }
    
if(mouseX > 100 && mouseX < 140 && mouseY > 300 && mouseY < 320){    
    line(100, 330, 140, 330);
      if ( mouseIsPressed) {
        text('LO', 150, 380);
        erro.play();
    }
    }

if(mouseX > 180 && mouseX < 220 && mouseY > 300 && mouseY < 320){    
    line(180, 330, 220, 330);
      if ( mouseIsPressed) {
        text('MU', 150, 380);
        erro.play();
    }
    }

    if(mouseX > 260 && mouseX < 300 && mouseY > 300 && mouseY < 320){    
    line(260, 330, 300, 330);
      if ( mouseIsPressed) {
        text('TO', 150, 380);
        erro.play();
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
} 
}//FIM DA ESCOLHA SEGUNDA SÍLABA - CAVALO
      
//ESCOLHA TERCEIRA SÍLABA
  
    else if ( tela == 71){
    image(img5, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
    
      
    fill(0);
    rect(100, 350, 160, 40);
    fill('rgb(40%,40%,40%)')
    textSize(26);
    text('escolha a primeira sílaba', 20, 240);
      
    text('GO', 20, 280);
    
    text('CE', 180, 280);
    text('DU', 260, 280);
    
    
    text('BA', 20, 320);
    text('LO', 100, 320);
    text('MU', 180, 320);
    text('TO', 260, 320);
    
    text('CA', 110, 380);
    text('VA', 150, 380);
      
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
      if(mouseX > 20 && mouseX < 60 && mouseY > 250 && mouseY < 280){    
    line(20, 290, 60, 290);
      if ( mouseIsPressed) {
        text('GO', 200, 380);
	erro.play();
        
    }
    }
     
    
    if(mouseX > 180 && mouseX < 220 && mouseY > 250 && mouseY < 280){    
    line(180, 290, 220, 290);
      if ( mouseIsPressed) {
        text('CE', 200, 380);
        erro.play();
    }
    }
    
    if(mouseX > 260 && mouseX < 300 && mouseY > 250 && mouseY < 280){    
    line(260, 290, 300, 290);
      if ( mouseIsPressed) {
        text('DU', 200, 380);
        erro.play();
    }
    }

	

if(mouseX > 20 && mouseX < 60 && mouseY > 300 && mouseY < 320){    
    line(20, 330, 60, 330);
      if ( mouseIsPressed) {
        text('BA', 200, 380);
        erro.play();
    }
    }
    
if(mouseX > 100 && mouseX < 140 && mouseY > 300 && mouseY < 320){    
    line(100, 330, 140, 330);
      if ( mouseIsPressed) {
        text('LO', 200, 380);
        tela = 72;
        som.play();
        score = score + 10;
    }
    }

if(mouseX > 180 && mouseX < 220 && mouseY > 300 && mouseY < 320){    
    line(180, 330, 220, 330);
      if ( mouseIsPressed) {
        text('MU', 200, 380);
        erro.play();
    }
    }

    if(mouseX > 260 && mouseX < 300 && mouseY > 300 && mouseY < 320){    
    line(260, 330, 300, 330);
      if ( mouseIsPressed) {
        text('TO', 200, 380);
        erro.play();
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
}
}//FIM DA ESCOLHA TERCEIRA SÍLABA - CAVALO      
      
  //tela acerto cavalo
  else if ( tela == 72){
    image(img5, 0, 0);
    
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
      
    fill(0);
    textSize(32);
    text('CAVALO', 20, 260);
     if(mouseX > 20 && mouseX < 140 && mouseY > 220 && mouseY < 260){
      line(20, 270, 140, 270);
        if (mouseIsPressed) {
      cavalo.play();
        }
     }
     
    textSize(32);
    text('PRÓXIMA FASE', 20, 350);
      if(mouseX > 20 && mouseX < 290 && mouseY > 332 && mouseY < 350){
      line(20, 360, 260, 360);
        if (mouseIsPressed) {
          tela = 80;
        }
      }
     if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
}
  }
//fim tela acerto cavalo
  
  //tela da TERCEIRA fase do jogo
  
    else if ( tela == 80){
    image(img6, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
    
      
    fill(0);
    rect(40, 350, 220, 40);
    fill('rgb(40%,40%,40%)')
    textSize(26);
    text('escolha a primeira sílaba', 20, 240);
      
    text('CRO', 20, 280);
    text('CA', 100, 280);
    text('LO', 180, 280);
    text('DU', 260, 280);
    text('CO', 340, 280);
    
    text('BA', 20, 320);
    text('DI', 100, 320);
    text('MU', 180, 320);
    text('TO', 260, 320);
      
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
      //SELEÇAÕ DA PRIMEIRA SÍLABA
      if(mouseX > 20 && mouseX < 60 && mouseY > 250 && mouseY < 280){    
    line(20, 290, 60, 290);
      if ( mouseIsPressed) {
        text('CRO', 50, 380);
	tela = 81;
        som.play();
        score = score + 10;
        
    }
    }
      if(mouseX > 100 && mouseX < 140 && mouseY > 250 && mouseY < 280){    
    line(100, 290, 140, 290);
      if ( mouseIsPressed) {
        text('CA', 50, 380);
        erro.play();
    }
    }
    
    if(mouseX > 180 && mouseX < 220 && mouseY > 250 && mouseY < 280){    
    line(180, 290, 220, 290);
      if ( mouseIsPressed) {
        text('LO', 50, 380);
        erro.play();
    }
    }
    
    if(mouseX > 260 && mouseX < 300 && mouseY > 250 && mouseY < 280){    
    line(260, 290, 300, 290);
      if ( mouseIsPressed) {
        text('DU', 50, 380);
        erro.play();
    }
    }

	if(mouseX > 340 && mouseX < 380 && mouseY > 250 && mouseY < 280){    
    	 line(340, 290, 380, 290);
      	  if ( mouseIsPressed) {
           text('CO', 50, 380);
           erro.play();
    }
    }

if(mouseX > 20 && mouseX < 60 && mouseY > 300 && mouseY < 320){    
    line(20, 330, 60, 330);
      if ( mouseIsPressed) {
        text('BA', 50, 380);
        erro.play();
    }
    }
    
if(mouseX > 100 && mouseX < 140 && mouseY > 300 && mouseY < 320){    
    line(100, 330, 140, 330);
      if ( mouseIsPressed) {
        text('DI', 40, 380);
        erro.play();
    }
    }

if(mouseX > 180 && mouseX < 220 && mouseY > 300 && mouseY < 320){    
    line(180, 330, 220, 330);
      if ( mouseIsPressed) {
        text('MU', 50, 380);
        erro.play();
    }
    }

    if(mouseX > 260 && mouseX < 300 && mouseY > 300 && mouseY < 320){    
    line(260, 330, 300, 330);
      if ( mouseIsPressed) {
        text('TO', 50, 380);
        erro.play();
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
} 
}//FIM DA ESCOLHA DA PRIMEIRA SÍLAVA - CROCODILO
  
//ESCOLHA SEGUNDA SÍLABA -CROCODILO
  
   else if ( tela == 81){
    image(img6, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
    
      
    fill(0);
    rect(40, 350, 220, 40);
    fill('rgb(40%,40%,40%)')
    textSize(26);
    text('escolha a segunda sílaba', 20, 240);
      
    
    text('CA', 100, 280);
    text('LO', 180, 280);
    text('DU', 260, 280);
    text('CO', 340, 280);
    
    text('BA', 20, 320);
    text('DI', 100, 320);
    text('MU', 180, 320);
    text('TO', 260, 320);

    text('CRO', 50, 380);
      
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
      //SELEÇAÕ DA SEGUNDA SÍLABA CROCODILO
     
      if(mouseX > 100 && mouseX < 140 && mouseY > 250 && mouseY < 280){    
    line(100, 290, 140, 290);
      if ( mouseIsPressed) {
        text('CA', 110, 380);
        erro.play();
    }
    }
    
    if(mouseX > 180 && mouseX < 220 && mouseY > 250 && mouseY < 280){    
    line(180, 290, 220, 290);
      if ( mouseIsPressed) {
        text('LO', 110, 380);
        erro.play();
    }
    }
    
    if(mouseX > 260 && mouseX < 300 && mouseY > 250 && mouseY < 280){    
    line(260, 290, 300, 290);
      if ( mouseIsPressed) {
        text('DU', 110, 380);
        erro.play();
    }
    }

	if(mouseX > 340 && mouseX < 380 && mouseY > 250 && mouseY < 280){    
    	 line(340, 290, 380, 290);
      	  if ( mouseIsPressed) {
           text('CO', 110, 380);
           tela = 82;
        som.play();
        score = score + 10;
    }
    }

if(mouseX > 20 && mouseX < 60 && mouseY > 300 && mouseY < 320){    
    line(20, 330, 60, 330);
      if ( mouseIsPressed) {
        text('BA', 110, 380);
        erro.play();
    }
    }
    
if(mouseX > 100 && mouseX < 140 && mouseY > 300 && mouseY < 320){    
    line(100, 330, 140, 330);
      if ( mouseIsPressed) {
        text('DI', 110, 380);
        erro.play();
    }
    }

if(mouseX > 180 && mouseX < 220 && mouseY > 300 && mouseY < 320){    
    line(180, 330, 220, 330);
      if ( mouseIsPressed) {
        text('MU', 110, 380);
        erro.play();
    }
    }

    if(mouseX > 260 && mouseX < 300 && mouseY > 300 && mouseY < 320){    
    line(260, 330, 300, 330);
      if ( mouseIsPressed) {
        text('TO', 110, 380);
        erro.play();
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
} 
}//FIM DA ESCOLHA SEGUNDA SÍLABA - CAVALO
      
//ESCOLHA TERCEIRA SÍLABA
  
   else if ( tela == 82){
    image(img6, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
    
      
    fill(0);
    rect(40, 350, 220, 40);
    fill('rgb(40%,40%,40%)')
    textSize(26);
    text('escolha a segunda sílaba', 20, 240);
      
    
    text('CA', 100, 280);
    text('LO', 180, 280);
    text('DU', 260, 280);
    
    
    text('BA', 20, 320);
    text('DI', 100, 320);
    text('MU', 180, 320);
    text('TO', 260, 320);

    text('CRO', 50, 380);
    text('CO', 110, 380);
      
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
      //SELEÇAÕ DA TERCEIRA SÍLABA CROCODILO
     
      if(mouseX > 100 && mouseX < 140 && mouseY > 250 && mouseY < 280){    
    line(100, 290, 140, 290);
      if ( mouseIsPressed) {
        text('CA', 150, 380);
        erro.play();
    }
    }
    
    if(mouseX > 180 && mouseX < 220 && mouseY > 250 && mouseY < 280){    
    line(180, 290, 220, 290);
      if ( mouseIsPressed) {
        text('LO', 150, 380);
        erro.play();
    }
    }
    
    if(mouseX > 260 && mouseX < 300 && mouseY > 250 && mouseY < 280){    
    line(260, 290, 300, 290);
      if ( mouseIsPressed) {
        text('DU', 150, 380);
        erro.play();
    }
    }

	

if(mouseX > 20 && mouseX < 60 && mouseY > 300 && mouseY < 320){    
    line(20, 330, 60, 330);
      if ( mouseIsPressed) {
        text('BA', 150, 380);
        erro.play();
    }
    }
    
if(mouseX > 100 && mouseX < 140 && mouseY > 300 && mouseY < 320){    
    line(100, 330, 140, 330);
      if ( mouseIsPressed) {
        text('DI', 150, 380);
        tela = 83;
        som.play();
        score = score + 10;
    }
    }

if(mouseX > 180 && mouseX < 220 && mouseY > 300 && mouseY < 320){    
    line(180, 330, 220, 330);
      if ( mouseIsPressed) {
        text('MU', 150, 380);
        erro.play();
    }
    }

    if(mouseX > 260 && mouseX < 300 && mouseY > 300 && mouseY < 320){    
    line(260, 330, 300, 330);
      if ( mouseIsPressed) {
        text('TO', 150, 380);
        erro.play();
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
} 
}//FIM DA ESCOLHA TERCEIRA SÍLABA - CROCODILO
 
//ESCOLHA QUARTA SÍLABA
  
   else if ( tela == 83){
    image(img6, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
    
      
    fill(0);
    rect(40, 350, 220, 40);
    fill('rgb(40%,40%,40%)')
    textSize(26);
    text('escolha a segunda sílaba', 20, 240);
      
    
    text('CA', 100, 280);
    text('LO', 180, 280);
    text('DU', 260, 280);
    
    
    text('BA', 20, 320);
    
    text('MU', 180, 320);
    text('TO', 260, 320);

    text('CRO', 50, 380);
    text('CO', 110, 380);
    text('DI', 150, 380);
      
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
      //SELEÇAÕ DA QUARTA SÍLABA CROCODILO
     
      if(mouseX > 100 && mouseX < 140 && mouseY > 250 && mouseY < 280){    
    line(100, 290, 140, 290);
      if ( mouseIsPressed) {
        text('CA', 190, 380);
        erro.play();
    }
    }
    
    if(mouseX > 180 && mouseX < 220 && mouseY > 250 && mouseY < 280){    
    line(180, 290, 220, 290);
      if ( mouseIsPressed) {
        text('LO', 190, 380);
       tela = 84;
        som.play();
        score = score + 10;
    }
    }
    
    if(mouseX > 260 && mouseX < 300 && mouseY > 250 && mouseY < 280){    
    line(260, 290, 300, 290);
      if ( mouseIsPressed) {
        text('DU', 190, 380);
        erro.play();
    }
    }

	

if(mouseX > 20 && mouseX < 60 && mouseY > 300 && mouseY < 320){    
    line(20, 330, 60, 330);
      if ( mouseIsPressed) {
        text('BA', 190, 380);
        erro.play();
    }
    }
    

if(mouseX > 180 && mouseX < 220 && mouseY > 300 && mouseY < 320){    
    line(180, 330, 220, 330);
      if ( mouseIsPressed) {
        text('MU', 190, 380);
        erro.play();
    }
    }

    if(mouseX > 260 && mouseX < 300 && mouseY > 300 && mouseY < 320){    
    line(260, 330, 300, 330);
      if ( mouseIsPressed) {
        text('TO', 190, 380);
        erro.play();
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
} 
}//FIM DA ESCOLHA QUARTA SÍLABA - CROCODILO
     
  //tela acerto CROCODILO
  else if ( tela == 84){
    image(img6, 0, 0);
    
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
      
    fill(0);
    textSize(32);
    text('CROCODILO', 20, 260);
     if(mouseX > 20 && mouseX < 180 && mouseY > 220 && mouseY < 260){
      line(20, 270, 180, 270);
        if (mouseIsPressed) {
     croc.play();
        }
     }
     
    textSize(32);
    text('PRÓXIMA FASE', 20, 350);
      if(mouseX > 20 && mouseX < 290 && mouseY > 332 && mouseY < 350){
      line(20, 360, 260, 360);
        if (mouseIsPressed) {
          som.play();
          tela = 90;
        }
      }
     if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
}
  }
//fim tela acerto crocodilo  
  
   //tela da QUARTA fase do jogo
  
    else if ( tela == 90){
    image(img7, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
    
      
    fill(0);
    rect(40, 350, 240, 40);
    fill('rgb(40%,40%,40%)')
    textSize(26);
    text('escolha a primeira sílaba', 20, 240);
      
    text('FA', 20, 280);
    text('HI', 100, 280);
    text('LO', 180, 280);
    text('PÓ', 260, 280);
    text('MO', 340, 280);
    
    text('BA', 20, 320);
    text('PO', 100, 320);
    text('MU', 180, 320);
    text('TA', 260, 320);
      
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
      //SELEÇAÕ DA PRIMEIRA SÍLABA
      if(mouseX > 20 && mouseX < 60 && mouseY > 250 && mouseY < 280){    
    line(20, 290, 60, 290);
      if ( mouseIsPressed) {
        text('FA', 50, 380);
	erro.play();
        
    }
    }
      if(mouseX > 100 && mouseX < 140 && mouseY > 250 && mouseY < 280){    
    line(100, 290, 140, 290);
      if ( mouseIsPressed) {
        text('HI', 50, 380);
        tela = 91;
        som.play();
        score = score + 10;
    }
    }
    
    if(mouseX > 180 && mouseX < 220 && mouseY > 250 && mouseY < 280){    
    line(180, 290, 220, 290);
      if ( mouseIsPressed) {
        text('LO', 50, 380);
        erro.play();
    }
    }
    
    if(mouseX > 260 && mouseX < 300 && mouseY > 250 && mouseY < 280){    
    line(260, 290, 300, 290);
      if ( mouseIsPressed) {
        text('PÓ', 50, 380);
        erro.play();
    }
    }

	if(mouseX > 340 && mouseX < 380 && mouseY > 250 && mouseY < 280){    
    	 line(340, 290, 380, 290);
      	  if ( mouseIsPressed) {
           text('MO', 50, 380);
           erro.play();
    }
    }

if(mouseX > 20 && mouseX < 60 && mouseY > 300 && mouseY < 320){    
    line(20, 330, 60, 330);
      if ( mouseIsPressed) {
        text('BA', 50, 380);
        erro.play();
    }
    }
    
if(mouseX > 100 && mouseX < 140 && mouseY > 300 && mouseY < 320){    
    line(100, 330, 140, 330);
      if ( mouseIsPressed) {
        text('PO', 40, 380);
        erro.play();
    }
    }

if(mouseX > 180 && mouseX < 220 && mouseY > 300 && mouseY < 320){    
    line(180, 330, 220, 330);
      if ( mouseIsPressed) {
        text('MU', 50, 380);
        erro.play();
    }
    }

    if(mouseX > 260 && mouseX < 300 && mouseY > 300 && mouseY < 320){    
    line(260, 330, 300, 330);
      if ( mouseIsPressed) {
        text('TA', 50, 380);
        erro.play();
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
} 
}//FIM DA ESCOLHA DA PRIMEIRA SÍLAVA - HIP
 
//SEGUNDA SILABA
 
else if ( tela == 91){
    image(img7, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
    
      
    fill(0);
    rect(40, 350, 240, 40);
    fill('rgb(40%,40%,40%)')
    textSize(26);
    text('escolha a segunda sílaba', 20, 240);
      
    text('FA', 20, 280);
    
    text('LO', 180, 280);
    text('PÓ', 260, 280);
    text('MO', 340, 280);
    
    text('BA', 20, 320);
    text('PO', 100, 320);
    text('MU', 180, 320);
    text('TA', 260, 320);

    text('HI', 50, 380);
      
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
      //SELEÇAÕ DA SEGUNDA SÍLABA

      if(mouseX > 20 && mouseX < 60 && mouseY > 250 && mouseY < 280){    
    line(20, 290, 60, 290);
      if ( mouseIsPressed) {
        text('FA', 100, 380);
	erro.play();
        
    }
    }
     
    if(mouseX > 180 && mouseX < 220 && mouseY > 250 && mouseY < 280){    
    line(180, 290, 220, 290);
      if ( mouseIsPressed) {
        text('LO', 100, 380);
        erro.play();
    }
    }
    
    if(mouseX > 260 && mouseX < 300 && mouseY > 250 && mouseY < 280){    
    line(260, 290, 300, 290);
      if ( mouseIsPressed) {
        text('PÓ', 100, 380);
        erro.play();
    }
    }

	if(mouseX > 340 && mouseX < 380 && mouseY > 250 && mouseY < 280){    
    	 line(340, 290, 380, 290);
      	  if ( mouseIsPressed) {
           text('MO', 100, 380);
           erro.play();
    }
    }

if(mouseX > 20 && mouseX < 60 && mouseY > 300 && mouseY < 320){    
    line(20, 330, 60, 330);
      if ( mouseIsPressed) {
        text('BA', 100, 380);
        erro.play();
    }
    }
    
if(mouseX > 100 && mouseX < 140 && mouseY > 300 && mouseY < 320){    
    line(100, 330, 140, 330);
      if ( mouseIsPressed) {
        text('PO', 100, 380);
        tela = 92;
        som.play();
        score = score + 10;
    }
    }

if(mouseX > 180 && mouseX < 220 && mouseY > 300 && mouseY < 320){    
    line(180, 330, 220, 330);
      if ( mouseIsPressed) {
        text('MU', 100, 380);
        erro.play();
    }
    }

    if(mouseX > 260 && mouseX < 300 && mouseY > 300 && mouseY < 320){    
    line(260, 330, 300, 330);
      if ( mouseIsPressed) {
        text('TA', 100, 380);
        erro.play();
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
} 
}//FIM DA ESCOLHA DA SEGUNDA SÍLAVA - HIPO
    

//TERCEIRA SÍLABA - HIPO
 
else if ( tela == 92){
    image(img7, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
    
      
    fill(0);
    rect(40, 350, 240, 40);
    fill('rgb(40%,40%,40%)')
    textSize(26);
    text('escolha a terceira sílaba', 20, 240);
      
    text('FA', 20, 280);
    
    text('LO', 180, 280);
    text('PÓ', 260, 280);
    text('MO', 340, 280);
    
    text('BA', 20, 320);
    text('PO', 100, 320);
    text('MU', 180, 320);
    text('TA', 260, 320);

    text('HI', 50, 380);
    text('PO', 100, 380);
      
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
      //SELEÇAÕ DA TERCEIRA SÍLABA
  
      if(mouseX > 20 && mouseX < 60 && mouseY > 250 && mouseY < 280){    
    line(20, 290, 60, 290);
      if ( mouseIsPressed) {
        text('FA', 150, 380);
	erro.play();
        
    }
    }
     
    if(mouseX > 180 && mouseX < 220 && mouseY > 250 && mouseY < 280){    
    line(180, 290, 220, 290);
      if ( mouseIsPressed) {
        text('LO', 150, 380);
        erro.play();
    }
    }
    
    if(mouseX > 260 && mouseX < 300 && mouseY > 250 && mouseY < 280){    
    line(260, 290, 300, 290);
      if ( mouseIsPressed) {
        text('PÓ', 150, 380);
         tela = 93;
        som.play();
        score = score + 10;
    }
    }

	if(mouseX > 340 && mouseX < 380 && mouseY > 250 && mouseY < 280){    
    	 line(340, 290, 380, 290);
      	  if ( mouseIsPressed) {
           text('MO', 150, 380);
           erro.play();
    }
    }

if(mouseX > 20 && mouseX < 60 && mouseY > 300 && mouseY < 320){    
    line(20, 330, 60, 330);
      if ( mouseIsPressed) {
        text('BA', 150, 380);
        erro.play();
    }
    }
    


if(mouseX > 180 && mouseX < 220 && mouseY > 300 && mouseY < 320){    
    line(180, 330, 220, 330);
      if ( mouseIsPressed) {
        text('MU', 150, 380);
        erro.play();
    }
    }

    if(mouseX > 260 && mouseX < 300 && mouseY > 300 && mouseY < 320){    
    line(260, 330, 300, 330);
      if ( mouseIsPressed) {
        text('TA', 150, 380);
        erro.play();
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
} 
}//FIM DA ESCOLHA DA TERCEIRA SÍLABA - HIPO


//QUARTA SÍLABA - HIPO
 
else if ( tela == 93){
    image(img7, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
    
      
    fill(0);
    rect(40, 350, 240, 40);
    fill('rgb(40%,40%,40%)')
    textSize(26);
    text('escolha a quarta sílaba', 20, 240);
      
    text('FA', 20, 280);
    
    text('LO', 180, 280);
    
    text('MO', 340, 280);
    
    text('BA', 20, 320);
    text('PO', 100, 320);
    text('MU', 180, 320);
    text('TA', 260, 320);

    text('HI', 50, 380);
    text('PO', 100, 380);
    text('PÓ', 150, 380);
  
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
      //SELEÇAÕ DA TERCEIRA SÍLABA

      if(mouseX > 20 && mouseX < 60 && mouseY > 250 && mouseY < 280){    
    line(20, 290, 60, 290);
      if ( mouseIsPressed) {
        text('FA', 200, 380);
	erro.play();
        
    }
    }
     
    if(mouseX > 180 && mouseX < 220 && mouseY > 250 && mouseY < 280){    
    line(180, 290, 220, 290);
      if ( mouseIsPressed) {
        text('LO', 200, 380);
        erro.play();
    }
    }
    
   

	if(mouseX > 340 && mouseX < 380 && mouseY > 250 && mouseY < 280){    
    	 line(340, 290, 380, 290);
      	  if ( mouseIsPressed) {
           text('MO', 200, 380);
           erro.play();
    }
    }

if(mouseX > 20 && mouseX < 60 && mouseY > 300 && mouseY < 320){    
    line(20, 330, 60, 330);
      if ( mouseIsPressed) {
        text('BA', 200, 380);
        erro.play();
    }
    }
    


if(mouseX > 180 && mouseX < 220 && mouseY > 300 && mouseY < 320){    
    line(180, 330, 220, 330);
      if ( mouseIsPressed) {
        text('MU', 200, 380);
        erro.play();
    }
    }

    if(mouseX > 260 && mouseX < 300 && mouseY > 300 && mouseY < 320){    
    line(260, 330, 300, 330);
      if ( mouseIsPressed) {
        text('TA', 200, 380);
        tela = 94;
        som.play();
        score = score + 10;
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
} 
}//FIM DA ESCOLHA DA QUARTA SÍLABA - HIPO

// QUINTA SÍLABA - HIPO
 
else if ( tela == 94){
    image(img7, 0, 0);
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
    
      
    fill(0);
    rect(40, 350, 240, 40);
    fill('rgb(40%,40%,40%)')
    textSize(26);
    text('escolha a quinta sílaba', 20, 240);
      
    text('FA', 20, 280);
    
    text('LO', 180, 280);
    
    text('MO', 340, 280);
    
    text('BA', 20, 320);
    text('PO', 100, 320);
    text('MU', 180, 320);
    

    text('HI', 50, 380);
    text('PO', 100, 380);
    text('PÓ', 150, 380);
    text('TA', 200, 380);
  
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
      //SELEÇAÕ DA quinta SÍLABA

      if(mouseX > 20 && mouseX < 60 && mouseY > 250 && mouseY < 280){    
    line(20, 290, 60, 290);
      if ( mouseIsPressed) {
        text('FA', 250, 380);
	erro.play();
        
    }
    }
     
    if(mouseX > 180 && mouseX < 220 && mouseY > 250 && mouseY < 280){    
    line(180, 290, 220, 290);
      if ( mouseIsPressed) {
        text('LO', 250, 380);
        erro.play();
    }
    }
    
   

	if(mouseX > 340 && mouseX < 380 && mouseY > 250 && mouseY < 280){    
    	 line(340, 290, 380, 290);
      	  if ( mouseIsPressed) {
           text('MO', 250, 380);
           tela = 95;
        som.play();
        score = score + 10;
    }
    }

if(mouseX > 20 && mouseX < 60 && mouseY > 300 && mouseY < 320){    
    line(20, 330, 60, 330);
      if ( mouseIsPressed) {
        text('BA', 250, 380);
        erro.play();
    }
    }
    


if(mouseX > 180 && mouseX < 220 && mouseY > 300 && mouseY < 320){    
    line(180, 330, 220, 330);
      if ( mouseIsPressed) {
        text('MU', 250, 380);
        erro.play();
    }
    }

    if(mouseX > 260 && mouseX < 300 && mouseY > 300 && mouseY < 320){    
    line(260, 330, 300, 330);
      if ( mouseIsPressed) {
        text('TA', 250, 380);
        
    }
    }
    
    if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
} 
}//FIM DA ESCOLHA DA QUARTA SÍLABA - HIPO



  //tela acerto HIPO
  else if ( tela == 95){
    image(img7, 0, 0);
    
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 310, 30);
    text(score, 310, 50)
      
    fill(0);
    textSize(32);
    text('HIPOPÓTAMO', 20, 260);
     if(mouseX > 20 && mouseX < 180 && mouseY > 220 && mouseY < 260){
      line(20, 270, 220, 270);
        if (mouseIsPressed) {
     hipo.play();
        }
     }
     
    textSize(32);
    text('PRÓXIMA FASE', 20, 350);
      if(mouseX > 20 && mouseX < 290 && mouseY > 332 && mouseY < 350){
      line(20, 360, 260, 360);
        if (mouseIsPressed) {
          som.play();
          tela = 100;
        }
      }
     if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
}
  }
//fim tela acerto hipopótamo
  
  // TELA FIM DO JOGO 
  
   else if ( tela == 100){
    image(img9, 0, 0);
    
    fill(50)
    textSize(12);
    text('PONTUAÇÃO', 120, 380);
    text(score, 220, 380);
     if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
  }
}
   }
  
  
  //tela com todas as fases do jogo - uso do for

  else if ( tela == 8){
    image(img10, 0, 0);
    
    for (i=1; i<5 ; i++){
      rectMode(CORNER);
      fill(0);
      rect(80, 60 + i*50, 40, 40);
      text('Fase  ' + i , 140, 80 +i*50)
    }
    
      if(mouseX > 80 && mouseX < 120 && mouseY > 110 && mouseY < 150){
        line(140,135, 180, 135);
      if (mouseIsPressed) {
       som.play();
       tela = 4;
    }
    }
    
      if(mouseX > 80 && mouseX < 120 && mouseY > 160 && mouseY < 200){
        line(140,185, 180, 185);
      if (mouseIsPressed) {
       som.play();
       tela = 7;
    }
    }
     
      
      if(mouseX > 80 && mouseX < 120 && mouseY > 210 && mouseY < 250){
        line(140,235, 180, 235);
      if (mouseIsPressed) {
       som.play();
       tela = 80;
    }
    }
    
    if(mouseX > 80 && mouseX < 120 && mouseY > 260 && mouseY < 300){
        line(140,285, 180, 285);
      if (mouseIsPressed) {
       som.play();
       tela = 90;
    }
    }
    
    
    
      if(mouseX > 340 && mouseX < 390 && mouseY > 325 && mouseY < 385){
      line(390, 395, 340, 395);
        if (mouseIsPressed) {
          som.play();
      tela = 1;
    }
}
}
  

  
}
    
    
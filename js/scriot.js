var playerX=310,
	ballX=340,
	ballY=320,
	ballDirX=-1,
	ballDirY=-2,
	score=0,
	widthBox=randomX(),
	heightBox=randomY(),
  play=false;


function randomX(){
	widthBox=( (Math.random()*(700-1) )+1 );
	return widthBox ;
}

function randomY(){
	heightBox=( (Math.random()*(200-1) )+1 );
	return heightBox;
}

function addBox(){
	 $('.Game').prepend(" <div class='box'></div>");
    $('.box').css({
    	"backgroundColor":"red",
    	"width":'100px',
    	"height":'20px',
        "position":'absolute',
        "top" : heightBox ,
        "left" : widthBox ,
    });
}


$(document).ready(function(){
    
     addBox();
    var t = setInterval(function(){ 
      
    if(play){

      if(((ballX >= (widthBox-1) && ballX <= widthBox+100) && (ballY >= heightBox && ballY <= heightBox+20) )){
               score++;
               alert("Scoring: "+score+" \n Nice !!");
               ballX=120;ballY=320;ballDirX=-1;ballDirY=-2;playerX=310;
               randomX(); 
               randomY();
           	   addBox();
           }

       
             if((ballX >= playerX && ballX <= playerX+100) && (ballY==330)  ){
                   ballDirY=-ballDirY;  
               }

           ballX +=ballDirX;
           ballY +=ballDirY;

           if(ballX < 0){
               ballDirX=-ballDirX;
           }

           if(ballY < 0){
              ballDirY=-ballDirY; 
           }

           if(ballX >770){
               ballDirX=-ballDirX;
           }
            if(ballY >360){
             alert("Scoring: "+score+" \n Game Over !!");
               ballX=120;ballY=320;ballDirX=-1;ballDirY=-2;playerX=310;score=0;
               
           }
           $('.ball').animate( {left:ballX,top:ballY} ,0);
                }  
              }, 7);

    
    $('body').keydown(function(e){

       if(e.which == 37){
         play=true;
         playerX = $('.bar').css("left");
           playerX = parseInt(playerX, 10);
            if(playerX > 10){          
		       playerX-=20;
		      $('.bar').animate( {left:playerX} ,10);

            }else{
            	playerX=0;
               $('.bar').animate( {left:playerX} ,0);
            }
        }else if(e.which == 39){
           play=true;
           playerX= $('.bar').css("left");
           playerX = parseInt(playerX, 10);
            if(playerX < 699){          
		       playerX+=20;
		      $('.bar').animate( {left:playerX} ,10);

            }else{
            	playerX=699;
               $('.bar').animate( {left:playerX} ,0);
            }
        }
     })


	
  })

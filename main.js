"use strict";
$('h1').css('background-color','#ccc');

var goomba = function(){
    $("#goomba").animate({left:"120px"},2000);
    $("#goomba").delay(200);
    $("#goomba").animate({left:"-120px"},2000);
};

//////////////////////////////////////////////// POSITION /////////////////////////////////////
var position = function(){    
    var mario = $('#mario');
    var cube =  $('#cube');
    var marioPosition = mario.offset();
    var cubePosition  = cube.offset();
    if (marioPosition.top < cubePosition.top) {
            //console.log('ho');
        if(marioPosition.left > 255 && marioPosition < 305){
            $("#cube").toggle("explode");
            //console.log('yeah');
        }    
    };
};

//////////////////////////////////////////////// DROITE /////////////////////////////////////
var droite = function(){
    $("#mario").attr('src','img/mario.gif');
    //$("#mario").animate({right:"-=25px"});
    $("#mario").removeClass("marioinverse");
    setTimeout(function() {
        $("#mario").attr('src','img/marios.png');
    }, 500);
};

//////////////////////////////////////////////// GAUCHE /////////////////////////////////////
var gauche = function(){
    $("#mario").attr('src','img/mario.gif');
    //$("#mario").animate({left:"+=25px"});
    $("#mario").removeClass("marioinverse");
    setTimeout(function() {
        $("#mario").attr('src','img/marios.png');
    }, 500);
};
//////////////////////////////////////////////// HAUT /////////////////////////////////////
 var haut = function(){
    $("#mario").attr('src','img/mario_jump.png');
    //$("#mario").animate({bottom:"+=96px"});
    $("#mario").delay(100);
    //$("#mario").animate({bottom:"-=96px"});
    setTimeout(function() {
        $("#mario").attr('src','img/marios.png');
    }, 500);
 };


 /*var sautDiagonal = function(){
    $("#mario").attr('src','img/mario_jump.png');
    if ( $('.marioinverse').hasClass('marioinverse') ) {
        $("#mario").animate({left: '-=50', bottom: '+=102'}, 500); // saut en haut Ã  gauche
        $("#mario").animate({left: '-=50', bottom: '-=102'}, 500);
    }else{
        $("#mario").animate({left: '+=50', bottom: '+=102'}, 500); // saut en haut Ã  gauche
        $("#mario").animate({left: '+=50', bottom: '-=102'}, 500);
    }
    $("#mario").delay(100);
    $("#mario").animate({bottom:"33px"});         
*/
/*CONTROLLER */

setInterval(function(){ 
	goomba();
}, 1000);

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        $("#mario").animate({left:"-=96px"});
        $("#mario").delay(100);
        break;

        case 38: // up
        $("#mario").animate({bottom:"+=96px"});
        $("#mario").delay(100);
    	$("#mario").animate({bottom:"-=96px"});
        break;

        case 39: // right
        $("#mario").animate({left:"+=96px"});
        $("#mario").delay(100);
        break;

        case 40: // down
        $("#mario").animate({top:"+=96px"});
        $("#mario").delay(100);
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

droite();
gauche();
haut();
//sautDiagonal();
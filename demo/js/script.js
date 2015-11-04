// JavaScript Document

//track and save the postion of the mouse
$(document).mousemove( function(e) {
	mouseX = e.pageX;
	mouseY = e.pageY; } );
	
//get the stage offset relative to the page
//relMouse = relatvie position
//mouse = absolute position
$(document).mousemove( function (e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
	relMouseX = mouseX - offset.left;
	relMouseY = mouseY - offset.top;
} );

frameRate = 30; //the number of frames per second
timeInterval = Math.round(1000/framRate);
atimer = setInterval("animateFollower()", timeInterval);

function animateFollower(){
	$('#follower').css('left', relMouseX);
	$('#follower').css('top', relMouseY);
}
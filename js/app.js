currentScene="1";



$( document ).ready(function() {
	initialize();
	alternateScene(currentScene);
	intro('.btnJugar')
   
});

function intro(elemento)
{
    var buttonTimeline = anime.timeline();
	buttonTimeline
	  .add({
		targets: elemento,
		translateX: 750,
		easing: 'easeOutExpo'
	  })
	  .add({
		targets: elemento,
		translateX: 0,
		easing: 'easeOutExpo'
	  })	  .add({
		targets: elemento,
		rotate: 360,
		duration: 750,
		elasticity: 600,
		easing: 'easeOutElastic'
	  });
	
	var logoTimeline = anime.timeline();
	logoTimeline
	.add({
		  targets: '.bgGrua',
		  scale: {
			value: [0, 1],
			duration: 700,
			delay: 100,
			easing: 'easeInQuad'
		  }
		});
}

function intro2(elemento)
{
    var buttonTimeline = anime.timeline();
	buttonTimeline
	  .add({
		targets: elemento,
		translateX: 750,
		easing: 'easeOutExpo'
	  })
	  .add({
		targets: elemento,
		translateX: 0,
		easing: 'easeOutExpo'
	  })	  .add({
		targets: elemento,
		rotate: 360,
		duration: 750,
		elasticity: 600,
		easing: 'easeOutElastic'
	  });
	
	var logoTimeline = anime.timeline();
	logoTimeline
	.add({
		  targets: '.bgMarco',
		  scale: {
			value: [0, 1],
			duration: 700,
			delay: 100,
			easing: 'easeInQuad'
		  }
		});
}

function move(elemento, distancex, distancey)
{
   var domNode = anime({
	  targets: elemento,
	  translateX: distancex,
	  translateY: distancey
	});	
}

function initialize()
{
	$('[class^="btnJugar"]').click(function(){
		btnJugarClick();
	})
	
	$('.flecha-anterior').click(function(){
		backward();
	})
	
	$('.flecha-siguiente').click(function(){
		fordward();
	})
		
	$('.pausa').click(function(){
		pause();
	})
	
	$('.pasos').click(function(){
		currentScene="1";
		alternateScene(currentScene);
	})
	
	$('#seguir').click(function(){
		alternateScene(currentScene);
	})
	
	$('#reiniciar').click(function(){
		currentScene="1";
		alternateScene(currentScene);
	})
	
	$('#salir').click(function(){
		closeWindow();
	})
	
}

function pause()
{
	showScene('pausa');
}

function fordward()
{
	switch(currentScene)
	{
		case "1":
			currentScene="2";
			break;
		case "2":
			currentScene="3";
			break;
        case "3":
			currentScene="4A";
			break;
		case "4A":
			currentScene="4B";
			break;	
        case "4B":
			currentScene="4C";
			break;
        case "4C":
			currentScene="4D";
			break;
        case "4D":
			currentScene="5";
			break;
        case "5":
			currentScene="6";
			break;	
        case "6":
			currentScene="7";
			break;	
        case "7":
			currentScene="8";
			break;		
        case "8":
			currentScene="9";
			break;			
        case "9":
			currentScene="10";
			break;				
	}
	alternateScene(currentScene);
	intro2('.btnJugar')
}

function backward()
{
	switch(currentScene)
	{
		case "1":
			currentScene="1";
			break;
		case "2":
			currentScene="1";
			break;
        case "3":
			currentScene="2";
			break;
		case "4A":
			currentScene="3";
			break;	
        case "4B":
			currentScene="4A";
			break;
        case "4C":
			currentScene="4B";
			break;
        case "4D":
			currentScene="4C";
			break;
        case "5":
			currentScene="4";
			break;	
        case "6":
			currentScene="5";
			break;	
        case "7":
			currentScene="6";
			break;		
        case "8":
			currentScene="7";
			break;			
        case "9":
			currentScene="8";
			break;				
	}
	alternateScene(currentScene);
	intro2('.btnJugar')
}

function btnJugarClick()
{
	
	fordward();
}

function alternateScene(sceneNumber)
{
	$("#escena1").hide();
	$("#escena2").hide();
	$("#escena3").hide();
	$("#escena4A").hide();
	$("#escena4B").hide();
	$("#escena4C").hide();
	$("#escena4D").hide();
	$("#escena4E").hide();
	$("#escena5").hide();
	$("#escena6").hide();
	$("#escena7").hide();
	$("#escena8").hide();
	$("#escena9").hide();
	$("#escena10").hide();
	$("#pausa").hide();
	$("#escena"+sceneNumber).show();
}

function showScene(scene)
{
	$("#escena1").hide();
	$("#escena2").hide();
	$("#escena3").hide();
	$("#escena4A").hide();
	$("#escena4B").hide();
	$("#escena4C").hide();
	$("#escena4D").hide();
	$("#escena4E").hide();
	$("#escena5").hide();
	$("#escena6").hide();
	$("#escena7").hide();
	$("#escena8").hide();
	$("#escena9").hide();
	$("#pausa").hide();
	$("#escena10").hide();
	$("#"+scene).show();
}

function closeWindow(){
    var newWindow = window.open('', '_self', ''); //open the current window
    window.close(location.href);
}

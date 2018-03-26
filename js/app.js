currentScene="1";
selectedRegion='';
urlImagenRegion="";
cssRegion="";
selectedCharacter='';
$( document ).ready(function() {
	initialize();
	alternateScene(currentScene);
	intro('.btnJugar')

});

function generarNombreImagenXRegion()
{
	switch(selectedRegion)
	{
		case "Región Caribe":
			cssRegion="regionCaribe";
		     urlImagenRegion='../images/escena8/region-caribe-over.svg'
		break;
		case "Región Andina":
		    cssRegion="regionAndina";
		     urlImagenRegion='../images/escena8/region-andina-over.svg'
		break;
		case "Región Pacifica":
			cssRegion="regionPacifica";
		     urlImagenRegion='../images/escena8/region-pacifica-over'
		break;
		case "Región Amazonía":
			cssRegion="regionAmazonia";
		     urlImagenRegion='../images/escena8/region-amazonia-over.svg'
		break;
		case "Región Orinoquia":
			cssRegion="regionOrinoquia";
		     urlImagenRegion='../images/escena8/region-orinoquia-over.svg'
		break;
	}
	$("#selectedRegion").attr("src",urlImagenRegion);
	$("#selectedRegion").addClass(cssRegion);
}

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

function closeAll()
{
	$("#escena1").hide();
	$("#escena2").hide();
	$("#escena3").hide();
	$("#escena4A").hide();
	$("#escena4B").hide();
	$("#escena4C").hide();
	$("#escena4D").hide();
	$("#escena4E").hide();
	$("#escena7").hide();
	$("#escena8").hide();
	$("#escena9").hide();
	$("#escena10").hide();
	$("#regionAndina").hide();
	$("#tiempo").hide();
	$("#nivel1").hide();
	$("#region").hide();
	$("#casa").hide();
	$("#menuLateral").hide();
	$("#regionAmazonia").hide();
	$("#regionCaribe").hide();
	$("#regionOrinoquia").hide();
	$("#regionPacifica").hide();
	$("#pausa").hide();
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
	
	$('#campesino').click(function(){
		selectedCharacter="campesino";
		fordward();
	})
	
	$('#costeno').click(function(){
		selectedCharacter="costeno";
		fordward();
	})
	
	$('#desplazada').click(function(){
		selectedCharacter="desplazada";
		fordward();
	})
	
	$('.regionMapa').click(function(e){
		
		selectedRegion=$(this).attr('title');
		
		
		generarNombreImagenXRegion();
		$("#regionSelect").html(selectedRegion);
		$("#region").html(selectedRegion);
		fordward();
		$("#tiempo").show();
		$("#nivel1").show();
		$("#region").show();
		startTime();
	})

}

function startTime()
{
	
	var timer2 = "10:01";
var interval = setInterval(function() {


	  var timer = timer2.split(':');
	  //by parsing integer, I avoid all extra string processing
	  var minutes = parseInt(timer[0], 10);
	  var seconds = parseInt(timer[1], 10);
	  --seconds;
	  minutes = (seconds < 0) ? --minutes : minutes;
	  if (minutes < 0) clearInterval(interval);
	  seconds = (seconds < 0) ? 59 : seconds;
	  seconds = (seconds < 10) ? '0' + seconds : seconds;
	  //minutes = (minutes < 10) ?  minutes : minutes;
	  $('#tiempo').html(minutes + ':' + seconds);
	  timer2 = minutes + ':' + seconds;
	}, 1000);
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
		 currentScene="4E";
		 break;
	        case "4E":
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
        case "9":
			currentScene="11";
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
        case "4E":
			currentScene="4D";
			break;
        case "7":
			currentScene="4E";
			break;
        case "8":
			currentScene="7";
			break;
        case "9":
			currentScene="8";
			break;
        case "10":
			currentScene="9";
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
	$("#escena7").hide();
	$("#escena8").hide();
	$("#escena9").hide();
	$("#escena10").hide();
	$("#regionAndina").hide();
	$("#tiempo").hide();
	$("#nivel1").hide();
	$("#region").hide();
	$("#casa").hide();
	$("#menuLateral").hide();
	$("#regionAmazonia").hide();
	$("#regionCaribe").hide();
	$("#regionOrinoquia").hide();
	$("#regionPacifica").hide();
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
	$("#escena7").hide();
	$("#escena8").hide();
	$("#escena9").hide();
	$("#pausa").hide();
	$("#escena10").hide();
		$("#regionAndina").hide();
		$("#casa").hide();
			$("#tiempo").hide();
	$("#nivel1").hide();
	$("#region").hide();
	$("#menuLateral").hide();
	$("#regionAmazonia").hide();
	$("#regionCaribe").hide();
	$("#regionOrinoquia").hide();
	$("#regionPacifica").hide();
	$("#"+scene).show();
}

function closeWindow(){
    var newWindow = window.open('', '_self', ''); //open the current window
    window.close(location.href);
}

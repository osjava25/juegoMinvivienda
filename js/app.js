currentScene="7";
selectedRegion='';
urlImagenRegion="";
urlImagenPersonaje="";
cssRegion="";
selectedCharacter='';
habitacionLlena=false;
banoLleno=false;
cocinaLlena=false;
salaLlena=false;
ventanaLlena=false;
techoLleno=false;
pinturaLlena=false;
servicioLleno=false;
elementosSiempreVisibles='';
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
		     urlImagenRegion='../images/escena8/region-pacifica-over.svg'
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

function generarPersonaje()
{
	switch(selectedCharacter)
	{
		case "campesino":
			//cssRegion="regionCaribe";
		     urlImagenPersonaje='../images/escena10/seleccion-colombiano-campesino-01.svg'
		break;
		case "costeno":
		    //cssRegion="regionAndina";
		     urlImagenPersonaje='../images/escena10/seleccion-colombiano-costeno-01.svg'
		break;
		case "desplazada":
			//cssRegion="regionPacifica";
		     urlImagenPersonaje='../images/escena10/seleccion-colombiano-desplazada-01.svg'
		break;
		
	}
	$("#imgPersonaje").attr("src",urlImagenPersonaje);
	$("#nombrePersonaje").html(selectedCharacter);
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
	$('.btnJugar').click(function(){
		btnJugarClick();
	})
	
	$('.btnJugar2').click(function(){
		showScene('casa,menuLateral,tiempo,nivel1,region,'+cssRegion);
		
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
		generarPersonaje();
		fordward();
	})
	
	$('#costeno').click(function(){
		selectedCharacter="costeno";
		generarPersonaje();
		fordward();
	})
	
	$('#desplazada').click(function(){
		selectedCharacter="desplazada";
		generarPersonaje();
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
	
	initializeDragNDrop();
	initializeRoofControls();
    initializePaintControls();
	initializeWindowControls();
	initializeServiceControls();
}

function initializePaintControls()
{
	$('.btnColorVerde').click(function(){
		alert('cambiando color verde');
		pinturaLlena=true;
	});
	$('.btnColorAzul').click(function(){
		alert('cambiando color azul');
		pinturaLlena=true;
	});
	$('.btnColorRosado').click(function(){
		alert('cambiando color rosado');
		pinturaLlena=true;
	});
}

function initializeWindowControls()
{
	$('.btnVentana1').click(function(){
		alert('colocando ventana 1');
		ventanaLlena=true;
	});
	$('.btnVentana2').click(function(){
		alert('colocando ventana 2');
		ventanaLlena=true;
	});
	$('.btnVentana3').click(function(){
		alert('colocando ventana 3');
		ventanaLlena=true;
	});
}

function initializeRoofControls()
{
	$('.btnTecho1').click(function(){
		techoLleno=true;
		$('#techo').addClass('techo1');
		$('#techo').show();
	});
	$('.btnTecho2').click(function(){
		$('#techo').addClass('techo2');
		$('#techo').show();
		techoLleno=true;
	});
	$('.btnTecho3').click(function(){
		$('#techo').addClass('techo3');
		$('#techo').show();
		techoLleno=true;
	});
}

function initializeServiceControls()
{
	$('.btnServicio1').click(function(){
		alert('colocando servicio de luz');
		servicioLleno=true;
	});
	$('.btnServicio2').click(function(){
		alert('colocando servicio de agua');
		servicioLleno=true;
	});
	$('.btnServicio3').click(function(){
		alert('colocando servicio de alcantarillado');
		servicioLleno=true;
	});
}

function initializeDragNDrop()
{
	$( ".btnCocina" ).draggable({ revert: "invalid" });
	$( ".btnHabitacion" ).draggable({ revert: "valid" });
	$( ".btnBano" ).draggable({ revert: "valid" });
	$( ".btnSala" ).draggable({ revert: "valid" });


	$("#habitacion1").droppable({ 
	   drop: function( event, ui ) { 
		  var selectedElement=$(ui.draggable).attr("title");
		  console.log("dropped:"+selectedElement);
		  if(selectedElement=='habitacion')
		  {
			  $("#habitacion1").show();
			  mostrarMensajeDnD('habitacion','correcto');
		  }
		  else
		  {
			  mostrarMensajeDnD('habitacion','incorrecto');
		  }

	   }, 
	   out: function( event, ui ) { 
		 
		  console.log("out:"+$(ui.draggable).attr("title"))

	   } 
	});
	$("#habitacion2").droppable({ 
	   drop: function( event, ui ) { 
		  var selectedElement=$(ui.draggable).attr("title");
		  console.log("dropped:"+selectedElement);
		  if(selectedElement=='bano')
		  {
			  $("#habitacion2").show();
			  mostrarMensajeDnD('bano','correcto');
		  }
		  else
		  {
			  mostrarMensajeDnD('bano','incorrecto');
		  }

	   }, 
	   out: function( event, ui ) { 
		 
		  console.log("out:"+$(ui.draggable).attr("title"))

	   } 
	});
	$("#habitacion3").droppable({ 
	   drop: function( event, ui ) { 
		  var selectedElement=$(ui.draggable).attr("title");
		  console.log("dropped:"+selectedElement);
		  if(selectedElement=='sala')
		  {
			  $("#habitacion3").show();
			  mostrarMensajeDnD('sala','correcto');
		  }
		  else
		  {
			  mostrarMensajeDnD('sala','incorrecto');
		  }

	   }, 
	   out: function( event, ui ) { 
		 
		  console.log("out:"+$(ui.draggable).attr("title"))

	   } 
	});
	$("#habitacion4").droppable({ 
	   drop: function( event, ui ) { 
		  var selectedElement=$(ui.draggable).attr("title");
		  console.log("dropped:"+selectedElement);
		  if(selectedElement=='cocina')
		  {
			  $("#habitacion4").show();
			  mostrarMensajeDnD('cocina','correcto');
		  }
		  else
		  {
			  mostrarMensajeDnD('cocina','incorrecto');
		  }

	   }, 
	   out: function( event, ui ) { 
		 
		  console.log("out:"+$(ui.draggable).attr("title"))

	   } 
	});
	
}

function mostrarMensajeDnD(elemento, tipo)
{
	if(tipo=='incorrecto')
	{
		alert('error colocando '+elemento)
	}
	else
	{
		alert(elemento + ' ubicado correctamente')
	}
}

function validarFinJuego()
{
	if(habitacionLlena==true && banoLleno==true && cocinaLlena==true && salaLlena==true && ventanaLlena==true && techoLleno==true && pinturaLlena==true && alcantarilladoLleno==true)
	{
		alert('Juego terminado.')
		//showScene(??);
	}
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
			alternateScene(currentScene);
			break;
		case "2":
			currentScene="3";
			alternateScene(currentScene);
			break;
        case "3":
			currentScene="4A";
			alternateScene(currentScene);
			break;
		case "4A":
			currentScene="4B";
			alternateScene(currentScene);
			break;
        case "4B":
			currentScene="4C";
			alternateScene(currentScene);
			break;
        case "4C":
			currentScene="4D";
			alternateScene(currentScene);
			break;
        case "4D":
		 currentScene="4E";
		 alternateScene(currentScene);
		 break;
		 case "4E":
		 currentScene="4F";
		 alternateScene(currentScene);
		 break;
	    case "4F":
			currentScene="7";
			alternateScene(currentScene);
			break;
        case "7":
			currentScene="8";
			alternateScene(currentScene);
			$("#tiempo").show();
			$("#nivel1").show();
			$("#region").show();
			break;
        case "8":
			currentScene="9";
			alternateScene(currentScene);
			$("#tiempo").show();
			$("#nivel1").show();
			$("#region").show();
			break;
        case "9":
			currentScene="10";
			alternateScene(currentScene);
			$("#tiempo").show();
			$("#nivel1").show();
			$("#region").show();
			
			break;
        case "10":
			currentScene="11";
			alternateScene(currentScene);
			$("#tiempo").show();
			$("#nivel1").show();
			$("#region").show();
			break;
	}
	
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
        case "4F":
			currentScene="4E";
			break;
		case "7":
			currentScene="4F";
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
	$("#escena4F").hide();
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

function showScene(scenes)
{
	$("#escena1").hide();
	$("#escena2").hide();
	$("#escena3").hide();
	$("#escena4A").hide();
	$("#escena4B").hide();
	$("#escena4C").hide();
	$("#escena4D").hide();
	$("#escena4E").hide();
	$("#escena4F").hide();
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
	
	var scenes_ = scenes.split(',');
	$.each( scenes_, function( index, value ) {
		value=value.trim();
		$("#"+value).show();
	});
	
}

function closeWindow(){
    var newWindow = window.open('', '_self', ''); //open the current window
    window.close(location.href);
}

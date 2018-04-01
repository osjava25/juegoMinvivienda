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
luzLlena=false;
aguaLlena=false;
elementosSiempreVisibles='';
timerX = new InvervalTimer(function () { },1000);
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
	
	$('.btnJugar5').click(function(){
		btnJugarClick();
	})
	
	$('.btnFinal2').click(function(){
		printDiv();
	})
	
	$('.btnFinal1').click(function(){
		alert('fin')
	})
	
	$('.btnJugar2').click(function(){
		showScene('casa,menuLateral,tiempo,nivel1,region,'+cssRegion);
		elementosSiempreVisibles='casa,menuLateral,tiempo,nivel1,region,'+cssRegion;
		
	})
	
	$('.btnJugar3').click(function(){
		showScene('casa,menuLateral,tiempo,nivel1,region,'+cssRegion);
		elementosSiempreVisibles='casa,menuLateral,tiempo,nivel1,region,'+cssRegion;
	})
	
	$('.btnJugar4').click(function(){
		currentScene="12";
		showScene('escena12');
		
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
		timerX.resume();         
		if(elementosSiempreVisibles.length>0)
		{
			showScene(elementosSiempreVisibles);
		}
		else
		{
			alternateScene(currentScene);
		}
		
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
		$('#habitacion1').removeClass("habitacionCasa1").removeClass("habitacionCasa1Azul").removeClass("habitacionCasa1Verde").removeClass("habitacionCasa1Rosado").addClass('habitacionCasa1Verde');
		$('#habitacion2').removeClass("habitacionCasa2").removeClass("habitacionCasa2Azul").removeClass("habitacionCasa2Verde").removeClass("habitacionCasa2Rosado").addClass('habitacionCasa2Verde');
		$('#habitacion3').removeClass("habitacionCasa3").removeClass("habitacionCasa3Azul").removeClass("habitacionCasa3Verde").removeClass("habitacionCasa3Rosado").addClass('habitacionCasa3Verde');
		$('#habitacion4').removeClass("habitacionCasa4").removeClass("habitacionCasa4Azul").removeClass("habitacionCasa4Verde").removeClass("habitacionCasa4Rosado").addClass('habitacionCasa4Verde');
		pinturaLlena=true;
		showScene('mensajeColor');
		validarFinJuego();
		
	});
	$('.btnColorAzul').click(function(){
		$('#habitacion1').removeClass("habitacionCasa1").removeClass("habitacionCasa1Azul").removeClass("habitacionCasa1Verde").removeClass("habitacionCasa1Rosado").addClass('habitacionCasa1Azul');
		$('#habitacion2').removeClass("habitacionCasa2").removeClass("habitacionCasa2Azul").removeClass("habitacionCasa2Verde").removeClass("habitacionCasa2Rosado").addClass('habitacionCasa2Azul');
		$('#habitacion3').removeClass("habitacionCasa3").removeClass("habitacionCasa3Azul").removeClass("habitacionCasa3Verde").removeClass("habitacionCasa3Rosado").addClass('habitacionCasa3Azul');
		$('#habitacion4').removeClass("habitacionCasa4").removeClass("habitacionCasa4Azul").removeClass("habitacionCasa4Verde").removeClass("habitacionCasa4Rosado").addClass('habitacionCasa4Azul');
		pinturaLlena=true;
		showScene('mensajeColor');
		validarFinJuego();
	});
	$('.btnColorRosado').click(function(){
		$('#habitacion1').removeClass("habitacionCasa1").removeClass("habitacionCasa1Azul").removeClass("habitacionCasa1Verde").removeClass("habitacionCasa1Rosado").addClass('habitacionCasa1Rosado');
		$('#habitacion2').removeClass("habitacionCasa2").removeClass("habitacionCasa2Azul").removeClass("habitacionCasa2Verde").removeClass("habitacionCasa2Rosado").addClass('habitacionCasa2Rosado');
		$('#habitacion3').removeClass("habitacionCasa3").removeClass("habitacionCasa3Azul").removeClass("habitacionCasa3Verde").removeClass("habitacionCasa3Rosado").addClass('habitacionCasa3Rosado');
		$('#habitacion4').removeClass("habitacionCasa4").removeClass("habitacionCasa4Azul").removeClass("habitacionCasa4Verde").removeClass("habitacionCasa4Rosado").addClass('habitacionCasa4Rosado');
		pinturaLlena=true;
		showScene('mensajeColor');
		validarFinJuego();
	});
}

function initializeWindowControls()
{
	$('.btnVentana1').click(function(){
		$('#ventana1').removeClass("habitacionVentana1Ventana1").removeClass("habitacionVentana1Ventana2").removeClass("habitacionVentana1Ventana3").addClass('habitacionVentana1Ventana1');
		$('#ventana2').removeClass("habitacionVentana2Ventana1").removeClass("habitacionVentana2Ventana2").removeClass("habitacionVentana2Ventana3").addClass('habitacionVentana2Ventana1');
		$('#ventana3').removeClass("habitacionVentana3Ventana1").removeClass("habitacionVentana3Ventana2").removeClass("habitacionVentana3Ventana3").addClass('habitacionVentana3Ventana1');
		$('#ventana4').removeClass("habitacionVentana4Ventana1").removeClass("habitacionVentana4Ventana2").removeClass("habitacionVentana4Ventana3").addClass('habitacionVentana4Ventana1');
		$('#ventana1').show();
		$('#ventana2').show();
		$('#ventana3').show();
		$('#ventana4').show();
		ventanaLlena=true;
		showScene('mensajeVentanas');
		validarFinJuego();
	});
	$('.btnVentana2').click(function(){
		$('#ventana1').removeClass("habitacionVentana1Ventana1").removeClass("habitacionVentana1Ventana2").removeClass("habitacionVentana1Ventana3").addClass('habitacionVentana1Ventana2');
		$('#ventana2').removeClass("habitacionVentana2Ventana1").removeClass("habitacionVentana2Ventana2").removeClass("habitacionVentana2Ventana3").addClass('habitacionVentana2Ventana2');
		$('#ventana3').removeClass("habitacionVentana3Ventana1").removeClass("habitacionVentana3Ventana2").removeClass("habitacionVentana3Ventana3").addClass('habitacionVentana3Ventana2');
		$('#ventana4').removeClass("habitacionVentana4Ventana1").removeClass("habitacionVentana4Ventana2").removeClass("habitacionVentana4Ventana3").addClass('habitacionVentana4Ventana2');
		$('#ventana1').show();
		$('#ventana2').show();
		$('#ventana3').show();
		$('#ventana4').show();
		ventanaLlena=true;
		showScene('mensajeVentanas');
		validarFinJuego();
	});
	$('.btnVentana3').click(function(){
		$('#ventana1').removeClass("habitacionVentana1Ventana1").removeClass("habitacionVentana1Ventana2").removeClass("habitacionVentana1Ventana3").addClass('habitacionVentana1Ventana3');
		$('#ventana2').removeClass("habitacionVentana2Ventana1").removeClass("habitacionVentana2Ventana2").removeClass("habitacionVentana2Ventana3").addClass('habitacionVentana2Ventana3');
		$('#ventana3').removeClass("habitacionVentana3Ventana1").removeClass("habitacionVentana3Ventana2").removeClass("habitacionVentana3Ventana3").addClass('habitacionVentana3Ventana3');
		$('#ventana4').removeClass("habitacionVentana4Ventana1").removeClass("habitacionVentana4Ventana2").removeClass("habitacionVentana4Ventana3").addClass('habitacionVentana4Ventana3');
		$('#ventana1').show();
		$('#ventana2').show();
		$('#ventana3').show();
		$('#ventana4').show();
		ventanaLlena=true;
		showScene('mensajeVentanas');
		validarFinJuego();
	});
}

function initializeRoofControls()
{
	$('.btnTecho1').click(function(){
		techoLleno=true;
		$('#techo').removeClass("techo1").removeClass("techo2").removeClass("techo3").addClass('techo1');
		$('#techo').show();
		showScene('mensajeTecho');
		validarFinJuego();
	});
	$('.btnTecho2').click(function(){
		$('#techo').removeClass("techo1").removeClass("techo2").removeClass("techo3").addClass('techo2');
		$('#techo').show();
		techoLleno=true;
		showScene('mensajeTecho');
		validarFinJuego();
	});
	$('.btnTecho3').click(function(){
		$('#techo').removeClass("techo1").removeClass("techo2").removeClass("techo3").addClass('techo3');
		$('#techo').show();
		techoLleno=true;
		showScene('mensajeTecho');
		validarFinJuego();
	});
}

function initializeServiceControls()
{
	$('.btnServicio1').click(function(){
		
		$('#luz1').show();
		$('#luz2').show();
		$('#luz3').show();
		$('#luz4').show();
		$('#tv1').show();
		$('#tv2').show();
		luzLlena =true;
		showScene('mensajeLuz');
		validarFinJuego();
	});
	$('.btnServicio2').click(function(){
		$('#agua1').show();
		$('#agua2').show();
		$('#agua3').show();
		$('#agua4').show();
		
		aguaLlena =true;
		showScene('mensajeAgua');
		validarFinJuego();
	});
	$('.btnServicio3').click(function(){
		$('#acueducto').show();
		showScene('mensajeAlcantarillado');
		servicioLleno=true;
		validarFinJuego();
	});
}

function initializeDragNDrop()
{
	$( ".btnCocina" ).draggable({   cursor: 'move',revert: "invalid" });
	$( ".btnHabitacion" ).draggable({   cursor: 'move',revert: "valid" });
	$( ".btnBano" ).draggable({   cursor: 'move',revert: "valid" });
	$( ".btnSala" ).draggable({   cursor: 'move',revert: "valid" });


	$("#habitacion1").droppable({ 
	   drop: function( event, ui ) { 
		  var selectedElement=$(ui.draggable).attr("title");
		  console.log("dropped:"+selectedElement);
		  if(selectedElement=='habitacion')
		  {
			  habitacionLlena=true;
			  $("#habitacion1").show();
			  mostrarMensajeDnD('Habitacion','correcto');
			  $(".btnHabitacion").hide();
		  }
		  else
		  {
			  mostrarMensajeDnD('Habitacion','incorrecto');
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
			  banoLleno=true;
			  $("#habitacion2").show();
			  mostrarMensajeDnD('Bano','correcto');
			  $(".btnBano").hide();
		  }
		  else
		  {
			  mostrarMensajeDnD('Bano','incorrecto');
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
			  salaLlena=true;
			  mostrarMensajeDnD('Sala','correcto');
			  $(".btnSala").hide();
		  }
		  else
		  {
			  mostrarMensajeDnD('Sala','incorrecto');
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
			  cocinaLlena=true;
			  mostrarMensajeDnD('Cocina','correcto');
			  $(".btnCocina").hide();
		  }
		  else
		  {
			  mostrarMensajeDnD('Cocina','incorrecto');
		  }

	   }, 
	   out: function( event, ui ) { 
		 
		  console.log("out:"+$(ui.draggable).attr("title"))

	   } 
	});
	
}

function mostrarMensajeDnD(elemento, tipo)
{
	var scene_ = 'mensaje'+elemento
	if(tipo=='incorrecto')
	{
		showScene('mensajeUbicacion');
	}
	else
	{
		showScene(scene_);
		//alert(elemento + ' ubicado correctamente')
	}
}

function validarFinJuego()
{
	if(habitacionLlena==true && banoLleno==true && cocinaLlena==true && salaLlena==true && ventanaLlena==true && techoLleno==true && pinturaLlena==true && luzLlena==true&& aguaLlena==true&&servicioLleno==true)
	{
		//alert('Juego terminado.')
		timerX.pause();
		showScene('mensajeFelicitacion');
	}
}

function startTime()
{
	
	var timer2 = "10:01";
    timerX = new InvervalTimer(function () {


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
	  if(minutes==0&&seconds==0)
	  {
		  finTiempoJuego();
	  }
	  timer2 = minutes + ':' + seconds;
	}, 1000);
}

function finTiempoJuego()
{
	alert('fin del tiempo');
}

function pause()
{
	showScene('pausa');
	timerX.pause();
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
		case "11":
			currentScene="12";
			alternateScene(currentScene);
			$("#tiempo").show();
			$("#nivel1").show();
			$("#region").show();
			break;
		case "12":
			currentScene="13";
			alternateScene(currentScene);
			$("#tiempo").hide();
			$("#nivel1").show();
			$("#region").show();
			break;
		case "13":
			currentScene="14";
			alternateScene(currentScene);
			$("#tiempo").hide();
			$("#nivel1").show();
			$("#region").show();
			break;
		case "14":
			scene_="diploma";
			showScene(scene_);
			$("#tiempo").hide();
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

function printDiv() 
{

  var divToPrint=document.getElementById('casa');

  var newWin=window.open('','Print-Window');

  newWin.document.open();

  newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

  newWin.document.close();

  setTimeout(function(){newWin.close();},10);

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
	$("#escena11").hide();
	$("#escena12").hide();
	$("#escena13").hide();
	$("#escena14").hide();
	$("#diploma").hide();
	
	$("#mensajeHabitacion").hide();
	$("#mensajeBano").hide();
	$("#mensajeSala").hide();
	$("#mensajeCocina").hide();
	$("#mensajeColor").hide();
	$("#mensajeVentanas").hide();
	$("#mensajeTecho").hide();
	$("#mensajeLuz").hide();
	$("#mensajeAgua").hide();
	$("#mensajeAlcantarillado").hide();
	$("#mensajeError").hide();
	$("#mensajeUbicacion").hide();
	$("#mensajeFelicitacion").hide();
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
	$("#escena11").hide();
	$("#escena12").hide();
	$("#escena13").hide();
	$("#escena14").hide();
	$("#diploma").hide();
	
	$("#mensajeHabitacion").hide();
	$("#mensajeBano").hide();
	$("#mensajeSala").hide();
	$("#mensajeCocina").hide();
	$("#mensajeColor").hide();
	$("#mensajeVentanas").hide();
	$("#mensajeTecho").hide();
	$("#mensajeLuz").hide();
	$("#mensajeAgua").hide();
	$("#mensajeAlcantarillado").hide();
	$("#mensajeError").hide();
	$("#mensajeUbicacion").hide();
	$("#mensajeFelicitacion").hide();
				
	
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

function InvervalTimer(callback, interval) {
	var timerId, startTime, remaining = 0;
	var state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed

	this.pause = function () {
		if (state != 1) return;

		remaining = interval - (new Date() - startTime);
		window.clearInterval(timerId);
		state = 2;
	};

	this.resume = function () {
		if (state != 2) return;

		state = 3;
		window.setTimeout(this.timeoutCallback, remaining);
	};

	this.timeoutCallback = function () {
		if (state != 3) return;

		callback();

		startTime = new Date();
		timerId = window.setInterval(callback, interval);
		state = 1;
	};

	startTime = new Date();
	timerId = window.setInterval(callback, interval);
	state = 1;
}

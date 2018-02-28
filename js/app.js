

$( document ).ready(function() {
    var reverseAnim = anime({
  targets: '#btnJugarPaso1',
  translateX: 250,
  duration: 2000,
  delay: function(el, i, l) { return i * 200; },
  loop: true
});
	reverseAnim.play();
  reverseAnim.reverse();	  

});
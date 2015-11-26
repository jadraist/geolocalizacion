$(document).ready(function(){

	$('button').click(function(){

		if(navigator.geoLocation){
			navigator.geoLocation.getCurrentPosition(mostrarDatos);
		}else{
			alert('no tenemos tus datos vuelve pronto')
		}
	});
	//obtener longitud y latitud
	function mostrarDatos(position){
		var latLang = position.coords.latitude + ',' + position.coords.longitude;
		var marker = '&markers=color:red|label:S|'+ latLang;
		var imagen = "https://maps.googleapis.com/maps/api/staticmap?size=400x400&zoom=10&center=";
		var nuevaImagen = imagen + latLang + marker;
		console.log(nuevaImagen);
		$('img').attr('src' + nuevaImagen);
	}
});


/*
function geoLocate(){
	if(navigator.geoLocation){
		navigator.geoLocation.getCuurrentPosition(mostrarDatos);
	}else{
		alert('no tenemos tus datos vuelve pronto')
	}
} */

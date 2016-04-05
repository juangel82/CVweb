//llamar desde los botones

function hola(texto){
alert('hola'+texto);
var diver= document.getElementById("principal");
diver.innerHTML=muestraContenido;
}



function descargaArchivo(nombre) {
  // Obtener la instancia del objeto XMLHttpRequest
  if(window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
  }
 
  // Preparar la funcion de respuesta
  peticion_http.onreadystatechange = muestraContenido;
 
  // Realizar peticion HTTP
  var direccion ='http://localhost/'+nombre
  peticion_http.open('GET', direccion, true);
  peticion_http.send(null);
 
  function muestraContenido() {
    if(peticion_http.readyState == 4) {
      if(peticion_http.status == 200) {
        alert(peticion_http.responseText);
		return peticion_http.responseText;
      }
    }
  }
}





/*ahora con objeto

function divP(){
	this.pantalla =1;
	alert("creado");
	this.cambiar = function (texto){
		var diver= document.getElementById("principal");
		alert ('estaba en pantalla'+ this.pantalla);
        diver.innerHTML=texto;
	}
}
*/

/*
var divP = function (){
	this.pantalla = 1;
	this.cambiar = function (texto){
		var diver= document.getElementById("principal");
		alert ('estaba en pantalla'+ this.pantalla);
        diver.innerHTML=texto;
	}
}*/
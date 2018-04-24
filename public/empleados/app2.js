(function () {
    'use strict';
/*global angular*/
var app = 	angular.module('myApp',['ngRoute']);

app.constant("idioma","");
app.constant('area',function(radio){
	return (3.1416)*radio*radio;	
});

app.value("apiToken","FDfdcsdfddgdfgdfgddfdgsgghj");


app.value("apiToken","http://192.168.3.2:3000"); //inventarios
app.value("apiToken","http://192.168.3.163:5050");//compra
app.value("apiToken","urlEmpleados=http://192.168.3.184:8000");// empleados


app.config(["$routeProvider", function(rutas){
	rutas

	.when("/tres",{
		templateUrl:"./views/vista3.html",
		controller:"Controlador3",
		controllerAs:"ctl"
	})
	.when("/empleado/:id",{
		templateUrl:"./views/empleado.html",
		controller:"empleadoController",
		controllerAs:"ctl"
	})


	
	
}]);


})();


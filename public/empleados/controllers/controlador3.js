(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};

    var nombreControlador3="Controlador3";
app.controller(nombreControlador3,
	['$scope','$http','idioma',
	function($s,$http, apiUrl){
		var ctl=this;
		ctl.empleados=[];
		
		ctl.init=function(){
			var request2={
				method:'GET',
				url:apiUrl+'/Api/empleados'

			};
			var request1={
				method:'POST',
				url:apiUrl+'/Api/empleados/',
				data:{"c.nombre":"",
				"c.apellido":"",
				"c.edad":"",
				"c.telefono":"",
				"c.estadoCivil":"",
				"c.ccp":"",
				"c.sexo":"",
				"c.nss":"",
				"c.direccion":"",
				"c.puesto":"",
				"c.calificacion":""
						}
			};

			//$http(request1).then(function(data1){
					$http(request2).then(function(data){
						ctl.empleados=data.data;
					},function(error){
						
					});
			//},function(error){
				
			//});
		}
					ctl.selectEmpleado = function(c){
					console.log(ctl.empleados.indexOf(c));
					ctl.empleados.splice(ctl.empleados.indexOf(c), 1);
					ctl.info = " Deleted Successfully!";
				};
		ctl.init();
	}
]);


    
})();
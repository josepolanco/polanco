(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
var nombreControlador="empleadoController";
app.controller(nombreControlador,
	['$routeParams','$location','formulaService',
	function(rp,l,service){
		var ctl=this;
		ctl.empleados={};
		ctl.empleado={};
		
		ctl.guardar=function(frm){
		    
	        service.insertOrUpdate(ctl.empleado._id|| "",ctl.empleado)
	        .then(function(data){
					ctl.empleados=data.data;
					l.path('/tres');
				},function(error){
					alert("Error en el servidor");
				});
				
		};
		
		ctl.init=function(){
		    //var _id=parseInt(rp.id);
		    if(rp && rp.id && rp.id.length>0){
		        service.getById(rp.id).then(function(data){
						ctl.empleado=data.data[0];
					},function(error){
						alert("Error en el servidor");
					});
		    }
		}
		
		ctl.init();
	}]);
	
})();
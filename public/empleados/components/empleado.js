(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
app.directive("ngEmpleado",[
    function(){
        return{
            template:"{{empleado.nombre}}, {{empleado.apellido}}, {{empleado.edad}}, {{empleado.telefono}},{{empleado.estadoCivil}},{{empleado.nss}},{{empleado.direccion}},{{empleado.puesto}},{{empleado.calificacion}}<br/>"
        }
    }
    ]);
    
})();

	
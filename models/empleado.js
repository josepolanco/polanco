var mongoose = require('mongoose'), //cargamos la biblioteca
 Schema = mongoose.Schema; 

var empleado=new Schema({  //Creamos nuestra esquema
	nombre:String,
	apellido:String,
	edad:String,
	telefono:String,
	estadoCivil:String,
	ccp:String,
	sexo:String,
	nss:String,
	direccion:String,
	puesto:String,
	calificacion:String
	
	
	//usuario:{nombre:String}
	//calificaciones=[{usuario:String, evaluacion:Number}]

});

/*
tarea.validarNombre=function(){  //Valida que la tarea tenga por lo menos 3 caracteres
	
}

tarea.methods.validarNombre=function(){  

}s
*/

var empleadoModel=mongoose.model("empleado",empleado);  //Exportamos nuestra esquema

module.exports=empleadoModel;
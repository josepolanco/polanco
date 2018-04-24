
var express = require('express');  //Definicion de variables para cargarlas a express --
var app = express(); 
var server = app.listen(1000);

var path= require("path");

var mongoose = require('mongoose'); //Este es importante pa cargar base de datos mongodb
var bodyparser = require('body-parser'); //Cargamos bodyParser

//var Cliente=require("./models/tarea"); //Cargamos nuestro modelos que definimos

var Empleado=require("./models/empleado");



mongoose.connect("mongodb://localhost:27017/empleados");


app.get("/", function(req,res){
	res.end("Hola Mundo");

});

app.use(bodyparser.json());


//app.listen(8080, function () {
  //console.log('El servidor esta corriendo en el puerto 8080!');
//});




var publicFolder=path.resolve(__dirname, "public");
app.use(express.static(publicFolder));


var publicFolder=path.resolve(__dirname, "public/app");
app.use(express.static(publicFolder));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine","ejs");
app.get('/hola/:quien', function (req, resp) {
	resp.render("hola",{message:req.params.quien});
});





//Consultar todos productos
app.get('/Api/empleados/', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		//var t=new Cliente(req.body);
		Empleado.find(function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});




//Consultar por id
app.get('/Api/empleados/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		console.log(req.params.id);
		//var t=new Cliente(req.body);
		Empleado.find(
			{_id:req.params.id},
			function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});

//T A R E A  :  Implementar hasta el actualizar tarea
app.post('/Api/empleados/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		if(req.params.id.length>2){
			Empleado.findOne({_id:req.params.id},function(err,result){
				//console.log(result);
				if(err){
					resp.send({save:"No se pudo realizar la consulta"});
				}
				result.nombre=req.body.nombre;
				result.apellido=req.body.apellido;
				result.edad=req.body.edad;
				result.telefono=req.body.telefono;
				result.estadoCivil=req.body.estadoCivil;
				result.ccp=req.body.ccp;
				result.sexo=req.body.sexo;
				result.nss=req.body.nss;
				result.direccion=req.body.direccion;
				result.puesto=req.body.puesto;
				result.calificacion=req.body.calificacion;
				
				result.save();
				resp.json(result);
			}
			);
		}else{
			var c=new Empleado(req.body);
			c.save();
			resp.send({saved:"Ok"});
		}
		
		
});





var io = require('socket.io')(server);
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});



		
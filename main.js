function edificio(calle,numero,codigo,plantas){
    
    // Propiedades
	this.calle = calle;
	this.numero	= numero;
	this.codigo	= codigo;
	this.plantas= plantas;

	// Métodos
	this.agregarPlantasYPuertas = function (plantas, puertas){
        this.plantas	= this.plantas + plantas;
		this.puertas = this.puertas + puertas;
		this.datos = Array();
        
        document.write('<br>+ agregarPlantasYPuertas('+ plantas +','+ puertas +')');
        
        // blucle plantas
        var num = 0;
        for(var i = 1; i<=plantas; i++){
            // bucle puertas por planta
            for(var p = 1; p<=puertas; p++){
                document.write('<br>' + num + '- Creo datos: nombre: - planta: ' + i + ' - puerta: '+p);
				num ++;
            }
		}
        
        document.write("<br>Tamaño Array: "+this.datos.lenght);
    };
    
    this.modificarNumero = function (numero){
        this.numero	= numero;
    };
    
    this.modificarCalle = function (calle){
		this.calle	= calle;
	};

	this.modificarCodigoPostal = function (codigo){
		this.codigo	= codigo;
	};
    
    this.mostrarCalle = this.calle;
	this.mostrarNumero = this.numero;
	this.mostrarCodigoPostal = this.codigo;
    
    this.agregarPropietario = function (nombre,planta,puerta){
        
        this.datos = [{
            "nombre":nombre,
            "planta":planta,
			"puerta":puerta
        }];
        
        document.write('<br>' + nombre + ' es ahora el propietario de la puerta ' +  puerta + ' de la planta ' + planta);
        
        
    };
    
    this.mostrarPlantas = function (){
        document.write('<br> <h3>Listado de propietarios del edificio '+ this.mostrarCalle +" número " + this.mostrarNumero +'</h3>');
        
        // Recorrerá el edificio e imprimirá todos los propietarios de cada puerta
        for(var i = 0; i<this.datos.length; i++){
            document.write('<br> El Propietario del piso ' +  this.datos[i]['puerta'] + ' de la planta ' + this.datos[i]['planta'] + ' es : '+ this.datos[i]['nombre']);
        }
    };
    
}

//crear el objeto edifio A
var edificioA = new edificio('Avd. El cid','31','46860','0');

//Mostrar información del edificio
document.write('<h1>Gestión de edificios</h1>');
document.write('<h2>Añadimos un nuevo edificio</h2>');
document.write('<h3>Edificio</h3>');
document.write('Calle: ' + edificioA.mostrarCalle);
document.write('<br>');
document.write('Nº: ' + edificioA.mostrarNumero);
document.write('<br>');
document.write('Código Postal: ' + edificioA.mostrarCodigoPostal);
document.write('<h3>Añadimos 3 propietarios</h3>');
edificioA.agregarPropietario('José perez','1','1');
edificioA.agregarPropietario('Carmen López','2','1');
edificioA.agregarPropietario('Manuel Martín','3','2');
edificioA.mostrarPlantas();

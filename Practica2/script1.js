const persona = {
    nombre: 'Montse',
    edad: 20,
    direccion: {
        ciudad: "Qro",
        pais: "Mexico"
    }
    };

    //Destrucción
   const { nombre, edad, direccion} = persona;
//Imprimir
console.log(nombre,edad,direccion);
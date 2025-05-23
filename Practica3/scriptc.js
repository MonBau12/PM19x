function simularPeticionAPI(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        } , 5000);
    });
}


async function obtenerDatos (){
 console.log("Esperando datos...");
  const resultado = await obtenerDatos();
  console.log(resultado);
}

function mostrarDatos() {
  console.log("Mostrando datos Montse se enfermo hoy");
}

mostrarDatos(); 




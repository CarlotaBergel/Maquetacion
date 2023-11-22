var arrdatos = [];

function recogerInformacion(){
    let nombre = document.getElementById("nombre").value.toLowerCase();
    let origen = document.getElementById("origen").value.toLowerCase();
    let destino = document.getElementById("destino").value.toLowerCase();
    let numeroPersonas = document.getElementById("numero_personas").value.toLowerCase();

    let cliente = {
        nombre: nombre,
        origen: origen,
        destino: destino,
        numero_Personas: numeroPersonas,
    }

    arrdatos.push(cliente);
    console.log(arrdatos);
}

function filtro(){
    console.log("entra en la funcion")
    let mostrar = arrdatos.filter(dato => dato.destino == "canarias" || dato.destino == "mallorca" || dato.destino == "galicia");
    let frase = "";
    for (let datos of mostrar){
   
        frase += `<p>Cliente: ${datos.nombre}</p> <p> Destino ${datos.destino}</p>`;
    }
    console.log(frase);
    document.getElementById("visual").innerHTML = frase;
}
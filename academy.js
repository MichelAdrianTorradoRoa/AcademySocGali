var cursos={
    curso1:{
        Nombre:"Arte",
        Descripcion:"Se les enseñara sobre como utilizar los diferentes estilos de dibujo y manualidades a mano",
        Contenido:"Iniciacion al dibujo, Tecnicas del dibujo y Manualidades apartir del reciclaje"
    },
    curso2:{
        Nombre:"Musica",
        Descripcion:"En este curso, podras profundizar sobre la teoria musical y se partira la enseñanza de los instrumentos de aire, de cuerda, de percusion y la voz",
        Contenido:"Principios de la Teoria Musical, Reconocimiento de las partes del instrumento escogido por el estudiante y Las Buenas Practicas y Cuidado del Instrumento"
    },
    curso3:{
        Nombre:"Programacion",
        Descripcion:"Apartir de este curso, se podra crear aplicativos funcionales de un fullstack en los lenguajes de programacion mas solicitados por el mercado",
        Contenido:"Los comienzos de la programacion y practica de la logica de programacion(Pseint),Manejo de Python y Produccion y creacion de una pagina web con HTML y CSS"
    }
}

var cursosArray=["Arte","Musica", "Programacion"]

const{curso1:aliascurso1, curso2:aliascurso2, curso3:aliascurso3} = cursos;
console.log(aliascurso1)
console.log(aliascurso2)
console.log(aliascurso3)


const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jsonData)
  };







async function buscarDatosSegunCondicion(tipo, ) {
    const data = await fetchData(endpoint);
    if (data) {
        let filteredData;
        if (condition === 'mayor') {
            filteredData = data.filter(item => item[field] > value);
        } else if (condition === 'menor') {
            filteredData = data.filter(item => item[field] < value);
        }
        mostrarDatosEnConsola(filteredData);
    }
}

let  = ;
            let fi = prompt('Ingrese el ca: ');
            let conditi= prompt('Ingrese la condición (mayor o menor): ');
            let valu = prompt('Ingrese el valor: ');
            await buscarDatosSegunCondicion(endpo);

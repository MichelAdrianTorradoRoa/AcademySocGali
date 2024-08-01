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

function  datos(data){
    if(data===null){
        console.log('No se recibieron datos.');
        return;
    }

    // Mostrar datos según el formato
    if (data.timeline) {
        console.log('Datos de la línea de tiempo:', data.timeline);
    } else if (Array.isArray(data)) {
        console.table(data); // Muestra los datos como una tabla en la consola
    } else if (typeof data === 'object') {
        console.log('Datos recibidos:', data);
    } else {
        console.log('Datos no reconocidos:', data);
    }
}







async function buscarDatosSegunCondicion(endpoint, field, condition, value) {
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

let endpoint19 = '/continents';
            let field19 = prompt('Ingrese el campo a buscar (cases, deaths, recovered, vaccines): ');
            let condition19 = prompt('Ingrese la condición (mayor o menor): ');
            let value19 = prompt('Ingrese el valor: ');
            await buscarDatosSegunCondicion(endpoint19, field19, condition19, value19);

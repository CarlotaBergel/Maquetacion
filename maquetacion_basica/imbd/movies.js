class Movie{
    constructor(title, genero, actors, director, writer, photo) {
        this.title = title;
        this.genero = genero;
        this.actors = actors;
        this.director = director;
        this.writer = writer;
        this.photo = photo;
    }
}
let peli1 = new Movie("Bajocero","acción", "Javier Gutiérrez","Lluís Quílez","Antonio Frutos","https://pics.filmaffinity.com/bajocero-777287160-large.jpg");
let peli2 = new Movie("Alerta Roja","acción","the rock", "Rachel Block", "Rawson Marshall Thurber", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1tUS5R8YdEy6y7N7s_i6lpiElM8sx8GEJ_ZFaUGsXtfO9Y85O");
let peli3 = new Movie("Furia", "acción", "Mateusz Nedza", "Cyprian T. Olencki","Klaudiusz Dwulit", "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeAsA5eXEeVgfsTt9sKH9k0bf0_A7CdekvlFFH6cupLXaUe9L_5leDvoumGI4wSbXR3AKDdPFwrLKTDZ35MRKpyhwFhM-1u6jHU1.jpg?r=20e");

let arrPeli= [peli1, peli2, peli3];

addPeliBBDD(arrPeli);

// crear bucle peliculas y mostrar creacion car en cada vuelta
function addPeliBBDD(arrPeli){
    for(let i = 0; i < arrPeli.length; i++){
        console.log(newCard(arrPeli[i]));
        let card = newCard(arrPeli[i]);
        console.log(card);
        addPelicula(card);
    }
}
function newCard(movie){
    return `
        <div class="card" style="width: 18rem;">
        <img src="${movie.photo}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Titulo: ${movie.title}</h5>
            <p class="card-text">Genero: ${movie.genero}</p>
            <p class="card-text">Actor: ${movie.actors}</p>
            <p class="card-text">Director: ${movie.director}</p>
            <p class="card-text">Escritor: ${movie.writer}</p>
        </div>
        </div>
    `;
}

// y mostrar en card
function addPelicula(pelicula){
    $("#peliculas").append(pelicula);
}
$("#cardForm").on("submit", function(e){
    e.preventDefault();
    let imgPeli = $("#imgpeli").val();
    let nomPeli = $("#nomPeli").val();
    let genero = $("#genero").val();
    let actor = $("#actor").val();
    let director = $("#director").val();
    let escritor = $("#escritor").val();
    let pelicula = new Movie(nomPeli, genero,actor,director, escritor, imgPeli);
    let card = newCard(pelicula);
    addPelicula(card);
});


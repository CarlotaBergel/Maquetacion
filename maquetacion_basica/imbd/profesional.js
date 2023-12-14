class Profesional{
    constructor(name, age, isretired, nationality, profession, photo) {
        this.name = name;
        this.age = age;
        this.isretired = isretired;
        this.nationality = nationality;
        this.profession = profession;
        this.photo = photo;
    }
}

let profes1 = new Profesional("Jason Statham",56, false, "estadounidense", "actor", "https://es.web.img3.acsta.net/c_310_420/pictures/19/07/31/17/35/5396784.jpg");
let profes2 = new Profesional("Keanu Reeves",59, false, "estadonidense", "actor", "https://es.web.img2.acsta.net/c_310_420/pictures/17/02/06/17/01/343859.jpg");
let profes3 = new Profesional("Sylvester Stallone",77, false, "neoyorkino", "actor","https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/11/07/sylvester-stallone.jpeg");
let arrprof =[profes1, profes2, profes3];

newCard(arrprof);
function newCard(profesional){
    let cardHtml = `  
    <div class=" card row justify-content-between m-5" style="width: 18rem;">
        <img src="${profesional.photo}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Nombre: ${profesional.name}</h5>
          <p class="card-text">Edad: ${profesional.age}</p>
          <p class="card-text">Retirado: ${profesional.isretired}</p>
          <p class="card-text">Nacionalidad: ${profesional.nationality}</p>
          <p class="card-text">Oscars: ${profesional.oscarsNumber}</p>
          <p class="card-text">Profesion: ${profesional.profession}</p>
        </div>
    </div>`;
    return cardHtml;
}
function addProfesional(profesional){
    $("#profesionales").append(profesional);
}
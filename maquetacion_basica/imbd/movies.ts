export class Movie{
    public title : string;
    public relaseYear : number;
    public actors : string[];
    public nationality : string;
    public director: string;
    public writer : string;
    public language : string;
    public plataforma : string;
    public isMCU : boolean;
    public mainCharacterName : string;
    public producer : string;
    public distributor : string;
    public genere : string;
    public photo : string;


    constructor(title:string, relaseYear:number, nationality : string, genere : string, actors:string[],director: string, writer : string,language : string, plataforma : string, isMCU : boolean,mainCharacterName : string,producer : string, distributor:string, photo: string){
        this.title = title;
        this.relaseYear = relaseYear;
        this.nationality = nationality;
        this.genere = genere;
        this.actors = actors;
        this.nationality =nationality;
        this.director = director;
        this.writer = writer;
        this.language =language;
        this.plataforma= plataforma;
        this.isMCU = isMCU;
        this.mainCharacterName= mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.genere = genere;
        this.photo = photo;

    }

    toString():void{
        console.log ("titulo: " + this.title + "\n año: " +  this.relaseYear + "\n actores: " +  this.actors.toString() + "\n nacionalidad: " + this.nationality + "\n director: " + this.director.toString() + "\n escritor: " + this.writer.toString() + "\n lenguaje: " + this.language + "\n plataforma: " + this.plataforma + "\n marvel : " +  this.isMCU + "\n actor principal: " +  this.mainCharacterName + "\n productor: " + this.producer + "\n distribuidor: " + this.distributor + "\n genero: " + this.genere);
    }


}
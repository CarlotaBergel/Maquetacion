export class Profesional{
    public name : string;
    public age : number;
    public weight : number;
    public heigth : number;
    public isretired: boolean;
    public nationality : string;
    public oscarsNumber : number;
    public profession : string;
    public photo : string;
    constructor(name:string, age:number, weight : number, heigth : number, isretired: boolean, nationality : string, oscarsNumber : number, profession : string, photo : string){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.heigth = heigth;
        this.isretired = isretired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }
    toString():string{
        return "nombre: " + this.name + "\n" + "edad: " +  this.age + "\n" + "altura: " +  this.weight + "\n" + "peso: " + this.heigth + "\n" + "esta retirado: " + this.isretired + "\n" + "nacionalidad: " + this.nationality + "\n" + "Numero de oscar: " + this.oscarsNumber + "\n" + "profesion: " + this.profession;
    }
}
import { Province } from "./province";

export class Comune {
    id?:number;
    nome!:string;
    provincia!:Province;

    constructor (){
        this.nome='';
    this.provincia= new Province();
    }
}

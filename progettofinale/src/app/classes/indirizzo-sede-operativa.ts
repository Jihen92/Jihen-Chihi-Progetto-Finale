import { Comune } from "./comune";


export class IndirizzoSedeOperativa {
    id?:number;
    via!:string;
    civico!: string;
    cap!: String;
    localita!:string;
    comune!:Comune;
 
    constructor(){
        this.comune=new Comune()
    }
}
                

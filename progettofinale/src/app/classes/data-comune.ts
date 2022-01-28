import { Comune } from "./comune";

export class DataComune {
    content!:Array<Comune>; 
    pageable!:Array<any>;//tipizzare pageable
    last!:string;
    totalPages!:number;
    totalElements!:number;
    number!:number;
    numberOfElements!:number;
    size!:number;
    sort!:Array<any>//tipizzare sort

}

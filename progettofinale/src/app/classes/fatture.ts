import { Client } from "./client";
import { IndirizzoSedeLegale } from "./indirizzo-sede-legale";
import { Stato } from "./stato";

export class Fatture {
    id!:number;
    data!:string;
    numero!:number;
    anno!:number;
    importo!:string;
    stato!:Array<Stato>;//TIPIZZARE STATO
    cliente!:Array<Client>;
    indirizzoSedeLegale!:Array<IndirizzoSedeLegale>;
    dataInserimento!:string;
    dataUltimoContatto !:string;
}

   
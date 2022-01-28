import { Client } from "./client";
import { IndirizzoSedeLegale } from "./indirizzo-sede-legale";
import { IndirizzoSedeOperativa } from "./indirizzo-sede-operativa";

export class Clienti {
    id!: number;
    ragioneSociale!:string;
    partitaIva!:string;
    tipoCliente!: string;
    email!:string;
    pec!: string;
    telefono!:string;
    nomeContatto!:string;
    cognomeContatto!:string;
    telefonoContatto!:string;
    emailContatto!: string;
    indirizzoSedeOperativa!:Array<IndirizzoSedeOperativa>;//tipizzare indirizzo sedeOperativa
    indirizzoSedeLegale!:Array<IndirizzoSedeLegale>;//tipizzare indirizzo sedeLegale
    dataInserimento!:string;
    dataUltimoContatto!:string;
    fatturatoAnnuale!: string;
   content!:Array<Client>;//tipizzare content
}

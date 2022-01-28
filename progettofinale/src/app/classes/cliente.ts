export class Cliente {
    ragioneSociale!: string;
    partitaIva!: string;
    tipoCliente!:string;
    email!:string;
    pec!:string;
    telefono!:string;
    nomeContatto!:string;
    cognomeContatto!:string;
    telefonoContatto!:string;
    emailContatto!:string;
    indirizzoSedeOperativa!:Array<any>;
    indirizzoSedeLegale!:Array<any>;
    dataInserimento!:string;
    dataUltimoContatto!:string;
    fatturatoAnnuale!:number;
}

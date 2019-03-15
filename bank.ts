export class Bank{
    id: string;
    name: string;
    acc: number;
    pass: string;

    constructor(id, name, acc, pass){
        this.id = id;
        this.name = name;
        this.acc = acc;
        this.pass = pass;
    }
}
import { firstName, lastName, year, Instrucment } from './bcd';

export class InstrucmentChild extends Instrucment {
    constructor() {
        super();
        this.init();
    }
}
console.log(firstName);
console.log(lastName);
console.log(year);

console.log("1");
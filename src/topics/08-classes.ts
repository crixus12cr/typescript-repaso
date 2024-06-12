export class Person {
    // public name: string;
    // private addresss: string;

    constructor(
        public name: string, 
        private address: string
    ) {}

}

const ironman = new Person('Cristian', 'New York');

console.log(ironman);

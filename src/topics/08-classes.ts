export class Person {
    // public name: string;
    // private addresss: string;

    constructor(
        public name: string, 
        private address: string = 'No address'
    ) {}

}

// const ironman = new Person('Cristian', 'New York');

// console.log(ironman);

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'new york');
//     }
// }
export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {

    }
}

const tony = new Person('Tony', 'New York');
const ironman = new Hero('Ironman',45, 'Tony', tony);

console.log(ironman);

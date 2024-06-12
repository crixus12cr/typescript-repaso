function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumberArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
}

// const result: string = addNumbers( 1, 2 ).toString();
// const result: number = addNumbers( 1, 2 );
// const resultArrow: string = addNumberArrow( 1, 2 );
// const resultMultiply: number = multiply(2);

// console.log({ result, resultArrow, resultMultiply });

// Interfaces
interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
    name: "Strider",
    hp: 100,
    showHp() {
        console.log(`HP: ${this.hp}`);
    }
}

healCharacter(strider, 20);

strider.showHp();

export {};

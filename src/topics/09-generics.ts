export function whatsMyType<T>( argument: T ): T {
  return argument;
}

const amIsString = whatsMyType<string>('hola crsitian');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3]);

console.log(amIsString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));

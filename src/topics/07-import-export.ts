import {Product, taxCalculation} from './06-function-desestructuring'

const shoppingCart: Product[] = [
    {
        description: 'Samsung Galaxy S10',
        price: 699
    },
    {
        description: 'iPad Pro',
        price: 799
    }
];

// Tax = 0.15
const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total: ', total);
console.log('Total with tax: ', tax);

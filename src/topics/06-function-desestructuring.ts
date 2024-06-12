export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Samsung Galaxy S10',
    price: 699
}

const tablet: Product = {
    description: 'iPad Pro',
    price: 799
}

interface TaxtCalculationOptions {
    tax: number;
    products: Product[];
}

// function taxCalculation( options: TaxtCalculationOptions) :[number, number] {
// function taxCalculation( {tax, products}: TaxtCalculationOptions) :[number, number] {
export function taxCalculation( options: TaxtCalculationOptions) :[number, number] {
    const {tax, products} = options;   
    
    let total = 0;

    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({products: shoppingCart, tax});

console.log('Total: ', total);
console.log('Total with tax: ', taxTotal);

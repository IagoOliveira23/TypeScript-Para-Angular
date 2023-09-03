//funções
function addNumber(x: number, y: number): number{
    return x + y;
}

function addToHello(name: string): string{
    return `Hello ${name}`
}

function CallToPhone(phone: number | string): number | string{
    return phone;
}

async function getDataBase(id: number): Promise<string> {
    return "Ednaldo";
}

let soma:number = addNumber(4, 2);
console.log(soma);

console.log(addToHello("ednaldo"));
console.log(CallToPhone("999999"));
console.log(CallToPhone(999999));

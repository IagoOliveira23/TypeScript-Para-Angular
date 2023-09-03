//tipos primitivos
let ligado:boolean = false;
let nome:string = "Ednaldo";
let idade:number = 49;
let altura:number = 1.71;

//tipos especiais null, undefined
let nulo:null = null;
let indefinido:undefined = undefined;

//tipos abrangentes: any, void
let retorno:void;
let retornoView:any = "qualquer coisa";

//objeto - sem previsibilidade
let produto:object = {
    name: "ednaldo",
    altura: 1.71,
    idade: 49,
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome:string,
    preco:number,
    unidades:number,
};

let meuProduto:ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 10,
};

//arrays
let dados:string[] = ["ednaldo", "pereira", "banido"];
let dados2: Array<string> = ["ednaldo", "pereira", "banido"];

let infos:(string | number)[] = ["ednaldo", 49, 1.71, "desbanido"];

//tuplas
let boleto:[string, number, number] = ["conta agua", 99, 123321];

//Datas
let aniversario:Date = new Date("2023-09-02 14:05");
console.log(aniversario.toString());
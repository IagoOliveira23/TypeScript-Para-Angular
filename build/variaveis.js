"use strict";
//tipos primitivos
let ligado = false;
let nome = "Ednaldo";
let idade = 49;
let altura = 1.71;
//tipos especiais null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = "qualquer coisa";
//objeto - sem previsibilidade
let produto = {
    name: "ednaldo",
    altura: 1.71,
    idade: 49,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 10,
};
//arrays
let dados = ["ednaldo", "pereira", "banido"];
let dados2 = ["ednaldo", "pereira", "banido"];
let infos = ["ednaldo", 49, 1.71, "desbanido"];
//tuplas
let boleto = ["conta agua", 99, 123321];
//Datas
let aniversario = new Date("2023-09-02 14:05");
console.log(aniversario.toString());

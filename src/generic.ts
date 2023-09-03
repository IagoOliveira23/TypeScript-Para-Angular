//generics
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]> ([1,2], [3]);

const strArray = concatArray<string[]>(["a", "b"], ["z"]);

console.log(numArray);
console.log(strArray);
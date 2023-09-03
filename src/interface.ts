//interfaces (type x interface)
type robot = {
    id: number,
    name: string,
};

interface robot2{
    id: number,
    name: string,
};

const bot1: robot={
    id: 1,
    name: "megaman",
};

const bot2: robot2={
    id: 1,
    name: "megaman",
};

console.log(bot1);
console.log(bot2);

class Pessoa implements robot{
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}

const p = new Pessoa(1, "ednaldo")
console.log(p);

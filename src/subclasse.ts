//Characyer: superclass
//Magician: subclass
class Magician extends Character{
    magicPoint:number; 
    constructor(name:string, strenght: number, skill: number, magicPoint:number){
        super(name, strenght, skill);
        this.magicPoint = magicPoint;
    }
}

const p2 = new Magician("Banido", 7, 99, 60);
p2.attack();
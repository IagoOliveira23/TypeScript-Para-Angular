//classes

/*
data modifiers
public
private
protected
*/
class Character {
    private name: string;
    strength: number;
    skill: number;

    constructor (name: string, strength:number, skill:number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.strength} points`);
    }
}

const p1 = new Character("ednaldo", 10, 100);
p1.attack();
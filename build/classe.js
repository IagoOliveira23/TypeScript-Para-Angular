"use strict";
//classes
/*
data modifiers
public
private
protected
*/
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
const p1 = new Character("ednaldo", 10, 100);
p1.attack();

"use strict";
//Characyer: superclass
//Magician: subclass
class Magician extends Character {
    constructor(name, strenght, skill, magicPoint) {
        super(name, strenght, skill);
        this.magicPoint = magicPoint;
    }
}
const p2 = new Magician("Banido", 7, 99, 60);
p2.attack();

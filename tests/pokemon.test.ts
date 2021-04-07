import {faster, Pokemon, attack} from "../models/pokemon"
import {generateAttackArray} from "../utils"

test("Pokemon A faster", () => {
    const a = new Pokemon('a', 50, generateAttackArray(50)) ; 
    const b = new Pokemon('b', 40, generateAttackArray(50)) ;
    expect(faster(a,b)).toBe(a); 
});

test("Pokemon B faster", () => {
    const a = new Pokemon('a', 50, generateAttackArray(50)) ; 
    const b = new Pokemon('b', 60, generateAttackArray(50)) ;
    expect(faster(a,b)).toBe(b); 
});


test("A attack B", () => {
    const a = new Pokemon('a', 50, generateAttackArray(50)) ; 
    const b = new Pokemon('b', 40, generateAttackArray(50)) ;
    expect(attack(a,b)).toBeGreaterThanOrEqual(0) ; 
});









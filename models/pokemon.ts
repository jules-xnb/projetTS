import {random} from "../../utils"

export class Pokemon {
    name: string ; 
    speed: number ; 
    attackArray: number[] ;
    health: number ;
    //nb attack = 4 

    constructor(name:string, speed: number, attackArray: number[]){
        this.name = name; 
        this.speed = speed;
        this.attackArray = attackArray ;
        this.health = 100 ; 
    }

    isAlive(): boolean {
        if (this.health < 0) return false ; 
        return true ; 
    }
}

export function faster (a: Pokemon, b:Pokemon):Pokemon {
    if (a.speed > b.speed) return a ; 
    return b ; 
}

export function attack(a: Pokemon, b: Pokemon): number{
    let x: number = random(4) ;
    b.health -= a.attackArray[x] ;
    console.log(x)
    return a.attackArray[x] ; 
}

export function changeTurn (a: Pokemon, b: Pokemon, turn: Pokemon): Pokemon {
    if (turn == b) return a ; 
    return b ; 
}


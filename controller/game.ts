import { attack, changeTurn, faster, Pokemon } from "../models/pokemon";


export function game(a: Pokemon, b: Pokemon) {
    let turn: Pokemon = faster(a,b);
    let noturn: Pokemon = changeTurn(a, b, turn);  
    while(a.isAlive() && b.isAlive()){
        let dammage = attack(turn, noturn); 
        turn = changeTurn(a,b,turn); 
        noturn = changeTurn(a ,b, noturn)
    }
}
export function random(n: number): number {
    return Math.floor(Math.random()*n) 
}

export function generateAttackArray(n:number):number[]{
    return [random(50),random(50),random(50),random(50)] ; 
}


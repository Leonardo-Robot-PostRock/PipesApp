export enum Colour {
    rojo, negro, azul, verde
}

export interface Heroe {
    name: string,
    fly: boolean,
    colour: Colour
}
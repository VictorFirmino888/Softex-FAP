import { icalculadora } from "./iCalculadora";

export class Soma implements icalculadora{
    execute(x: number, y: number): number{
        return x + y;
}
}

export class Subtracao implements icalculadora{
    execute(x: number, y: number): number{
        return x - y;
}
}

export class Multiplacao implements icalculadora{
    execute(x:number, y: number): number{
        return x * y;
    }
}
export interface Sorter{
    name:string;
    arraySequence:number[][];
    order(array:number[]):number[];
}


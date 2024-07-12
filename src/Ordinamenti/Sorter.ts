export interface Sorter{
    name:string;
    description:string[];
    arraySequence:number[][];
    order(array:number[]):number[];
}


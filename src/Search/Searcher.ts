
export interface Searcher{
    name:string;
    arraySequence:number[][];

    /**
     * 
     * @param value Value to Search
     * @param value Array of the search
     * @returns The index of the value, -1 if not found
     */
    search(value:number,array:number[]):number;
}

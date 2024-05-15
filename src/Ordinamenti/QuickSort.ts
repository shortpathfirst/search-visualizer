import { Sorter} from "./Sorter";


export class QuickSort implements Sorter{
//caso peggiore con algoritmo già ordinato (pivot max o min)
//opera in loco
//non è stabile
name = "Quick sort";
arraySequence: number[][] = [];

  order(array: number[]): number[] {
    this.quicksort(array,0,array.length-1);
    return array;
  }

  private quicksort(array:number[],start:number,end:number){
    if(start<end){
        let q=this.partition(array,start,end); //pivot divide
        this.quicksort(array,start,q-1); //impera
        this.quicksort(array,q+1,end); //impera

    }
  }
    private partition(array:number[],start:number, end:number):number {
    let x = array[end];
    let i = start-1;
    for(let j=start; j < end; j++){
        if(array[j] <= x){
            i=i+1;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            this.arraySequence.push([i,j]);
        }
    }
    let temp = array[i+1];
    array[i+1] = array[end];
    array[end] = temp;
    this.arraySequence.push([i+1,end]);
    return i+1;
  } 
  private quicksortRandom(array:number[],start:number,end:number){
    if(start<end){
        let q=this.randomPartition(array,start,end); //pivot divide
        this.quicksortRandom(array,start,q-1); //impera
        this.quicksortRandom(array,q+1,end); //impera

    }
  }
    private randomPartition(array:number[],start:number, end:number){
        let q_random=Math.floor(Math.random()*end);
        let temp = array[q_random];
        array[q_random] = array[end];
        array[end] = temp;
        return this.partition(array,start,end);
        
    }

}
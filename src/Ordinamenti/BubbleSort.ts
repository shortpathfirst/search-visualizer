
import { Sorter } from "./Sorter";

export class BubbleSort implements Sorter {
//STABILE NON SCAMBIA ELEMENTI UGUALI
//IN LOCO USA STESSO ARRAY
  name = "Bubble sort";
  arraySequence:number[][]= [];

  order(array: number[]): number[] {

    let k = array.length;
    let last = 0;

    while(k>=1){
      last=0;
      for(let i=1;i<=k; i++){
        if(array[i]<array[i-1]){
          
          let temp= array[i];
          array[i]=array[i-1];
          array[i-1] = temp;
          this.arraySequence.push([i,i-1]);

          last=i;
        }
      }
      k=last-1;
    }
    return array;
  }
}

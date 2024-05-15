
import { Sorter } from "./Sorter";

export class InsertionSort implements Sorter {
//STABILE NON SCAMBIA ELEMENTI UGUALI
//IN LOCO USA STESSO ARRAY
  name = "Insertion sort";
  arraySequence:number[][]= [];

  order(arr: number[]): number[] {

    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (arr[j] > temp && j >= 0) {
          this.arraySequence.push([j,j+1]);
          arr[j+1] = arr[j];

          j--;
        }

        arr[j+1] = temp;

      }
      return arr;
  }
}

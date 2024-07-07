import { Sorter} from "./Sorter";


export class MergeSort implements Sorter{
  name = "Merge sort";
  arraySequence: number[][] = []; 

  order(array: number[]): number[] {
    return this.mergeSort(array);
  }

  // private mergesort(array:number[],start:number,end:number){
  //   if(start<end){
  //       let mid=Math.floor((start+end)/2); //divide
  //       this.mergesort(array,start,mid); //impera
  //       this.mergesort(array,mid+1,end); //impera
  //       this.merge(array,start,mid,end); //combina
  //   }
  // }

    //  RECURSIVE METHOD
  mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);
    return this.merge(this.mergeSort(leftHalf), this.mergeSort(rightHalf));
  }
    //  ITERATIVE METHOD
  merge(left:number[], right:number[]):number[] {
    let result: number[] = [];
    let i = 0; //LEFT INDEX
    let j = 0; // RIGHT INDEX
 
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));

  } 


}
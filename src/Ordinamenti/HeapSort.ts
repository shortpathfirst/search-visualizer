
import { Sorter } from "./Sorter";
export class HeapSort implements Sorter {

name = "Heap sort me!";
description: string[] = ["Complexity: O(n log n)","Non stabile","In loco"];
arraySequence: number[][] = [];

  order(array: number[]): number[] {
    this.heapSort(array);
    return array;
  }
 private parent(i:number){
    return i/2;
  }
  private left(i:number){
    return 2*i;
  }
  private right(i:number){
    return 2*i+1;
  }
  private  max_heapify(array:number[],i:number,heapsize:number){//O(altezza albero), O(logn)
    let l = this.left(i);
    let r = this.right(i);
    let max=i; //se foglia non esegue altro
    if(l<=heapsize-1 && array[l]>array[i]){ //heap is shorter than array.lenght and it's an INDEX 
      max=l;
    }
    if(r<=heapsize-1 && array[r]>array[max]){
      max=r;
    }
    if(max!==i){
      let temp = array[i];
      array[i] = array[max];
      array[max] =temp;
      this.arraySequence.push([i,max]);
      this.max_heapify(array,max,heapsize);
    }
  }

  //ALTERNATIVE IMPLEMENTATION
  private max_heapify2(array:number[],i:number,length:number){
    let left = 2 * i; //left child index
    let right = 2 * i + 1; //right child index
    let maximum;
    if (right < length) { //Right child exists?
      if (array[left] >= array[right]) { //compare children to find maximum
        maximum = left;
      } else {
        maximum = right;
      }
    } else if (left < length) { //Left child exists?
      maximum = left;
    } else {
      return; //no children -> return
    }
    if (array[i] < array[maximum]) { //check if the largest child is greater than the parent
      let temp = array[i];
        array[i] = array[maximum];
        array[maximum] =temp;
        this.arraySequence.push([i,maximum]);
      this.max_heapify2(array, maximum, length); //all over again!
  }
}
  private build_max_heap(array:number[],heapsize:number){//su tutti i nodi non foglie
    for(let i=Math.floor(heapsize/2)-1; i>=0; i--){
      this.max_heapify(array,i,heapsize);
    }
  }
  private heapSort(array:number[]){
    let heapsize=array.length;
    this.build_max_heap(array,heapsize);//build max heap
    for(let i=heapsize-1; i>=0; i--){
      let temp = array[0];
      array[0] = array[i];
      array[i] = temp; //delete root
      this.arraySequence.push([0,i]);
      heapsize--;
      this.max_heapify(array,0,i); //build max heap again
    }
  }

}

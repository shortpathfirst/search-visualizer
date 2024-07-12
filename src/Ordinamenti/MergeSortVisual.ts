import { BubbleSort } from "./BubbleSort";
import { Sorter} from "./Sorter";


export class MergeSortVisual implements Sorter{
  name = "Merge sort me!";
  description: string[] = ["Complexity: O(n log n)"];
  arraySequence: number[][] = [];
  bubbleSort = new BubbleSort();

  order(array: number[]): number[] {
    let arrayObject:ArrayObject = new ArrayObject();
    //couple array with indexes
    for(let i=0;i<array.length;i++){
      arrayObject.array[i] = array[i];
      arrayObject.index[i] = i;
    }
   return this.mergeSort(arrayObject).array;;
  }
  mergeSort(object: ArrayObject): ArrayObject {
    if (object.array.length <= 1) {
        return object;
    }
    const middle = Math.floor(object.array.length / 2);
    const leftHalf = {...object};
    leftHalf.array = object.array.slice(0, middle);
    leftHalf.index = object.index.slice(0,middle);

    const rightHalf = {...object};
    rightHalf.array = object.array.slice(middle);
    rightHalf.index = object.index.slice(middle);

    return this.merge(this.mergeSort(leftHalf), this.mergeSort(rightHalf));
  }
 
  merge(left:ArrayObject, right:ArrayObject):ArrayObject {
    let result: ArrayObject = new ArrayObject();
    let i = 0; //LEFT INDEX
    let j = 0; // RIGHT INDEX

    while (i < left.array.length && j < right.array.length) {
        if (left.array[i] < right.array[j]) {
            result.array.push(left.array[i]);
            result.index.push(left.index[i]);
            i++;
        } else {
            result.array.push(right.array[j]);
            result.index.push(right.index[j]);
            j++;
        }
    }
    

    result.array = result.array.concat(left.array.slice(i)).concat(right.array.slice(j));
    result.index = result.index.concat(left.index.slice(i)).concat(right.index.slice(j));

    //////////////
    ////Use bubblesort for order indexes
    ///////////////
    this.orderIndexWithBubbleSort(result);
    // result.index = left.index.concat(right.index); // Set ordered indexes
    return result;
    
  } 
  orderIndexWithBubbleSort(result:ArrayObject){
    let arraySize = result.index.length;
    for (let i = 0; i < arraySize - 1; i++) {
      for (let j = 0; j < arraySize - i - 1; j++) {
        if (result.index[j] > result.index[j + 1]) {
          this.arraySequence.push([result.index[j],result.index[j+1]]);
          let temp= result.index[j];
          result.index[j]=result.index[j+1];
          result.index[j+1] = temp;
          
        }
      }
    }
  }
}
export class ArrayObject{
  array:number[] = [];
  index:number[] = [];
}
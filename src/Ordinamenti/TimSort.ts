import { Sorter} from "./Sorter";


export class TimSort implements Sorter{
name = "Tim sort me!";
description: string[] = ["Complexity: O(n log n)"];
arraySequence: number[][] = [];

  order(array: number[]): number[] {
    this.timSort(array,array.length);
    return array;
  }


  insertionSort(arr:any[], left:any, right:any) {
    for (let i = left + 1; i <= right; i++) {
      let temp = arr[i];
      let j = i - 1;
      while (arr[j] > temp && j >= left) {
        this.arraySequence.push([j,j+1]);
        arr[j+1] = arr[j];
        j--;
      }
      arr[j+1] = temp;
    }
  }
  
    
merge(arr:any[], l:any, m:any, r:any) {
    let len1 = m - l + 1, len2 = r - m;
    let left = new Array(len1), right = new Array(len2);
    for (let x = 0; x < len1; x++) {
      left[x] = arr[l + x];
    }
    for (let x = 0; x < len2; x++) {
      right[x] = arr[m + 1 + x];
    }
  
    let i = 0, j = 0, k = l;
  
    while (i < len1 && j < len2) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }
  
    while (i < len1) {
      arr[k] = left[i];
      k++;
      i++;
    }
  
    while (j < len2) {
      arr[k] = right[j];
      k++;
      j++;
    }
  }
  
RUN = 32;

timSort(arr:any[], n:any) {
  for (let i = 0; i < n; i+=this.RUN)
    this.insertionSort(arr, i, Math.min((i+31), (n-1)));

  for (let size = this.RUN; size < n; size = 2*size) {
    for (let left = 0; left < n; left += 2*size) {
      let mid = left + size - 1;
      let right = Math.min((left + 2*size - 1), (n-1));
      this.merge(arr, left, mid, right);
    }
  }
}
  
}
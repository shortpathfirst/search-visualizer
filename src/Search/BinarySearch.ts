import { Searcher } from "./Searcher";

export class BinarySearch implements Searcher{
    name: string = "Binary Search";
    arraySequence: number[][] = []; //[mid,1] mid value and 0 if left side 1 if right side

    search(value: number, array: number[]): number {
        return this.binarySearch(value,array);
    }

    //Time complexity O(log N)
    private binarySearch(value: number, array: number[]):number{   
        let left = 0;
        let right = array.length-1;

        while (left<=right){
            let mid = left + Math.floor((right - left) / 2)

            if(array[mid] === value){
                return mid;
            }
            if(array[mid] < value){
                //Right Side
                left = mid+1;
                this.arraySequence.push([mid,1]);
            }
            else{
                //Left Side
                right = mid-1;
                this.arraySequence.push([mid,0]);
            }
        }
        return -1;
    }
}
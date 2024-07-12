import { Sorter } from "./Sorter";

export class CountingSort implements Sorter{
    name: string = "Counting Sort";
    arraySequence: number[][] = [];
    description: string[] = ["Complexity: O(n)"];
    order(array: number[]): number[] {
        //Find Max k
        let max = 0;
        for(let number of array){
            if(number > max)
                max = number;
        }
        
        //Initialize 0 to k
        let countArray:number[] = Array(max+1).fill(0);

        //Count occurrency of k
        for(let j = 0; j<array.length; j++){
            countArray[array[j]]++;
        }
        
        // Count the value <k and place k at the end
        let j = 0;
        for(let i=0; i< countArray.length;i++){
            while(countArray[i]>0){
                array[j] = i;
                j++;
                countArray[i]--;
            }
        }

        return array; // in place
    }
    // Complexity O(n+maxValue)
    // Space O(n+maxValue)
}
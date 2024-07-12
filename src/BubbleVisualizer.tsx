import React, {useState } from 'react'
import './App.css'
import { Sorter } from './Ordinamenti/Sorter';
import { BubbleSort } from './Ordinamenti/BubbleSort';
import { HeapSort } from './Ordinamenti/HeapSort';
import { QuickSort } from './Ordinamenti/QuickSort';
import { TimSort } from './Ordinamenti/TimSort';
import { InsertionSort } from './Ordinamenti/InsertionSort';
import { MergeSortVisual } from './Ordinamenti/MergeSortVisual';
import Bars from './Components/Bars/Bars';
import InputArray from './Components/Input/InputArray';
import AlgorithmButtons from './Components/Buttons/AlgorithmButtons';


function BubbleVisualizer(){

//  const init= [19, 13, 0, 10, 4, 12, 2, 14, 8, 10, 3, 16, 13, 7, 10, 12, 18, 10, 13, 5];
  const RNDVALUES=Array.from({length: 20}, () => Math.floor(Math.random() * 40));
  const ALGORITHMS = [new BubbleSort(),new HeapSort(),new QuickSort(),new InsertionSort(),new MergeSortVisual(),new TimSort()];

  const [array,changeArray] = useState(RNDVALUES);
  const [sortingArray,sortFunction] = useState(array); 
  const [color,colorState] = useState([-1,-1]);

  const [message,changeMessage] = useState('');
  const [isButtonDisabled,disableButtons] = useState(false);

  function handleChange(val:number,index:number){
    let copy = [...array]; //O(n)
    copy[index] = val;
    changeArray(copy);
    sortFunction(copy);
  }

  function print(sortAlgorithm:Sorter){
    disableButtons(true);
    // Performance Evaluation
    let start = performance.now(); 
    let index = 0;
    let copy = [...array];
    // Order
    sortAlgorithm.order(array); 
    let numberSwaps = sortAlgorithm.arraySequence.length;

    const interval = setInterval(() => {
      if(sortAlgorithm.arraySequence.length > index){
        let [i,j] = sortAlgorithm.arraySequence[index];
        [copy[i],copy[j]] = [copy[j],copy[i]];//Swap
        sortFunction(copy);
        colorState([i,j]);
        index++;
      }else{
        disableButtons(false);
        let end = performance.now();
        let msg =`${sortAlgorithm.name} performed in ${(end-start).toFixed(2)} ms with ${numberSwaps} swaps`
        changeMessage(msg);
        changeArray(RNDVALUES);
        clearInterval(interval);
      }
    }, 50);
  }
  
  return (
  
  <div className='container'>
    <h1 className='title'>Bubble Visualizer</h1>
    <p id='subtitle'>An excercise to display the most commons comparison search algorithms </p>

    <AlgorithmButtons isButtonDisabled={isButtonDisabled} ALGORITHMS={ALGORITHMS} handleActionBtn={print} handleReset={()=>{sortFunction(RNDVALUES);changeArray(RNDVALUES);colorState([-1,-1])}}></AlgorithmButtons>
    
    <p className='message'>{message}</p>

    <InputArray array={array} sortingArray={sortingArray} color={color} handleChange={handleChange}></InputArray>

    <Bars sortingArray={sortingArray} color={color}></Bars>

  </div>
    
  )
  
}
export default BubbleVisualizer
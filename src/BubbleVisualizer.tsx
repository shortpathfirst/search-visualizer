import React, {useState } from 'react'
import './App.css'
import { Sorter } from './Ordinamenti/Sorter';
import Bars from './Components/Bars/Bars';
import InputArray from './Components/Input/InputArray';
import AlgorithmButtons from './Components/Buttons/AlgorithmButtons';
import TreeVisual from './Components/Tree/TreeVisual';
import { HeapSort } from './Ordinamenti/HeapSort';


//  const init= [19, 13, 0, 10, 4, 12, 2, 14, 8, 10, 3, 16, 13, 7, 10, 12, 18, 10, 13, 5];
const RNDVALUES=()=>{return Array.from({length: 20}, () => Math.floor(Math.random() * 40))}

function BubbleVisualizer(){

  const init = RNDVALUES();

  const [numbersArray,changeArray] = useState(init);
  const [sortingArray,sortFunction] = useState([...numbersArray]); 
  const [color,colorState] = useState([-1,-1]);
  const [message,changeMessage] = useState('');
  const [isButtonDisabled,setButtonDisabled] = useState(false);
  const [isHeap,setHeap] = useState(false);

  function handleChange(newVal:number,index:number){
    const newArray = numbersArray.map((value, i) => {
      return i === index? newVal : value;
    });
    changeArray(newArray);
    sortFunction(newArray);
  }

  function print(sortAlgorithm:Sorter){
    setButtonDisabled(true);
    if(sortAlgorithm instanceof HeapSort){
      setHeap(true);
    }else{
      setHeap(false);
    }
    // Performance Evaluation
    let start = performance.now(); 
    // Order Array
    sortFunction([...numbersArray]);
    sortAlgorithm.order([...numbersArray]); 
    let numberSwaps = sortAlgorithm.arraySequence.length;
    // Swap the sorting array
    let copy = [...numbersArray];
    let index = 0;
    const interval = setInterval(() => {
      if(sortAlgorithm.arraySequence.length > index){
        let [i,j] = sortAlgorithm.arraySequence[index];
        [copy[i],copy[j]] = [copy[j],copy[i]];//Swap
        sortFunction(copy);
        colorState([i,j]);
        index++;
      }else{
        setButtonDisabled(false);
        let end = performance.now();
        let msg =`${sortAlgorithm.name} performed in ${(end-start).toFixed(2)} ms with ${numberSwaps} swaps`
        changeMessage(msg);
        clearInterval(interval);
      }
    }, 100);
  }

  const onReset = ()=>{
      const init = RNDVALUES();
      sortFunction([...init]);
      changeArray([...init]);
      colorState([-1,-1]);
  }
  return (
  
  <div className='container'>
    <h1 className='title'>Bubble Visualizer</h1>
    <p id='subtitle'>An excercise to display the most commons comparison search algorithms </p>

    <AlgorithmButtons isButtonDisabled={isButtonDisabled} handleActionBtn={print} handleReset={onReset}></AlgorithmButtons>
    
    <p className='message'>{message}</p>

    <InputArray array={numbersArray} sortingArray={sortingArray} color={color} handleChange={handleChange}></InputArray>

    {
      isHeap ?
      <TreeVisual sortingArray={sortingArray} color={color} handleChange={handleChange}></TreeVisual> :
      <Bars sortingArray={sortingArray} color={color}></Bars>
    }

  </div>
    
  )
  
}
export default BubbleVisualizer
import React, {useState } from 'react'
import './App.css'
import { Sorter } from './Ordinamenti/Sorter';
import { BubbleSort } from './Ordinamenti/BubbleSort';
import { HeapSort } from './Ordinamenti/HeapSort';
import { QuickSort } from './Ordinamenti/QuickSort';
import { TimSort } from './Ordinamenti/TimSort';
import { InsertionSort } from './Ordinamenti/InsertionSort';
import { MergeSortVisual } from './Ordinamenti/MergeSortVisual';


function BubbleVisualizer(){

//  const init= [19, 13, 0, 10, 4, 12, 2, 14, 8, 10, 3, 16, 13, 7, 10, 12, 18, 10, 13, 5];
  const init=Array.from({length: 20}, () => Math.floor(Math.random() * 40));

  const [array,changeArray] = useState(init);
  const [sortingArray,sortFunction] = useState(array); 
  const [color,colorState] = useState([-1,-1]);

  const [message,changeMessage] = useState('');
  const [isButtonDisabled,changeButtonState]=useState(false);

  let ids=0;
    ///
    //spread operator complexity O(n)
    ///
  function handleChange(val:number,index:number){
    let copy = [...array];
    copy[index] = val;
    changeArray(copy);
    sortFunction(copy);
  }

  function print(sortAlgorithm:Sorter){
    changeButtonState(true);
    let start = performance.now();
    let index = 0;
    let copy = [...array];
    sortAlgorithm.order(array);
    let numberSwaps = sortAlgorithm.arraySequence.length;

    const interval = setInterval(() => {
      if(sortAlgorithm.arraySequence.length>index){
        let [i,j] = sortAlgorithm.arraySequence[index];
        let temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
        sortFunction(copy);
        colorState([i,j]);
        index++;
      }else{
        changeButtonState(false);
        let end = performance.now();
        let msg =`${sortAlgorithm.name} performed in ${(end-start).toFixed(2)} ms with ${numberSwaps} swaps`
        changeMessage(msg);
        changeArray(init);
        clearInterval(interval);
      }
    }, 50);
  }
  
  return (
  
  <div className='container'>
    <h1 className='title'>Bubble Visualizer</h1>
    <p>An excercise to display the most commons comparison search algorithms </p>
    <div className='buttonContainer'>
      <button className='button' disabled={isButtonDisabled} onClick={()=>{print(new BubbleSort())}}> Bubble sort me!</button>
      <button className='button' disabled={isButtonDisabled} onClick={()=>{print(new HeapSort())}}> Heap sort me!</button>
      <button className='button' disabled={isButtonDisabled} onClick={()=>{print(new QuickSort())}}> Quick sort me!</button>
      <button className='button' disabled={isButtonDisabled} onClick={()=>{print(new InsertionSort())}}> Insertion sort me!</button>
      <button className='button' disabled={isButtonDisabled} onClick={()=>{print(new MergeSortVisual())}}> Merge sort me!</button>
      <button className='button' disabled={isButtonDisabled} onClick={()=>{print(new TimSort())}}> Tim sort me!</button>
    </div>
    <button className='button reset'  onClick={()=>{sortFunction(init);changeArray(init);colorState([-1,-1])}}> Reset</button> 
    <p className='message'>{message}</p>
    <div key={ids++} className='row first'>
        { 
          array.map((num,index) => {
            return  <input key={ids++} className='input' onChange={ev=>{handleChange(+ev.target.value,index)}} value={num} type='tel'></input>;
          })
        }
    </div>
    {
      <div key={ids++} className='row'>
        { 
          sortingArray.map((num,i) => {
            return  <input key={ids++} style={{
              backgroundColor:(i===color[0] || i===color[1])?'orange':'',
            }}  readOnly className='input' value={num} type='tel'></input>;
          })
        }
      </div>
    }
    <div className='showdown'>
    {
       sortingArray.map((val,i)=>{
        return <li key={ids++} className="barre" style={{ backgroundColor:(i===color[0] || i===color[1])?'rgb(185, 22, 185)':'purple',height:val*12}}>
            
        </li>
    })
    }
    </div>

  </div>
    
  )
  
}
export default BubbleVisualizer
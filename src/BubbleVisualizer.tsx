import { useState } from 'react'
import './App.css'
import { Sorter } from './Ordinamenti/Sorter';
import Bars from './Components/Bars/Bars';
import InputArray from './Components/Input/InputArray';
import AlgorithmButtons from './Components/Buttons/AlgorithmButtons';
import TreeVisual from './Components/Tree/TreeVisual';
import { HeapSort } from './Ordinamenti/HeapSort';

//  const init= [19, 13, 0, 10, 4, 12, 2, 14, 8, 10, 3, 16, 13, 7, 10, 12, 18, 10, 13, 5];
const RNDVALUES = () => { return Array.from({ length: 20 }, () => Math.floor(Math.random() * 40)) }

function BubbleVisualizer() {

  const init = RNDVALUES();

  const [numbersArray, changeArray] = useState(init);
  const [sortingArray, setSortingArray] = useState([...numbersArray]);
  const [highlightedBars, setHighlightedBars] = useState([-1, -1]);
  const [message, changeMessage] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isHeap, setHeap] = useState(false);

  function handleChange(newVal: number, index: number) {
    const newArray = numbersArray.map((value, i) => {
      return i === index ? newVal : value;
    });
    changeArray(newArray);
    setSortingArray(newArray);
  }

  function execute(sortAlgorithm: Sorter) {
    setButtonDisabled(true);
    setSortingArray([...numbersArray]);
    setHeap(sortAlgorithm instanceof HeapSort);

    // Performance Evaluation
    const start = performance.now();
    // Order Array
    sortAlgorithm.order([...numbersArray]);
    const numberSwaps = sortAlgorithm.arraySequence.length;

    // Swap the sorting array
    let copy = [...numbersArray];
    let index = 0;
    const interval = setInterval(() => {
      if (sortAlgorithm.arraySequence.length > index) {
        let [i, j] = sortAlgorithm.arraySequence[index];
        [copy[i], copy[j]] = [copy[j], copy[i]];//Swap
        setSortingArray(copy);
        setHighlightedBars([i, j]);
        index++;
      } else {
        const end = performance.now();
        setButtonDisabled(false);
        changeMessage(`${sortAlgorithm.name} performed in ${(end - start).toFixed(2)} ms with ${numberSwaps} swaps`);
        clearInterval(interval);
      }
    }, 100);
  }

  const onReset = () => {
    const init = RNDVALUES();
    setSortingArray([...init]);
    changeArray([...init]);
    setHighlightedBars([-1, -1]);
  }

  return (

    <div className='container'>
      <h1 className='title'>Bubble Visualizer</h1>
      <p id='subtitle'>An excercise to display the most commons comparison search algorithms </p>

      <AlgorithmButtons
        isButtonDisabled={isButtonDisabled}
        handleActionBtn={execute}
        handleReset={onReset} />

      <p className='message'>{message}</p>

      <InputArray
        array={numbersArray}
        sortingArray={sortingArray}
        highlightedBars={highlightedBars}
        handleChange={handleChange} />
      {
        isHeap ?
          <TreeVisual sortingArray={sortingArray} highlightedBars={highlightedBars} handleChange={handleChange}></TreeVisual> :
          <Bars sortingArray={sortingArray} highlightedBars={highlightedBars}></Bars>
      }

    </div>

  )

}
export default BubbleVisualizer
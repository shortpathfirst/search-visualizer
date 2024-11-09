import React from 'react'
import './buttons.css'
import { BubbleSort } from '../../Ordinamenti/BubbleSort';
import { HeapSort } from '../../Ordinamenti/HeapSort';
import { QuickSort } from '../../Ordinamenti/QuickSort';
import { TimSort } from '../../Ordinamenti/TimSort';
import { InsertionSort } from '../../Ordinamenti/InsertionSort';
import { MergeSortVisual } from '../../Ordinamenti/MergeSortVisual';

const ALGORITHMS = [
  new BubbleSort(),
  new HeapSort(),
  new QuickSort(),
  new InsertionSort(),
  new MergeSortVisual(),
  new TimSort()
];

function AlgorithmButtons({ isButtonDisabled, handleActionBtn, handleReset }) {

  return (

    <div className='buttonContainer'>
      <div>
        {/* AlGORHTM BUTTONS */}
        {
          ALGORITHMS.map((algorithm, i) => {
            return (
              <div key={`Algorithm ${i}`} className="dropdown">
                <button className='button' disabled={isButtonDisabled} onClick={() => handleActionBtn(algorithm)}>
                  {algorithm.name}
                </button>
                <div className="dropdownContent">
                  {
                    algorithm.description.map((d, j) => {
                      return <p key={`Description ${j}`}>
                        {d}
                      </p>
                    })
                  }
                </div>
              </div>
            )
          })
        }

      </div>
      {/* RESET */}
      <button className='button' disabled={isButtonDisabled} onClick={handleReset}> Reset</button>

    </div>

  )
}

export default AlgorithmButtons
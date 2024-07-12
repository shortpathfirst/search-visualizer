import React from 'react'
import './buttons.css'
function AlgorithmButtons({isButtonDisabled,ALGORITHMS,handleActionBtn,handleReset}) {
    
  return (

    <div className='buttonContainer'>
      <div>
      {/* AlGORHTM BUTTONS */}
      {
        ALGORITHMS.map((algorithm)=>{
          return <React.Fragment>
            <div class="dropdown">
              <button className='button' disabled={isButtonDisabled} onClick={()=>handleActionBtn(algorithm)}> {algorithm.name}</button>
              <div class="dropdownContent">
                {
                  algorithm.description.map((d)=>{
                    return  <p>{d}</p>
                  })
                }

              </div>
            </div>
          </React.Fragment>
        })
      }

      </div>
      {/* RESET */}
      <button className='button' disabled={isButtonDisabled}  onClick={handleReset}> Reset</button> 

    </div>

  )
}

export default AlgorithmButtons
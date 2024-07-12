import React from 'react'
import './input.css'
function InputArray({array,sortingArray,handleChange,color}) {
  return (
    <React.Fragment>
        <div className='inputBox input'>
            { 
            array.map((num,index) => {
                return  <input 
                key={`Number ${index}`} 
                className='number input'  
                onFocus={()=>handleChange('',index)} 
                onChange={ev=>{handleChange(+ev.target.value,index)}} 
                value={num} type='tel'>

                </input>;
            })
            }
        </div>

        <div className='inputBox'>
            { 
            sortingArray.map((num,i) => {
                return  <input 
                key={`Sorted ${i}`} 
                style={{
                    backgroundColor:(i===color[0] || i===color[1])?'orange':'',
                }}  
                readOnly 
                className='number' 
                value={num}>
                    
                </input>;
            })
            }
        </div>
    </React.Fragment>
  )
}

export default InputArray
import React from 'react'

function InputArray({array,sortingArray,handleChange,color}) {
  return (
    <React.Fragment>
        <div className='row first'>
            { 
            array.map((num,index) => {
                return  <input key={`Number ${index}`} className='input' onChange={ev=>{handleChange(+ev.target.value,index)}} value={num} type='tel'></input>;
            })
            }
        </div>

        <div className='row'>
            { 
            sortingArray.map((num,i) => {
                return  <input key={`Sorted ${i}`} style={{
                backgroundColor:(i===color[0] || i===color[1])?'orange':'',
                }}  readOnly className='input' value={num} type='tel'></input>;
            })
            }
        </div>
    </React.Fragment>
  )
}

export default InputArray
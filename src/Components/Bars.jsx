import React from 'react'

function Bars({sortingArray,color}) {

    
  return (
    <div className='showdown'>
    {
       sortingArray.map((val,i)=>{
        return (
        <li 
            key={`Bar ${i}`} 
            className="barre" 
            style={{ 
                backgroundColor:(i===color[0] || i===color[1])?'rgb(185, 22, 185)':'purple',
                height:val*12}}>
            
        </li>)
    })
    }
    </div>
  )
}

export default Bars
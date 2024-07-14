import React,{useState,useEffect} from 'react'
import './bars.css'
function Bars({sortingArray,color}) {

    const [maxVal,setMaxVal] = useState(1);

    const HEIGHTSCALE = 500/maxVal ;
   
    

    useEffect(() => {
      function findMax(){
        let max =1;
        sortingArray.forEach(element => {
          if(element && element > max)
            max = element;
        });
        return max;
      }

      setMaxVal(findMax());
      return () => {
        
      }
    }, [sortingArray])
    
  return (
    <div className='barContainer'>
    {
       sortingArray.map((val,i)=>{
        return (
        <li 
            key={`Bar ${i}`} 
            className="barre" 
            style={{ 
                    backgroundColor:(i===color[0] || i===color[1])?'rgb(185, 22, 185)':'purple',
                    height:val*HEIGHTSCALE,
                }}>
            
        </li>)
    })
    }

    </div>
    
  )
}

export default Bars

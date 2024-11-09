import { useMemo } from 'react'
import './bars.css'

const HEIGHTSCALE = 500;

function Bars({ sortingArray, color }) {

  const maxVal = useMemo(() => {
    let max = 1;
    sortingArray.forEach(element => {
      if (element && element > max)
        max = element;
    });
    return max;
  }, [sortingArray])


  return (
    <div className='barContainer'>
      {
        sortingArray.map((val, i) => {
          return (
            <li
              key={`Bar ${i}`}
              className="barre"
              style={{
                backgroundColor: (i === color[0] || i === color[1]) ? 'rgb(185, 22, 185)' : 'purple',
                height: val * (HEIGHTSCALE / maxVal),
              }}>

            </li>)
        })
      }

    </div>

  )
}

export default Bars

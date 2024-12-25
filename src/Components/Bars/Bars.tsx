import { useMemo } from 'react'
import './bars.css'

const HEIGHTSCALE = 500;
type Props = {
  sortingArray: number[],
  highlightedBars: number[],
}
function Bars({ sortingArray, highlightedBars }: Props) {

  const maxVal = useMemo(() => {
    let max = 1;
    sortingArray.forEach(element => {
      if (element && element > max)
        max = element;
    });
    return max;
  }, [sortingArray])

  const getBarColor = (index: number) => {
    return (index === highlightedBars[0] || index === highlightedBars[1]) ?
      'rgb(185, 22, 185)' :
      'purple';
  }
  return (
    <div className='barContainer'>
      {
        sortingArray.map((val, i) => {
          return (
            <li
              key={`Bar ${i}`}
              className="barre"
              style={{
                backgroundColor: getBarColor(i),
                height: val * (HEIGHTSCALE / maxVal),
              }}>

            </li>)
        })
      }

    </div>

  )
}

export default Bars

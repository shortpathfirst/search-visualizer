import React, { useState, useEffect } from 'react'
import { BinaryTreeUtils } from '../../LayeredDraw/BinaryTreeUtils.js'
import { LayeredTreeDraw } from '../../LayeredDraw/LayeredDraw.js'
import './treeStyle.css'
type Position = {
  x: number,
  y: number
}
type Props = {
  sortingArray: number[],
  highlightedBars: number[],
  handleChange: (newVal: number, index: number) => void,
}
function TreeVisual({ sortingArray, highlightedBars, handleChange }: Props) {


  const [treePositions, setTreePos] = useState<Position[]>([]);

  const SETTINGS = {
    circleSize: '3.5rem',
    circleColor: "orange",
    scale: 1.6,
    yOffset: 200,
    yLineOffset: 170,
    xLineOffset: 32,
  }

  useEffect(() => {

    const binaryHeap = new BinaryTreeUtils(sortingArray);
    const positions: Position[] = [];
    LayeredTreeDraw(binaryHeap, 0, binaryHeap.getHeight(), positions);
    setTreePos(positions.slice(0, sortingArray.length));

  }, [sortingArray])

  return (
    <div className='treeContainer' style={{ width: "100vw", height:"20rem" }}>
      {
        treePositions.map((val, i) => {
          return <React.Fragment key={`Tree ${i}`}>

            <svg width={"2500"} height={"600"} style={{ position: 'absolute' }}>
              {
                treePositions[Math.floor(2 * i + 2)] &&
                <line x1={val.x * SETTINGS.scale + SETTINGS.xLineOffset} y1={val.y * SETTINGS.scale - SETTINGS.yLineOffset}
                  x2={treePositions[Math.floor(2 * i + 2)].x * SETTINGS.scale + SETTINGS.xLineOffset}
                  y2={treePositions[Math.floor(2 * i + 2)].y * SETTINGS.scale - SETTINGS.yLineOffset}
                  strokeWidth="3"
                  stroke="black" />
              }
              {
                treePositions[Math.floor(2 * i + 1)] &&
                <line x1={+val.x * SETTINGS.scale + SETTINGS.xLineOffset} y1={+val.y * SETTINGS.scale - SETTINGS.yLineOffset}
                  x2={treePositions[Math.floor(2 * i + 1)].x * SETTINGS.scale + SETTINGS.xLineOffset}
                  y2={treePositions[Math.floor(2 * i + 1)].y * SETTINGS.scale - SETTINGS.yLineOffset}
                  strokeWidth="3"
                  stroke="black" />
              }

            </svg>

            <div
              className='treeNode'
              style={{
                position: 'absolute',
                left: val.x * SETTINGS.scale,
                top: val.y * SETTINGS.scale - SETTINGS.yOffset,
                backgroundColor: (i === highlightedBars[0] || i === highlightedBars[1]) ? 'rgb(204, 189, 161)' : SETTINGS.circleColor,
                transform: (i === highlightedBars[0] || i === highlightedBars[1]) ? `scale(${1.2})` : `scale(${1})`,
                width: SETTINGS.circleSize,
                height: SETTINGS.circleSize,
                borderRadius: '50%',
                textAlign: 'center',
                fontSize: '2rem',
                fontWeight: '600',
                color: '#666',
                border: '5px rgb(209, 142, 17) solid',
                cursor: 'pointer',

              }}>
              <input
                key={`Number ${i}`}
                className='number'
                onFocus={() => handleChange(-1, i)}
                onChange={ev => { handleChange(+ev.target.value, i) }}
                value={sortingArray[i]} type='tel'>
              </input>

            </div>

          </React.Fragment>
        })
      }

    </div>
  )
}

export default TreeVisual
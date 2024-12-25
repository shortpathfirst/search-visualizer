import React from 'react'
import './input.css'

type Props = {
    array: number[],
    sortingArray: number[],
    handleChange: (newVal: number, index: number) => void,
    highlightedBars: number[],
}

function InputArray({ array, sortingArray, handleChange, highlightedBars }: Props) {

    const getBarColor = (index: number) => {
        return (index === highlightedBars[0] || index === highlightedBars[1]) ?
            'orange' :
            '';
    }
    return (
        <React.Fragment>
            <div className='inputBox'>
                {
                    array.map((num, index) => {
                        return <input
                            key={`Number ${index}`}
                            className='number input'
                            onFocus={() => handleChange(0, index)}
                            onChange={ev => { handleChange(+ev.target.value, index) }}
                            value={num} type='tel'>

                        </input>;
                    })
                }
            </div>

            <div className='inputBox'>
                {
                    sortingArray.map((num, i) => {
                        return <input
                            key={`Sorted ${i}`}
                            style={{
                                backgroundColor: getBarColor(i)
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
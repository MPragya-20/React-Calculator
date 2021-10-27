import React, { useState } from 'react'
import Buttons from './buttons'
import Inputbar from './inputbar'

const Box = () => {
    const [currentInput, SetCurrentInput] = useState('');
    const handleClick = (event) =>{
        const val = event.target.value;
        if (val === 'C'){
            SetCurrentInput("")
        }
        else if(val === '='){
            try {
                SetCurrentInput(eval(currentInput))
            } catch (error) {
                SetCurrentInput("Error")
            }
        }
        else if (val === 'Back'){
            try {
                SetCurrentInput(currentInput.substring(0,currentInput.length-1))
            } catch (error) {
                SetCurrentInput(currentInput)
            }
        }
        else{
            SetCurrentInput(currentInput+val)
        }
    }
    return (
        <div>
            <div className="outerbox">
            <Inputbar currInput = {currentInput} />
            <Buttons click = {handleClick}/>
            </div>
        </div>
    )
}

export default Box

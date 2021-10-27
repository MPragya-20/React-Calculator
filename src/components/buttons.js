import React from 'react'
import ButtonAll from './ButtonAll'
const Buttons = (props) => {
    return (
        <div className="buttons">
            <div className="button_row" align="center">
                    <ButtonAll label = "C" clicked = {props.click}/>
                    <ButtonAll label = "*"clicked = {props.click}/>
                    <ButtonAll label = "/"clicked = {props.click}/>
                    <ButtonAll label = "Back"clicked = {props.click}/>
            </div>
            <div className="button_row">
                    <ButtonAll label = "7"clicked = {props.click}/>
                    <ButtonAll label = "8"clicked = {props.click}/>
                    <ButtonAll label = "9"clicked = {props.click}/>
                    <ButtonAll label = "-"clicked = {props.click}/>
            </div>
            <div className="button_row">
                    <ButtonAll label = "4"clicked = {props.click}/>
                    <ButtonAll label = "5"clicked = {props.click}/>
                    <ButtonAll label = "6"clicked = {props.click}/>
                    <ButtonAll label = "+"clicked = {props.click}/>
            </div>
            <div className="button_row">
                    <ButtonAll label = "1"clicked = {props.click}/>
                    <ButtonAll label = "2"clicked = {props.click}/>
                    <ButtonAll label = "3"clicked = {props.click}/>
                    <ButtonAll label = "%"clicked = {props.click}/>
            </div>
            <div className="button_row">
                    <ButtonAll label = "."clicked = {props.click}/>
                    <ButtonAll label = "0"clicked = {props.click}/>
                    <ButtonAll label = "="clicked = {props.click}/>
            </div>
        </div>
    )
}

export default Buttons

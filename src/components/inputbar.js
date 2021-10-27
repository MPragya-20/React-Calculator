import React from 'react'

const Inputbar = (props) => {
    return (
        <div className="inputbar">
            <input type="text" value ={props.currInput} readOnly/>
        </div>
    )
}

export default Inputbar

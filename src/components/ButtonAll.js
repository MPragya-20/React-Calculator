import React from 'react'

const ButtonAll = (props) => {
    return (
        <div>
            <input type="button" className="btn button"  value = {props.label} onClick={props.clicked}/>
        </div>
    )
}

export default ButtonAll

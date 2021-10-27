import React from 'react'

const Title = (props) => {
    return (
        <div align="center">
            <div><h5><em>{props.title} by {props.author} </em></h5></div>
        </div>
    )
}

export default Title

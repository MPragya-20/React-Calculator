import React from 'react'
import Title from './title'
import Box from './box'
const Main = () => {
    
    return (
        <div align="center" className="main">
            <Title title = {"Simple Calculator"} author ={"Pragya Mukherjee"}/>
            <Box />
            <div className="footer" > 
                    <div style ={{ color:"bisque"}}>
                        <small>&copy; 2021 Pragya Mukherjee. All rights reserved.</small>
                    </div>
                    <div style={{color:"white",padding : "10px"}}>
                        <small>Contact : <a href="https://www.linkedin.com/in/pragyamukherjee/" style={{padding :"10px"}}><i className="fa fa-linkedin" style={{color:"skyblue"}}></i></a> <a href="https://github.com/MPragya-20"><i className="fa fa-github" style={{color:"white"}}></i></a></small>
                    </div>
            </div>
        </div>
    )
}

export default Main

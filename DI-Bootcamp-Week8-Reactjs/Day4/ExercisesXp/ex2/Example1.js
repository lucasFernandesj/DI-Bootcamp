import React from "react";
import Data from '../Data.json'
class Example1 extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){

       console.log()
        return(
            <>
            {Data.map((element , index)=>{
                return(
                    <div key={index}>{element.title}</div>
                )
            })}
            </>
        )
    }
}

export default Example1
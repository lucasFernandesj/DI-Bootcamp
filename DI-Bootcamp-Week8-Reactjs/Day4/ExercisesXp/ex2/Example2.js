import React from "react";
import Data from '../Data.json'
class Example2 extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <>
            {Data.map((element , index)=>{
                return(
                    <div key={index}>{element.slug}</div>
                )
            })}
            </>
        )
    }
}

export default Example2
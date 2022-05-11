import React from "react";
import Garage from "./Garage";
const carinfo = {name: "Ford", model: "Mustang"};
class Car extends React.Component{
    state={
        color:'red'
    }
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Garage size="small"/>
                This {this.state.color} {carinfo.model} 
            </div>
        )
    }
}


export default Car
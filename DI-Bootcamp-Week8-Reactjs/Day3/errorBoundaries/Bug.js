import React from "react";

class Bug extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error:null
        }
    }

    createError=()=>{
        this.setState({error:true})
        throw new Error('crashed on purpose')
    }

    render(){
        return(
            <button onClick={this.createError}>click to crash</button>
        )
    }
}

export default Bug
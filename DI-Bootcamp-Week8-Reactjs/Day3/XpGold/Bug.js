import React from "react";
import BugHandler from './BugHandler'

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
        if(this.state.error){
            return <BugHandler />
        }
        return(
            <button onClick={this.createError}>click to crash</button>
        )
    }
}

export default Bug
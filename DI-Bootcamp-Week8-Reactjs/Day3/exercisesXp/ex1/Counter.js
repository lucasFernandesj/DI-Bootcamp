import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    increment =()=>{
        this.setState({count: this.state.count+1 })
    }
    render(){
        if(this.state.count >=5){
            throw Error('Count bigger than 5')
        }
        return(
            <>
        count: {this.state.count}
        <button onClick={this.increment}>Upp</button>
        <h2></h2>
        </>
        )
        
    }
}

export default Counter
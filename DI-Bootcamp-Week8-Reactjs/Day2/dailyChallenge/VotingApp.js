import React from "react";
import  '../../style/votingApp.css'

class VotingApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            php:0,
            python:0,
            javascript:0,
            java:0
        }
    }

    handleClick = (event) =>{
        // console.log(event.target.id)
        let count = this.state[event.target.id]
        // console.log(this.state[event.target.id])
        this.setState({[event.target.id] : count + 1 })
    }

    render(){
        return(
            <>
                <div onClick={this.handleClick} id="php" name="php">{this.state.php}  PHP</div>
                <div onClick={this.handleClick} id="python">{this.state.python} Python</div>
                <div onClick={this.handleClick} id="javascript">{this.state.javascript} JavaScript</div>
                <div onClick={this.handleClick} id="java">{this.state.java} Java</div>
            </>
        )
    }
}

export default VotingApp
import React from "react";

class FormValidation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            phone:'',
            email:''
        }
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        


    }


    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <input name="firstName" placeholder="firstName" onChange={this.handleChange}></input><br/>
                <input name="lastName" placeholder="lastName" onChange={this.handleChange}></input><br/>
                <input name="phone" placeholder="phone" onChange={this.handleChange}></input><br/>
                <input name="email" placeholder="email" onChange={this.handleChange}></input><br/>
                <input type="submit"></input><br/>
            </form>
            </>
        )
    }
}


export default FormValidation
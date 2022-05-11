import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            age:null,
            errorMsg:'',
            text:'Original textarea text',
            selectedCar:''

        }
    }
    

set =(event)=>{
    this.setState({username:event.target.value})
}
updateAge=(event)=>{
    this.setState({age:event.target.value})
    if(isNaN(event.target.value)){
        this.setState({errorMsg:'Enter a number'})
    }else{
        this.setState({errorMsg:''})
    }
}
handleSubmit=(e)=>{
    console.log('submit form')
    alert(`You are submiting ${this.state.username}`)
    e.preventDefault();
}

handleSelect = (event)=>{
    
    this.setState({selectedCar:event.target.value})
}
    render(){
        let header;
        if(this.state.username !==''){
            header = `Hello ${this.state.username} ,${this.state.age} years old`
        }else{
            header=''
        }
        return(
            <div>
                <h1>{header}</h1>
                
                <p>Enter your name</p>
                <form onSubmit={this.handleSubmit} >
                <input type="text" name="text" placeholder="enter name" onChange={this.set}></input><br />
                <input  name="age" onChange={this.updateAge} placeholder="age"></input>{this.state.errorMsg}<br />
                <input type='submit' value='SUBMIT'></input><br />
                <textarea defaultValue='original text'></textarea>
                <br />
                <select name='cars' onChange={this.handleSelect}>
                    <option value='Volvo'>Volvo</option>
                    <option value='BMW'>BMW</option>
                    <option value='Other'>Other</option>
                </select><br />
                Selected : {this.state.selectedCar}
                </form>
            </div>
        )
    }





}



export default Form
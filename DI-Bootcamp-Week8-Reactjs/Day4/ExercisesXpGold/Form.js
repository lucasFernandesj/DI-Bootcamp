import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            response:'',
            name:'',
            email:''

        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        fetch('http://localhost:3000/api',{
         method:'POST',
         headers:{
           'Content-Type':'application/json'
         },
         body:JSON.stringify({msg:this.state.name})
      })
        .then((res)=>res.text())
        .then((data)=> this.setState({response:data}))
       
        .catch((err)=>{
          console.log(err)
        })
      }


    handleChange=(event)=>{
        // console.log(event.target.value)
        // console.log(event.target.name)
        this.setState({[event.target.name] : event.target.value})
    }


    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="name" name="name" onChange={this.handleChange}/><br />
                {/* <input type="text" placeholder="email" name="email" onChange={this.handleChange}/><br /> */}
                <input type="submit" value="SUBMIT"/>
            </form>
            {this.state.response}
            </>
        )
    }
}

export default Form
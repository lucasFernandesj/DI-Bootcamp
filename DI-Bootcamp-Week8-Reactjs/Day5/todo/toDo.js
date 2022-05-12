import React from "react";
let count=0

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            toDo:''
        }
    }
    handleChange=(event)=>{
       this.setState({toDo:event.target.value})
    }
    add=()=>{
        let arr = this.state.list
        arr.push(this.state.toDo)
        this.setState({list:arr})
        console.log(this.state.list)
        // console.log(this.state.list)
        // console.log(this.state.toDo)

    }
    del=(event)=>{
        let arr = this.state.list
        arr.forEach((element,index)=>{
            if(element ===event.target.innerText){
                arr.splice(index, 1)
            }
        })
        // console.log(event.target.innerText)
        this.setState({toDo:arr})
    }
    render(){
        return(
            <>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.add}>ADD</button>
                <div>
                    {this.state.list.map((element,index)=>{
                        return(
                            <div key={index} onClick={this.del}>{element}</div>
                        )
                    })}
                </div>
        </>
        )
        
    }
}

export default Todo
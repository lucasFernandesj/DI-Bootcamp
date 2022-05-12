import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            year:new Date().getFullYear() ,
            month:new Date().getMonth() ,
            day:new Date().getDay(),
            hour:new Date().getHours(),
            minute:new Date().getMinutes(),
            second:new Date().getSeconds()
        }
    }
    update=()=>{
        this.setState({
            year:new Date().getFullYear() ,
            month:new Date().getMonth() ,
            day:new Date().getDay(),
            hour:new Date().getHours(),
            minute:new Date().getMinutes(),
            second:new Date().getSeconds()
        })
    }
    componentDidMount(){
        
        setInterval(this.update ,1000 );
    }


    render(){
        return(
            <div>
            
            <br/>
            {this.state.day}/{this.state.month+1}/{this.state.year}<br/>
            {this.state.hour}:{this.state.minute}:{this.state.second}<div/>
            
            </div>
        )
    }
}

export default Clock
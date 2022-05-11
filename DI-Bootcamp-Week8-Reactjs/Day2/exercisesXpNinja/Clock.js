import React from "react";


class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentDate:''
        }
    }

    tick =()=>{
        var today = new Date(); 
        var time = today.getHours() + ":" + today
        this.setState({currentDate: time})
    }

    componentDidMount(){
        setInterval(this.tick , 1000)
    }

    render(){
        return(
            <>
                <h1>Working</h1>
                it is {this.state.currentDate}
            </>
        )
    }
}

export default Clock
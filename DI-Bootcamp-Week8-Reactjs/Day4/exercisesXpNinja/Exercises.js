import React from "react";
class XpNinjaDay4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fetched:[]
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:3000/api/users')
        .then((res)=>res.text())
        .then((data)=>this.setState({fetched:JSON.parse(data)}))
        
    }

    render(){
        return(
            <>
            {/* {this.state.fetched} */}
            {this.state.fetched.map((element , index)=>{
                return(
                    <div key={index}>{element.firstName}</div>
                )
            })}
            </>
        )
    }
}

export default XpNinjaDay4
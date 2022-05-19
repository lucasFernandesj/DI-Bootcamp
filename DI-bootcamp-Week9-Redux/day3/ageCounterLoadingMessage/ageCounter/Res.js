import React from "react";
import {connect} from 'react-redux'

class Res extends React.Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
    }
    render(){
        
        
        
        if(this.props.isLoading){return <h1>LOADING....</h1>}
        else{  
            return(
            <>
                Age is :{this.props.age}
            </>
        )

        }
      
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        age:state.age,
        isLoading:state.isLoading
    }
}

export default connect(mapStateToProps,null)(Res) 

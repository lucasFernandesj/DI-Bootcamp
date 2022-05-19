import React from "react";
import {connect} from 'react-redux'
import {incrementAge} from '../redux/actions'

class Incrementer extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
               <button onClick={this.props.incrementAge}>incrementer</button> 
            </>
        )
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        incrementAge:()=>dispatch(incrementAge())

    }
}


export default connect(null,mapDispatchToProps)(Incrementer)

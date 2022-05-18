import React from "react";
import {connect} from 'react-redux'
import {decrementAge} from '../redux/actions'

class Decrementer extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
                <button onClick={this.props.decreaseAge} >decrementer</button>
            </>
        )
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        decreaseAge: ()=> dispatch(decrementAge())
    }
}

export default connect(null,mapDispatchToProps)(Decrementer)
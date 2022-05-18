import React from "react";
import {connect} from 'react-redux'
import{incrementCount} from '../redux/actions'

class Incrementbtn extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        // console.log('increase '+this.props.increase)
        return(
            <>
            <button onClick={this.props.increase}>+</button>
            </>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        increase:()=>dispatch(incrementCount())
    }
}
const mapStateToProps =(state)=>{
    return{
        count:state.count
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Incrementbtn)
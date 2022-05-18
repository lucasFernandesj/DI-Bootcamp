import React from "react";
import {connect} from 'react-redux'
import{decreaseCount} from '../redux/actions'

class Decreasebtn extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <button onClick={this.props.decrease}>-</button>
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        count:state.count
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        decrease:()=>dispatch(decreaseCount())
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Decreasebtn)
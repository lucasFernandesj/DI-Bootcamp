import React from "react";
import {connect} from 'react-redux'
import {changeText} from '../redux/actions'

class InputComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <input type="text" onChange={this.props.changeName}/>
            
            </>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        changeName:(e)=>dispatch(changeText(e.target.value))

    }
}


export default connect(null,mapDispatchToProps)(InputComponent)
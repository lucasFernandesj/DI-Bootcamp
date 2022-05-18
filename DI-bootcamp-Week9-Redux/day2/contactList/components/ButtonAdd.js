import React from "react";
import {connect} from 'react-redux'
import{addContact} from '../redux/actions'

class ButtonAdd extends React.Component{
    constructor(){
        super();

    }
    

    render(){
        
        return(
            <>
            <br/>
                <button  onClick={this.props.addName}>Add to list</button>
                
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        contact_name:state.contact_name,
       
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
      addName:()=>dispatch(addContact())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ButtonAdd)
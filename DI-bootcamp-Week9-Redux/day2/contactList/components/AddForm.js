import React from "react";
import {connect} from 'react-redux'
import {addName} from '../redux/actions'

class AddForm extends React.Component{
    constructor(){
        super();
    }

    render(){
        console.log('props: '+this.props)
        
        return(
            <>
            <h2>Add contact</h2>
            <input type="text" onChange={this.props.UserName}/>
            
            </>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        UserName:(event)=>dispatch(addName(event.target.value))
    }
}


export default connect(null,mapDispatchToProps)(AddForm)
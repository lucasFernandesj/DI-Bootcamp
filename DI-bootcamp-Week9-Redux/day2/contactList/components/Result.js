import React from "react";
import {connect} from 'react-redux'
import{deleteName} from '../redux/actions'

class Result extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            {this.props.list.map((element,index)=>{
                return(
                    <div key={index}>{element} <button id={index} onClick={this.props.deleteName}>Delete</button> </div>
                )
            })}
            </>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        list:state.contacts_list
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        deleteName:(e)=>dispatch(deleteName(e.target.id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Result)
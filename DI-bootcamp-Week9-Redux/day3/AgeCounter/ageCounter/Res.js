import React from "react";
import {connect} from 'react-redux'

class Res extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
                Age is :{this.props.age}
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        age:state.age
    }
}

export default connect(mapStateToProps,null)(Res) 

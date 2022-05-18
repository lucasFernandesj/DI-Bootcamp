import React from "react";
import {connect} from 'react-redux'

class Layout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            Clicked {this.props.count} times
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        count:state.count
    }
}

export default connect(mapStateToProps,null)(Layout)
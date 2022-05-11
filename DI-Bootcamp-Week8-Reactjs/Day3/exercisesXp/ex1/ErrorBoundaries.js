import React from "react";

class ErrorBoundaries extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error:null,
            errorInfo:null
        }
    }
    componentDidCatch(error , errorInfo){
        console.log('error: '+error)
        console.log('errorInfo: '+errorInfo)
        this.setState({error:error})
    }

    

    render(){
        if(this.state.error){
            return(
                <h1>Something went wrong ...</h1>
            )
        }
        return this.props.children
    }
   
}

export default ErrorBoundaries
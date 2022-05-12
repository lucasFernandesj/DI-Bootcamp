import React from "react";

class ErrorBoundaries2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false,
            error:null,
            errorMessage:null
        }
    }

    componentDidCatch(){
        this.setState({error:true})
    }

    render(){
        if(this.state.error){
            return <h1>Error rendering this component</h1>
        }
        return this.props.children
    }
    

}

export default ErrorBoundaries2
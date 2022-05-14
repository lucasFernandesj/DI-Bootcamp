import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <>
            <h1>Company</h1>
            <p>We do styff</p>
            </>
        )
    }
}

export default Header
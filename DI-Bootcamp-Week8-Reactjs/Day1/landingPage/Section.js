import React from "react";

class Section extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <>
            <h2>About the company</h2>
            <p>A company tha does stuff!</p>
            <h2>Our values</h2>
            <p>A company with values</p>
            <h2>Our misiion</h2>
            <p>To make the world a better place</p>
            </>
        )
    }
}

export default Section
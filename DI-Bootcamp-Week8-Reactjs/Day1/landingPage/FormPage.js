import React from "react";
// import './style.css'
class FormPage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <>
            <h2>Contact us</h2>
            <form>
                <input type="text"/><br />
                <textarea />
            </form>
            </>
        )
    }
}

export default FormPage
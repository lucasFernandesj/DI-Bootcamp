import React from "react";
import {Link} from 'react-router-dom'

class NavLink extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <>
            <Link to='/'>Home</Link><br/>
            <Link to='/about'>about</Link><br/>
            <Link to='/shop'>shop</Link><br/>
            </>
            
        )
    }
}

export default NavLink
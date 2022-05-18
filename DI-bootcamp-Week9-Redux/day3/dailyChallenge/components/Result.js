import React from "react";
import {connect} from 'react-redux'

class Result extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>  
            {this.props.list.map((element,index)=>{
                return(
                    <div key={index}>
                        <p>{element.name}</p>
                        <p>{element.username}</p>
                        <p>{element.address.city}</p>


                    </div>
                )
            })}
            
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        list:state.arr
    }
}
export default connect(mapStateToProps, null)(Result)
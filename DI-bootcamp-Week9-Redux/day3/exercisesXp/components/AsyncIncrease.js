import React from "react";
import {connect} from 'react-redux'
import {handleIncrementAsync} from '../redux/actions'

class AsyncIncrease extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
       
        return(
            <>
                <button onClick={()=>this.props.incrementAsync()}>Async Increase</button>
            </>
        )
    }

}
const mapStateToProps =(state)=>{
    return{
        count:state.count
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        incrementAsync: ()=>dispatch(handleIncrementAsync()) 
    }
}
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         increase:()=>dispatch(incrementCount())
//     }
// }

export default connect(mapStateToProps,mapDispatchToProps)(AsyncIncrease)
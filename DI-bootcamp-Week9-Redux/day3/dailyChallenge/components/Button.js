import React from 'react'
import {connect} from 'react-redux'
import {fetchData} from '../redux/actions'


class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <button onClick={this.props.getData}>Click to fetch</button>
            </>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getData:()=>dispatch(fetchData())
    }
}
// export default Button
export default connect(null , mapDispatchToProps)(Button)
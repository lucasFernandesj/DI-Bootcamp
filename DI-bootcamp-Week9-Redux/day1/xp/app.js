import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import {increase , decrease} from './action/action.js'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      prop1:'property one'
    }
    
  }
   

  render(){
    const {handleDown , handleUp , count} =this.props
    
     return (
    <div className="App">
      <header className="App-header">
        Counter: {count}
        <button onClick={handleUp}>+</button><br/>
        <button onClick={handleDown}>-</button>
       
      </header>
    </div>
  );
  } 
}
//How to access the global state
const mapStateToProps=(state)=>{
  return{
    count:state.count
  }
}

//assigns values to the functions that are on other files
const mapDispatchToProps=(dispatch)=>{
   return{
    handleUp:()=>dispatch(increase()),
    handleDown:()=>dispatch(decrease())
}
}

//Connect global state to our local props
export default connect(mapStateToProps,mapDispatchToProps)(App);
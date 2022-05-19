import React from 'react'
import './App.css';
import InputComponent from './miniProjectSnapShot/components/InputComponent';
import Result from './miniProjectSnapShot/components/Result';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
 return (
    <div className="App">
      <header className="App-header">
        <h1>SNAP SHOT</h1>
        <InputComponent /><br/>
        <Result/>
      </header>
    </div>
  );
  }
 
}

export default App;

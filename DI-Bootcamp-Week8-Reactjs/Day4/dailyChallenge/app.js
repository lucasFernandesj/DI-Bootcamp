import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      message:'message',
      txt:'',
      get:''
    }
  }
  async componentDidMount(){
    try{
      const response = await fetch('/api/hello')
    const data = await response.text()
    // console.log(data)
    this.setState({message:data})
    }
    catch(err){
      console.log(err)
    }
    
  }
  handleChange =(e)=>{
    this.setState({txt:e.target.value})
  }
  handleSubmit=(e)=>{
      e.preventDefault()
      fetch('/api/world',{
       method:'POST',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify({text:this.state.txt})
    })
      .then((res)=>res.text())
      .then((data)=> this.setState({message:data}))
     
      .catch((err)=>{
        console.log(err)
      })
    }
    getRequest =()=>{
      try{
        fetch('http://localhost:3000/api/test')
        .then((res)=>res.text())
        .then((data)=>this.setState({get:data}))
      }
      catch(err){
        console.log(err)
      }
    }
  render(){
    return(
      <div className="App">
        <header className='App-header'>
         
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="text"  onChange={this.handleChange}/>
            <input type="submit" value="SUBMIT" />
          </form>
          {this.state.message}
          <button onClick={this.getRequest}>Click to test fetch</button><br />
          {this.state.get}
        </header>
      </div>
    )
  }
}

export default App;

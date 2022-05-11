import React from "react";
import "./FormDailyChallenge.css";
class FormDailyChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName:'',
        lastName:'',
        age:'',
        gender:'',
        destination:'',
        restrictions:[]
    };
  }

  handleChange=(event)=>{
    //   console.log(event.target.value)
    //   console.log(event.target.id)
    // const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    // this.setState({[event.target.name]:value})
    this.setState({[event.target.id]:event.target.value})
  }
  checkChange=(event)=>{
      console.log(event.target.id)
     let arr = this.state.restrictions 
     
     if(arr.indexOf(event.target.id) === -1){
         arr.push(event.target.id)
         this.setState({restrictions:arr})
         console.log(this.state.restrictions)
     }
     else{
         arr.forEach((element , index)=>{
             if(element === event.target.id){
                arr.splice(index , 1)
                this.setState({restrictions:arr})
                console.log(this.state.restrictions)
             }
         })
     }
  }


  handleSubmit=(event)=>{
      event.preventDefault()
      document.querySelector('.res').style.display='flex'


  }
  render() {
    return (
      <>
        <div className={'form'}>
          <form action='/' method='GET' onSubmit={this.handleSubmit}>
              <input type='text' name="firstName"id="firstName" placeholder="first name" onChange={this.handleChange}></input><br/>
              <input type='text' name="lastName"id="lastName" placeholder="last name" onChange={this.handleChange}></input><br />
              <input type='number' name="age"id="age" placeholder="age" onChange={this.handleChange}></input><br/>
              <input type='radio' value='male' id='gender' name="gender" onChange={this.handleChange} />Male<br />
              <input type='radio' value='female' id='gender' name="gender" onChange={this.handleChange} />female<br />
              <select id='destination' onChange={this.handleChange} name="destination">
                    <option id="destination" value='Tel Aviv'>Tel Aviv</option>
                    <option id="destination" value='Roma'>Roma</option>
                    <option id="destination" value='Lisbon'>Lisbon</option>
                </select><br />
                Dietary restrictions<br />
                Kosher<input type='checkbox' value="kosher" id='kosher' name="restriction" onChange={this.checkChange}/><br />
                Vegan<input type='checkbox' value="vegan" id='vegan' name="restriction" onChange={this.checkChange}/><br />
                Diet<input type='checkbox' value="diet" id='diet' name="restriction" onChange={this.checkChange}/><br />

              <input type='submit' value='SUBMIT'></input>
          </form>
        </div>
        <div className={'res'}>
            first name  {this.state.firstName}<br/>
            last name  {this.state.lastName}<br/>
            age  {this.state.age}<br/>
            gender {this.state.gender}<br />
            destination {this.state.destination}<br />
            restrictions {this.state.restrictions.map((element)=>{
                return  element+' '}
                
                )}
        </div>
      </>
    );
  }
}

export default FormDailyChallenge;
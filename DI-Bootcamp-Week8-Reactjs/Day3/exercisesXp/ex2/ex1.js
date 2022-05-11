import React from "react";

class Day3ExerciseXp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            favoriteColor:'Red',
            sentence:''
        }
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({favoriteColor: "Blue"})
        }, 2000)
        console.log('did mount')
    }


    shouldComponentUpdate(){
        return true
    }
    changeColor =()=>{
        this.setState({favoriteColor:'Pink'})
    }
    changeToYellow =()=>{
        this.setState({favoriteColor:'Yellow'})
    }
     
        
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps: '+JSON.stringify(prevProps))
        console.log('prevState: '+JSON.stringify(prevState))
        
      }

      getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite color was " + prevState.favoriteColor;
        return null
      }

    render(){
        return(
            <>
            <h1 >Favourite color: {this.state.favoriteColor}</h1>
            <button onClick={this.changeColor}>change to pink!!</button>
            <h1>{this.state.sentence}</h1>
            <h1 id="div1"></h1>
            </>
        )
    }
}

export default Day3ExerciseXp
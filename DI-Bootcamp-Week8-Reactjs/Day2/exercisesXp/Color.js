import React from "react"

class Color extends React.Component{
    constructor(props){
        super(props)
        this.state={favoriteColor:'red'}
    }

    change =()=>{
        this.setState({favoriteColor:'yellow'})
    }
    changeToBlue=()=>{
        this.setState({favoriteColor:'blue'})
    }

    render(){
        return(
            <>
            <h1>My favourite color is {this.state.favoriteColor}</h1>
            <button onClick={this.changeToBlue}>change to blue</button>
            </>
        )
    }

    componentDidMount(){
        setTimeout(this.change , 3000)
    }
}



export default Color
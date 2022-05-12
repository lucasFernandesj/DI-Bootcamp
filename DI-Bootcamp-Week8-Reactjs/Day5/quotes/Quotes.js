import React from "react";
import quotes from './quotes'

class Box extends React.Component{
    constructor(props){
        super(props);
        this.state={selQuote:'',author:'',color:''
    }

    }
handleClick=()=>{
    let num = getRandomIntInclusive(0, quotes.length)
    // let quote = quotes[num]
    console.log(quotes[num].quote)
    this.setState({selQuote:quotes[num].quote , author:quotes[num].author, })
}
    render(){
        return(
            <>
            <button onClick={this.handleClick}>Get random quote</button>
            {/* {console.log(quotes[0])} */}
            <div>
                {this.state.author}<br />
                {this.state.selQuote}
            </div>
            </>
        )
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

export default Box
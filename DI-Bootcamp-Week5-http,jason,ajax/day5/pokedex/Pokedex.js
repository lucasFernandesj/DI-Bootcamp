import React from "react";

class Pokedex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentPokemon:''
        }
    }

    getPokemon=()=>{
        let id = getRandomIntInclusive(1, 150)
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res)=>res.json())
        .then((data)=>this.setState({currentPokemon:data}))
    }
    
   
    render(){
        return(
            <>
                <button onClick={this.getPokemon}>Click to fetch</button><br/>
                {this.state.currentPokemon.name}<br />
                {this.state.currentPokemon.type}

            </>
        )
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}




export default Pokedex
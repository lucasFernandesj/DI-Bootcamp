import React from "react";
import { connect } from "react-redux";
import {fetchData} from '../redux/actions'

class Result extends React.Component{
    constructor(props){
        super(props);

    }

   componentDidMount(){
       //function to trigger fetch
       this.props.getData()


   }


   
   render(){


    
       return(
           <>

            text: {this.props.text}<br/>
            list <br/>


            <div className="container">

            {

              this.props.list.map((element,index)=>{
                return(
                    <div key={index} className="card">{element.name}<br /> <img src={element.url} /></div>
                    )
                })

              }
                </div>



            </>
        )
        console.log(this.props.list)
    }
}

const mapStateToProps=(state)=>{

    return{
        text: state.text,
        list: state.filteredArr || state.arr
        //whats rendered on the page is state.list
        //at first , state.filteredArr is an emprt array , a falsy value , so state.list
        //receives state.arr , that contains all of the pokemons.
        //as soon as the user types anything , the filtered array is gonna be an array containing
        //values and therefor , will be rendered instead of state.arr

    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getData:()=>dispatch(fetchData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Result)
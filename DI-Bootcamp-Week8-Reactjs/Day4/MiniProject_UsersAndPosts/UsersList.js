import React from "react";

class UsersList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arr:[],
            isLoaded:false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>this.setState({arr:data}))
        this.setState({isLoaded:true})
    }

    render(){
        if(this.state.isLoaded === false){
            return <h1>LOADING...</h1>
        }
        return(

            <>
            <h1>List Of Users</h1>
            {this.state.arr.map((element, index)=>{
                return(
                    <div key={index}>
                        <b>ID</b> {element.id}<br/>
                        <b>Name</b> {element.name}<br />
                        <b>User name</b> {element.username}<br />
                        <b>Email</b> {element.email}<br />
                        <b>City</b> {element.address.city}


                    </div>
                )
            })}

            </>
        )
    }
}

export default UsersList
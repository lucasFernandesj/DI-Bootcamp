import React from 'react'

class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            posts:[],
            errorMsg:''
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>this.setState({posts:data}))
        // console.log('arr: '+this.state.arr)
    }
    
    render(){
        return(
            <>
            <h1>List of posts</h1>
            {this.state.posts.map((element , index)=>{
                return(
                    <div key={index}>{element.title}</div>
                )
            })}
            </>
        )
    }
}

export default PostList
export const fetchData =()=> (dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
.then(response => {
  console.log('At the action.js\n'+response);
  dispatch({type:'GET_DATA',payload: response});
 
})
.catch(err => console.error(err));
}
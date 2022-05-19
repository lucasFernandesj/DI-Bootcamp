export const changeText=(text)=>{
    return{
        type:'CHANGE_TEXT',
        payload:text
    }
}

export const fetchData=()=>(dispatch)=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then((data)=>{
        dispatch({type:'GET_DATA',payload: data.results});
    })
    .catch(err => console.error(err));
}
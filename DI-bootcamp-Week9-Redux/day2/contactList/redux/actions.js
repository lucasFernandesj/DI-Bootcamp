export const addName=(text)=>{
    console.log(text)
    return{
        type:'ADD_NAME',
        payload:text
    }
}

export const addContact=(data)=>{

    return{
        type:'ADD_CONTACT',
        payload:data
    }
}

export const deleteName=(data)=>{
    return{
        type:'DELETE_NAME',
        payload:data
    }
}



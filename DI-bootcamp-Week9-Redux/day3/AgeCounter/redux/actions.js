export const incrementCount = (num) =>{
    return{
        type:'INCREMENT',
        payload:num
    }
}

export const decreaseCount=(num)=>{
    return{
        type:'DECREASE',
        payload:num
    }
}

export const handleIncrementAsync=()=>(dispatch)=>{
    console.log('entered function')
     setTimeout(()=>{
         console.log('entered async')
        dispatch({type:"INCREMENT_ASYNC"
        })
     },1000)
    
}


////////////////////////////////////////////////////////////////////
//AGE COUNTER
export const incrementAge =()=>{

    return{
        type:'INCREMENT_AGE'
    
    }
}

export const decrementAge=()=>{
    return{
        type:'DECREASE_AGE'
    }
}
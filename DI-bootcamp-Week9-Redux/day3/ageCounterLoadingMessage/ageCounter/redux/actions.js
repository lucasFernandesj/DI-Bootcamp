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
export const incrementAge =()=>(dispatch)=>{
    dispatch({type:'LOADING'})
    console.log('')
  setTimeout(()=>{
      dispatch({type:'INCREMENT_AGE'
    })
  },2000)
  
}

export const decrementAge=()=>{
    return{
        type:'DECREASE_AGE'
    }
}
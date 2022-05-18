let initState={
    count:0,
    age:0
}


export const reducer = (state=initState , action)=>{
    switch(action.type){
        case 'INCREMENT':
            
            return{
                ...state,count:state.count+1
            }
        case 'DECREASE':
            
            return{
                ...state,count:state.count-1
            }
        case 'INCREMENT_ASYNC':
            console.log(state.count)
             return{...state,count:state.count+1}

        case 'INCREMENT_AGE':
            console.log('CAUGHT!  age=>'+state.age)
            return{
                ...state,age:state.age+1
            }
        case 'DECREASE_AGE':
            console.log('CAUGHT!  age=>'+state.age)
            return{
                ...state,age:state.age-1
            }





            default : return{...state}
    }
}
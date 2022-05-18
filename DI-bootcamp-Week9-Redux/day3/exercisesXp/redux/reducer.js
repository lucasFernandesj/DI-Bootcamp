let initState={
    count:0
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
            default : return{...state}
    }
}
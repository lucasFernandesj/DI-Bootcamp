import { bindActionCreators } from "redux"

let initState={
    arr:[]
}

export const reducer=(state=initState,action)=>{
    switch(action.type){
        case 'TEST':
            return{...state}

        case 'GET_DATA':
            return{...state, arr:action.payload}
        



            default:
                return {...state}
    }

}
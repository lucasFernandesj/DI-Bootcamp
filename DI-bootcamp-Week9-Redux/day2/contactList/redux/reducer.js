let initState={
    contact_name:'',
    contacts_list:[],
    
}


export const reducer=(state=initState,action)=>{
    
    switch(action.type){
        case 'ADD_NAME':
            return{
                ...state , contact_name:action.payload
    }
        case "ADD_CONTACT":
            
            return{
                 ...state, contacts_list:[...state.contacts_list,state.contact_name]
            }
        case 'DELETE_NAME':
            state.contacts_list.splice(action.payload,1)
            return{
                ...state,contacts_list:[...state.contacts_list]
            }
        }
       return{...state}
    }

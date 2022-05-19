let initState = {
    text: "",
    arr:[],
    filteredArr:[]
  };
  
  
  export const reducer = (state = initState, action) => {
    switch (action.type) {
      case "TEST":
        return { ...state };
      case "CHANGE_TEXT":
      
        let filtered = state.arr.filter((element)=>element.name.toLowerCase().includes(action.payload.toLowerCase()))
        return {
          ...state,
         text: action.payload,
         filteredArr: [...filtered]
        };
      case 'GET_DATA':
          return{...state, arr:action.payload}
      default:
        return { ...state };
    }
  
  
  };
  
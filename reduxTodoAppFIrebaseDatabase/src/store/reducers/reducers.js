import actionTypes from '../constants/constant'

const initialState = {
    todos:[],
    editing:false,
};

export default (state = initialState , action)=>{
    switch(action.type){
        case actionTypes.GETDATA:{
            return{
                ...state,
                todos:state.todos.concat(action.payload)
            }
        }
        case actionTypes.ADD:{
            return {
                ...state,
               todos:state.todos.concat(action.payload)
            }
        }
        case actionTypes.DELETE:{
            let index;
            let newTodos= [...state.todos];
            newTodos.find((val,ind)=> {if(val.id === action.payload){return index=ind}})
            newTodos.splice(index,1)
            return { 
                ...state,
                todos:newTodos,
                editing:false
            }
        }
        case actionTypes.EDIT:{
            return {
                ...state,
                editing:true
            }
        }
        
        case actionTypes.UPDATE:{
            let index;
            let newTodos= [...state.todos];
            let todo= action.payload.val();
            newTodos.find((val,ind)=> {if(val.id === action.payload.key){return index=ind}})
            newTodos.splice(index,1,todo)
            console.log("Update")
            return {
                ...state,
                todos:newTodos,
                editing:false,
            }
        }
        case actionTypes.COMPLETED:{
            let newTodos = [...state.todos];
            newTodos[action.payload].isCompleted = true;
            return{
                ...state,
                todos:newTodos,
                editing:false,
            }
        }
        default: return state;            
    }
}

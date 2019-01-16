import actionTypes from '../constants/constant'

const initialState = {
    todos:[],
    editing:false,
};

export default (state = initialState , action)=>{
    switch(action.type){
        case actionTypes.ADD:{
            return {
                ...state,
               todos: [...state.todos,action.payload]
            }
        }
        case actionTypes.DELETE:{
            let newTodos= [...state.todos];
            newTodos.splice(action.payload,1)
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
            let newTodos= [...state.todos];
            let todo= action.payload.todo;
            let ind = action.payload.ind
            let isCompleted = action.payload.isCompleted
            newTodos.splice(ind,1,{todo,isCompleted})
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

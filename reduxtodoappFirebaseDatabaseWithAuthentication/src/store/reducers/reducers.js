import actionTypes from '../constants/constant'

const initialState = {
    login:false,
    userName:'',
    userId:'',
    todos:[],
    editing:false,
};

export default (state = initialState , action)=>{
    switch(action.type){
        case actionTypes.GETUSER:{
            return{
                ...state,
                userName:action.payload.name,
                userId:action.payload.id,
                login:true
            }
        }
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
            let newTodos= [...state.todos];
            let todo = newTodos.find((val)=> {if(val.id === action.payload){return val}})
            let index = newTodos.indexOf(todo)
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
            let newTodos= [...state.todos];
            let updatedTodo= action.payload.val();
            let todo = newTodos.find((val)=> {if(val.id === action.payload.key){return val}})
            let index = newTodos.indexOf(todo)
            newTodos.splice(index,1,updatedTodo)
            return {
                ...state,
                todos:newTodos,
                editing:false,
            }
        }
      
        default: return state;            
    }
}

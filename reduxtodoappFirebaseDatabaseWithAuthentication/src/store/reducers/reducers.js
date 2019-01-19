import actionTypes from '../constants/constant'

const initialState = {
    userName:'',
    userId:'',
    todos:[],
    login:false,
    data:false,
    editing:false,
};

export default (state = initialState , action)=>{
    switch(action.type){
        case actionTypes.SIGNIN:{
            return{
                ...state,
                login:true
            }
        }
        case actionTypes.SIGNOUT:{
            return{
                ...state,
                userName:'',
                userId:'',
                todos:[],
                login:false,
                data:true,
                editing:false
            }
        }

        case actionTypes.GETDATA:{
            return{
                ...state,
                userName:action.name,
                userId:action.uid,
                data:true
            }
        }
        case actionTypes.ADD:{
            return {
                ...state,
                todos:action.payload
            //    todos:state.todos.concat(action.payload),
            }
        }
        case actionTypes.DELETE:{
            // let newTodos= [...state.todos];
            // let todo = newTodos.find((val)=> {if(val.id === action.payload){return val}})
            // let index = newTodos.indexOf(todo)
            // newTodos.splice(index,1)
            return { 
                ...state,
                // todos:newTodos,
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
            // let newTodos= [...state.todos];
            // let updatedTodo= action.payload.val();
            // let todo = newTodos.find((val)=> {if(val.id === action.payload.key){return val}})
            // let index = newTodos.indexOf(todo)
            // newTodos.splice(index,1,updatedTodo)
            return {
                ...state,
                // todos:newTodos,
                editing:false,
            }
        }
      
        default: return state;            
    }
}

import {IAddTodo, IState} from "./Interface";
import {ADD_TODO, CHANGE_COMPLETION} from "./actions";

export const initialState: IState = {todoList: [], numberOfCases: 0} ;
export const reducer = (state = initialState, action: IAddTodo) => {
    switch (action.type) {
        case ADD_TODO: {
            const newState = [...state.todoList,
                {
                    value: action.payload.value,
                    id: action.payload.id,
                    isDone: action.payload.isDone
                }];
            return {todoList: newState, numberOfCases: ++state.numberOfCases}
        }
        case CHANGE_COMPLETION: {
            const newState = state.todoList;
            newState.map(item => {
               if (item.id === action.payload.id) {
                   item.isDone = !item.isDone;
               }
            });
            return {...state, todoList: newState}
        }
        default:
            return state;
    }
};

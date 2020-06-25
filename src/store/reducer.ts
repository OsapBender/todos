import {IAction, IState} from "./Interface";
import {ADD_TODO} from "./actions";

export const initialState: IState = {todoList: []};
export const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ADD_TODO: {
            const newState = [...state.todoList, action.value];
            return {...state, todoList: newState}
        }
        default:
            return state;
    }
};

import {IAddTodo, IState, ITodoList} from "./Interface";
import {ADD_TODO, CHANGE_COMPLETION} from "./actions";

export const initialState: IState = {todoList: [], numberOfCases: 0};
export const reducer = (state = initialState, action: IAddTodo) => {
    console.log(action.type)
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
            const newState: ITodoList[] = [];
            state.todoList.map(todo => {
                    if (action.payload.id === todo.id) {
                        newState.push({
                            id: todo.id,
                            value: todo.value,
                            isDone: !todo.isDone
                        })
                    } else {
                        newState.push({
                            id: todo.id,
                            value: todo.value,
                            isDone: todo.isDone
                        })
                    }
                }
            );
            return {...state, todoList: newState}
        }
        default:
            return state;
    }
};

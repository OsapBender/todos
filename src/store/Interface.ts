export interface IState {
    todoList: ITodoList[]
    numberOfCases: number
}

export interface ITodoList {
    value: string
    id: number
    isDone: boolean
}

export interface IContextProps {
    state: IState;
    dispatch: ({type, payload}: IAddTodo | IDone ) => void;
}

export interface IAddTodo {
    type: string
    payload: {value: string, id: number, isDone: boolean}
}

export interface IDone {
    type: string
    payload: {id: number}
}



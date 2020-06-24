export interface IState {
    todoList: String[]
}

export interface IContextProps {
    state: IState;
    dispatch: ({type, value}:{type:string, value: string}) => void;
}

export interface IAction {
    type: string
    value: string
}

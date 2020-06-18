interface IState {}

export interface IContextProps {
    state: IState;
    dispatch: ({type}:{type:string}) => void;
}

export interface IAction {
    type: string
}
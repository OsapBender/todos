import {IAction} from "./Interface";

export const initialState = {name: 'Ivan'};
export const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        default:
            return state;
    }
}
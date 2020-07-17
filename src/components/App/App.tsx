import React, {useReducer} from 'react';
import Todo from "../Todo/Todo";
import {StoreContext} from "../../store/context";
import {initialState, reducer} from "../../store/reducer";

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={ {dispatch, state} }>
            <div className="App">
                <Todo/>
            </div>
        </StoreContext.Provider>

    );
}

export default App;

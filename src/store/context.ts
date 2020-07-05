import React from "react";
import {IContextProps} from "./Interface";
import {initialState, reducer} from "./reducer";

export const StoreContext = React.createContext<IContextProps>({initialState, reducer});
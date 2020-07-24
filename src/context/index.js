import React, {createContext, useReducer} from "react";
import Reducer from '../reducers/index'


const initialState = {
    authUser: [],
    countries: [],
    country : {},
    ads : [],
    noRecord : false,
    loader : true,
    search_query: [],
    isAuthenticated: false
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;
import React,{useReducer,useContext} from 'react'
import { reducer } from './reducer'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

    const initialState = {
        user:null
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    return(
        <AppContext.Provider value={{...state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider}
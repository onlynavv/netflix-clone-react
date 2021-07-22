export const reducer = (state,action) => {
    if(action.type === 'ADD_USER'){
        return({
            ...state,
            user:action.payload
        })
    }
    if(action.type === 'SET_USER'){
        return{
            ...state,
            user:null
        }
    }
    return state
}
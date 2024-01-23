import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'


const initState = {
    value:0,
    change:false,
}

function Reducer(prevState = initState, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...prevState,
                value: prevState.value + 1
            }
        case 'decrement':
            return {
                ...prevState,
                value: prevState.value - 1
            }
        case 'change-background':
            return {
                ...prevState,
                change: action.payload
            }
        default:
            return prevState
    }
}

const store = createStore(Reducer,applyMiddleware(logger));

export default store
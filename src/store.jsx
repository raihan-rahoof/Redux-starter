import {createStore} from 'redux';

const initState = {
    value:0
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
        default:
            return prevState
    }
}

const store = createStore(Reducer);

export default store
import {combineReducers} from 'redux'
import {REGISTERED_SUCCESS,REGISTERED_ERROR,LOGIN_SUCCESS,LOGIN_ERROR} from '../action'
import {routerReducer} from 'react-router-redux'
let initialState = {state:true};

function register(state = initialState , action) {
    switch(action.type) {
        case REGISTERED_SUCCESS:
            return state
        case REGISTERED_ERROR:
            return action.data
        default:
            return state    
    }
}
function login(state = initialState, action) {
    switch(action.type) {
        default:
            return state
    }
}
const todoApp = combineReducers({
    register,
    login,
    routing: routerReducer
})

export default todoApp
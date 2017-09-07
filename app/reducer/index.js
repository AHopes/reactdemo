import {combineReducers} from 'redux'
import {SUCCESS, REGISTERED_ERROR, LOGIN_ERROR, USERINFO} from '../action'
import {routerReducer} from 'react-router-redux'
let initialState = {state:true, message: ''};

function login(state = initialState , action) {
    switch(action.type) {
        case SUCCESS:
            return action.data
        case REGISTERED_ERROR:
            return action.data
        case LOGIN_ERROR:
            return action.data
        default:
            return state    
    }
}

let initialUserInfo = {};

function user(state = initialUserInfo, action) {
    switch(action.type) {
        case USERINFO: 
            return action.data
        default:
            return state
    }
}
const todoApp = combineReducers({
    login,
    user,
    routing: routerReducer
})

export default todoApp
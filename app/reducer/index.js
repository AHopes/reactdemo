import {combineReducers} from 'redux'
import {ADD_TODO} from '../action'

function showText(state = '老邓', action) {
    switch(action.type) {
        case ADD_TODO:
            return action.data
        default:
            return state    
    }
}

const todoApp = combineReducers({
    showText
})

export default todoApp
import {createStore, compose} from 'redux'
import todoApp from '../reducer'

export default function configureStore(initialState) {
    const store = createStore(todoApp, 
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}
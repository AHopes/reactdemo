import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router'
import ThunkMiddleware from 'redux-thunk'
import todoApp from '../reducer'

const routeMiddleware = routerMiddleware(browserHistory);
const finalCreateStore = compose(applyMiddleware(ThunkMiddleware,routeMiddleware))(createStore)

export default function configureStore(initialState) {
    const store = finalCreateStore(todoApp, 
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}
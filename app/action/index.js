import * as fetchTodo from '../fetch'
import {push} from 'react-router-redux'

export const REGISTERED = "REGISTERED"
export const REGISTERED_SUCCESS = "REGISTERED_SUCCESS"
export const REGISTERED_ERROR = "REGISTERED_ERROR"
export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"

export function registered(url, params) {
    return (dispatch) => {
        fetchTodo.post(url, params)
        .then(result => {
            console.log(result)
            dispatch(push('/index'))
        })
        .catch(err => {
            dispatch({
                type: 'REGISTERED_ERROR',
                data: {state: false}
            })
        })
    }
}
export function login(url, params) {
    console.log(fetchTodo)
    // return (dispatch) => {
        
    // }
}
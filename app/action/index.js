import * as fetchTodo from '../fetch'
import {push} from 'react-router-redux'

export const REGISTERED_ERROR = "REGISTERED_ERROR"
export const SUCCESS = "SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"

export const USERINFO = "USERINFO"

export function login(url, params) {
    return (dispatch) => {
        fetchTodo.post(url, params)
        .then(result => {
            return result.json();
        }).then(json => {
            if(!!json.user) {
                dispatch({
                    type: 'USERINFO',
                    data: {
                        username: json.user.username,
                        nick: json.user.nick
                    }
                })
                dispatch({
                    type: 'SUCCESS',
                    data: {
                        state: true,
                        message: ""
                    }
                })
                dispatch(push('/index'))
            }else if(!!json.err) {
                dispatch({
                    type: 'LOGIN_ERROR',
                    data: {state: false, message: json.err.message}
                })
            }else if(!!json.message) {
                dispatch({
                    type: 'REGISTERED_ERROR',
                    data: {state: false, message: json.message}
                })
            }
        })
        .catch(err => {
            dispatch({
                type: 'LOGIN_ERROR',
                data: {state: false, message: '请求失败'}
            })
        })
    }
}
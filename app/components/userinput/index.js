import React from 'react'
import './index.css'
import {Input, Button, message} from 'antd'
class Userinput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            nick: '',
            password: ''
        }
    }
    render() {
        return (
            <div className="selfInput">
                <Input type="text" onChange={this.handleInput.bind(this, 'username')} value={this.state.username} placeholder="请输入邮箱账号"/>
                {
                    this.props.type == 'registered' ?
                    <Input type="text" onChange={this.handleInput.bind(this, 'nick')} value={this.state.nick} placeholder="请输入昵称"/> :
                    ''
                }
                <Input type="password" onChange={this.handleInput.bind(this, 'password')} value={this.state.password} placeholder="请输入密码"/>
                <Button onClick={this.handleClick.bind(this)}>
                {
                    this.props.type == 'registered' ?
                    '注册' :
                    '登录'
                }
                </Button>
            </div>
        )
    }
    handleInput(key, e) {
        var obj = {}
        obj[key] = e.target.value;
        this.setState(obj);
    }
    handleClick() {       
        let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        if(!reg.test(this.state.username)) {
            message.error('用户名输入错误');
            return
        }
        if(this.props.type == 'login') {
            let obj = {
                username: this.state.username,
                password: this.state.password
            }
            this.props.handleSubmit(obj);
        }else {
            this.props.handleSubmit(this.state);
        }
    }
}

export default Userinput
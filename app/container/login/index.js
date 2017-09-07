import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as thunkAction from '../../action'
import './index.css'
import {Tabs, message} from 'antd'
import Userinput from '../../components/userinput'

const TabPane = Tabs.TabPane;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            type: 'registered',
            buttonContent: '注册',
            isRemind: false
        }
    }
    render() {
        return (
            <div className="main">
                <Tabs defaultActiveKey={this.state.type} onChange={this.handleChange.bind(this)} animated={false}>
                    <TabPane tab="注册" key="registered">
                        <Userinput type={this.state.type} handleSubmit={this.handleSubmit.bind(this)}/>
                    </TabPane>
                    <TabPane tab="登录" key="login">
                        <Userinput type={this.state.type} handleSubmit={this.handleSubmit.bind(this)}/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
    componentDidUpdate() {
        if(!this.props.loginState.state && this.state.isRemind) {
            message.destroy()
            message.error(this.props.loginState.message);
            this.setState({
                isRemind: false
            })
        }
    }
    handleChange(current) {
        this.setState({
            type: current,
            isRemind: false
        });
    }
    handleSubmit(info) {
        this.setState({
            isRemind: true
        }, function() {
            this.state.type == "registered" ?
                this.props.thunkAction.login('http://z005.kmtongji.com/api/register',info) :
                this.props.thunkAction.login('http://z005.kmtongji.com/api/login',info)
        })
        
    }
}
function mapStateToProps(state) {
    return {
        loginState: state.login,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        thunkAction: bindActionCreators(thunkAction, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

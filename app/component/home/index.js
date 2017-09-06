import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addTodo} from '../action'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state= {
            data: ''
        }
    }
    render() {
        return (
            <div>
                <input value={this.state.data} onChange={this.handleChange.bind(this)}/>
                <span>{this.props.showText}</span>
            </div>
        )
    }
    handleChange(e) {
        this.setState({
            data: e.target.value
        })
        this.props.changeText(e.target.value)
    }
    componentDidMount() {
        if(this.props.showText) {
            this.setState({
                data: this.props.showText
            })
        }
    }
}
function mapStateToProps(state) {
    return {
        showText: state.showText
    }
}
function mapDispatchToProps(dispatch) {
    return {
        changeText: bindActionCreators(addTodo, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

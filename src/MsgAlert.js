import React, { Component } from 'react';
import './msgAlert.css';
function MsgAlert (Msg) {
  return class MsgAlert extends Component {
    constructor() {
      super();
      this.state = {
        value: ''
      }
      this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e) {
      this.setState({
        value: e.target.value,
      }, () => {
        console.log(this.state.value);
      });
    }

    render() {
      return (
        <div className='wrapper'>
          <div className="header">
            <span className='left'>消息</span>
            <span className='right'>X</span>
          </div>
          <div className="content">
            <Msg age='18' {...this.props} onChange={this.inputChange}/>
          </div>
        </div>
      )
    }
  }
}
export default MsgAlert;
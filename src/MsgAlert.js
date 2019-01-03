import React, { Component } from 'react';
import './msgAlert.css';
function MsgAlert (Msg) {
  return class MsgAlert extends Component {
    render() {
      return (
        <div className='wrapper'>
          <div className="header">
            <span className='left'>消息</span>
            <span className='right'>X</span>
          </div>
          <div className="content">
            <Msg></Msg>
          </div>
        </div>
      )
    }
  }
}
export default MsgAlert;
import React, { Component } from 'react';
import MsgAlert from './MsgAlert';
@MsgAlert

class Msg extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>这是消息3～</li>
          <li>这是消息4～</li>
        </ul>
      </div>
    );
  }
}
export default Msg;
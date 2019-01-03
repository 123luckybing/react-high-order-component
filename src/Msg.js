import React, { Component } from 'react';
import MsgAlert from './MsgAlert';

class Msg extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>这是消息1～</li>
          <li>这是消息2～</li>
        </ul>
      </div>
    );
  }
}
export default MsgAlert(Msg);
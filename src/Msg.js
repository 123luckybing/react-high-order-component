import React, { Component } from 'react';
import MsgAlert from './MsgAlert';

class Msg extends Component {
  render() {
    return (
      <div>
        <input type="text" {...this.props}/>
        <p>我的名字是: {this.props.name} -> (父组件传值)</p>
        <p>我的年龄是: {this.props.age} -> (通过高阶组件传值) </p>
        <ul>
          <li>这是消息1～</li>
          <li>这是消息2～</li>
        </ul>
      </div>
    );
  }
}
export default MsgAlert(Msg);
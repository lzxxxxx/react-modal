import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import PropTypes from 'prop-types'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// let root = document.querySelector('#root');
//
// class Father extends React.Component { //充当 portal 的角色
//   // componentDidMount (){
//   //   let containDom = document.createElement('div');
//   //   containDom.classList.add('portal-container');
//   //   document.body.append(containDom);
//   //   this.containDom = containDom;
//   //   ReactDOM.unstable_renderSubtreeIntoContainer(this, this.props.children, containDom);
//   //   // ReactDOM.render(this.props.children, containDom);
//   // }
//   // componentDidUpdate (){
//   //   ReactDOM.unstable_renderSubtreeIntoContainer(this, this.props.children, this.containDom);
//   // }
//   static childContextTypes = {
//     a: PropTypes.number,
//   }
//   getChildContext () {
//     return {
//       a: 2
//     }
//   }
//   render (){
//     // return null;
//     return (
//       <div className="father" onClick={(evt)=>{console.log('father bubbled',evt);}}>
//         {this.props.children},
//         {/*<Child a={this.state.a} />*/}
//       </div>
//     );
//   }
// }
// class Child extends React.Component {//充当正常 dialog 的角色
//   componentWillMount (){
//     console.log('child will mount after unstable_renderSubtreeIntoContainer');
//     return true;
//   }
//   componentDidMount (){
//     console.log('应该可以拿到 context', this.context);
//   }
//   componentWillUpdate (){
//     console.log('in child will update');
//   }
//   componentWillReceiveProps (){
//     console.log('in will receive');
//   }
//   static contextTypes = {
//     a: PropTypes.number
//   }
//   render (){
//     return (
//       <div className="child" onClick={(evt)=>{console.log('child emit',evt);}}>
//         {this.props.a}
//       </div>
//     );
//   }
// }
//
// class Brand extends React.Component {
//   constructor (){
//     super()
//     this.state = {
//       a: 0
//     };
//   }
//   componentDidMount (){
//     setTimeout(()=>{
//       this.setState({
//         a: 1
//       });
//     },2000)
//   }
//   render(){
//     return (
//       <Father>
//         <Child a={this.state.a} />
//       </Father>
//     );
//   }
// }
//
// ReactDOM.render(
//   <Brand />,
//   root
// );
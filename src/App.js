import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';
import Button from './components/Button';

class App extends Component {
  constructor (props){
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleCancle = this.handleCancle.bind(this);
    this.handleCreateModal = this.handleCreateModal.bind(this);
    this.handleinnerCancle = this.handleinnerCancle.bind(this);
    this.footerBtn = <Button text="确定" onclick={this.handleCancle} />;
    this.state = {
      visible: false,
      innervisible: false,
      modalShow: false
    };
  }
  toggleModal (){
    this.setState((state)=>{
      return {
        ...state,//注意顺序
        visible: true
      };
    });
  }
  handleCreateModal (){
    this.setState((state)=>{
      return {
        ...state,//注意顺序
        innervisible: true
      };
    });
  }
  handleCancle (){
    this.setState({
      visible: false
    });
  }
  handleinnerCancle (){
    this.setState({
      innervisible: false
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={this.toggleModal}>click here to change modal's visible props</h1>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Modal title={'标题'} footer={this.footerBtn} visible={this.state.visible}
            onCancle={this.handleCancle}
            maskClosable={true} destroyOnClose={false} zIndex={1000}
          >
            <input type="text" placeholder="请输入文字" onClick={this.handleCreateModal} />
            <Modal title={'标题'} footer={this.footerBtn} visible={this.state.innervisible}
                   onCancle={this.handleinnerCancle}
                   maskClosable={true} destroyOnClose={false} zIndex={1000}
            >
              innermodal !!
            </Modal>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;

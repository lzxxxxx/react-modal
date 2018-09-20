import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './index.scss';

class ModalEl extends React.Component {
  constructor (props){
    super(props);
    this.maskClickHandle = this.maskClickHandle.bind(this);
  }
  noop (){}
  maskClickHandle (){
    return this.props.maskClosable ? this.props.onCancle() : this.noop();
  }
  render (){
    let modal = this.props.visible ?
      (
        <div className="react-modal" key={0}>
          <div className="modal-mask" onClick={this.maskClickHandle} style={{zIndex: this.props.zIndex}}></div>
          <div className="modal-content" style={{zIndex: this.props.zIndex}}>
            <div className="header">
              {this.props.title}
            </div>
            <div className="body">
              {this.props.children}
            </div>
            <div className="footer">
              {this.props.footer}
            </div>
          </div>
        </div>
      ) : (
         this.props.destroyOnClose ? null : (
           <div className="react-modal" key={0}>
             <div className="modal-mask hidden" onClick={this.maskClickHandle} style={{zIndex: this.props.zIndex}}></div>
             <div className="modal-content hidden" style={{zIndex: this.props.zIndex}}>
               <div className="header">
                 {this.props.title}
               </div>
               <div className="body">
                 {this.props.children}
               </div>
               <div className="footer">
                 {this.props.footer}
               </div>
             </div>
           </div>
         )
      );

    return (
      <ReactCSSTransitionGroup
        transitionName="modal"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        transitionAppearTimeout={300}
        transitionAppear={true}
      >
        {modal}
      </ReactCSSTransitionGroup>
    );
  }
}

export default ModalEl;

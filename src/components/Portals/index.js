import React from 'react';
import ReactDOM from 'react-dom';

class Portals extends React.Component {
  renderChild (nxtprops){
    if(!this.containDom){
      let dom = document.createElement('div');
      dom.classList.add('portals-contain');
      document.body.appendChild(dom);
      this.containDom = dom;
    }
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      nxtprops.children,
      this.containDom,
      ()=>{console.log('unstable render cb');}
    );
  }
  componentWillReceiveProps (nxtprops){
    this.renderChild(nxtprops);
  }
  render (){
    return null;
    // return this.props.children;
  }
}

export default Portals;
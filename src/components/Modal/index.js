import React from 'react';
import Portals from '../Portals';
import ModalEl from './modalEl';

function handleZindex (Compoment){
  let ZINDEX = 0;
  class A extends React.Component{
    componentWillMount (){
      let idx = this.props.zIndex;
      ZINDEX = Math.max(idx, ZINDEX);
      ++ZINDEX;
      this.zIndex = ZINDEX;
    }
    render (){
      return <Compoment {...this.props} zIndex={this.zIndex}/>;
    }
  }
  return A;
}

class Modal extends React.Component{
  render (){
    return (
      <Portals>
        <ModalEl {...this.props} />
      </Portals>
    );
  }
}

export default handleZindex(Modal);
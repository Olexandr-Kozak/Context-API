import React from 'react';
import {initialValue} from "../../Context";

class Comp3 extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      color: initialValue.dark
    }
    this.handleClick = () =>{
      this.setState(state=>({
        color:
          state.color === initialValue.dark
          ? initialValue.white : initialValue.dark
      }));
    };
  };


  render() {

    return (
      <div style={{backgroundColor: this.state.color.background}}>
        <button onClick={this.handleClick} >Click Here</button>
      </div>
    );
  }
}

export default Comp3;

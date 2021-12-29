import React from 'react';
import Comp3 from "../Comp3/Comp3";
import {initialValue, MyContext} from "../../Context";

const Comp2 = () => {
  return(

    <MyContext.Consumer>
      {(initialValue)=><Comp3 value={initialValue}/>}
    </MyContext.Consumer>


  );
}

export default Comp2;

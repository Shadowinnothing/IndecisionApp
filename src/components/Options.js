import React from 'react';

import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.deleteOptionsHandler}>Remove All</button>
    {props.options.length === 0 && <p>Please add an Option to get started!</p>}
    { 
      props.options.map((opt) => (
        <Option 
          key={opt}
          option={opt}
          deleteOptionHandler={props.deleteOptionHandler}
        />
      )) 
    }
  </div>
);

export default Options;
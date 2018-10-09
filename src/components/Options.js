import React from 'react';

import Option from './Option';

const Options = (props) => (
  <div>

    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button 
        onClick={props.deleteOptionsHandler}
        className="button button--link"
      >Remove All</button>
    </div>

    
    {props.options.length === 0 && <p className="widget__message">Please add an Option to get started!</p>}
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
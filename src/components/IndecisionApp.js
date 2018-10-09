import React from 'react';

import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  };

  // everytime the component loads
  componentDidMount = () => {
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options){ this.setState(() => ({options}) );}
    } catch(e){
      // do nothing
    }
    
  }

  // everytime the state is updated
  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);

      localStorage.setItem("options", json);
    }
  }

  // everytime the component is removed
  componentWillUnmount = () => {
    //localStorage.clear();
  }

  deleteOptionsHandler = () => {
    this.setState( () => ({options: []}) );
  }

  deleteOptionHandler = (option) => {
    this.setState((prevState) => ({options: prevState.options.filter((opt) => opt !== option)}));
  }

  pickHandler = () => {
    const randNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNumber];
    this.setState(() => ({selectedOption: option}));
  }

  addOptionHandler = (option) => {
    if(!option){
      return 'ERROR Enter valid value to add item.';
    } else if(this.state.options.indexOf(option) > -1){
      return 'ERROR Option already exists.';
    }

    this.setState( (prevState) => ({options: prevState.options.concat(option)}) )
  }

  selectedOptionClearHandler = () => {
    this.setState(() => ({selectedOption: undefined}));
  };

  render = () => {

    const subtitle = "Put your life in the hands of a computer!";
    return (
      <div>
        <Header subtitle={subtitle}/>

        <div className="container">
          <Action pickHandler={this.pickHandler} hasOptions={this.state.options.length > 0}/>
          <Options
            options={this.state.options}
            deleteOptionsHandler={this.deleteOptionsHandler}
            deleteOptionHandler={this.deleteOptionHandler}
          />
          <AddOption addOptionHandler={this.addOptionHandler}/>
          <OptionModal 
            selectedOption={this.state.selectedOption}
            selectedOptionClearHandler={this.selectedOptionClearHandler}
          />
        </div>
        
      </div>
    );
  };
};

export default IndecisionApp;
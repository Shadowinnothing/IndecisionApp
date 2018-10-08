import React, {Component} from 'react';

class AddOption extends Component {

  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    e.preventDefault(); // page will not refresh
    const option = e.target.elements.optionInput.value.trim();
    e.target.elements.optionInput.value = ''; // input will clear
    const err = this.props.addOptionHandler(option);

    this.setState( () => ({error: err}) );
  };

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input autoComplete="off" name="optionInput" type="text"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  };
};

export default AddOption;
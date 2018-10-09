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
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form onSubmit={this.handleAddOption} className="add-option">
          <input className="add-option__input" autoComplete="off" name="optionInput" type="text"></input>
          <button
            className="button"
          >Add Option</button>
        </form>
      </div>
    );
  };
};

export default AddOption;
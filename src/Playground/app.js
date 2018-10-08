class IndecisionApp extends React.Component {

  constructor(props){
    super(props);

    this.deleteOptionsHandler = this.deleteOptionsHandler.bind(this);
    this.pickHandler = this.pickHandler.bind(this);
    this.addOptionHandler = this.addOptionHandler.bind(this);
    this.deleteOptionHandler = this.deleteOptionHandler.bind(this);

    this.state = {
      options: []
    };
  }

  // everytime the component loads
  componentDidMount(){
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options){ this.setState(() => ({options}) );}
    } catch(e){
      // do nothing
    }
    
  }

  // everytime the state is updated
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);

      localStorage.setItem("options", json);
    }
  }

  // everytime the component is removed
  componentWillUnmount(){
    //localStorage.clear();
  }

  deleteOptionsHandler(){
    this.setState( (prevState) => ({options: []}) );
  }

  deleteOptionHandler(option){
    this.setState((prevState) => ({options: prevState.options.filter((opt) => opt !== option)}));
  }

  pickHandler(){
    const randNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNumber];
    console.log(option);
  }

  addOptionHandler(option){
    if(!option){
      return 'ERROR Enter valid value to add item.';
    } else if(this.state.options.indexOf(option) > -1){
      return 'ERROR Option already exists.';
    }

    this.setState( (prevState) => ({options: prevState.options.concat(option)}) )
  }

  render(){

    const subtitle = "Put your life in the hands of a computer!";

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action pickHandler={this.pickHandler} hasOptions={this.state.options.length > 0}/>
        <Options
          options={this.state.options}
          deleteOptionsHandler={this.deleteOptionsHandler}
          deleteOptionHandler={this.deleteOptionHandler}
        />
        <AddOption addOptionHandler={this.addOptionHandler}/>
      </div>
    );
  };
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h3>{props.subtitle}</h3>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.pickHandler}
        disabled={!props.hasOptions}
      >What should i do?</button>
    </div>
  );
};

const Options = (props) => {
  return (
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
};

const Option = (props) => {
  return (
    <div>
      {props.option}
      <button 
        onClick={((e) => {
          props.deleteOptionHandler(props.option)
        })}
      >Remove</button>
    </div>
  );
};

class AddOption extends React.Component {

  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined
    };
  };

  handleAddOption(e){
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

 ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.showDetailsHandler = this.showDetailsHandler.bind(this);

    this.state = {
      showDetails: false
    };
  };

  showDetailsHandler(){
    this.setState((prevState) => {
      return {showDetails: !prevState.showDetails};
    });
  }

  render(){
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.showDetailsHandler}>Toggle Details</button>
        <div hidden={!this.state.showDetails}>
          <p>Nuggets winning 50+ games this year boiiii</p>
        </div>
      </div>
    );
  };
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

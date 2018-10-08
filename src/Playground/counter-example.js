class Counter extends React.Component {

  constructor(props){
    super(props);
    this.addOneHandler = this.addOneHandler.bind(this);
    this.subOnehandler = this.subOnehandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);

    this.state = {
      count: 0
    };
  }

  componentDidMount(){
    try{
      const json = localStorage.getItem('count');
      const count = JSON.parse(json);

      if(!isNaN(count)){
        this.setState(() => ({count}) );
      };
    } catch(e){
      // do nothing
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count);
    }
  }

  componentWillUnmount(){

  }

  // prefered syntax for setting state
  // pass in function, not an object
  addOneHandler(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  subOnehandler(){
    this.setState({count: this.state.count - 1});
  }
  resetHandler(){
    this.setState({count: 0});
  }

  render(){
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOneHandler}>+1</button>
        <button onClick={this.subOnehandler}>-1</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  };
};

ReactDOM.render(<Counter />, document.getElementById('app'));

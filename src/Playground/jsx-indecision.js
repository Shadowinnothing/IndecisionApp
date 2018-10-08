const appRoot = document.getElementById('app');
const templateObj = {
  title: 'Welcome to the Indecision App',
  subtitle: 'Put your life in the hands of a Computer!',
  options: []
};

let idCount = 1;
// e = event object
const onFormSubmit = (e) => {
  e.preventDefault(); // Stops page from refreshing when called

  const option = e.target.elements.option.value;  // option is declared in form tag
  if(option){
    templateObj.options.push(<li key={idCount++}>{option}</li>);
    e.target.elements.option.value = '';  // reset input box on form
  }
  renderApp();
};

const removeButtonHandler = () => {
  templateObj.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randNumber = Math.floor(Math.random() * templateObj.options.length);
  const option = templateObj.options[randNumber];
  if(option){
    // because of how i push JSX objects into options
    // accessing the value of the option object is done through props.children
    console.log(option.props.children);
  }

};

const renderApp = () => {
  const appTemplate = (
    <div>
      <h1>{templateObj.title ? templateObj.title : 'Decision App'}</h1>
      {templateObj.subtitle && <p>{templateObj.subtitle}</p>}
      <p>{templateObj.options.length > 0 ? 'Here are your options' : 'No Options'}</p>

      <button
        disabled={templateObj.options.length ? false: true}
        onClick={onMakeDecision}
      >What Should I do?</button>
      <button onClick={removeButtonHandler}>Remove All Options</button>
      <ol>
        {templateObj.options}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>

        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(appTemplate, appRoot);
};

renderApp();

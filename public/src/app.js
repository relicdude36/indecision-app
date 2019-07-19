class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Let the machine decide';
    const options = ['Test 01', 'Test 02', 'Test 03', 'Test 04'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  };
}

class Action extends React.Component {
  handlePick() {
    alert('handle pick');
  }
  
  render() {
    return(
      <button onClick={this.handlePick}>What should I do?</button>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
      {this.props.options.length}
      {
        this.props.options.map((option) => <Option key={option} optionText={option} />)
      }
      <button onClick={this.handleRemoveAll}>Remove All</button>
       </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component{
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
  
    if (option) {
      // this.props.options.push(option);
      alert(option);
      e.target.elements.option.value = '';
      renderTemplate();
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Options</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
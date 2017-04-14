const Message = (props) => (
  <div>
    <h2>{props.name}</h2>
    <p>{props.msg}</p>
  </div>
)

const Form = React.createClass({
  handleSubmit(e) {
    e.preventDefault()
    const name = this.refs.name.value
    if (name.length > 0) {
      this.refs.name.value = ''
      this.props.handleNewName(name)
    }
  },
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
    )
  }
})


const Greet = React.createClass({
  getDefaultProps() {
    return {
      name: 'Any One!',
      msg: 'This is a message.'
    }
  },
  getInitialState() {
    return {
      name: this.props.name
    }
  },
  handleNewName(name) {
    this.setState({name})
  },
  render() {
    return (
      <div>
        <Message name={this.state.name} msg={this.props.msg}/>
        <Form name={this.state.name} handleNewName={this.handleNewName}/>
      </div>
    )
  }
})

ReactDOM.render(
  <div>
    <Greet msg="This is another message." />
  </div>,
  document.getElementById('app')
)
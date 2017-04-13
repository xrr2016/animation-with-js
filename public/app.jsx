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
  handleSubmit(event) {
    event.preventDefault()
    const name = this.refs.name.value
    this.refs.name.value = ''
    this.setState({name})
  },
  render() {
    return (
      <div>
          <h2>Hello {this.state.name}</h2>
          <h3>{this.props.msg}</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="name" />
            <button>Set Name</button>
          </form>
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
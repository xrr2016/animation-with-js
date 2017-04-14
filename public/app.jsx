const Message = (props) => (
  <div>
    <h2>Hello {props.name}!</h2>
    <p>{props.msg}</p>
  </div>
)

const Form = React.createClass({
  handleUpdate(e) {
    e.preventDefault()

    const updates = {}
    const name = this.refs.name.value
    const msg = this.refs.msg.value

    if (name.length > 0 && msg.length > 0) {
      this.refs.name.value = ''
      this.refs.msg.value = ''
      updates.name = name      
      updates.msg = msg
    }

     if (msg.length > 0) {
      this.refs.msg.value = ''
      updates.msg = msg
    }

    if (name.length > 0) {
      this.refs.name.value = ''
      updates.name = name
    } 

    this.props.onUpdates(updates)
  },
  render() {
    return (
        <form onSubmit={this.handleUpdate}>
          <input type="text" placeholder="enter name" ref="name"/>
          <br/>
          <textarea ref='msg' placeholder="enter message">{this.props.msg}</textarea> 
          <p><button onClick={this.handleUpdate}>Update</button></p>
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
      name: this.props.name,
      msg: this.props.msg
    }
  },
  handleUpdate(update) {
    this.setState(update)
  },
  render() {
    return (
      <div>
        <Message name={this.state.name} msg={this.state.msg}/>
        <Form onUpdates={this.handleUpdate}/>
      </div>
    )
  }
})

ReactDOM.render(
  <Greet />,
  document.getElementById('app')
)
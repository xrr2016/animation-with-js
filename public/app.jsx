const Greet = React.createClass({
  render() {
    return (
      React.createElement(
        'h2',
        {style: {color: "blue"}},
        "Happy Day!"
      )
      // <div>
      //     <h1>Hello World!!!</h1>
      // </div>
    )
  }
})

ReactDOM.render(
  <div>
    <h1>Hello React!!!</h1>
    <Greet />
  </div>,
  document.getElementById('app')
)
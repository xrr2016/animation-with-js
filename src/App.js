import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import WeatherDisplay from './components/weatherDisplay'

const Cities = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
]


class App extends Component {
  state = {
    activeCity: 0
  }

  render() {
    const activeCity = this.state.activeCity
    return (
      <div className="App">
        {Cities.map((city, index) => (
          <button key={index}
          onClick={() => this.setState({activeCity: index})}>
            {city.name}
          </button>
        ))}
        <WeatherDisplay key={activeCity} zip={Cities[activeCity].zip} />
      </div>
    );
  }
}

export default App;

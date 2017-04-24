import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootswatch/yeti/bootstrap.css'
import { Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap'
import WeatherDisplay from './components/weatherDisplay'

const Cities = [
  { name: 'Palo Alto', zip: '94303' },
  { name: 'San Jose', zip: '94088' },
  { name: 'Santa Cruz', zip: '95062' },
  { name: 'Honolulu', zip: '96803' }
]

class App extends Component {
  state = {
    activeCity: 0
  }

  render () {
    const activeCity = this.state.activeCity
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Hello!
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle='pills'
                stacked
                activeKey={activeCity}
                onSelect={index => this.setState({ activeCity: index })}
              >
                {Cities.map((city, index) => (
                  <NavItem key={index} eventKey={index}>{city.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activeCity} zip={Cities[activeCity].zip} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App

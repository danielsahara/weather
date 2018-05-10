import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Weather from './components/Weather.js';
import Search from './components/Search.js';
import { Card, CardText, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Weather Website</h1>
        </header>

        <Search />
        <Row>
          <Col sm="6">
            <Card body>
              <CardText><Weather name="Berlin" /></CardText>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
               <Weather name="Waltham" />
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;

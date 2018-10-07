import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Request">
            Request Fields
          </Tab>
          <Tab eventKey={2} title="Response">
            Response Fields
          </Tab>
          <Tab eventKey={3} title="Settings" disabled>
            Settings Fields
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;

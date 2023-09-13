import React, { Component } from 'react';
import GitHub from './GitHub';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true
    };
  }

  render() {
    return (
      <div>
        <GitHub />
        {this.state.isLoading &&
          <h4>Getting data...</h4>
        }
      </div>
    );
  }
}

export default App;
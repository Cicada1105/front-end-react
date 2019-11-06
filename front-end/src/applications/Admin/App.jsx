import React from 'react';
import { Routing } from './templates/Router.jsx'

/*  This is the home page for the Admin page  */
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routing />
      </div>
    );
  }
}

export default App;

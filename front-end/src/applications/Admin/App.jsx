import React from 'react';
import Admin from "../../templates/Admin/AdminDefault.jsx"
/*  This is the home page for the Admin page  */
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Admin />
        <center>
        <br /><br /><br /><br />
        <h1>Admin Home Page</h1>
        </center>
      </div>
    );
  }
}

export default App;

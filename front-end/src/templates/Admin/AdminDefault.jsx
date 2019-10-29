import React from 'react'
import { Navigation } from '../Default/defaultView.jsx'

class AdminDefault extends React.Component {
  constructor() {
    super();

    this.state = {
      links: [
          {
            "name":"Colleges",
            "dropdownLinks": {
              "list":"../Colleges/list.jsx",
              "search":"../Colleges/search.jsx",
              "add":"../Colleges/add.jsx",
              "delete":"../Colleges/delete.jsx"
            }
          },
          {
            "name":"Department",
            "dropdownLinks": {
              "list":"../Department/list.jsx",
              "search":"../Department/search.jsx",
              "add":"../Department/add.jsx",
              "delete":"../Department/delete.jsx"
            }
          },
          {
            "name":"Program",
            "dropdownLinks": {
              "list":"../Program/list.jsx",
              "search":"../Program/search.jsx",
              "add":"../Program/add.jsx",
              "delete":"../Program/delete.jsx"
            }
          },
          {
            "name":"Concentration",
            "dropdownLinks": {
              "list":"../Concentration/list.jsx",
              "search":"../Concentration/search.jsx",
              "add":"../Concentration/add.jsx",
              "delete":"../Concentration/delete.jsx"
            }
          },
          {
            "name":"Course",
            "dropdownLinks": {
              "list":"../Course/list.jsx",
              "search":"../Course/search.jsx",
              "add":"../Course/add.jsx",
              "delete":"../Course/delete.jsx"
            }
          },
          {
            "name":"Phrase",
            "dropdownLinks": {
              "list":"../Phrase/list.jsx",
              "search":"../Phrase/search.jsx",
              "add":"../Phrase/add.jsx",
              "delete":"../Phrase/delete.jsx"
            }
          }
      ],
      class:"navbar"
    }
  }
  render() {
    return (
      <div>
        {/*<Header header="Lewis University Masters Program"/>*/}
        <Navigation links={ this.state.links } classID={ this.state.class }/>
        {/*<Body headerVal={ this.state.headerVal }/>
        <Footer />*/}
      </div>
    )
  }
}

export default AdminDefault;

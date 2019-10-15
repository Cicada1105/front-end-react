import React from 'react'
import { Navigation } from './View'

class StudentDefault extends React.Component {
  constructor() {
    super();
    this.state = {
      links: [
        {
          "value": "Colleges",
          "href": "",
          "classID":""
        },
        {
          "value":"Department",
          "href":"",
          "classID": ""
        },
        {
          "value":"Program",
          "href":"",
          "classID":""
        },
        {
          "value":"Concentration",
          "href":"",
          "classID":""
        },
        {
          "value":"Prefix",
          "href":"",
          "classID":""
        }
      ],
      headerVal:"View Page"
    }
  }
  render() {
    return (
      <div>
        {/*<Header header="Lewis University Masters Program"/>*/}
        <Navigation links={ this.state.links } />
        {/*<Body headerVal={ this.state.headerVal }/>
        <Footer />*/}
      </div>
    )
  }
}

export default StudentDefault;

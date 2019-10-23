import React from 'react'
import { Navigation } from './View'

class StudentDefault extends React.Component {
  constructor() {
    super();
    this.state = {
      headerVal:"View Page",
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

export default StudentDefault;

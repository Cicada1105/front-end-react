import React from 'react'
import { Header, Navigation, Body, Footer } from './View'

class StudentDefault extends React.Component {
  constructor() {
    super();
    this.state = {
      links: [
        {
          "value": "View",
          "href": "view.html",
          "classID":"navLink"
        },
        {
          "value":"Add",
          "href":"add.html",
          "classID": "navLink"
        },
        {
          "value":"Remove",
          "href":"remove.html",
          "classID":"navLink"
        },
        {
          "value":"Edit",
          "href":"edit.html",
          "classID":"navLink"
        },
        {
          "value":"Login",
          "href":"Login.html",
          "classID":"login"
        }
      ],
      columns: [
        {
          "classID":"main"
        }
      ],
      headerVal:"View Page"
    }
  }
  render() {
    return (
      <div>
        <Header header="Lewis University Masters Program"/>
        <Navigation links={ this.state.links } />
        <Body columns={ this.state.columns } headerVal={ this.state.headerVal }/>
        <Footer />
      </div>
    )
  }
}

export default StudentDefault;

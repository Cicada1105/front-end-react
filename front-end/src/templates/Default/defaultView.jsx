import React from 'react'
//import { Route, Link, BrowserRouter } from 'react-router-dom'
import styles from "./View.module.css";

class Header extends React.Component {
  render() {
    const headerStyle = {

    }
    return (
      <div style = { headerStyle }>
        <h1>Header</h1>
      </div>
    );
  }
}

/*
class Body extends React.Component {
  render() {
    const colRowsStyle = {

    }
    return (
      <div style={ colRowsStyle } className="">
      </div>
    )
  }
}

class Row extends React.Component {
  render() {
    return(
      <div className={ this.props.classID }>

      </div>
    )
  }
}

class Footer extends React.Component {
  render () {
    const footerStyle = {

    }
    return (
      <div style={ footerStyle }>
        <h2>Footer</h2>
      </div>
    );
  }
}
*/
export { Navigation }

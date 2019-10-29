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

class Navigation extends React.Component {
  render() {
    const navStyle = {
      fontFamily:"Arial, Helvetica, sans-serif",
      backgroundColor:"#263238",
      position:"fixed",
      width:"100%",
      top:"0px"
    }
    return (
      <div style={ navStyle } className={ styles.navbar }>
        <Link name="Lewis University" float="left" />
        <DropDown links={ this.props.links }/>
      </div>
    );
  }
}

class DropDown extends React.Component {
  render() {
    const ddStyle = {
      float:"left",
      //overflow:"hidden"
    };
    return (
      <React.Fragment>
       { this.props.links.map((val, i) =>
          <div style={ ddStyle } className={ styles.dropdown } key={ i }>
            <Link name={ val.name } key={ val.name }/>
            <DropDownContent content={ val.dropdownLinks } key={ i }/>
          </div>
      )}
      </React.Fragment>
    );
  }
}

class Link extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      float: props.float
    }
  }
  function runAlert() {
    alert("Function running inside Link class");
  }
  render() {
    const linkStyle = {
        float: this.state.float,
    }
    return (
      <button onClick={ this.runAlert } style={ linkStyle } className={ styles.link }>
        { this.props.name }
      </button>
    )
  }
}

class DropDownContent extends React.Component {
  render() {
    let ddLinks = [];
    for (let property in this.props.content) {
      ddLinks.push(<a href={this.props.content[property]} key={ property }>{ property }</a>);
    }
    return (
      <div className={ styles.dropdownContent }>
        { ddLinks }
      </div>
    )
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

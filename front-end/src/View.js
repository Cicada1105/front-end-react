import React from 'react'
import style from "./App.module.css";

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
      overflow:"hidden",
      position:"fixed",
      width:"100%",
      top:"0px"
    }
    return (
      <div style={ navStyle }>
        <Link name="Lewis University" float="left"/>
        { this.props.links.map((nav, i) =>
            <Link name={ nav.value } float="left" />
          )
        }
      </div>
    )
  }
}
/*
class DropDown extends React.Componetn {
  render() {
    return(
         //Foreach item in values sent by props
    )
  }
}
*/
class Link extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      float: props.float
    }
  }
  runAlert = () => {
    alert("Function running inside Link class");
  }
  render() {
    const linkStyle = {
    backgroundColor:"inherit",
    float: this.state.float,
      position:"relative",
      textAlign:"center",
      fontFamily:"inherit",
      padding:"14px 16px",
      fontSize:"16px",
      border:"none",
      color:"white"
    }
    return (
      <button onClick={ this.runAlert } style={ linkStyle } className={ style.link }>
        { this.props.name }
      </button>
    )
  }
}

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

export { Navigation }

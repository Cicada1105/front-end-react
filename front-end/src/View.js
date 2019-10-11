import React from 'react'
import "./App.css";

class Header extends React.Component {
  render() {
    const headerStyle = {
      backgroundColor: "rgb(207, 31, 31)",
      textAlign:"center",
      padding: "30px"
    }
    return (
      <div style = { headerStyle }>
        <h1>{ this.props.header }</h1>
      </div>
    );
  }
}

class Navigation extends React.Component {
  render() {
    const navStyle = {
      backgroundColor: "rgb(255, 255, 255)",
      overflow:"hidden"
    }
    return (
      <div style={ navStyle }>
        { this.props.links.map((navLink, i) =>
          <Link link={ navLink.href } value = { navLink.value } classID = { navLink.classID } key={ i }/>
        )}
      </div>
    )
  }
}

class Link extends React.Component {
  render() {
    const linkStyle = {
      fontStyle: "none",
      display:"block",
      border:"1px solid rgb(0,0,0)",
      borderRadius:"3px",
      padding: "20px 40px",
      width: "230px",
      boxSizing: "border-box",
      borderBottom:"none",
      textDecoration:"none",
      fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
      fontSize:"12px",
    }
    return (
      <a href={ this.props.link } style={ linkStyle } className={ this.props.classID }>{ this.props.value }</a>
    )
  }
}

class Body extends React.Component {
  render() {
    const colRowsStyle = {
      dipslay:"flex"
    }
    const colMain = {
      marginTop:"20px",
      backgroundColor:"rgb(219, 219, 219)",
      float:"left",
      width:"100%",
      height:"100%"
    }
    return (
      <div style={ colRowsStyle } className="bodyContainer">
        { this.props.columns.map((col, i) =>
            <Row classID={ col.classID } bodyHeaderVal={ this.props.headerVal } key={ i } />
        )}
      </div>
    )
  }
}

class Form extends React.Component {
  redner() {
    return(
      { // Foreach row passed by props, create a new instance of row class }
    )
  }
}

class Row extends React.Component {
  render() {
    return(
      <div className={ this.props.classID }>
        <Card bodyHeader={ this.props.bodyHeaderVal } />
      </div>
    )
  }
}

class DropDown extends React.Componetn {
  render() {
    return(
        { //Foreach item in values sent by props }
    )
  }
}

class Footer extends React.Component {
  render () {
    const footerStyle = {
      backgroundColor:"gray",
      textAlign:"center",
      padding:"15px"
    }
    return (
      <div style={ footerStyle }>
        <h2>Footer</h2>
      </div>
    );
  }
}

export { Header, Navigation, Body, Footer }

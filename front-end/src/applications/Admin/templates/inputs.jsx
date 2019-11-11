import React from 'react'

class TextInput extends React.Component {
  render() {
    return(
      <div>
      {this.props.input.map((val, i) =>
        <p key={ i }>
          {val.name} <input type="text" maxLength={val.maxLength} size={val.size} />
        </p>
      )}
      </div>
    )
  }
}

class TextAreaInput extends React.Component {
  render() {
    return(
      <textarea  name={ this.props.input.name } readOnly="readOnly" />
    )
  }
}

class DatalistInput extends React.Component {
  render() {
    return(
      <span>
        { this.props.input.name }<input type="text" list={ this.props.input.list } maxLength={ this.props.input.maxLength } size={ this.props.input.size } />
        <datalist id={ this.props.input.list }>
            {this.props.input.options.map((val, i) =>
                <option value={ val } key={ i }/>
            )}
        </datalist>
      </span>
    )
  }
}

class Button extends React.Component {
  render() {
    return(
      <button onClick={ this.props.input.method }>{ this.props.input.value }</button>
    )
  }
}

class Submit extends React.Component {
  render() {
    return(
      <input type="submit" value={ this.props.value } />
    )
  }
}

export { TextInput, TextAreaInput, DatalistInput, Button, Submit }

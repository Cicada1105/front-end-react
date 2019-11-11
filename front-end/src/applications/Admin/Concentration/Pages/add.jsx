import React from 'react'
import { TextInput, Submit } from '../../templates/inputs.jsx'

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: [
        {
          name:"concentrationID",
          maxLength:3,
          size:13
        },
        {
          name:"concentrationName",
          maxLength:30,
          size:30
        },
        {
          name: "concentrationAbbr",
          maxLength:6,
          size:30
        },
        {
          name:"programID",
          maxLength:6,
          size:30
        }
      ],
      submitInput: {
        value:"Add Concentration"
      },
      formData:{
        formAction:"/src/server/Admin/concentration/new_concentration.php",
        formMethod:"post"
      }
    }
  }
  render() {
    return(
      <div>
        <form action={ this.state.formData.formAction } method={ this.state.formData.formMethod } >
          <TextInput input={ this.state.textInput } />
          <Submit input={ this.state.submitInput.value } />
        </form>
      </div>
    )
  }
}

export { Add }

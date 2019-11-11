import React from 'react'
import { TextInput, DatalistInput, Submit } from '../../templates/inputs.jsx'

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: [
        {
          name:"Program Name:",
          maxLength:13,
          size:13
        },
        {
          name:"Program Abbreviation: ",
          maxLength:30,
          size:30
        }
      ],
      datalistInput: [
        {
          name:"Choose Department: ",
          maxLength:60,
          size:40,
          list:"departments",
          options: [
            "Aviation and Transportation Studies",
            "Chemistry",
            "Biology",
            "Computer and Mathematical Sciences",
            "Physics"
          ]
        },
        {
          name:"Select Grad/Undergrad: ",
          maxLength:13,
          size:13,
          list:"gradUndergrad",
          options: [
            "Graduate",
            "Undergraduate"
          ]
        }
      ],
      submitInput: {
        value:"Add Program"
      },
      formData: {
        formAction:"/src/server/Admin/program/add_program.php",
        formMethod:"post",
      }
    };
  }
  render() {
    return(
      <div>
        <form action={ this.state.formData.formAction } method={ this.state.formData.formMethod }>
          <p>
            <TextInput input={ this.state.textInput } />
          </p>
          <p>
            <DatalistInput input={ this.state.datalistInput[0] } />
          </p>
          <p>
            <DatalistInput input={ this.state.datalistInput[1] } />
          </p>
          <Submit value={ this.state.submitInput.value } />
        </form>
      </div>
    )
  }
}

export { Add }

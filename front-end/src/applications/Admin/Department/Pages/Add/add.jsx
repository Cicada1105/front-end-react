import React from 'react'
import { TextInput, DatalistInput, Submit } from '../../../templates/inputs.jsx'

class Add extends React.Component {
  render() {
    return(
      <div>
        <AddDepartment />
        <br /><hr /><br />
        <AddPrefix />
      </div>
    )
  }
}
class AddDepartment extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {
        formAction:"/src/server/Admin/department/add_department.php",
        formMethod:"post"
      },
      textInput:[
        {
          name:"Department Name:",
          maxLength:13,
          size:13
        },
        {
          name:"Department Abbreviation: ",
          maxLength:30,
          size:30
        }
      ],
      datalistInput: {
        name:"Select College: ",
        maxLength:60,
        size:40,
        list:"colleges",
        options: [
          "Aviation, Science and Technology",
          "Business",
          "Education and Social Sciences",
          "Humanities, Fine Arts and Communication",
          "Nursing and Health Sciences"
        ]
      },
      submitInput: {
        value:"Add Department"
      }
    };
  }
  render() {
    return(
      <div>
        <form action={ this.state.formAction } method={ this.state.formMethod }>
          <TextInput input={ this.state.textInput } />
          <DatalistInput input={ this.state.datalistInput } />
          <Submit value={ this.state.submitInput.value } />
        </form>
      </div>
    )
  }
}
class AddPrefix extends React.Component {
    constructor() {
      super();
      this.state = {
        textInput: [
          {
            name:"Prefix:",
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
              "Aviation and Transportatio Studies",
              "Chemistry",
              "Biology",
              "Computer and Mathematical Sciences",
              "Physics"
            ]
          }
        ],
        formData: {
          formAction:"/src/server/Admin/prefix/add_prefix.php",
          formMethod:"post",
        },
        submitInput: {
          value:"Add Prefix"
        }
      };
    }
    render() {
      return(
        <div>
          <form action={ this.state.formData.formAction } method={ this.state.formData.formMethod }>
            <TextInput input={ this.state.textInput } />
            <DatalistInput input={ this.state.datalistInput[0] } />
            <Submit value={ this.state.submitInput.value } />
          </form>
        </div>
      )
    }
}

export { Add }

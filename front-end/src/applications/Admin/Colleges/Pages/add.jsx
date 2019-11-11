import React from 'react'
import { TextInput, Submit } from '../../templates/inputs.jsx'

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput:[
        {
          name:"College Name:",
          maxLength:30,
          size:30
        },
        {
          name:"College Abbreviation: ",
          maxLength:60,
          size:30
        }
      ],
      submitInput: {
        value:"Add Colege"
      },
      formData: {
        formAction:"/src/server/Admin/colleges/add_college.php",
        formMethod:"post"
      }
    };
  }
  render() {
    return(
      <div>
        <form action={ this.state.formData.formAction } method={ this.state.formData.formMethod }>
          <TextInput input={ this.state.textInput } />
          <Submit value={ this.state.submitInput.value } />
        </form>
      </div>
    )
  }
}

export { Add }

import React from 'react'
import { TextInput, TextAreaInput, DatalistInput, Button, Submit } from '../../../templates/inputs.jsx'

class Add extends React.Component {
  constructor() {
    super();
    this.togglePrereq = this.togglePrereq.bind(this);
  }
  togglePrereq() {
    let x = document.querySelector("#coursePrereqToggle");
    x.style.display = x.style.display === "none"? "block":"none";
  }
  render() {
    return(
      <div>
        <AddCourse />
        <br /><hr /><br />
        <button onClick={ this.togglePrereq }>Toggle Course Prerequisite</button>
        <AddPrerequisite  />
        <br /><hr /><br />
        <AddPhrase />
        <br /><hr /><br />
      </div>
    )
  }
}

class AddCourse extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: [
        {
          name:"Course Number: ",
          maxLength:30,
          size:30
        },
        {
          name:"Title: ",
          maxLength:60,
          size:40
        },
        {
          name:"Course Description: ",
          maxLength:60,
          size:30
        },
        {
          name:"Credits: ",
          maxLength:60,
          size:30
        }
      ],
      datalistInput: {
          name:"Prefix: ",
          maxLength:30,
          size:30,
          list:"prefixes",
          options: [
            "CPSC",
            "MATH"
          ]
      },
      submitInput: {
        value:"Add Course"
      },
      formData: {
        formAction:"/src/server/Admin/courses/add_course.php",
        formMethod:"post",
      }
    };
  }
  render() {
    return(
      <div>
        <form action={ this.state.formData.formAction } method={ this.state.formData.formMethod }>
          <DatalistInput input={ this.state.datalistInput } />
          <TextInput input={ this.state.textInput } />
          <Submit value={ this.state.submitInput.value } />
        </form>
      </div>
    )
  }
}

class AddPrerequisite extends React.Component {
  constructor() {
    super();
    this.addCourse = this.addCourse.bind(this);
    this.state = {
      buttonInput : [
        {
          method:this.addCourse,
          value:"Add Course"
        },
        {
          method:this.addGroup,
          value:"Add New Group"
        },
        {
          method:this.clearSet,
          value:"Clear Set"
        },
        {
          method:this.clearClasses,
          value:"Clear Classes"
        },
        {
          method:this.addCoursePrereq,
          value: "Add Course Prereq"
        }
      ],
      datalistInput: [
        {
          name:"Select Course: ",
          maxLength:30,
          size:30,
          list:"courses",
          options: [
            "course1",
            "course2",
            "course3"
          ]
        }
      ],
      textareaInput: [
        {
          name:"setOfCourses",
          rows:10,
          cols:30
        },
        {
          name:"totalGroups",
          rows:10,
          cols:30
        }
      ]
    }
  }
  addCourse() {
    alert("Add Course");
  }
  addGroup = () => {
    alert("Add Group");
  }
  clearSet = () => {
    alert("Clear set");
  }
  clearClasses = () => {
    alert("Clear classes");
  }
  addCoursePrereq = () => {
    alert("Add Course Prereq");
  }
  render() {
    const prereqContStyle = {
      display:"none"
    }
    return(
      <div style={ prereqContStyle } id="coursePrereqToggle">
        <p>Current Group: <span id="groupID"></span></p>
        <p>
          <DatalistInput input={ this.state.datalistInput[0] } />&nbsp;
          <Button input={ this.state.buttonInput[0] } />&nbsp;
          <Button input={ this.state.buttonInput[1] } />&nbsp;
        </p>
        <p>
          Group: <Button input={ this.state.buttonInput[2] } />
        </p>
        <TextAreaInput input={ this.state.textareaInput[0]}/>
        <p>
        Total Classes:  <Button input={ this.state.buttonInput[3] } />
        </p>
        <TextAreaInput input={ this.state.textareaInput[1]}/><br />

        <Button input={ this.state.buttonInput[4] } />
      </div>
    )
  }
}

class AddPhrase extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: [
        {
          name:"Name: ",
          maxLength:30,
          size:30
        },
        {
          name:"Description: ",
          maxLength:60,
          size:30
        }
      ],
      submitInput: {
        value: "Add Phrase"
      },
      formData: {
        formAction:"/src/server/Admin/phrase/add_phrase.php",
        formMethod:"post",
      }
    }
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

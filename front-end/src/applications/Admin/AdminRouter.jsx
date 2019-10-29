import React from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { Add as AddCollege, Edit as EditCollege, Delete as DeleteCollege } from 'Colleges/export'
import { Add as AddConcentration, Edit as EditConcentration, Delete as DeleteConcentration } from 'Concentration/export'
import { Add as AddCourse, Edit as EditCourse, Delete as DeleteCourse } from 'Course/export'
import { Add as AddDepartment, Edit as EditDepartment, Delete as DeleteDepartment } from 'Department/export'
import { Add as AddPhrase, Edit as EditPhrase, Delete as DeletePhrase } from 'Phrase/export'
import { Add as AddProgram, Edit as EditProgram, Delete as DeleteProgram } from 'Program/export'
//Include homepage for admin
import App from './App

export class Routing extends React.Component {
  render() {
    const routing = [
      {
        "name":"Colleges",
        "base":{
            "path":"/Colleges/List",
            "compponent":"ListColleges"
        },
        "add": {
            "path":"/Colleges/Add",
            "component":"AddColege"
        },
        "edit": {
            "path":"/Colleges/Edit",
            "component":"EditCollege"
        },
        "delete": {
            "path":"/Colleges/Delete",
            "component":"DeleteCollege"
        }
      },
      {
        "name":"Department",
        "base":{
            "path":"/Department/List",
            "compponent":"ListDepartment"
        },
        "add": {
            "path":"/Department/Add",
            "component":"AddDepartment"
        },
        "edit": {
            "path":"/Department/Edit",
            "component":"EditDepartment"
        },
        "delete": {
            "path":"/Department/Delete",
            "component":"DeleteDepartment"
        }
      },
      {
        "name":"Program",
        "base":{
            "path":"/Program/List",
            "compponent":"ListProgram"
        },
        "add": {
            "path":"/Program/Add",
            "component":"AddProgram"
        },
        "edit": {
            "path":"/Program/Edit",
            "component":"EditProgram"
        },
        "delete": {
            "path":"/Program/Delete",
            "component":"DeleteProgram"
        }
      },
      {
        "name":"Concentration",
        "base": {
            "path":"/Concentration/List",
            "component":"ListConcentration"
        },
        "add": {
            "path":"/Concentration/Add",
            "component":"AddConcentration"
        },,
        "list": {
            "path":"/Concentration/List",
            "component":"ListConcentration"
        },
        "edit": {
            "path":"/Concentration/Edit",
            "component":"EditConcentration"
        },
        "delete": {
            "path":"/Concentration/Delete",
            "component":"DeleteConcentration"
        }
      },
      {
        "name":"Course",
        "base":{
            "path":""/Course/List",
            "compponent":"ListCourse"
        },
        "add": {
            "path":"/Course/Add",
            "component":"AddCourse"
        },
        "list": {
            "path":"/Course/List",
            "component":"ListCourse"
        },
        "edit": {
            "path":"/Course/Edit",
            "component":"EditCourse"
        },
        "delete": {
            "path":"/Course/Delete",
            "component":"DeleteCourse"
        }
      }
    ]
    return(
      <Router>
        <ul>
          <li>
            <Link to="/">Lewis University</Link>
          </li>
          <li>
            <Link to="/">Add User</Link>
          </li>
          {
            routing.map((e) =>
              <li>
                <Link to={e.base}>{ e.name }</Link>
                <div className="dropDown">
                    <ul>
                        </li>
                            <Link to={e.list.path}>List</Link>
                        </li>
                        </li>
                            <Link to={e.add.path}>Add</Link>
                        </li>
                        </li>
                            <Link to={e.edit.path}>Edit</Link>
                        </li>
                        </li>
                            <Link to={e.delete.path}>Delete</Link>
                        </li>
                    </ul>
                </div>
              </li>
            )
          }
          <li>
            <Link>Logout</Link>
          </li>
        </ul>
        // Admin Home Page
        <Route exact path="/" component={ App } />
        { routing.map((e) => {
            // Base Route of each navigation DeleteDepartment
            <Route path={e.base} component={e.}
          })
        }
        // Colleges
        <Route path="./Colleges/Add" component={ AddCollege } />
        <Route path="./Colleges/Edit" component={ EditCollege } />
        <Route path="./Colleges/Delete" component={ DeleteCollege } />
        // Concentration
        <Route path="./Concentration/Add" component={ AddConcentration } />
        <Route path="./Concentration/Edit" component={ EditConcentration } />
        <Route path="./Concentration/Delete" component={ DeleteConcentration } />
        // Course
        <Route path="./Course/Add" component={ AddCourse } />
        <Route path="./Course/Edit" component={ EditCourse } />
        <Route path="./Course/Delete" component={ DeleteCourse } />
        // Department
        <Route path="./Department/Add" component={ AddDepartment } />
        <Route path="./Department/Edit" component={ EditDepartment } />
        <Route path="./Department/Delete" component={ DeleteDepartment } /
        // Phrase
        <Route path="./Phrase/Add" component={ AddPhrase } />
        <Route path="./Phrase/Edit" component={ EditPhrase } />
        <Route path="./Phrase/Delete" component={ DeletePhrase } /
        // Program
        <Route path="./Program/Add" component={ AddProgram } />
        <Route path="./Program/Edit" component={ EditProgram } />
        <Route path="./Program/Delete" component={ DeleteProgram } /
      </Router>
    )
  }
}

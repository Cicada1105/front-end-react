import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { List, Add, Edit, Delete } from './export.js'

export class CourseRouter extends React.Component {
  render() {
    return(
      <Switch>
          <Route path="/Admin/Course/List" component={ List } />
          <Route path="/Admin/Course/Add" component={ Add } />
          <Route path="/Admin/Course/Edit" component={ Edit } />
          <Route path="/Admin/Course/Delete" component={ Delete } />
      </Switch>
    )
  }
}

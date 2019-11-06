import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { List, Add, Edit, Delete } from './export.js'

export class CollegeRouter extends React.Component {
  render() {
    return(
      <Switch>
          <Route path="/Admin/Colleges/List" component={ List } />
          <Route path="/Admin/Colleges/Add" component={ Add } />
          <Route path="/Admin/Colleges/Edit" component={ Edit } />
          <Route path="/Admin/Colleges/Delete" component={ Delete } />
      </Switch>
    )
  }
}

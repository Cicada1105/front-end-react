import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { List, Add, Edit, Delete } from './export.js'

export class ProgramRouter extends React.Component {
  render() {
    return(
      <Switch>
          <Route path="/Admin/Program/List" component={ List } />
          <Route path="/Admin/Program/Add" component={ Add } />
          <Route path="/Admin/Program/Edit" component={ Edit } />
          <Route path="/Admin/Program/Delete" component={ Delete } />
      </Switch>
    )
  }
}

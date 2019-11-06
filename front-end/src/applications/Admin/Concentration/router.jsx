import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { List, Add, Edit, Delete } from './export.js'

export class ConcentrationRouter extends React.Component {
  render() {
    return(
      <Switch>
          <Route path="/Admin/Concentration/List" component={ List } />
          <Route path="/Admin/Concentration/Add" component={ Add } />
          <Route path="/Admin/Concentration/Edit" component={ Edit } />
          <Route path="/Admin/Concentration/Delete" component={ Delete } />
      </Switch>
    )
  }
}

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { List, Add, Edit, Delete } from './export.js'

export class PhraseRouter extends React.Component {
  render() {
    return(
      <Switch>
          <Route path="/Admin/Phrase/List" component={ List } />
          <Route path="/Admin/Phrase/Add" component={ Add } />
          <Route path="/Admin/Phrase/Edit" component={ Edit } />
          <Route path="/Admin/Phrase/Delete" component={ Delete } />
      </Switch>
    )
  }
}

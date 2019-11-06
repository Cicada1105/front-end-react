import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage } from './export.js'

export class HomeRouter extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path="/Admin/Home" component={ HomePage } />
      </Switch>
    )
  }
}

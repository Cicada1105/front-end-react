import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { List, Add, Edit, Delete } from './export.js'

export class DepartmentRouter extends React.Component {
  render() {
    return(
      <Switch>
          <Route path="/Admin/Department/List" component={ List } />
          <Route path="/Admin/Department/Add" component={ Add } />
          <Route path="/Admin/Department/Edit" component={ Edit } />
          <Route path="/Admin/Department/Delete" component={ Delete } />
      </Switch>
    )
  }
}
/*<DepartmentForm actiontag="form.php" />
export class DepartmentForm extends React.Component {
  constructor(props) {
    super(props);


  }
  render() {
    return(
      <form action={ this.props.actiontag }>
        <input -type="textfield" >
      </form>
    )
  }
}
*/

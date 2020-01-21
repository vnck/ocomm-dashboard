import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from './components/AppliedRoutes'
import Login from './containers/Login'
import Home from "./containers/Home"
import Participants from "./containers/Participants"
import Groups from "./containers/Groups"
import Loans from "./containers/Loans"
import Consumables from "./containers/Consumables"
import NotFound from "./containers/NotFound"

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps}/>
      <AppliedRoute path="/home" exact component={Home} appProps={appProps}/>
      <AppliedRoute path="/login" exact component={Login} appProps={appProps}/>
      <AppliedRoute path="/participants" exact component={Participants} appProps={appProps}/>
      <AppliedRoute path="/groups" exact component={Groups} appProps={appProps}/>
      <AppliedRoute path="/loans" exact component={Loans} appProps={appProps}/>
      <AppliedRoute path="/consumables" exact component={Consumables} appProps={appProps}/>
      {/* Catch all unmatched routes */}
      <Route component={NotFound}/>
    </Switch>
  )
}
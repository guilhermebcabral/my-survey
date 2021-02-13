import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AutoForm from '../pages/AutoForm'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={AutoForm} />
    </Switch>
  )
}
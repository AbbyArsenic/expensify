import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);
const AddExpensePage = () => (
  <div>This is from my add expense component</div>
);
const EditExpensePage = () => (
  <div>This is from my edit expense component</div>
);
const HelpPage = () => (
  <div>This is from my help component</div>
);
const NotFoundPage = () => (
  <div>404 - Not found! <Link to="/">Go home.</Link></div>
);
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Espense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ExpenseDashboardPage} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
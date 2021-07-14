import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/:movieId' component={Movie} exact />
      <Route path='/*' component={NotFound} />
    </Switch>
    <GlobalStyle />
  </Router>
)

export default App

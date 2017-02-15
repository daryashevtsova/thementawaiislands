import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import './index.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import NotFound from './components/404';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
      <Route path='/gallery' component={Gallery} />
    </Route>
    <Route path='*' component={App}>
      <IndexRoute component={NotFound} />
    </Route>
  </Router>
), document.getElementById('root'));

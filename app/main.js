import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './router/home';

FastClick.attach(document.body);


const Root = () => (<div>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>

</div>)
render(<Root />, document.getElementById('root'));


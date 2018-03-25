import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import routes from './router';
import { Router, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

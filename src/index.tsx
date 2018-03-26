import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import routes from './router';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';
import { TestStore } from './store/TestStore';

const testStore = new TestStore();

ReactDOM.render(
  <Provider store={testStore}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

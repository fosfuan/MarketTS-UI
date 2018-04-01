import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import routes from './router';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';
import { RootStore } from './store/RootStore';

const store = new RootStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

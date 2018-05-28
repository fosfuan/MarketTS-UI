import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App  from './App';
import About  from './components/about/About';
import Home  from './components/home/Home';
import Login  from './components/login/LoginPresentational';
import Register from './components/register/RegistrationPresentational';
import Coin from './components/coin/CoinPresentational';
import Market from './components/market/Market';

// export const AppRouter: React.StatelessComponent<{}> = () => {
//   return (
//     <Router history={hashHistory}>
//       <Route path="/" component={App} >
//         <IndexRoute component={Home} />
//         <Route path="about" component={About} />
//         <Route path="login" component={Test} />
//       </Route>
//     </Router>
//   );
// };

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="coin" component={Coin} />
        <Route path="market" component={Market} />
    </Route>
);
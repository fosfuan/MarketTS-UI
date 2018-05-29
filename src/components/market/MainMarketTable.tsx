import * as React from 'react';
import '../../App.css';
import { Coin } from '../../models/Coin';
// import Table from 'material-ui/Table';
// import TableBody from 'material-ui/Table/TableBody';
// import TableCell from 'material-ui/Table/TableRowColumn';
// import TableHead from 'material-ui/Table/TableHeader';
// import TableRow from 'material-ui/Table/TableRow';
//import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router';
//import 'bootstrap/dist/css/bootstrap.css';

interface Props {
  ListOfCoins: Array<Coin>;
}

interface State {

}

// const styles = (theme : any) => ({
//     root: {
//       width: '100%',
//       marginTop: theme.spacing.unit * 3,
//       overflowX: 'auto',
//     },
//     table: {
//       minWidth: 700,
//     },
//   });

export class MainMarketTable extends React.Component<Props, State> {
  constructor(props: Props, context: State) {
    super(props, context);

    this.onClickRedirectToCurrencyDetails = this.onClickRedirectToCurrencyDetails.bind(this);
  }
  onClickRedirectToCurrencyDetails(coin: Coin, event: any): void {
    event.preventDefault();
    browserHistory.push("/currency/" + coin.coinId);
  }

  render() {
    const { ListOfCoins } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>BTC Price</th>
            <th>USD Price</th>
            <th>1 hour change</th>
            <th>24 hour change</th>
            <th>1 week change</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {ListOfCoins.map(n => {
            return (
              <tr className="main-table-tr" key={n.coinId} onClick={((e) => this.onClickRedirectToCurrencyDetails(n, e))}>
                <td>{n.name}</td>
                <td>{n.symbol}</td>
                <td>{n.priceBtc}</td>
                <td>{n.priceUsd}</td>
                <td>{n.change1h}</td>
                <td>{n.change24h}</td>
                <td>{n.change1w}</td>
                <td>Details</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MainMarketTable;

import * as React from 'react';
import '../../App.css';
import { Coin } from '../../models/Coin';
import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableRowColumn';
import TableHead from 'material-ui/Table/TableHeader';
import TableRow from 'material-ui/Table/TableRow';
import Paper from 'material-ui/Paper';

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
    render() {
        const {ListOfCoins} = this.props;
        return (
            <Paper>
              <Table>
                <TableHead adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Symbol</TableCell>
                    <TableCell>BTC Price</TableCell>
                    <TableCell>USD Price</TableCell>
                    <TableCell>1 hour change</TableCell>
                    <TableCell>24 hour change</TableCell>
                    <TableCell>1 week change</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody displayRowCheckbox={false}>
                  {ListOfCoins.map(n => {
                    return (
                      <TableRow key={n.coinId}>
                        <TableCell>
                          {n.name}
                        </TableCell>
                        <TableCell>{n.symbol}</TableCell>
                        <TableCell>{n.priceBtc}</TableCell>
                        <TableCell>{n.priceUsd}</TableCell>
                        <TableCell>{n.change1h}</TableCell>
                        <TableCell>{n.change24h}</TableCell>
                        <TableCell>{n.change1w}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
        );
    }
}

export default MainMarketTable;

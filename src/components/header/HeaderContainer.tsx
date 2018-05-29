import * as React from 'react';
import '../../App.css';
import HeaderItem from './HeaderItem';
import CoinApi from '../../api/CoinApi';
import {Coin} from '../../models/Coin';
import {TakeSkip} from '../../models/TakeSkip';

interface State {
    coinsValues: Array<Coin>
}

class HeaderContainer extends React.Component<any, State>{
  constructor(props: any, context:State) {
    super(props, context);
    this.state = {
        coinsValues: []
    }
  }

  componentDidMount():void {
    const takeSkip: TakeSkip = new TakeSkip(7, 0);
    CoinApi.getLatestCoinsValue(takeSkip).then((resp) =>{
        this.setState({coinsValues: resp})
    });
  }

  render() {
    const { coinsValues } = this.state;
    
    return (
      <div className="header-container">
      {
          coinsValues.map((coin: Coin)=>{
              return <HeaderItem coin={coin} key={coin.coinId}/>
          })
      }
      </div>
    );
  }
}

export default HeaderContainer;
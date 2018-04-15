import * as React from 'react';
import '../../App.css';
import {Coin} from '../../models/Coin';

interface Props {
    coin: Coin
}

interface State {

}

class HeaderItem extends React.Component<Props, State>{
  constructor(props: any, context:any) {
    super(props, context);
  }
  render() {
    const { coin } = this.props;
    return (
      <div className="header-item">
            {coin.name}
      </div>
    );
  }
}

export default HeaderItem;

import * as React from 'react';
import { browserHistory } from 'react-router';
import '../../App.css';

interface Props {
  name: string;
}

interface State {

}

class MenuItem extends React.Component<Props, State> {

    redirectToHomeIfPageNotInItems = () => {
        let itemName = this.props.name;
        const items =  ['About', 'Login', 'Register'];
        if(items.indexOf(itemName) > -1) {            
            browserHistory.push(this.props.name.toLowerCase());
        } else {
            browserHistory.push('/');
        }
    }

  render() {
    return (
        <div className="menu-element" onClick={this.redirectToHomeIfPageNotInItems}>
            <div>{this.props.name}</div>
        </div>
    );
  }
}

export default MenuItem;

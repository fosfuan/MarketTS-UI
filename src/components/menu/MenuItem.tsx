import * as React from 'react';
import { browserHistory } from 'react-router';
import '../../App.css';
import { inject, observer } from 'mobx-react';

interface Props {
    name: string,
    isDisplay: boolean;
    clickFunction?: () => void;
}

interface State {

}

@inject('store')
@observer
class MenuItem extends React.Component<Props, State> {

    redirectTo = () => {
        browserHistory.push(this.props.name.toLowerCase());
    }

    render() {
        const { isDisplay, clickFunction, name } = this.props;
        return (
            <div>
            {isDisplay && (
                <div className="menu-element" onClick={clickFunction} >
                    <div>{name}</div>
                </div>)}
            </div>
        );
    }
}

export default MenuItem;

import * as React from 'react';
import '../../App.css';
import { inject, observer } from 'mobx-react';
import { RootStore } from '../../store/RootStore';

interface Props {
    store?: RootStore,
    name: string,
    isDisplay: boolean;
}

interface State {

}

@inject('store')
@observer
class MenuItemLogout extends React.Component<Props, State> {
    constructor(props: Props, context: State) {
        super(props, context);
    }

    logout = (event: any) => {
        this.props.store!.userStore.logout();
    }

    render() {
        const { isDisplay, name } = this.props;
        return (
            <div>
                {isDisplay && (
                    <div className="menu-element" onClick={this.logout} >
                        <div>{name}</div>
                    </div>)}
            </div>
        );
    }
}

export default MenuItemLogout;

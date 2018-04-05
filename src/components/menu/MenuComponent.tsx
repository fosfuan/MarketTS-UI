import * as React from 'react';
import MenuItem from './MenuItem';
import '../../App.css';
import { RootStore } from '../../store/RootStore';
import { inject, observer } from 'mobx-react';
import { browserHistory } from 'react-router';
import MenuItemLogout from './MenuItemLogout';

interface Props {
    store?: RootStore
}

interface State {

}

@inject('store')
@observer
class MenuComponent extends React.Component<Props, State> {

    constructor(props: Props, context: State) {
        super(props, context);
    }

    // logout(){
    //     this.props.store!.userStore.logout();
    // }
    
    redirectTo = (name: string) => {
        browserHistory.push(name);
    }

    render() {
        const { userStore } = this.props.store!;
        return (
            <div className="menu-wrapper">
                <div className="menu-container">
                    <MenuItem name={"About"} isDisplay={true} clickFunction={this.redirectTo.bind(this, "about")}/>
                    <MenuItem name={"Home"} isDisplay={true} clickFunction={this.redirectTo.bind(this, "home")}/>
                    <MenuItem name={"Login"} isDisplay={!userStore.user.isLogged} clickFunction={this.redirectTo.bind(this, "login")}/>
                    <MenuItemLogout name={"Logout"} isDisplay={userStore.user.isLogged} />
                    <MenuItem name={"Register"} isDisplay={true} clickFunction={this.redirectTo.bind(this, "register")}/>
                </div>
            </div>
        );
    }
}

export default MenuComponent;
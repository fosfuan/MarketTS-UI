import * as React from 'react';
import CustomMenuItem from './MenuItem';
import '../../App.css';
import { RootStore } from '../../store/RootStore';
import { inject, observer } from 'mobx-react';
import { browserHistory } from 'react-router';
import MenuItemLogout from './MenuItemLogout';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

interface Props {
    store?: RootStore
}

interface State {
    autoCompleteDataStore: Array<string>
}

@inject('store')
@observer
class MenuComponent extends React.Component<Props, State> {

    constructor(props: Props, context: State) {
        super(props, context);

        this.state = {
            autoCompleteDataStore: ["Ripple", "Rupple", "bitcoin"]
        }
    }


    // logout(){
    //     this.props.store!.userStore.logout();
    // }

    redirectTo = (name: string) => {
        browserHistory.push(name);
    }

    onNewRequest = (chosenRequest: any, index: number) => {
        let choosenInput: any = chosenRequest;

        if (choosenInput.text !== undefined) {
            this.props.store!.testStore.setTekst(choosenInput.text);
            browserHistory.push("/currency/" + choosenInput.text);
        }
        else {
            this.props.store!.testStore.setTekst(choosenInput);
            browserHistory.push("/currency/" + choosenInput);
        }
        
    }

    render() {
        const dataSource1 = [
            {
                text: 'text-value1',
                value: (
                    <MenuItem
                        primaryText="text-value1"
                        rightIcon={<img src="https://cdn.worldvectorlogo.com/logos/ripple-2.svg" />
                        }
                    />
                ),
            },
            {
                text: 'text-value2',
                value: (
                    <MenuItem
                        primaryText="text-value2"
                        secondaryText="&#9786;"
                    />
                ),
            },
        ];
        const { userStore } = this.props.store!;
        //const {autoCompleteDataStore} = this.state
        return (
            <div className="menu-container">
                <div className="left">
                    <CustomMenuItem name={"About"} isDisplay={true} clickFunction={this.redirectTo.bind(this, "about")} />
                    <CustomMenuItem name={"Home"} isDisplay={true} clickFunction={this.redirectTo.bind(this, "/")} />
                    <CustomMenuItem name={"Market"} isDisplay={true} clickFunction={this.redirectTo.bind(this, "market")} />
                </div>
                <div className="middle">
                    <AutoComplete
                        hintText="Type coin name"
                        dataSource={dataSource1}
                        floatingLabelText="Coin name:"
                        fullWidth={true}
                        onNewRequest={this.onNewRequest}
                    />
                </div>

                <div className="right">
                    <CustomMenuItem name={"Register"} isDisplay={true} clickFunction={this.redirectTo.bind(this, "register")} />
                    <CustomMenuItem name={"Login"} isDisplay={!userStore.user.isLogged} clickFunction={this.redirectTo.bind(this, "login")} />
                    <MenuItemLogout name={"Logout"} isDisplay={userStore.user.isLogged} />
                </div>

            </div>
        );
    }
}

export default MenuComponent;
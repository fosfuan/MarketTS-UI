import * as React from 'react';
import MenuItem from './MenuItem';
import '../../App.css';

interface Props {
}

interface State {

}

class MenuComponent extends React.Component<Props, State> {
    
  render() {
    const menuItem = ['About', 'Home', 'Login', 'Register'];
    return (
        <div  className="menu-wrapper">
            <div className="menu-container">
                {
                    menuItem.map((item, index) => {
                        return <MenuItem key={index} name={item} items={menuItem}/>;
                    }
                    )}
            </div>
        </div>
    );
  }
}

export default MenuComponent    ;
import * as React from 'react';
import './App.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MenuComponent from './components/menu/MenuComponent';

interface Props {
  children: React.ReactNode;
}

interface State {

}

export class App extends React.Component<Props, State> {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="container-fluid">
          <div>
            <MenuComponent />
          </div>
          <div className="main-container">
            <div>{this.props.children}</div>
          </div>
        </div>
        <div className="footer">
          <p>Footer</p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

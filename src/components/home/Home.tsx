import * as React from 'react';
import '../../App.css';

interface Props {
    children: React.ReactNode;
}

interface State {

}

export class Home extends React.Component<Props, State> {
    render() {
        return (
            <div className="App">From Home
      </div>
        );
    }
}

export default Home;

import * as React from 'react';
import '../../App.css';

interface Parameter{
    id: string
}

interface MyViewProperties {
    params: Parameter;
}

interface State {
    name: string;
}

export class Currency extends React.Component<MyViewProperties, State> {
    constructor(props: MyViewProperties, context: State) {
        super(props, context);
    }


    render() {
        console.log(this.props.params)
        return (
            <div className="App">
                From Currency
                <p>{this.props.params.id}</p>
            </div>
        );
    }
}

export default Currency;

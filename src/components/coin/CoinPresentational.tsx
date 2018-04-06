import * as React from 'react';
import '../../App.css';
import { RootStore } from '../../store/RootStore';
import { inject, observer } from 'mobx-react';

interface Props {
    store?: RootStore
}

interface State {
    name: string;
}

@inject('store')
@observer
export class CoinPresentational extends React.Component<Props, State> {
    constructor(props: Props, context: State) {
        super(props, context);
    }


    render() {
        const { testStore } = this.props.store!;
        return (
            <div className="App">
                {testStore && testStore.tekst}
            </div>
        );
    }
}

export default CoinPresentational;

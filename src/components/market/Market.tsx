import * as React from 'react';
import CoinApi from '../../api/CoinApi';
import { Coin } from '../../models/Coin';
import { TakeSkip } from '../../models/TakeSkip'
import { ApiError } from '../../models/ApiError'
import '../../App.css';
// import HeaderItem from '../header/HeaderItem';

interface Props {
    children: React.ReactNode;
}

interface State {
    coinsValues: Array<Coin>;
    apiError: ApiError
}


export class Market extends React.Component<Props, State> {
    constructor(props: any, context: State) {
        super(props, context);
        this.state = {
            coinsValues: [],
            apiError: new ApiError("", "", "")
        }
    }


    componentDidMount(): void {
        const takeSkip: TakeSkip = new TakeSkip(100, 0);

        CoinApi.getLatestCoinsValue(takeSkip).then((resp) =>{
            this.setState({coinsValues: resp})
        }).catch((error) => {
            let Error: ApiError = new ApiError(error.status, error.statusText, error.error);
            this.setState({ apiError: Error })
        });
    }

    render() {
        const { coinsValues } = this.state;
        let errorMsg = this.state.apiError.Error != "" ? JSON.parse(this.state.apiError.Error).Skip[0] : "";
        return (
            <div  ref="myRef" className="App">{
                errorMsg != "" && coinsValues.length > 0 ? (<p>{errorMsg}</p>) :
                    (
                        coinsValues.map((coin) => {
                            return <p>{coin.name}</p>
                        })
                    )
            }
            </div>
        )}
}

export default Market;

import * as React from 'react';
import '../../App.css';
import { Coin } from '../../models/Coin';
import  CoinApi  from '../../api/CoinApi';
import { ApiError } from '../../models/ApiError'

interface Parameter{
    name: string
}

interface MyViewProperties {
    params: Parameter;
}

interface State {
    ListOfCoinHistory : Array<Coin>,
    ApiError: ApiError,
}

export class Currency extends React.Component<MyViewProperties, State> {
    constructor(props: MyViewProperties, context: State) {
        super(props, context);
        this.state = {
            ListOfCoinHistory : [],
            ApiError : new ApiError("", "", "")
        }
    }

    componentDidMount(): void {
        const {name} = this.props.params;
        CoinApi.getListOfHistoryCoinBySymbolName(name)
            .then((res) => {
                this.setState({ListOfCoinHistory : res});
            }).catch((error) =>{
                let apiError: ApiError = new ApiError(error.status, error.statusText, error.error);
                this.setState({ApiError : apiError})
            })
    }
    
    render() {
        const {ListOfCoinHistory} = this.state;
        return (
            <div className="App">
                From Currency
                <p>{this.props.params.name}</p>
                {
                    ListOfCoinHistory.length > 0 ? (
                        ListOfCoinHistory.map((coin) =>{
                            return <p>{coin.symbol} -> {coin.priceUsd}, when: {coin.updatedTime}</p>
                        })
                    ) : (
                        <p>Loading...</p>
                    )
                }
            </div>
        );
    }
}

export default Currency;

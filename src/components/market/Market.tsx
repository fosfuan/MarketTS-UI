import * as React from 'react';
import CoinApi from '../../api/CoinApi';
import { Coin } from '../../models/Coin';
import { TakeSkip } from '../../models/TakeSkip'
import { ApiError } from '../../models/ApiError'
import '../../App.css';
import MainMarketTable from './MainMarketTable'
import TablePagination from './TablePagination'
// import HeaderItem from '../header/HeaderItem';

interface Props {
    children: React.ReactNode;
}

interface State {
    coinsValues: Array<Coin>,
    apiError: ApiError,
    displayedItem: number,
    currentPage: number,
    numberOfPages: number,
    numberOfItems: number
}


export class Market extends React.Component<Props, State> {
    constructor(props: any, context: State) {
        super(props, context);
        this.state = {
            coinsValues: [],
            apiError: new ApiError("", "", ""),
            displayedItem: 15,
            currentPage: 0,
            numberOfPages: 0,
            numberOfItems: 0
        }
        this.makePagination = this.makePagination.bind(this);
    }


    componentDidMount(): void {
        const takeSkip: TakeSkip = new TakeSkip(150, 0);

        CoinApi.getLatestCoinsValue(takeSkip).then((resp) => {
            const firstDisplayedItem: Array<Coin> = resp.slice(0, this.state.displayedItem);

            this.setState({ coinsValues: firstDisplayedItem })
            this.setState({ numberOfItems: resp.length })
            let numOfPage: number = Math.ceil(this.state.numberOfItems / this.state.displayedItem);
            this.setState({ numberOfPages: numOfPage });
        }).catch((error) => {
            let Error: ApiError = new ApiError(error.status, error.statusText, error.error);
            this.setState({ apiError: Error })
        });
    }

    makePagination(event: any, pageNumber: number): void {
        event.preventDefault();
        const skip = pageNumber === 0 ? 0 : pageNumber * this.state.displayedItem;
        this.setState({ currentPage: pageNumber });

        const takeSkip = new TakeSkip(this.state.displayedItem, skip);

        CoinApi.getLatestCoinsValue(takeSkip).then((resp) => {
            this.setState({ coinsValues: resp })
        }).catch((error) => {
            let Error: ApiError = new ApiError(error.status, error.statusText, error.error);
            this.setState({ apiError: Error })
        });
    }

    render() {
        const { coinsValues } = this.state;
        let errorMsg = this.state.apiError.Error != "" ? JSON.parse(this.state.apiError.Error).Skip[0] : "";
        return (
            <div ref="myRef" className="App">
            {
                errorMsg != "" && coinsValues.length > 0 ? (<p>{errorMsg}</p>) :
                    (
                        <div className="main-market-table">
                            <MainMarketTable ListOfCoins={coinsValues} />
                        </div>
                    )
            }
                {
                    <div className="paginator-center">
                        {
                            Array.from({ length: this.state.numberOfPages }, (v, k) => k).map((value) => {
                                if (value === this.state.currentPage) {
                                    return (
                                        <TablePagination key={value} pageNumber={value} pagination={((e) => this.makePagination(e, value))} isSelectedPage={true} />
                                    )
                                } else {
                                    return (
                                        <TablePagination key={value} pageNumber={value} pagination={((e) => this.makePagination(e, value))} isSelectedPage={false} />
                                    )
                                }
                                // <div className="App" onClick={((e) => this.makePagination(e, value))}>
                                //     {value}
                                // </div>

                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Market;

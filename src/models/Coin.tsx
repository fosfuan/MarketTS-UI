class Coin {
    public coinId: number;
    public name: string;
    public symbol: string;
    public price_USD: number;
    public price_BTC: number;
    public volume_24_USD: number;
    public change_1H: number;
    public change_24H: number;
    public change_1W: number;
    public updated_time: string;

    public constructor(coinid: number, name: string, symbol: string,
        priceUsd: number, priceBtc: number, volume24: number,
        change1H: number, change24H: number, change_1W: number,
        updated_time: string) {
        this.coinId = coinid;
        this.name = name;
        this.symbol = symbol;
        this.price_USD = priceUsd;
        this.price_BTC = priceBtc;
        this.volume_24_USD = volume24;
        this.change_1H = change1H;
        this.change_24H = change24H,
        this.change_1W = change_1W;
        this.updated_time = updated_time;
    }

}


export { Coin };
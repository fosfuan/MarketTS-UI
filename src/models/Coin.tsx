class Coin {
    public coinId: number;
    public name: string;
    public symbol: string;
    public priceUsd: number;
    public priceBtc: number;
    public volume24Usd: number;
    public change1h: number;
    public change24h: number;
    public change1w: number;
    public updatedTime: string;

    public constructor(coinid: number, name: string, symbol: string,
        priceUsd: number, priceBtc: number, volume24: number,
        change1H: number, change24H: number, change_1W: number,
        updated_time: string) {
        this.coinId = coinid;
        this.name = name;
        this.symbol = symbol;
        this.priceUsd = priceUsd;
        this.priceBtc = priceBtc;
        this.volume24Usd = volume24;
        this.change1h = change1H;
        this.change24h = change24H,
        this.change1w = change_1W;
        this.updatedTime = updated_time;
    }

}


export { Coin };
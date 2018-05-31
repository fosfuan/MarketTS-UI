import {TakeSkip} from '../models/TakeSkip';
import BaseApi from './BaseApi';

class CoinApi extends BaseApi {

    getLatestCoinsValue(takeSkip: TakeSkip){
        var url = 'api/coins/latest/values';
        
        return this.change('POST', url, takeSkip).then(JSON.parse); 
    }

    getListOfHistoryCoinBySymbolName(symbolName: string){
        var url = 'api/coins/history/' + symbolName;

        return this.get(url).then(JSON.parse);
    }

}

export default new CoinApi();
import {TakeSkip} from '../models/TakeSkip';
import BaseApi from './BaseApi';

class CoinApi extends BaseApi {

    getLatestCoinsValue(takeSkip: TakeSkip){
        var url = 'api/coins/latest/values';
        
        return this.change('POST', url, takeSkip).then(JSON.parse); 
    }
}

export default new CoinApi();
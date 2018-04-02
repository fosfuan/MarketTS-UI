import { UserLogin } from '../models/UserLogin';
import { UserRegister } from '../models/UserRegister';
import BaseApi from './BaseApi';

class UserApi extends BaseApi {
     login(user: UserLogin) {
        var url = 'api/user/login';

        return this.change('POST', url, user).then(JSON.parse);
    }

    register(user: UserRegister){
        var url = 'api/user/register';
        
        return this.change('POST', url, user).then(JSON.parse); 
    }
}

export default new UserApi();
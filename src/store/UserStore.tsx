import { observable, action } from 'mobx';
import { User } from '../models/User';
import { UserLogin } from '../models/UserLogin';
import UserApi from '../api/UserApi';
// import {RootStore} from './RootStore';

class UserStore {
    // private rootStore:RootStore;
    // constructor(rootStore:RootStore) {
    //   this.rootStore = rootStore
    // }

    @observable
    public user: User;

    @observable
    public isLogged: boolean = false;

    @observable
    public error: boolean = false;
    
    @observable
    public errorMessage: string = '';

    @action
    /**
     * login
     */
    public login(user: UserLogin) {
        UserApi.login(user).then((resp) => {
            const {access_token, refresh_token, userName, userId} = resp.credential;
            this.user = new User(access_token, refresh_token, userName, userId);
            this.isLogged = true;
            this.error = false;
        }).catch((error: any) => {
            console.log(error);
            this.error = true;
            this.errorMessage = error.error
        });
    }
}

export { UserStore };
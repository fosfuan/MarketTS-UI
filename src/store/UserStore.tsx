import { observable, action } from 'mobx';
import { User } from '../models/User';
import { UserLogin } from '../models/UserLogin';
import UserApi from '../api/UserApi';
import { UserRegister } from '../models/UserRegister';
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
    public loginError: boolean = false;

    @observable
    public registerError: boolean = false;
    
    @observable
    public registerSuccess: boolean = false;
    
    @observable
    public errorMessage: string = '';
    
    @observable
    public registerErrorMessage: string = '';
    
    @observable
    public registerSuccessMessage: string = '';

    @action
    /**
     * login
     */
    public login(user: UserLogin) {
        UserApi.login(user).then((resp) => {
            const {access_token, refresh_token, userName, userId} = resp;
            this.user = new User(access_token, refresh_token, userName, userId);
            this.isLogged = true;
            this.loginError = false;
        }).catch((error: any) => {
            console.log(error);
            this.loginError = true;
            this.errorMessage = JSON.parse(error.error);
        });
    }

    public register(user: UserRegister){
        UserApi.register(user).then((resp) => {
            this.registerError = false;
            this.registerErrorMessage = '';
            this.registerSuccessMessage = resp;
            this.registerSuccess = true;
        }).catch((error: any) => {
            console.log(error);
            this.registerError = true;
            this.registerErrorMessage = JSON.parse(error.error);
            this.registerSuccess = false;
        });        
    }
}

export { UserStore };
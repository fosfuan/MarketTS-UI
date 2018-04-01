import { observable, action } from 'mobx';
// import {RootStore} from './RootStore';

class TestStore {
    // private rootStore:RootStore;
    // constructor(rootStore:RootStore) {
    //   this.rootStore = rootStore
    // }
    @observable tekst: string;

    @action
    setTekst = (message:string) =>{
        this.tekst = message;
    }

}

export { TestStore };
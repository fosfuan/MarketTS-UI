import { observable, action } from 'mobx';

class TestStore {
    @observable tekst: string;

    @action
    setTekst = (message:string) =>{
        this.tekst = message;
    }

}

export { TestStore };
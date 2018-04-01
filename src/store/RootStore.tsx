import {TestStore} from './TestStore';
import {UserStore} from './UserStore';

class RootStore {
    public userStore:UserStore;
    public testStore:TestStore;
    constructor() {
      this.userStore = new UserStore();
      this.testStore = new TestStore();
    }
  }

  export {RootStore}
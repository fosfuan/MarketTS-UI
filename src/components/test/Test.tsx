import * as React from 'react';
import '../../App.css';
import { TestStore } from '../../store/TestStore';
import { inject, observer } from 'mobx-react';

interface TestProps {
  store?: TestStore;
}

@inject('store')
@observer
class Test extends React.Component<TestProps, any>{
  constructor(props: TestProps, context:any) {
    super(props, context);
  }
  render() {
    const { store } = this.props;
    return (
      <div>
        <p>From test</p>
        {store && store.tekst}
      </div>
    );
  }
}

export default Test;

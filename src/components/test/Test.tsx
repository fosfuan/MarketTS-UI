import * as React from 'react';
import '../../App.css';
import { RootStore } from '../../store/RootStore';
import { inject, observer } from 'mobx-react';

interface TestProps {
  store?: RootStore
}

@inject('store')
@observer
class Test extends React.Component<TestProps, any>{
  constructor(props: TestProps, context:any) {
    super(props, context);
  }
  render() {
    const { testStore } = this.props.store!;
    return (
      <div>
        <p>From test</p>
        {testStore && testStore.tekst}
      </div>
    );
  }
}

export default Test;

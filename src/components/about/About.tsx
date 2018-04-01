import * as React from 'react';
import '../../App.css';
import { RootStore } from '../../store/RootStore';
import { inject, observer } from 'mobx-react';
import TextField from 'material-ui/TextField';

interface AboutProps {
  store?: RootStore
}

interface AboutState {
  printedText: string
}

@inject('store')
@observer
class About extends React.Component<AboutProps, AboutState>{
  constructor(props: AboutProps, context: AboutState) {
    super(props, context);
    this.state = {
      printedText: ''
    }
  }

  onChange = (event: any) => {
    event.preventDefault();

    let inputValue: string = event.target.value;
    this.setState({ printedText: inputValue });
  }

  setTestTekst = () => {
    let inputValue: string = this.state.printedText;
    this.props.store!.testStore.setTekst(inputValue);
  }

  render() {
    const { testStore } = this.props.store!;
    const { printedText } = this.state;
    return (
      <div>
        <TextField
          floatingLabelText="input"
          onChange={this.onChange}
          value={printedText}
        /><br />
        <button onClick={this.setTestTekst}>Kliknij</button>

        {testStore && testStore.tekst}
      </div>
    );
  }
}

// const About: React.StatelessComponent<{}> = () => {
//     return (
//       <div className="App">From about
//       </div>
//     );
// };

export default About;

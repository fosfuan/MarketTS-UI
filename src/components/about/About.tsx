import * as React from 'react';
import '../../App.css';
import { TestStore } from '../../store/TestStore';
import { inject, observer } from 'mobx-react';
import TextField from 'material-ui/TextField';

interface AboutProps {
  store?: TestStore;
}

interface AboutState{
  printedText: string
}

@inject('store')
@observer
class About extends React.Component<AboutProps, AboutState>{
  constructor(props: AboutProps, context:AboutState) {
    super(props, context);
    this.state = {
      printedText: ''
    }
  }

  onChange = (event: any) =>{
    event.preventDefault();
    
    let inputValue: string = event.target.value;
    this.setState({ printedText: inputValue});
  }

  setTestTekst = () => {
    let inputValue: string = this.state.printedText;
    if(this.props.store){
      this.props.store.setTekst(inputValue);
    }
  }

  render() {
    const { store } = this.props;
    const {printedText} = this.state;
    return (
      <div>
        <TextField
          floatingLabelText="input"
          onChange={this.onChange}
          value={printedText}
        /><br />
        <button onClick={this.setTestTekst}>Kliknij</button>

        {store && store.tekst}
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

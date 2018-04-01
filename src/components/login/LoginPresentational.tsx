import * as React from 'react';
import TextField from 'material-ui/TextField';
import '../../App.css';
import { RootStore } from '../../store/RootStore';
import { inject, observer } from 'mobx-react';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';
import { UserLogin } from '../../models/UserLogin';

interface LoginProps {
    store?: RootStore
}

interface LoginState {
    finished: boolean,
    stepIndex: number,
    password: string,
    password_error: string,
    username: string,
    username_error: string,
    fontUsernameColor: object,
    fontPasswordColor: object,
    filledForms: Array<string>
}

@inject('store')
@observer
class LoginPresentational extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps, context: LoginState) {
        super(props, context);
        this.state = {
            finished: false,
            stepIndex: 0,
            username: '',
            username_error: '',
            password: '',
            password_error: '',
            fontPasswordColor: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            fontUsernameColor: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            filledForms: []
        };
    }

    addFormToFilled = (formName: string) => {
        let filledForms: Array<string> = this.state.filledForms.slice();
        filledForms.push(formName)
        this.setState({ filledForms: filledForms })
    }

    checkIfFormIsFilled = (formName: string) => {
        return this.state.filledForms.indexOf(formName) > -1;
    }

    usernameOnChange = (event: any) => {
        const usernameErrr = 'Provide username';
        event.preventDefault();
        let userNameValue = event.target.value;
        if (userNameValue.length < 1) {
            this.setState({ username_error: usernameErrr });
            this.setState({ username: userNameValue });
        }
        else {
            this.setState({ username: userNameValue });
            this.setState({ username_error: '', fontUsernameColor: { color: 'white' } });
            if (!this.checkIfFormIsFilled('username')) {
                this.addFormToFilled('username');
                this.handleNext();
            }
        } 
    }

    passwordOnChange = (event: any) => {
        event.preventDefault();
        let passwordValue = event.target.value;
        this.setState({ password: passwordValue });
        if (passwordValue.length < 1) {
            const passwordError = 'Provide Password!';
            this.setState({ password: passwordValue });
            this.setState({ password_error: passwordError });
        }
        else if (passwordValue.length > 0) {
            this.setState({ password_error: '' });
            this.setState({ password: passwordValue, fontPasswordColor: { color: 'white' } });
            this.handleNext();
        }
    }

    submit = (event: any) => {
        let user: UserLogin = new UserLogin(this.state.username, this.state.password);

        this.props.store!.userStore.login(user);
    }

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    render() {

        const style = {
            textAlign: 'center',
            color: 'white'
        };

        const { userStore } = this.props.store!;
        const { finished, stepIndex, password, password_error, username, username_error, fontUsernameColor, fontPasswordColor } = this.state;

        return (<div className="login-container">
            <div className="login-element" >
                <h2 style={style}>Login</h2>
                <TextField
                    floatingLabelText="Username"
                    onChange={this.usernameOnChange}
                    value={username}
                    errorText={username_error}
                /><br />
                <TextField
                    floatingLabelText="Password"
                    type="password"
                    onChange={this.passwordOnChange}
                    value={password}
                    errorText={password_error}
                /><br />
            </div>
            <div className="login-element login-stepper">
                <div style={{ maxWidth: 180, maxHeight: 400, margin: 'auto' }}>
                    <Stepper activeStep={stepIndex} orientation="vertical">
                        <Step>
                            <StepLabel style={fontUsernameColor}>Username</StepLabel>
                            <StepContent>
                                <p>
                                    Provide an username
                                </p>
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel style={fontPasswordColor}>Password</StepLabel>
                            <StepContent>
                                <p>Provide a password.</p>
                            </StepContent>
                        </Step>
                    </Stepper>
                </div>
            </div>
            {finished && (
                <div className="menu-element centered-button" >
                    <div onClick={this.submit}>Login</div>
                </div>)}
            {
                userStore.isLogged && (
                    <div> zalogowany</div>
                )
            }
            {                
                userStore.error && (
                    <div> {userStore.errorMessage}</div>
                )
            }
        </div>
        );
    }
}

export default LoginPresentational;
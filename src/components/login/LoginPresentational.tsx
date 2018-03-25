import * as React from 'react';
import TextField from 'material-ui/TextField';
import '../../App.css';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';

interface LoginProps {
}

interface LoginState {
    finished: boolean,
    stepIndex: number,
    password: string,
    password_error: string,
    email: string,
    email_error: string,
    fontEmailColor: object,
    fontPasswordColor: object
}

class LoginPresentational extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps, context: any) {
        super(props, context);
        this.state = {
            finished: false,
            stepIndex: 0,
            password: '',
            password_error: '',
            email: '',
            email_error: '',
            fontEmailColor : {
                color: 'rgba(255, 255, 255, 0.3)'                
            },
            fontPasswordColor : {
                color: 'rgba(255, 255, 255, 0.3)'                
            },
        };
    }
    
    emailOnChange = (event: any) => {
        const emailError = 'Provide correct email address!';
        event.preventDefault();
        let emailValue = event.target.value;
        if(emailValue.length < 1){
            this.setState({ email_error: emailError });  
            this.setState({ email: emailValue });
        }
        if (emailValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            this.setState({ email: emailValue });
            this.setState({ email_error: '', fontEmailColor: {color: 'white'}});
            this.handleNext();
        } else {
            this.setState({ email: emailValue });
            this.setState({ email_error: emailError });
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
            this.setState({ password: passwordValue, fontPasswordColor: {color: 'white'}});
            this.handleNext();
        }
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

        const { finished, stepIndex, password, password_error, email, email_error, fontEmailColor, fontPasswordColor } = this.state;

        return (<div className="login-container">
            <div className="login-element" >
                <h2 style={style}>Login</h2>
                <TextField
                    floatingLabelText="Email"
                 onChange={this.emailOnChange}
                 value={email}
                 errorText={email_error}
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
                            <StepLabel style={fontEmailColor}>Email</StepLabel>
                            <StepContent>
                                <p>
                                    Provide an email
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
                    <div>Login</div>
                </div>)}
        </div>
        );
    }
}

export default LoginPresentational;
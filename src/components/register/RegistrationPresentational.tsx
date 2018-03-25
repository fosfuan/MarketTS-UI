import * as React from 'react';
import TextField from 'material-ui/TextField';
import '../../App.css';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';

interface RegisterProps {
}

interface RegisterState {
    finished: boolean,
    stepIndex: number,
    username: string,
    username_error: string,
    password: string,
    password_error: string,
    email: string,
    email_error: string,
    repeat_password: string,
    repeat_password_error: string,
    fontEmailColor: object,
    fontPasswordColor: object,
    fontRepeatPasswordColor: object,
    fontUsernameColor: object,
    filledForms: Array<string>
}

class RegistrationPresentational extends React.Component<RegisterProps, RegisterState> {

    constructor(props: RegisterProps, context: any) {
        super(props, context);
        this.state = {
            finished: false,
            stepIndex: 0,
            username: '',
            username_error: '',
            password: '',
            password_error: '',
            email: '',
            email_error: '',
            repeat_password: '',
            repeat_password_error: '',
            fontEmailColor : {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            fontPasswordColor : {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            fontRepeatPasswordColor : {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            fontUsernameColor : {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            filledForms : []
        };
    }

    addFormToFilled = (formName: string) =>{
        let filledForms: Array<string> = this.state.filledForms.slice();
        filledForms.push(formName)
        this.setState({ filledForms: filledForms })        
    }

    checkIfFormIsFilled = (formName: string) => {
        return this.state.filledForms.indexOf(formName) > -1;
    }

    usernameOnChange = (event: any) =>{
        event.preventDefault();      
        let usernameValue = event.target.value;
        this.setState({ username: usernameValue });  
        if(usernameValue.length < 7){
            this.setState({ username_error: 'Username must be longer than 7 characters!' });
        }else if(!/[A-Z]/.test(usernameValue)){
            this.setState({ username_error: 'Username must have at least one upper case letter!' });
        }else{
            this.setState({ username_error: '', fontUsernameColor: {color: 'white'}});
            if(!this.checkIfFormIsFilled('username')){
                this.addFormToFilled('username');
                this.handleNext();
            }
        }
    }

    emailOnChange = (event: any) => {
        const emailError = 'Provide correct email address!';
        event.preventDefault();
        let emailValue = event.target.value;
        this.setState({ email: emailValue, email_error: emailError }); 
        if(emailValue.length < 1){
            this.setState({ email_error: emailError, email: emailValue });  
        }
        if (emailValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            this.setState({ email: emailValue, email_error: '', fontEmailColor: {color: 'white'}});
            if(!this.checkIfFormIsFilled('email')){
                this.addFormToFilled('email');
                this.handleNext();
            }
        }
    }

    passwordOnChange = (event: any) => {
        const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        event.preventDefault();
        let passwordValue = event.target.value;
        this.setState({ password: passwordValue });
        if (passwordValue.length < 6) {
            const passwordError = 'Password must have at least 6 characters!';
            this.setState({ password: passwordValue, password_error: passwordError });
        }else if(!/[A-Z]/.test(passwordValue)){
            const passwordError = 'Password must have at least 1 upper case character!';
            this.setState({ password_error: passwordError });
        }
        else if(!format.test(passwordValue)){
            const passwordError = 'Password must have at least 1 special character!';
            this.setState({ password_error: passwordError });
        }
        else if (passwordValue.length > 0) {
            this.setState({ password: passwordValue, password_error: '', fontPasswordColor: {color: 'white'}});
            if(!this.checkIfFormIsFilled('password')){
                this.addFormToFilled('password');
                this.handleNext();
            }
        }
    }

    repeatPasswordOnChange = (event: any) =>{
        event.preventDefault();
        let repeatedPasswordValue = event.target.value;
        this.setState({ repeat_password: repeatedPasswordValue });

        if(repeatedPasswordValue === this.state.password) {
            this.setState({ repeat_password: repeatedPasswordValue, repeat_password_error: '', fontRepeatPasswordColor: {color: 'white'}});
            if(!this.checkIfFormIsFilled('repeat')){
                this.addFormToFilled('repeat');
                this.handleNext();
            }
        } else {
            this.setState({ repeat_password: repeatedPasswordValue, repeat_password_error: 'Password must be equal!' }); 
        }
    }

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 3,
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

        const { finished, stepIndex, username, username_error, password, 
            password_error, email, email_error, repeat_password, repeat_password_error,
            fontEmailColor, fontPasswordColor, fontRepeatPasswordColor, fontUsernameColor
         } = this.state;

        return ( <div className="register-container">
        <div className="register-element" >
            <h2 style={style}>Registration</h2>
            <TextField
                floatingLabelText="Username"
                onChange={this.usernameOnChange}
                value={username}
                errorText={username_error}
            /><br />
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
            <TextField
                floatingLabelText="Repeat Password"
                type="password"
                onChange={this.repeatPasswordOnChange}
                value={repeat_password}
                errorText={repeat_password_error}
            /><br />
        </div>
        <div className="register-element register-stepper">
            <div style={{ maxWidth: 180, maxHeight: 400, margin: 'auto' }}>
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel style={fontUsernameColor}>Username</StepLabel>
                        <StepContent>
                            <p>
                                Provide an Username
                            </p>
                        </StepContent>
                    </Step>
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
                    <Step>
                        <StepLabel style={fontRepeatPasswordColor}>Repeat Password</StepLabel>
                        <StepContent>
                            <p>You have to repeat password which you provided.</p>
                        </StepContent>
                    </Step>
                </Stepper>
            </div>
        </div>
            {finished && (
                <div className="menu-element centered-button" >
                    <div>Register</div>
                </div>)}
    </div>
        );
    }

}

export default RegistrationPresentational;
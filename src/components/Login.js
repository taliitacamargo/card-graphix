import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { checkPassword, validateEmail } from '../utils/helpers';


function LogIn() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;



        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);

        } else if (inputType === 'password') {
            setPassword(inputValue);
        }
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();


        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or username is invalid');
            return;

        }
        if (!checkPassword(password)) {
            setErrorMessage(
                ` Incorrect Password ${userName}`
            );
            return;
        }

        setUserName('');
        setPassword('');
        setEmail('');
        alert(`Hello ${userName}`);
    };

    return (
        <div>
            <h1>Welcome {userName}!</h1>

            <br className="w-100 m-4"></br>

            <small>Create account </small>

            <form>

                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="john@example.com" />

                <div className="w-100 m-2"></div>

                <input
                    value={userName}
                    name="userName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="John Doe" />

                <div className="w-100 m-2"></div>

                <input value={password}
                    name="password"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="******" />

                <div className="w-100 m-2"></div>

                <small>Don't have account?
                    <Route path="/login">
                    <Link to= "/SignUp/"></Link>
                    </Route>
                </small>
                <div className="w-100 m-2"></div>

                <button type="button" onClick={handleFormSubmit}>Submit</button>

            </form>

            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}
export default LogIn;


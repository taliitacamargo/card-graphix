import React, { useState } from 'react';

import { checkPassword, validateEmail } from '../utils/helpers';

function Form() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')

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
            console.log(email)
            setErrorMessage('Email or Username is invalid');

            return;
        }
        if (!checkPassword(password)) {
            setErrorMessage(`Insecure Password, Please choose a different passowrd for the account: ${userName}`);

            return;
        }
        setUserName('');
        setPassword('')
        setEmail('')
        alert(`Welcome ${userName}!`)

    };

    return (
        <div>
            <h1>Welcome {userName}</h1>
            <br className="w-100 m-4"></br>
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
export default Form;

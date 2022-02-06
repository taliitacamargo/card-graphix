import React, { useState } from 'react';

import { Link } from 'react-router';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../utils/helpers';

// something to push
function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  // Create a password variable and a function "setPassword" using useState
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
      //  Add an else statement to the end that will set the password to the value of 'inputValue'
    } else if (inputType === 'password') {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }

    // If successful, we want to clear out the input after registration.
    setUserName('');
    // Set the password back to an empty string after the user clicks submit
    setPassword('');
    setEmail('');
    alert(`Hello ${userName}`);
  };

return (
    <div>
    <h1>Welcome {userName}</h1>

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

        <small>Already have account?
             {/* <Link to= "/Login/"></Link> */}
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
export default Form;


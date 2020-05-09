import React from "react";
import "./Form.css";

const App = () => {
  const [state, setState] = React.useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  
  const handleSubmit = React.useCallback((e) => {
    alert('Your information has been uploaded.');

    e.preventDefault();
    
    setState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    });
  }, []);
  
  const handleChange = React.useCallback(({ target }) => {
    setState((prevState) => ({ ...prevState, [target.name]: target.value }));
  }, []);

  return (
    <div className="formcontainer">
      <form className="Form">
        <p className="register">CREATE ACCOUNT</p>

        <input
          className="input"
          name="firstName"
          placeholder="First name"
          value={ state.firstName }
          onChange={ handleChange }
        />

        <input
          className="input"
          name="lastName"
          placeholder="Last name"
          value={ state.lastName }
          onChange={ handleChange }
        />

        <input
          className="input"
          name="username"
          placeholder="Username"
          value={ state.username }
          onChange={ handleChange }
        />

        <input
          className="input"
          name="email"
          placeholder="Email"
          value={ state.email }
          onChange={ handleChange }
        />

        <input
          className="input"
          name="password"
          type="password"
          placeholder="Password"
          value={ state.password }
          onChange={ handleChange }
        />

        <button className="submit" onClick={ handleSubmit }>
          Submit
        </button>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

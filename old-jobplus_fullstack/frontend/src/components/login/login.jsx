import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/form.scss';
import Alert from '../alert/Alert';
import { loginUser } from '../../api/auth/AuthServices';

export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      identifier: email,
      password: password,
    };

    const {response, error} = await loginUser(user);
    if (response) {
      // clear form fields
      setEmail('');
      setPassword('');
      setError({});
      console.log(response);
    }
    if (error) {
      setError(error);
    }
  };

  return (
    <>
      {error.message && <Alert type="error" message={error} />}

      <form className="form form--page" onSubmit={handleSubmit}>
        <div className="form__group form__group--page">
          <label className="form__label">Email</label>
          <input
            className="form__field"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form__group form__group--page">
          <label className="form__label">Password</label>
          <input
            className="form__field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form__group form__group--page">
          <input className="form__btn" type="submit" value="Login" />
        </div>

        <footer>
          Dont have an account? <Link to="/register">Register</Link> or <Link to="/forgot-password">Forgot Password</Link>
        </footer>
      </form>
    </>
  );
}

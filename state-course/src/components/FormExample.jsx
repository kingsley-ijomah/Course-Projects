import React, { useState } from 'react';

export default function FormExample() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    
    console.log(firstname, lastname, email);

    // clear the form
    setFirstname('');
    setLastname('');
    setEmail('');
  };

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <p>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  );
}

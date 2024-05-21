import React from 'react';
import './Profile.scss';

export default function Profile({ name, desc, image }) {
  return (
    <section className="profile">
      <img src={image} />
      <h3>{ name }</h3>
      <p>{ desc }</p>
      <div>Admin</div>
    </section>
  );
}

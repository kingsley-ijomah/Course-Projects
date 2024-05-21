import React, { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';

import './Nav.scss';

import { Link } from 'react-router-dom';

export default function Nav() {
  const [logoItems, setLogoItems] = useState({});
  const [links, setLinks] = useState([]);
  const [icons, setIcons] = useState([]);
  const [error, setError] = useState(null);
  const { get } = useApi();

  const handleSuccess = (response) => {
    // destructure the data
    const { Logo, Links, Icons } = response?.data?.data?.attributes;

    setLogoItems(Logo);
    setLinks(Links);
    setIcons(Icons);
  };

  const getNavData = async () => {
    await get('nav', {
      params: {
        'populate[Logo][populate][image]': true,
        'populate[Links]': true,
        'populate[Icons][populate][image]': true,
      },
      onSuccess: (response) => handleSuccess(response),
      onFailure: (errorMesage) => setError(errorMesage),
    });
  };

  useEffect(() => {
    getNavData(); // calling the function
  }, []); // empty array means it will only run once

  return (
    <nav className="nav">
      <div className="nav__logo">
        <img
          src={`http://localhost:1337${logoItems?.image?.data?.attributes?.url}`}
        />
        <h4>{logoItems?.title}</h4>
      </div>

      <ul className="nav__middleBlock">
        {links?.map((link) => (
          <li key={link.id}>
            <Link to={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <div className="nav__lastBlock">
        {icons.map((icon) => (
          <Link key={icon.id} to={icon.url}>
            <img
              src={`http://localhost:1337${icon?.image?.data?.attributes?.url}`}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}

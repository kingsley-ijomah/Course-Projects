import React from 'react';
import './App.scss';
import Profile from './components/profile/Profile';

function App() {
  const profiles = [
    {
      name: 'Jannet Jackson',
      desc: 'Paradigm Technician',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Michael Jackson',
      desc: 'Senior Technician',
      image:
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Tito Jackson',
      desc: 'Junior Technician',
      image:
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ];

  return (
    <>
      {profiles.map((p) => (
        <Profile
          name={p.name}
          desc={p.desc}
          image={p.image}
        />
      ))}
    </>
  );
}

export default App;

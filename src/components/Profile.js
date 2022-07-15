import React, { useEffect, useContext } from 'react';
import globalContext from '../context/globalContext';
import Header from './Header';

function Profile() {
  const { setTitle, setShowSearch } = useContext(globalContext);

  useEffect(() => {
    setTitle('Profile');
    setShowSearch(false);
  });

  return (
    <Header />
  );
}

export default Profile;
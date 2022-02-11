import React from 'react';
import '../styles/navbar.css';

export default function Navbar({
  setDisplayFeed,
}: {
  setDisplayFeed: React.Dispatch<React.SetStateAction<number>>;
}) {
  const showFeed = () => {
    setDisplayFeed(-100);
  };
  const showAnalytics = () => {
    setDisplayFeed(0);
  };

  return (
    <div className='navbar'>
      <h1>PlaceHolder</h1>
      <ul>
        <li onClick={showAnalytics}>Analytics</li>
        <li onClick={showFeed}>Feed</li>
      </ul>
    </div>
  );
}

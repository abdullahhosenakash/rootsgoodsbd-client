import React from 'react';
import BottomBar from './BottomBar';
import MiddleBar from './MiddleBar';
import NavigationBar from './NavigationBar';
import TopBar from './TopBar';

const Header = () => {
  return (
    <div>
      <TopBar />
      <MiddleBar />
      <BottomBar />
      <NavigationBar />
    </div>
  );
};

export default Header;

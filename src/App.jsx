import React from 'react';
import MainBody from './components/Mainbody';
import SideMenu from './components/Sidemenu';
import './styles.css';

function App() {
  return (
    <div className="app">
      <MainBody />
      <SideMenu />
    </div>
  );
}

export default App;

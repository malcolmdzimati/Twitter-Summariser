import React from 'react';
import './css/App.css';
// import AuthorizationPage from './pages/AuthorizationPage';
import LandingPage from './pages/LandingPage';

//main Application component in which different page sub-components will be contained
const App = () => {
  return (
    //  <AuthorizationPage/>     //display HomePage Page Component

    <LandingPage/>     //display HomePage Page Component
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/sections/NavBar.jsx";
import DropDown from "./components/DropDown";
import SideBar from "./components/sections/SideBar.jsx";
import SignUpModal from "./components/SignUpModal";
import MobileFooter from "./components/sections/Footer.jsx";
import backDropHandler from "./events/backDrop";
import texts from "./constants/texts";
import Main from "./components/sections/main";


function App() {
  return (
      <Router>
        <NavBar/>
        <DropDown/>
        <Main/>
        <SideBar/>
        <SignUpModal className="sign-up modal hidden" signUpText={texts.signUp}/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <MobileFooter/>
      </Router>
  );
}

export default App;

import React from 'react';
import NavBar from "./components/NavBar.jsx";
import SideBar from "./components/SideBar.jsx";
import SignUpModal from "./components/SignUpModal.jsx";
import MobileFooter from "./components/Footer.jsx";
import backDropHandler from "./events/backDrop";
import Main from "./components/Main";
import { CookiesProvider } from 'react-cookie';


function App() {
  return (
      <CookiesProvider>
        <NavBar/>
        <Main/>
        <SideBar/>
        <SignUpModal/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <MobileFooter/>
      </CookiesProvider>
  );
}

export default App;

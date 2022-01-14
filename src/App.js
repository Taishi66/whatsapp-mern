import "./App.css";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";

function App() {
  return (
    //BEM
    <div className='app'>
      <div className='app__body'>
        mern whatsapp
        {/**sidebar */}
        <Sidebar />
        {/**chat component */}
        <Chat />
      </div>
    </div>
  );
}

export default App;

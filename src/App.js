import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Introduction/Intro";
import History from "./components/History/History"; 
// import Tutorial from './components/Tutorial/Tutorial';
// import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import Upload from "./components/Upload/Upload";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>  
      {/* <Intro/>  */}
      {/* <Tutorial/> */}
      <Upload/>  
      {/* <LoginSignUp/> */}
      <History/>
    </div>
  );
}

export default App;

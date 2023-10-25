// import logo from './logo.svg';
// import './App.css';
import LogIn from './components/LogIn'
import HomePage from './components/HomePage'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleList from './components/RoleList';

function App() {
  return (
    <div className="App">
      {/* <h1>testing</h1> */}
      <LogIn />
      {/* <HomePage /> */}
      < RoleList />
    </div>
  );
}

export default App;



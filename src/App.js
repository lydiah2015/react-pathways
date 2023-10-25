// import LogIn from './components/LogIn'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RoleList from './components/RoleList';

// function App() {
//   return (
//     <div className="App">
//       <LogIn />
//     </div>
//   );
// }

// export default App;







// App.js
import { Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn'
import RoleList from './components/RoleList';
import NavBar from './components/Navbar';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/roles" element={<RoleList />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
};

export default App;
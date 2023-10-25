// import logo from './logo.svg';
// import './App.css';
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard';
import Roles from './components/Roles';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard' element={<Welcome />} />
          <Route path='/dashboard/roles' element={<Roles />} />
          <Route path='/dashboard/welcome' element={<Welcome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

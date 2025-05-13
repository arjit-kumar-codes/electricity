import { Routes, Route,BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';

export default function AppRoutes() {

  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Routes>
        <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </div>
  </Router>
  );
}


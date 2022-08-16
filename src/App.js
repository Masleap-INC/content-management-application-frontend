import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import OrganizationLoginPage from './pages/OrganizationLoginPage';
import ActivitiesPage from './pages/ActivitiesPage';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      
        <Routes>

          <Route path = "/" element = {<ActivitiesPage />} />
          <Route path = "/org-login" element = {<OrganizationLoginPage />} />

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

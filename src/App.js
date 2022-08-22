import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import OrganizationLoginPage from './pages/OrganizationLoginPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ClientAuthPage from './pages/ClientAuthPage';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      
        <Routes>

          <Route path = "/" element = {<ActivitiesPage />} />
          <Route path = "/org-login" element = {<OrganizationLoginPage />} />
          <Route path = "/client-auth" element = {<ClientAuthPage />} />

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

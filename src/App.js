import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import OrganizationLoginPage from './pages/OrganizationLoginPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ClientAuthPage from './pages/ClientAuthPage';
import ProfilePage from './pages/ProfilePage';
import ProjectsPage from './pages/ProjectsPage';
import ClientsPage from './pages/ClientsPage';
import ResetPasswordPage from './pages/ResetPasswordPage';


function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      
        <Routes>

          <Route path = "/" element = {<ActivitiesPage />} />
          <Route path='/profile' element = {<ProfilePage />} />
          <Route path='/projects' element = {<ProjectsPage />} />
          <Route path='/clients' element = {<ClientsPage/>} />
          <Route path = "/org-login" element = {<OrganizationLoginPage />} />
          <Route path = "/client-auth" element = {<ClientAuthPage />} />
          <Route path = "/reset-pass" element = {<ResetPasswordPage />} />

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import OrganizationLoginPage from './pages/OrganizationLoginPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ClientAuthPage from './pages/ClientAuthPage';
import ProfilePage from './pages/ProfilePage';
import ProjectsPage from './pages/ProjectsPage';


function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      
        <Routes>

          <Route path = "/" element = {<ActivitiesPage />} />
          <Route path='/profile' element = {<ProfilePage />} />
          <Route path='/projects' element = {<ProjectsPage />} />
          <Route path = "/org-login" element = {<OrganizationLoginPage />} />
          <Route path = "/client-auth" element = {<ClientAuthPage />} />

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

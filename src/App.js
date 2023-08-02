import Header from './components/Header';
import { BrowserRouter, Routes, Route } 
    from 'react-router-dom';
import Profile from './pages/Profile';
import ProjectDetail from './pages/ProjectDetail';
import logo from './assets/umlogo.jpg';
import Projects from './pages/Projects';
import Intro from './components/Intro';
import ProjectSt from './components/ProjectSt';
import ProjectSd from './components/ProjectSd';
import Logo from './components/Logo';
import ProjectHeading from './components/ProjectHeading';
import './App.css';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Header />
              <Logo logo={logo} />
              <Intro />
              <ProjectHeading prompt="Portfolio" />
              <Routes>
              <Route
                    path='/'
                    element={<Profile userName='jDaowy' />}
                  />
                <Route path='/projects' element=
                      {<Projects userName='jDaowy' />} />
                  <Route path='/projects/:name' element=
                      {<ProjectDetail userName='jDaowy' />}
                  />
              </Routes>
              <ProjectSt />
              <ProjectSd />
          </BrowserRouter>
    </div>
  );
}

export default App;

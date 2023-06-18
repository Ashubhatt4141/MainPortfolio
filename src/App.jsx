import Certifications from "./components/Certifications/Certifications";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import CertficateList from "./components/CertficateList/CertficateList";
import css from  './styles/app.module.scss'
import ProjectList from './components/ProjectsDetail/ProjectList';
import ProjectDetails from "./components/ProjectsDetail/ProjectDetails";
const App = () => {
  //don't forget to add font link in index.html
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <div className={`bg-primary ${css.container}`}>
              <Header />
              <Hero />
              <Experties />
              <Works />
              <Portfolio />
              <Certifications />
              <Footer />
            </div>
          }
        />
        <Route path="/projects" Component={ProjectList} />
        {/* <Route path="/certificates" Component={Certifications} /> */}
        <Route path="/certificates/:id" Component={CertficateList} />
        <Route path="/projects/:id" Component={ProjectDetails} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

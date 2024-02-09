import ScrollToTop from '@components/ScrollToTop';
import AboutPage from '@pages/AboutPage';
import Homepage from '@pages/Homepage';
import ProjectPage from '@pages/ProjectPage';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;

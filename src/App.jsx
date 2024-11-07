import HeaderX from './Components/HeaderX.jsx'
import { Box } from '@mui/material'
import HomePage from './HomePage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './BlogPage.jsx';
import BasicTabs from "./teste.jsx";
import SobrePage from "./SobrePage.jsx";

function App() {
  return (
    <Router>
      <HeaderX />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/teste" element={<BasicTabs />} />
      </Routes>
    </Router>
  );
}

export default App
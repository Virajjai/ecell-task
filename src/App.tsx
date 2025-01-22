import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GridPage from './pages/GridPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GridPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Agendamento from './pages/Agendamento';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-blue-600 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/agendar">Agendar</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar" element={<Agendamento />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Principal from './pages/Principal';
import Actividades from './pages/Actividades';
import Contacto from './pages/Contacto';
import Eventos from './pages/Eventos';
import Corvera from './pages/Corvera';
import Videos from './pages/Videos';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/corvera" element={<Corvera />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Layout>
    </Router>
  );
}

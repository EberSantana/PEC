import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Editais from './pages/Editais';
import Eventos from './pages/Eventos';
import Vitrine from './pages/Vitrine';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editais" element={<Editais />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/vitrine" element={<Vitrine />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

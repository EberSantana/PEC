import { NavLink } from 'react-router-dom';
import Logo from '../ui/Logo';

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/editais', label: 'Editais' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/vitrine', label: 'Vitrine' },
];

export default function Navbar() {
  return (
    <header className="bg-if-green text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo className="h-11 w-11 shrink-0" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold leading-tight">
              Pólo de Pesquisa e Inovação
            </h1>
            <p className="text-sm font-medium opacity-95 leading-tight">
              IFS – Campus Tobias Barreto
            </p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `font-medium hover:text-slate-200 ${isActive ? 'underline underline-offset-4' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

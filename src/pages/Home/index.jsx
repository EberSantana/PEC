import { Link } from 'react-router-dom';
import editais from '../../data/editais.json';
import eventos from '../../data/eventos.json';
import EditalCard from '../../components/ui/EditalCard';
import EventoCard from '../../components/ui/EventoCard';

export default function Home() {
  const editaisRecentes = [...editais]
    .filter((e) => e.status !== 'cancelado')
    .sort((a, b) => b.publicacao.localeCompare(a.publicacao))
    .slice(0, 2);
  const proximosEventos = [...eventos].sort((a, b) => a.data.localeCompare(b.data)).slice(0, 2);

  return (
    <>
      <section className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Bem-vindo ao Radar de Oportunidades</h2>
        <p className="text-slate-600">Acompanhe editais de fomento e eventos científicos do Instituto Federal.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-if-dark">Editais Recentes</h3>
            <Link to="/editais" className="text-sm text-if-green font-semibold hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="space-y-4">
            {editaisRecentes.map((edital) => (
              <EditalCard key={edital.id} edital={edital} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-if-dark">Próximos Eventos</h3>
            <Link to="/eventos" className="text-sm text-if-green font-semibold hover:underline">
              Calendário Completo
            </Link>
          </div>
          <div className="space-y-4">
            {proximosEventos.map((evento) => (
              <EventoCard key={evento.id} evento={evento} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

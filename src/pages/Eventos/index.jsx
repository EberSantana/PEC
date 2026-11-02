import eventos from '../../data/eventos.json';
import EventoCard from '../../components/ui/EventoCard';

export default function Eventos() {
  const eventosOrdenados = [...eventos].sort((a, b) => a.data.localeCompare(b.data));

  return (
    <>
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Calendário Científico</h2>
        <p className="text-slate-600">
          Congressos, semanas acadêmicas e jornadas de pesquisa em Sergipe, na RMS e eventos
          nacionais de tecnologia da Sociedade Brasileira de Computação (SBC).
        </p>
      </section>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="space-y-4">
          {eventosOrdenados.map((evento) => (
            <EventoCard key={evento.id} evento={evento} />
          ))}
        </div>
      </div>
    </>
  );
}

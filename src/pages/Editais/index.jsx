import editais from '../../data/editais.json';
import EditalCard from '../../components/ui/EditalCard';

export default function Editais() {
  return (
    <>
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Editais de Fomento</h2>
        <p className="text-slate-600">
          Editais da PROPEX/IFS (pesquisa e extensão). Datas e status exatos devem ser
          confirmados no edital oficial — clique no card para abrir.
        </p>
      </section>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="space-y-4">
          {editais.map((edital) => (
            <EditalCard key={edital.id} edital={edital} />
          ))}
        </div>
      </div>
    </>
  );
}

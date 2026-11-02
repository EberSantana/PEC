import editais from '../../data/editais.json';
import EditalCard from '../../components/ui/EditalCard';

const CATEGORIAS = ['Pesquisa e Inovação', 'Extensão'];

function EditaisSection({ titulo, lista }) {
  if (lista.length === 0) return null;

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-if-dark">{titulo}</h3>
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {lista.length} {lista.length === 1 ? 'edital' : 'editais'}
        </span>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="space-y-4">
          {lista.map((edital) => (
            <EditalCard key={edital.id} edital={edital} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Editais() {
  const porCategoria = CATEGORIAS.map((categoria) => ({
    categoria,
    lista: editais.filter((e) => e.categoria === categoria),
  }));
  const outras = editais.filter((e) => !CATEGORIAS.includes(e.categoria));

  return (
    <>
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Editais de Fomento</h2>
        <p className="text-slate-600">
          Editais da PROPEX/IFS, separados por Pesquisa e Inovação e Extensão. Datas e
          status exatos devem ser confirmados no edital oficial — clique no card para abrir.
        </p>
      </section>

      {porCategoria.map(({ categoria, lista }) => (
        <EditaisSection key={categoria} titulo={categoria} lista={lista} />
      ))}
      <EditaisSection titulo="Outros" lista={outras} />
    </>
  );
}

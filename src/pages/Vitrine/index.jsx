import vitrine from '../../data/vitrine.json';
import VitrineCard from '../../components/ui/VitrineCard';

const CATEGORIAS = ['Tecnologia', 'Administração', 'Comércio'];

function VitrineSection({ titulo, lista }) {
  if (lista.length === 0) return null;

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-if-dark">{titulo}</h3>
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {lista.length} {lista.length === 1 ? 'projeto' : 'projetos'}
        </span>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lista.map((item) => (
            <VitrineCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Vitrine() {
  const porCategoria = CATEGORIAS.map((categoria) => ({
    categoria,
    lista: vitrine.filter((item) => item.categoria === categoria),
  }));
  const outras = vitrine.filter((item) => !CATEGORIAS.includes(item.categoria));

  return (
    <>
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Vitrine Acadêmica</h2>
        <p className="text-slate-600">
          Repositório de projetos, artigos e portfólio de pesquisadores, organizado por curso.
          Os cards abaixo são exemplos ilustrativos da estrutura — em breve serão substituídos
          pelos trabalhos reais cadastrados por docentes e discentes.
        </p>
      </section>

      {porCategoria.map(({ categoria, lista }) => (
        <VitrineSection key={categoria} titulo={categoria} lista={lista} />
      ))}
      <VitrineSection titulo="Outros" lista={outras} />
    </>
  );
}

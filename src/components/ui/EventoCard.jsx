import { formatDateShort } from '../../utils/formatDate';

export default function EventoCard({ evento }) {
  const { titulo, data, local, tags, descricao, link } = evento;
  const { dia, mes } = formatDateShort(data);

  return (
    <div className="flex gap-4 p-4 border border-slate-100 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg p-3 min-w-[80px]">
        <span className="text-sm font-bold text-slate-500 uppercase">{mes}</span>
        <span className="text-2xl font-black text-if-green">{dia}</span>
      </div>
      <div>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer" className="font-bold text-slate-800 hover:text-if-green hover:underline">
            {titulo}
          </a>
        ) : (
          <h4 className="font-bold text-slate-800">{titulo}</h4>
        )}
        <p className="text-sm text-slate-600 mt-1">{local}</p>
        {descricao && <p className="text-sm text-slate-500 mt-1">{descricao}</p>}
        <div className="mt-2 flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

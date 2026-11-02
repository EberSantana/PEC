import StatusBadge from './StatusBadge';
import { formatDateLong } from '../../utils/formatDate';

export default function EditalCard({ edital }) {
  const { numero, categoria, titulo, descricao, orgao, status, publicacao, link } = edital;

  const borderColor = status === 'cancelado' ? 'border-red-400' : 'border-if-green';

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`block border-l-4 ${borderColor} bg-slate-50 p-4 rounded-r-lg hover:bg-slate-100 transition-colors`}
    >
      <div className="flex justify-between items-start gap-3">
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {categoria} · {orgao}
          </span>
          <h4 className="font-bold text-slate-800 mt-1">{titulo}</h4>
          {numero && <p className="text-xs text-slate-400 mt-0.5">Edital {numero}</p>}
          <p className="text-sm text-slate-600 mt-1">{descricao}</p>
        </div>
        <StatusBadge status={status} />
      </div>
      <div className="mt-3 flex items-center justify-between text-sm font-medium text-slate-500">
        <span>Publicado em: {formatDateLong(publicacao)}</span>
        <span className="text-if-green font-semibold hover:underline">Ver edital →</span>
      </div>
    </a>
  );
}

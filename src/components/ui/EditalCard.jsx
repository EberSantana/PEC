import StatusBadge from './StatusBadge';
import { formatDateLong } from '../../utils/formatDate';

export default function EditalCard({ edital }) {
  const { categoria, titulo, descricao, status, encerramento, abertura, link } = edital;

  const borderColor = status === 'em_breve' ? 'border-blue-500' : 'border-if-green';

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`block border-l-4 ${borderColor} bg-slate-50 p-4 rounded-r-lg hover:bg-slate-100 transition-colors`}
    >
      <div className="flex justify-between items-start gap-3">
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{categoria}</span>
          <h4 className="font-bold text-slate-800 mt-1">{titulo}</h4>
          <p className="text-sm text-slate-600 mt-1">{descricao}</p>
        </div>
        <StatusBadge status={status} />
      </div>
      <div className="mt-3 text-sm font-medium text-slate-500">
        {encerramento ? (
          <>Encerra em: <span className="text-if-red">{formatDateLong(encerramento)}</span></>
        ) : (
          <>Abertura: {formatDateLong(abertura)}</>
        )}
      </div>
    </a>
  );
}

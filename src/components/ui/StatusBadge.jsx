const STATUS_STYLES = {
  aberto: { label: 'Aberto', className: 'bg-green-100 text-green-800' },
  em_breve: { label: 'Em breve', className: 'bg-blue-100 text-blue-800' },
  encerrado: { label: 'Encerrado', className: 'bg-slate-200 text-slate-600' },
  publicado: { label: 'Publicado', className: 'bg-slate-200 text-slate-600' },
  cancelado: { label: 'Cancelado', className: 'bg-red-100 text-red-700' },
};

export default function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] ?? STATUS_STYLES.publicado;
  return (
    <span className={`text-xs font-bold px-2 py-1 rounded ${style.className}`}>
      {style.label}
    </span>
  );
}

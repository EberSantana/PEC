export default function VitrineCard({ item }) {
  const { titulo, tipo, curso, descricao, autor } = item;

  return (
    <div className="border-l-4 border-if-green bg-slate-50 p-4 rounded-r-lg">
      <div className="flex justify-between items-start gap-3">
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {tipo} · {curso}
          </span>
          <h4 className="font-bold text-slate-800 mt-1">{titulo}</h4>
          <p className="text-sm text-slate-600 mt-1">{descricao}</p>
        </div>
      </div>
      <div className="mt-3 text-sm font-medium text-slate-500">
        <span>Autor(a): {autor}</span>
      </div>
    </div>
  );
}

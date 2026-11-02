import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="bg-if-green text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Pólo Ciência IF</h1>
            <p className="text-sm opacity-90">Plataforma de Eventos Científicos e Fomento</p>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="hover:text-slate-200 font-medium">Início</a>
            <a href="#" className="hover:text-slate-200 font-medium">Editais</a>
            <a href="#" className="hover:text-slate-200 font-medium">Eventos</a>
            <a href="#" className="hover:text-slate-200 font-medium">Vitrine</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Bem-vindo ao Radar de Oportunidades</h2>
          <p className="text-slate-600">Acompanhe editais de fomento e submissões abertas para o Instituto Federal.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-if-dark">Editais em Aberto</h3>
              <button className="text-sm text-if-green font-semibold hover:underline">Ver todos</button>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-if-green bg-slate-50 p-4 rounded-r-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">PIBIC 2026/2027</span>
                    <h4 className="font-bold text-slate-800 mt-1">Programa Institucional de Bolsas de Iniciação Científica</h4>
                    <p className="text-sm text-slate-600 mt-1">Fomento para projetos de pesquisa aplicada no IFS.</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Aberto</span>
                </div>
                <div className="mt-3 text-sm font-medium text-slate-500">
                  Encerra em: <span className="text-if-red">15 de Novembro de 2026</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-if-dark">Próximos Eventos</h3>
              <button className="text-sm text-if-green font-semibold hover:underline">Calendário Completo</button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 border border-slate-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg p-3 min-w-[80px]">
                  <span className="text-sm font-bold text-slate-500 uppercase">Nov</span>
                  <span className="text-2xl font-black text-if-green">20</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Linux Day IFS - Edição 2026</h4>
                  <p className="text-sm text-slate-600 mt-1">Campus Tobias Barreto</p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full">Tecnologia</span>
                    <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full">Inscrições Abertas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
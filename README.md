# PEC — Plataforma de Eventos Científicos e Fomento

Plataforma web para pesquisar, mapear e fomentar a realização de eventos científicos nos Institutos Federais de Sergipe e na Região Metropolitana de Salvador (RMS).

🔗 **Acesse:** [ebersantana.github.io/PEC](https://ebersantana.github.io/PEC/)

## Objetivo

Disseminar o conhecimento científico e tecnológico produzido por docentes e discentes, incentivar a iniciação científica e posicionar os campi como polos produtores de ciência e inovação.

## Status do projeto

| Módulo | Status |
|---|---|
| Radar de Editais (Pesquisa e Inovação / Extensão) | ✅ Implementado — dados reais da PROPEX/IFS |
| Calendário Científico | ✅ Implementado — dados estáticos versionados |
| Gestão de Eventos (hotsites, submissão, certificação) | 🔜 Planejado |
| Vitrine Acadêmica (anais, perfis, Lattes) | 🔜 Placeholder — página existe, conteúdo pendente |
| Backend / banco de dados | 🔜 Planejado |

> Os dados de editais e eventos hoje vêm de arquivos JSON versionados no repositório (`src/data/`), sem necessidade de backend. Isso evita infraestrutura desnecessária enquanto o volume de conteúdo é pequeno — migrar para uma fonte dinâmica (planilha, CMS ou API própria) é o próximo passo natural de evolução.

## Funcionalidades

- **Radar de Editais** — editais de fomento da PROPEX/IFS, agrupados por Pesquisa e Inovação e Extensão, com link direto para o edital oficial.
- **Calendário Científico** — congressos, semanas acadêmicas e jornadas de pesquisa.
- **Navegação** — rotas dedicadas (`/`, `/editais`, `/eventos`, `/vitrine`) via React Router.

## Tecnologias

- **Frontend:** React 18 + Vite 5
- **Estilização:** Tailwind CSS, com paleta institucional (`if-green`, `if-red`, `if-dark`)
- **Roteamento:** React Router 6
- **Deploy:** GitHub Actions → GitHub Pages (build e publicação automáticos a cada push na `main`)

## Estrutura do projeto

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   └── ui/             # EditalCard, EventoCard, StatusBadge
├── data/                # editais.json, eventos.json — fonte de dados versionada
├── pages/               # Home, Editais, Eventos, Vitrine
├── utils/               # formatDate.js
├── App.jsx              # Rotas principais
└── main.jsx              # Ponto de entrada (BrowserRouter)
```

## Como rodar localmente

```bash
git clone https://github.com/EberSantana/PEC.git
cd PEC
npm install
npm run dev
```

Acesse `http://localhost:5173`.

### Outros comandos

```bash
npm run build     # build de produção em dist/
npm run preview   # serve o build de produção localmente
```

## Deploy

O deploy é automático: todo push na branch `main` dispara o workflow `.github/workflows/deploy.yml`, que builda o projeto e publica o conteúdo de `dist/` no GitHub Pages.

## Atualizando os dados

Enquanto não há backend, editais e eventos são mantidos manualmente em `src/data/editais.json` e `src/data/eventos.json`. Cada edital segue o formato:

```json
{
  "id": "edital-32-2026",
  "numero": "32/2026/DPP/PROPEX/IFS",
  "categoria": "Pesquisa e Inovação",
  "titulo": "...",
  "descricao": "...",
  "orgao": "PROPEX/DPP",
  "status": "publicado",
  "publicacao": "2026-10-19",
  "link": "https://www.ifs.edu.br/..."
}
```

## Coordenação

Desenvolvido sob a coordenação do **Prof. Eber da Silva de Santana** (Coordenador de Pesquisa e Inovação — COPI, IFS Campus Tobias Barreto).

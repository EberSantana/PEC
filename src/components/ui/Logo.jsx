export default function Logo({ className = 'h-12 w-12' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Pólo de Pesquisa e Inovação IFS - Campus Tobias Barreto"
    >
      <rect x="1" y="1" width="46" height="46" rx="12" fill="white" />
      <rect x="1" y="1" width="46" height="46" rx="12" fill="none" stroke="#2F9E41" strokeWidth="1.5" opacity="0.25" />

      {/* Rede de pesquisa e inovação: nós conectados */}
      <g stroke="#2F9E41" strokeWidth="2" strokeLinecap="round">
        <line x1="24" y1="14" x2="15" y2="29" />
        <line x1="24" y1="14" x2="33" y2="29" />
        <line x1="15" y1="29" x2="33" y2="29" />
      </g>

      <circle cx="24" cy="14" r="5" fill="#2F9E41" />
      <circle cx="15" cy="29" r="4" fill="#1e293b" />

      {/* Faísca de inovação */}
      <circle cx="33" cy="29" r="4" fill="#CD191E" />
      <path
        d="M33 25.8 L34 28.2 L36.4 29.1 L34 30 L33 32.4 L32 30 L29.6 29.1 L32 28.2 Z"
        fill="#CD191E"
      />
    </svg>
  );
}

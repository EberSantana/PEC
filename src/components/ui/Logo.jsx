export default function Logo({ className = 'h-10 w-10' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Pólo de Pesquisa e Inovação IFS - Campus Tobias Barreto"
    >
      <circle cx="24" cy="24" r="24" fill="#2F9E41" />
      <circle cx="24" cy="24" r="22.5" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.3" />
      {/* Marca abstrata: seta/faísca ascendente (pesquisa em movimento, inovação) */}
      <path d="M24 9 L30.5 23 L24 18.5 L17.5 23 Z" fill="#ffffff" />
      <path d="M24 18.5 L30.5 23 L24 39 L17.5 23 Z" fill="#CD191E" />
      {/* Pontos em órbita: rede de pesquisa e colaboração */}
      <circle cx="10.5" cy="17" r="2.1" fill="#ffffff" opacity="0.9" />
      <circle cx="37.5" cy="17" r="2.1" fill="#ffffff" opacity="0.9" />
      <circle cx="24" cy="6.5" r="1.7" fill="#ffffff" opacity="0.9" />
    </svg>
  );
}

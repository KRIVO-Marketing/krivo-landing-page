const paths = {
  google: (
    <>
      <path d="M12 21s-6-5.2-6-10a6 6 0 0 1 12 0c0 4.8-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17" cy="7" r="0.6" />
    </>
  ),
  site: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 9.5h18" />
      <circle cx="6.2" cy="7.3" r="0.4" />
      <circle cx="8.2" cy="7.3" r="0.4" />
    </>
  ),
};

export type Pillar = keyof typeof paths;

/** Ícone de cada um dos 3 pilares (Google, Instagram, site) dentro do círculo com borda. */
export function PillarIcon({ pillar }: { pillar: Pillar }) {
  return (
    <span className="inline-flex size-12 items-center justify-center rounded-full border border-line-strong text-navy">
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[pillar]}
      </svg>
    </span>
  );
}

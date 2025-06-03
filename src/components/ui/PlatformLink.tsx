import Link from 'next/link';

interface PlatformLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  ariaLabel: string;
  hoverClass: string;
}

export function PlatformLink({ href, icon, label, ariaLabel, hoverClass }: PlatformLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`glass-effect aspect-square flex flex-col items-center justify-center group ${hoverClass} rounded-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="z-10 flex flex-col items-center justify-center h-full p-4">
        {icon}
        <span className="text-xs text-white/70 font-medium group-hover:text-white/90 transition-colors duration-300 mt-2">
          {label}
        </span>
      </div>
    </Link>
  );
}

import Link from 'next/link';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
  hoverClass: string;
}

export function SocialLink({ href, icon, ariaLabel, hoverClass }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`aspect-square flex items-center justify-center group ${hoverClass}`}
    >
      {icon}
    </Link>
  );
}

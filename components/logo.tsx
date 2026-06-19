import Image from "next/image";

type LogoProps = { light?: boolean; compact?: boolean };

export function Logo({ compact = false }: LogoProps) {
  return (
    <div className={`relative overflow-hidden ${compact ? "h-14 w-14" : "h-16 w-32"}`} aria-label="COBO Advocacia">
      <Image
        src="/images/logo-cobo-oficial.jpeg"
        alt="COBO Advocacia e Consultoria Jurídica"
        width={1024}
        height={1024}
        priority
        className={`absolute max-w-none ${compact ? "-left-7 -top-3 h-20 w-20" : "left-0 -top-[22px] h-32 w-32"}`}
      />
    </div>
  );
}

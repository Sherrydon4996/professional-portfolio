import { logos } from "@/assets/assets";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({
  className = "h-10 w-10",
  showText = true,
}: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <img src={logos.mainLogo} alt="HarryTech Logo" className={className} />
      {showText && (
        <span className="font-bold text-xl tracking-tight">
          Harry<span className="text-primary">Tech</span>
        </span>
      )}
    </div>
  );
}

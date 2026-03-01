export function GuardianLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/assets/guardian-icon.png"
      alt="Guardian"
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

import { GuardianLogo } from "./GuardianLogo";

export function Hero() {
  return (
    <section className="relative h-[200vh] w-full bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.12),transparent_70%)]"></div>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <GuardianLogo className="w-[200px] sm:w-[280px] md:w-[320px] animate-logo-reveal drop-shadow-[0_0_60px_rgba(220,38,38,0.6)]" />
      </div>
    </section>
  );
}

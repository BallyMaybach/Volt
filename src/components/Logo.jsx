// Offizielles Volt-Logo als PNG.
// variant="dark"  -> lila Logo (für weisse Header)
// variant="light" -> weisses Logo (für lila Header)
export default function Logo({ variant = "dark" }) {
  const src = variant === "light" ? "/images/logo-volt-white.svg" : "/images/logo-volt-purple.svg";
  return (
    <img
      src={src}
      alt="Volt Berlin — unf*ck berlin"
      className="h-9 md:h-11 w-auto select-none"
      draggable="false"
    />
  );
}

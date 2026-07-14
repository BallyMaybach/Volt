// Logo wie im Design: "Volt"-Wortmarke + dunkles "unf*ck berlin"-Badge darunter.
// variant="dark"  -> lila "Volt" (für weisse Header)
// variant="light" -> weisses "Volt" (für lila Header)
export default function Logo({ variant = "dark" }) {
  return (
    <div className="flex flex-col items-start leading-none select-none">
      <span
        className={`font-bold text-2xl md:text-3xl tracking-tight lowercase ${
          variant === "light" ? "text-white" : "text-volt-purple"
        }`}
      >
        Volt
      </span>
      <span className="bg-volt-darkest text-volt-lime text-[8px] md:text-[9px] font-bold px-1 py-0.5 -mt-0.5 tracking-wide">
        unf*ck berlin
      </span>
    </div>
  );
}

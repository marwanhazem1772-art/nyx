type NyxOrbitProps = {
  className?: string;
  inverse?: boolean;
};

export default function NyxOrbit({ className = "", inverse = false }: NyxOrbitProps) {
  return (
    <div
      className={`nyx-orbit-shell ${inverse ? "nyx-orbit-shell--inverse" : ""} ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="nyx-orbit-ring nyx-orbit-ring--outer" />
      <div className="nyx-orbit-ring nyx-orbit-ring--middle" />
      <div className="nyx-orbit-ring nyx-orbit-ring--inner" />
      <div className="nyx-orbit-axis nyx-orbit-axis--h" />
      <div className="nyx-orbit-axis nyx-orbit-axis--v" />
      <div className="nyx-orbit-core" />
    </div>
  );
}

import LandingGate from "../components/LandingGate";
import PlexusEngine from "../components/ui/PlexusEngine";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen bg-[#0a0a0a]">
      <PlexusEngine />
      <div className="relative z-10">
        <LandingGate />
      </div>
    </main>
  );
}
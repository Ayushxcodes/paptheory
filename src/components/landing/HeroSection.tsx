import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const demoColors = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#14b8a6",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#06b6d4",
  "#84cc16",
  "#a855f7",
  "#f43f5e",
  "#10b981",
  "#6366f1",
  "#d946ef",
  "#0ea5e9",
];

export default function HeroSection() {
  return (
    <section className="w-full bg-neutral-100 min-h-screen py-2 relative overflow-hidden">
      {/* 3D Marquee Background */}
      <div className="absolute inset-0 blur-sm">
        <ThreeDMarquee colors={demoColors} />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 h-full flex items-start justify-center pt-24 lg:pt-36">
        <div className="max-w-4xl space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900">
  PAPER THEORY NETWORK
</h1>
            <h2 className="text-2xl lg:text-4xl font-medium tracking-tight text-neutral-700">
              Strategic Communication for Institutions, Influence, and Public Trust
            </h2>
          </div>
          
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We work with governments, political stakeholders, large institutions, and private sector brands to shape narrative, manage reputation, and communicate responsibly in the public domain.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Button size="lg" className="px-8 py-3 text-lg">Learn more</Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg">Request a demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

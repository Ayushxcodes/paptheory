import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="w-full bg-neutral-100 h-screen">
      <div className="mx-auto max-w-7xl px-6 h-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-20 lg:pt-30">
        {/* Left content */}
        <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
            PAPER THEORY NETWORK
          </h2>
          <h2 className="text-3xl lg:text-5xl tracking-tight text-neutral-900">
            Strategic Communication for Institutions,
            <br />
             Influence, and Public Trust
          </h2>
          <p className="text-base lg:text-lg text-neutral-600 max-w-xl">
            We work with governments, political stakeholders, large institutions, and private sector brands to shape narrative, manage reputation, and communicate responsibly in the public domain.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button size="lg">Learn more</Button>
            <Button size="lg" variant="outline">Request a demo</Button>
          </div>
        </div>

        {/* Right content */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-2">
              <p className="text-sm text-neutral-500">Discovery interviews</p>
              <p className="text-4xl font-semibold">25</p>
              <p className="text-sm text-neutral-400">Responses</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm bg-lime-100">
            <CardContent className="p-6 space-y-2">
              <p className="text-sm text-neutral-600">Unmoderated study</p>
              <div className="h-24 rounded-xl bg-lime-200" />
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm col-span-2">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-neutral-200" />
              <div>
                <p className="text-sm text-neutral-500">Moderated interview</p>
                <p className="font-medium">How easy did you find the flow?</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

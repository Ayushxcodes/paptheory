"use client";

export default function SelectedWorkSection() {
  return (
    <section className="w-full bg-[#141414] py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
          Selected Work
        </p>

        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left intro */}
          <div className="space-y-6">
            <p className="text-sm leading-6 text-neutral-400">
              Our work spans political communication, institutional
              narrative-building, and strategic creative campaigns. The
              examples below reflect how we apply strategic thinking across
              contexts — not a catalogue of outputs.
            </p>
          </div>

          {/* Title */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.05]">
              What we’re<br />
              made of
            </h2>
          </div>
        </div>

        {/* Case studies */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <CaseCard
            number="1"
            context="The communication challenge and institutional stakes"
            intent="What needed to change in perception or narrative, and why this approach was chosen"
            role="Strategy, creative, amplification"
            outcome="Measured outcomes without vanity metrics"
          />

          <CaseCard
            number="2"
            context="The communication challenge and reputational stakes"
            intent="Narrative shifts required and strategic rationale"
            role="Strategy and creative leadership"
            outcome="Impact expressed qualitatively and institutionally"
          />

          <CaseCard
            number="3"
            context="A high-risk communication environment"
            intent="Reframing public understanding and internal alignment"
            role="Advisory, narrative, controlled amplification"
            outcome="Durable trust and clarity achieved"
          />
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  number,
  context,
  intent,
  role,
  outcome,
}: {
  number: string;
  context: string;
  intent: string;
  role: string;
  outcome: string;
}) {
  return (
    <div className="relative bg-[#EDEBE7] rounded-xl p-8 min-h-[360px] flex flex-col">
      <span className="text-[40px] font-semibold text-neutral-900 mb-8">
        {number}
      </span>

      <div className="space-y-6 text-sm leading-6 text-neutral-700">
        <div>
          <p className="font-medium text-neutral-900 mb-1">Context</p>
          <p>{context}</p>
        </div>

        <div>
          <p className="font-medium text-neutral-900 mb-1">Strategic Intent</p>
          <p>{intent}</p>
        </div>

        <div>
          <p className="font-medium text-neutral-900 mb-1">Our Role</p>
          <p>{role}</p>
        </div>

        <div>
          <p className="font-medium text-neutral-900 mb-1">Outcome</p>
          <p>{outcome}</p>
        </div>
      </div>
    </div>
  );
}

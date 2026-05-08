import Image from 'next/image'

export default function ClientsSection() {
  const clients = [
    { name: 'Maruti Suzuki', logo: '/logos/maruti.png' },
    { name: 'ICICI Bank', logo: '/logos/icici.png' },
    { name: 'Mahindra', logo: '/logos/mahindra.png' },
    { name: 'Global mining company — AusPac', logo: '' },
    { name: 'Global engineering firm — Germany', logo: '' },
    { name: 'Oil & gas client — United States', logo: '' },
    { name: 'IPCL — India Public Communications Lab', logo: '' }
  ];

  const initials = (name: string) =>
    name
      .split(' ')
      .map((s) => s[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

  return (
    <section id="clients" className="relative py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-[#f99216] font-medium">Clients & associations</p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((c) => (
            <div key={c.name} className="client-card flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-12 h-12 relative flex-shrink-0">
                {c.logo ? (
                  <Image src={c.logo} alt={c.name} fill className="object-contain" />
                ) : (
                  <div className="w-12 h-12 rounded-md bg-gray-100 text-[#111111] flex items-center justify-center font-semibold">
                    {initials(c.name)}
                  </div>
                )}
              </div>

              <div className="text-sm font-medium text-[#111111]">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

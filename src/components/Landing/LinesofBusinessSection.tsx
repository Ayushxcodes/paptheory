import Image from 'next/image';
import Link from 'next/link';

export default function LinesofBusinessSection() {
  const items = [
    {
      title: 'IT services & consulting',
      featured: true,
      new: true,
      description:
        'Enterprise software, ERP, AI/ML, automation, cloud and digital transformation for mid-market and global clients. We design, build and deliver — end to end.',
      tags: ['SAP BTP', 'AI & ML', 'Web & Mobile', 'Cloud', 'ERP', 'Automation'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" fill="currentColor" aria-hidden="true" className="w-12 h-12">
          <path d="M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z" />
        </svg>
      ),
      color: 'bg-[#e6f0ff] text-[#1b4fd8]'
    },
    {
      title: 'Strategic communications',
      featured: false,
      new: false,
      description:
        'Brand strategy, Gen Z campaigns, political communication and content that resonates and drives real cultural impact. Affiliated with IPCL — India Public Communications Lab.',
      tags: ['Brand strategy', 'Gen Z marketing', 'Political comms', 'Content creation'],
      icon: (
        <Image src="/bullhorn.png" alt="Bullhorn" width={34} height={34} className="object-cover" />
      ),
      color: 'bg-[#fff7ed] text-[#b85a00]'
    }
  ];

  return (
    <section id="lob" className="relative py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm uppercase tracking-widest text-[#f99216] font-semibold">
            Lines of business
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Lines of business
          </h2>

          <p className="mt-4 text-lg text-[#555555] leading-relaxed">
            We bring together technical delivery and cultural communications to
            build products, platforms and stories that move organizations.
          </p>

          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-[#f99216] to-[#f99216]/30 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className={`lob-card group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                it.featured
                  ? 'lg:col-span-1 bg-gradient-to-br from-[#f99216]/10 to-transparent border-2 border-[#f99216]/30 shadow-xl hover:shadow-2xl hover:border-[#f99216]/60'
                  : 'bg-white border border-[#b85a00]/20 shadow-md hover:shadow-xl hover:border-[#b85a00]/40'
              }`}
            >
              {/* Background Accent */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                it.featured ? 'bg-[#f99216]' : 'bg-[#b85a00]'
              }`} />

              <div className="relative p-8 md:p-10">
                {/* Icon Container */}
                <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 transition-all duration-300 group-hover:scale-110 `}>
                  <span className="inline-flex items-center justify-center">{it.icon}</span>
                </div>

                {/* Title & Badge */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-xl font-bold text-[#111111] flex items-center gap-3 mb-2">
                    {it.title}
                  </h3>
                  {it.featured && (
                    <div className="h-0.5 w-16 bg-gradient-to-r from-[#f99216] to-transparent rounded-full mt-3" />
                  )}
                </div>

                {/* Description */}
                <p className="text-base text-[#6b6b6b] leading-relaxed mb-6">
                  {it.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {it.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300 hover:scale-105 ${
                        it.featured
                          ? 'bg-[#1b4fd8]/10 text-[#1b4fd8] border border-[#1b4fd8]/20 hover:bg-[#1b4fd8]/20'
                          : 'bg-[#b85a00]/10 text-[#b85a00] border border-[#b85a00]/20 hover:bg-[#b85a00]/20'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {it.title === 'Strategic communications' && (
                  <div className="mt-6">
                    <Link
                      href="/communication"
                      className="inline-flex items-center gap-2 text-[#b85a00] font-semibold hover:underline"
                      aria-label="View Strategic communications"
                    >
                      <span>Explore</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

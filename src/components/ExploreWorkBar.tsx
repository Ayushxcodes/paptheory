import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ExploreWorkBar() {
  const handleEngineeringClick = (e: any) => {
    e.preventDefault();
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set('filter', 'IT');
    const newUrl = url.pathname + url.search + '#work';
    window.history.replaceState({}, '', newUrl);
    window.dispatchEvent(new CustomEvent('pap-filter', { detail: { filter: 'IT' } }));
    const el = document.querySelector('#work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <div className="w-full flex bg-[#f99216] text-white">
        <Link href="/?filter=IT#work" onClick={handleEngineeringClick} className="w-1/2">
          <div className="py-3 px-6 flex items-center justify-center gap-3 hover:bg-[#e54a1a] transition-colors cursor-pointer">
            <span className="text-sm font-medium tracking-wide">Engineering portfolio</span>
            <ArrowRight size={16} />
          </div>
        </Link>

        <a href="/works" target="_blank" rel="noopener noreferrer" className="w-1/2">
          <div className="py-3 px-6 flex items-center justify-center gap-3 hover:bg-[#e54a1a] transition-colors cursor-pointer border-l border-white/20">
            <span className="text-sm font-medium tracking-wide">Creative portfolio</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}
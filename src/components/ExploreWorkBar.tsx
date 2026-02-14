import { ArrowRight } from 'lucide-react'

export default function ExploreWorkBar() {
  return (
    <div className="w-full bg-[#ff5a1f] py-1 px-6 flex items-center justify-center text-white hover:bg-[#e54a1a] transition-colors cursor-pointer">
      <span className="text-sm font-medium tracking-wide mr-2">EXPLORE OUR WORK</span>
      <ArrowRight size={16} />
    </div>
  )
}
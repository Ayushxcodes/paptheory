"use client"
import React from 'react'
import ChromaGrid from '@/components/ChromaGrid'

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#ff5a1f",
    gradient: "linear-gradient(145deg, #ff5a1f, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#ff5a1f",
    gradient: "linear-gradient(180deg, #ff5a1f, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Alex Rivera",
    subtitle: "UI/UX Designer",
    handle: "@alexrivera",
    borderColor: "#ff5a1f",
    gradient: "linear-gradient(135deg, #ff5a1f, #000)",
    url: "https://dribbble.com/alexrivera"
  },
  {
    image: "https://i.pravatar.cc/300?img=4",
    title: "Emma Davis",
    subtitle: "Product Manager",
    handle: "@emmadavis",
    borderColor: "#ff5a1f",
    gradient: "linear-gradient(160deg, #ff5a1f, #000)",
    url: "https://linkedin.com/in/emmadavis"
  },
  {
    image: "https://i.pravatar.cc/300?img=5",
    title: "David Kim",
    subtitle: "DevOps Engineer",
    handle: "@davidkim",
    borderColor: "#ff5a1f",
    gradient: "linear-gradient(125deg, #ff5a1f, #000)",
    url: "https://github.com/davidkim"
  },
  {
    image: "https://i.pravatar.cc/300?img=6",
    title: "Lisa Wong",
    subtitle: "Data Scientist",
    handle: "@lisawong",
    borderColor: "#ff5a1f",
    gradient: "linear-gradient(140deg, #ff5a1f, #000)",
    url: "https://kaggle.com/lisawong"
  }
];


const teamspage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-white to-[#fafafa]">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#111111] mb-6">
            Meet Our <span className="text-[#ff5a1f]">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-[#333333] max-w-2xl mx-auto leading-relaxed">
            A diverse group of <span className="text-[#ff5a1f] font-medium">talented individuals</span> working together to create exceptional digital experiences and drive innovation in communication strategies.
          </p>
        </div>
      </div>

      {/* Team Grid Section */}
      <div className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative" style={{ height: '800px', minHeight: '600px' }}>
            <ChromaGrid
              items={items}
              radius={350}
              damping={0.4}
              fadeOut={0.5}
              ease="power2.out"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#111111] py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Join Our  <span className="text-[#ff5a1f]">Team</span>
          </h2>
          <p className="text-[#cccccc] mb-8 max-w-2xl mx-auto">
            We're always looking for <span className="text-[#ff5a1f] font-medium">passionate individuals</span> to join our mission. Check out our open positions and be part of something meaningful.
          </p>
          <button className="bg-[#ff5a1f] text-white px-8 py-3 rounded-lg hover:bg-[#e54d1f] transition-colors duration-300 font-medium border-2 border-[#ff5a1f] hover:border-[#e54d1f]">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  )
}

export default teamspage
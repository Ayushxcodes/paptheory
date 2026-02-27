import React from 'react'

const WorksPage = () => {
  // Array of Gumlet video URLs - replace these with your actual video links
  const videoUrls = [
    "https://play.gumlet.io/embed/6985d218924a60df4bf0fda8?playsinline=1",
    "https://play.gumlet.io/embed/6985d218742559dc5a11a435?playsinline=1",
    "https://play.gumlet.io/embed/6985d2184db88a967f203e86?playsinline=1",
    "https://play.gumlet.io/embed/6985d218924a60df4bf0fda8?playsinline=1",
    "https://play.gumlet.io/embed/6985d218742559dc5a11a435?playsinline=1",
    "https://play.gumlet.io/embed/6985d2184db88a967f203e86?playsinline=1",
    "https://play.gumlet.io/embed/6985d218924a60df4bf0fda8?playsinline=1",
    "https://play.gumlet.io/embed/6985d218742559dc5a11a435?playsinline=1",
    "https://play.gumlet.io/embed/6985d2184db88a967f203e86?playsinline=1",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            Our <span className="text-[#ff5a1f]">Works</span>
          </h1>
          <p className="text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of <span className="text-[#ff5a1f] font-medium">strategic communications</span> and creative campaigns that drive real impact.
          </p>
          <div className="mt-10 h-px w-full bg-[#ff5a1f]/30 max-w-md mx-auto" />
        </div>
      </div>

      {/* Video Grid Section */}
      <div className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {videoUrls.map((url, index) => (
              <div
                key={index}
                className="group relative bg-gray-500 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-[#ff5a1f]/50 transition-all duration-300 hover:shadow-[#ff5a1f]/20 hover:shadow-2xl"
              >
                <div className="relative aspect-video">
                  <iframe
                    src={url}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    title={`Work Video ${index + 1}`}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 pointer-events-none" />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-16 h-16 bg-[#ff5a1f] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Video info */}
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Project {String(index + 1).padStart(2, '0')}
                  </h3>
                  <p className="text-[#cccccc] text-sm">
                    Strategic communication campaign showcasing our expertise in narrative building and audience engagement.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-900 py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Ready to <span className="text-[#ff5a1f]">Collaborate</span>?
          </h2>
          <p className="text-[#cccccc] mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help tell your story and achieve your communication goals.
          </p>
          <button className="bg-[#ff5a1f] text-white px-8 py-3 rounded-lg hover:bg-[#e54d1f] transition-colors duration-300 font-medium border-2 border-[#ff5a1f] hover:border-[#e54d1f]">
            Start a Conversation
          </button>
        </div>
      </div>
    </div>
  )
}

export default WorksPage
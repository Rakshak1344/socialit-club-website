
export const ForFansSection = () => {
    const benefits = [
      {
        icon: "🏆",
        title: "Bid on Exclusive Access",
        description: "Get priority access to limited experiences through our fair bidding system"
      },
      {
        icon: "👥",
        title: "Guaranteed Small Groups",
        description: "Intimate experiences with limited spots ensure quality interaction time"
      },
      {
        icon: "💝",
        title: "Create Lasting Memories",
        description: "Unique moments with creators that go far beyond typical social media"
      }
    ];
  
    return (
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get Closer to 
                <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent"> the Action</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Stop just watching from the sidelines. Join exclusive experiences 
                and build real connections with the creators you admire most.
              </p>
  
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{benefit.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Mobile mockup */}
            <div className="animate-slide-in-right">
              <div className="relative max-w-sm mx-auto">
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-gray-900 h-8 flex items-center justify-center">
                      <div className="w-20 h-1 bg-white rounded-full"></div>
                    </div>
                    
                    {/* App content */}
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <h3 className="font-bold text-gray-900 text-lg">Discover Experiences</h3>
                      </div>
                      
                      {/* Experience cards */}
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-brand-purple rounded-full"></div>
                            <div>
                              <p className="font-semibold text-sm">@chef_maria</p>
                              <p className="text-xs text-gray-600">Verified Creator</p>
                            </div>
                          </div>
                          <p className="font-medium text-sm mb-2">Private Pasta Making Class</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">BIDDING NOW</span>
                            <span className="text-xs font-medium text-brand-purple">4 spots left</span>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-brand-blue rounded-full"></div>
                            <div>
                              <p className="font-semibold text-sm">@fitness_alex</p>
                              <p className="text-xs text-gray-600">Verified Creator</p>
                            </div>
                          </div>
                          <p className="font-medium text-sm mb-2">Sunrise Hiking Adventure</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">RSVP OPEN</span>
                            <span className="text-xs font-medium text-brand-blue">Join now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
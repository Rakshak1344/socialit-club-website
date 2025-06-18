export const ForCreatorsSection = () => {
    const benefits = [
      {
        icon: "💰",
        title: "Flexible Monetization",
        description: "Choose between bidding for premium experiences or simple RSVP for accessibility"
      },
      {
        icon: "🎨",
        title: "You Control the Experience",
        description: "Design exactly what you want to offer - from intimate workshops to group adventures"
      },
      {
        icon: "🚀",
        title: "No Upfront Costs",
        description: "Start monetizing immediately with zero platform fees to get started"
      }
    ];
  
    return (
      <section id="creators" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mobile mockup */}
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <div className="relative max-w-sm mx-auto">
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-gray-900 h-8 flex items-center justify-center">
                      <div className="w-20 h-1 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Creator dashboard */}
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <h3 className="font-bold text-gray-900 text-lg">Create Experience</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                          <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white text-xl">📸</span>
                          </div>
                          <p className="text-sm text-gray-600">Upload experience photo</p>
                        </div>
                        
                        <div className="space-y-3">
                          <input 
                            type="text" 
                            placeholder="Experience title..." 
                            className="w-full p-3 border border-gray-200 rounded-lg text-sm"
                          />
                          <textarea 
                            placeholder="Describe your experience..." 
                            className="w-full p-3 border border-gray-200 rounded-lg text-sm h-20 resize-none"
                          ></textarea>
                          
                          <div className="flex gap-2">
                            <button className="flex-1 p-2 bg-brand-purple text-white rounded-lg text-sm font-medium">
                              Bidding
                            </button>
                            <button className="flex-1 p-2 border border-gray-300 rounded-lg text-sm">
                              RSVP
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Content */}
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Monetize Your Passion.
                <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent"> Engage Your Community.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Turn your expertise and creativity into exclusive experiences. 
                Build deeper connections with your audience while generating new revenue streams.
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
  
              <div className="mt-12">
                <button className="bg-brand-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300">
                  Start Creating Experiences
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
export const SocialProofSection = () => {
    const fanTestimonials = [
      {
        name: "Emma Chen",
        avatar: "👩‍💻",
        text: "I finally got to learn design directly from my favorite YouTuber. It was incredible - so much more personal than any online course!"
      },
      {
        name: "Marcus Rivera", 
        avatar: "👨‍🎨",
        text: "The bidding system is fair and exciting. I won a spot in a photography workshop that changed my perspective completely."
      },
      {
        name: "Sofia Andersson",
        avatar: "👩‍🍳", 
        text: "Small group sizes mean real interaction. I actually became friends with other fans and the creator remembered my name!"
      }
    ];
  
    const creatorTestimonials = [
      {
        name: "@chef_maria",
        avatar: "👩‍🍳",
        text: "I've made more meaningful connections in 2 months than in 2 years of social media. Plus the revenue is amazing!"
      },
      {
        name: "@fitness_alex",
        avatar: "💪",
        text: "Finally a platform that values quality over quantity. My fans get real value and I can focus on what I love doing."
      },
      {
        name: "@artist_jay",
        avatar: "🎨", 
        text: "The bidding system lets me know fans are serious, while RSVP keeps things accessible. Perfect balance."
      }
    ];
  
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by Fans & Creators
            </h2>
            <p className="text-xl text-gray-600">
              See what our community is saying about their Socialit.club experiences
            </p>
          </div>
  
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Fan testimonials */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                What Fans Are Saying
              </h3>
              <div className="space-y-6">
                {fanTestimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.name}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center text-xl">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600 mb-3 italic">
                          "{testimonial.text}"
                        </p>
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Creator testimonials */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Why Creators Love Socialit.club
              </h3>
              <div className="space-y-6">
                {creatorTestimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.name}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center text-xl">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600 mb-3 italic">
                          "{testimonial.text}"
                        </p>
                        <p className="font-semibold text-brand-purple">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
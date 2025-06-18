import { toast } from "sonner";

export const FeaturedExperiencesSection = () => {
    const experiences = [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        title: "Private Photography Workshop",
        creator: "@photo_sarah",
        status: "BIDDING NOW",
        statusColor: "bg-green-100 text-green-700",
        participants: "3/6 spots"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
        title: "Exclusive Music Production Session",
        creator: "@producer_mike",
        status: "RSVP OPEN", 
        statusColor: "bg-blue-100 text-blue-700",
        participants: "Join now"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
        title: "Code & Coffee Morning",
        creator: "@dev_jessica",
        status: "BIDDING NOW",
        statusColor: "bg-green-100 text-green-700", 
        participants: "2/4 spots"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
        title: "Interior Design Consultation",
        creator: "@design_alex",
        status: "RSVP OPEN",
        statusColor: "bg-blue-100 text-blue-700",
        participants: "Available"
      }
    ];

    const scrollToCTA = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      toast.info("Hang-on! Register for early access");
      const ctaSection = document.getElementById('join-club');
      if (ctaSection) {
        ctaSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };
  
    return (
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover unique opportunities to connect with creators in ways you never imagined
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${experience.statusColor}`}>
                      {experience.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {experience.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-brand-gradient rounded-full"></div>
                    <span className="text-sm text-gray-600 font-medium">
                      {experience.creator}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {experience.participants}
                    </span>
                    <button className="text-brand-purple font-medium text-sm hover:text-brand-purple-dark transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-12">
            <button 
              onClick={scrollToCTA}
              className="bg-brand-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300"
            >
              Browse All Experiences
            </button>
          </div>
        </div>
      </section>
    );
  };
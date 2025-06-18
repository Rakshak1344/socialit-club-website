import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      toast.success("Thanks for joining our waitlist!");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-brand-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-purple-900/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-400/20 rounded-full blur-2xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/15 rounded-full blur-lg animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Go Beyond
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent"> the Screen</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            The marketplace where you can bid on or RSVP to exclusive real-life and online experiences 
            hosted by the creators you love.
          </p>

          {/* Email signup form */}
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 text-lg bg-white/95 border-0 placeholder:text-gray-500"
              required
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              title="Please enter a valid email address"
            />
            <Button 
              type="submit"
              size="lg"
              className="h-12 px-8 bg-white text-brand-purple hover:bg-gray-100 font-semibold text-lg transition-all duration-300 hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>

          {/* Secondary CTA for creators */}
          <div className="mb-12">
            <a 
              href="#creators" 
              className="text-white/80 hover:text-white underline text-lg transition-colors duration-300"
            >
              Are you a Creator? Learn More →
            </a>
          </div>

          {/* Hero image/video placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-purple-600/50 to-pink-600/50 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[8px] border-l-brand-purple border-y-[6px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                  <p className="text-lg font-medium">Watch creators and fans connecting</p>
                  <p className="text-sm text-white/70 mt-2">Preview video coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
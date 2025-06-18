import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const HowItWorksSection = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission logic here
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
            How It Works
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join exclusive experiences with your favorite creators in three simple steps
          </p>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto">1</div>
              <h3 className="text-xl font-semibold text-white mb-3">Browse Experiences</h3>
              <p className="text-white/80">Discover unique experiences hosted by your favorite creators</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto">2</div>
              <h3 className="text-xl font-semibold text-white mb-3">Book Your Spot</h3>
              <p className="text-white/80">RSVP or bid on experiences that catch your eye</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto">3</div>
              <h3 className="text-xl font-semibold text-white mb-3">Connect Live</h3>
              <p className="text-white/80">Meet creators and other fans in unforgettable moments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
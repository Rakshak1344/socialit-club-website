import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission logic here
  };

  return (
    <section className="py-24 bg-brand-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Join the Club?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get early access to exclusive creator experiences before anyone else. 
            Be part of the future of creator-fan connections.
          </p>

          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email for early access"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="flex-1 h-14 text-lg bg-white/95 border-0 placeholder:text-gray-500"
              required
            />
            <Button 
              type="submit"
              size="lg"
              className="h-14 px-8 bg-white text-brand-purple hover:bg-gray-100 font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Notify Me
            </Button>
          </form>

          <p className="text-white/70 text-sm">
            No spam, just early access updates and exclusive creator previews
          </p>
        </div>
      </div>
    </section>
  );
};
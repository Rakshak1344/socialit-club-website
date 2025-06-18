import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(0);

  useEffect(() => {
    const fetchSubscriberCount = async () => {
      try {
        const response = await fetch('/api/early-access-count');
        const data = await response.json();
        setSubscriberCount(data.count + 224);
      } catch (error) {
        console.error('Error fetching subscriber count:', error);
      }
    };

    fetchSubscriberCount();
  }, []);

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
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 400 && data.message === 'Email already subscribed') {
          toast.success("You're already on our list, Thank You!");
        } else {
          throw new Error(data.message || 'Failed to subscribe');
        }
        return;
      }

      toast.success("Thanks for joining early access!");
      setEmail("");
      // Update subscriber count after successful subscription
      setSubscriberCount(prev => prev + 1);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="join-club" className="py-24 bg-brand-gradient relative overflow-hidden">
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
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              title="Please enter a valid email address"
            />
            <Button 
              type="submit"
              size="lg"
              className="h-14 px-8 bg-white text-brand-purple hover:bg-gray-100 font-semibold text-lg transition-all duration-300 hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Notify Me"}
            </Button>
          </form>

          <div className="space-y-2">
            <p className="text-white/70 text-sm">
              No spam, just early access updates and exclusive creator previews
            </p>
            <p className="text-white/80 text-sm">
              <span className="font-semibold">{subscriberCount.toLocaleString()}</span> People are already interested in early access!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
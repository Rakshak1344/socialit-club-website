export const Footer = () => {
    const footerLinks = {
      company: [
        { name: "About Us", href: "#" },
        { name: "How It Works", href: "#" }, 
        { name: "For Creators", href: "#creators" },
        { name: "Contact", href: "#" }
      ],
      support: [
        { name: "Help Center", href: "#" },
        { name: "Safety Guidelines", href: "#" },
        { name: "Community", href: "#" },
        { name: "Blog", href: "#" }
      ],
      legal: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Creator Agreement", href: "#" }
      ]
    };
  
    return (
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-gradient rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-2xl font-bold">Socialit.club</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                The marketplace where creators and fans connect through exclusive, 
                unforgettable experiences beyond the screen.
              </p>
              
              {/* Social media icons */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-brand-purple rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span>📘</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-brand-purple rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span>📸</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-brand-purple rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span>🐦</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-brand-purple rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span>💼</span>
                </div>
              </div>
            </div>
  
            {/* Company links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Support links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Legal links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Bottom bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Socialit.club. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with ❤️ for creators and fans worldwide
            </p>
          </div>
        </div>
      </footer>
    );
  };
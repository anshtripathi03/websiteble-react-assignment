
export default function Footer() {
  const footerGroups = [
    { 
      title: 'Company', 
      links: ['Home', 'Studio', 'Services', 'FAQs'] 
    },
    { 
      title: 'Terms & Policies', 
      links: ['Privacy Policy', 'Terms & Conditions', 'Cookies', 'Accessibility'] 
    },
    { 
      title: 'Follow Us', 
      links: ['Instagram', 'LinkedIn', 'Dribbble', 'Twitter'] 
    },
    { 
      title: 'Terms & Policies', 
      links: ['Contact Us: +1 (234) 567-890', 'Email Us: hello@elementum.site', 'Address: 123 Main St, NYC'] 
    }
  ];

  return (
    <footer className="pt-32 pb-16 px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Connection Line Divider (Subtle) */}
        <div className="w-full h-[1px] bg-primary/10 mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {footerGroups.map((group, idx) => (
            <div key={idx} className="space-y-10">
              <h4 className="text-[12px] uppercase tracking-[0.4em] font-bold text-primary/80">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-primary/70 hover:text-primary transition-colors text-sm font-light leading-relaxed"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-12 border-t border-primary/5 flex flex-col items-center opacity-30">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold">
            © 2026 Elementum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, Phone, Mail, MapPin, 
  MonitorSmartphone, Search, Store, Zap, 
  BarChart3, CheckCircle2, Star, Target, 
  Home, Stethoscope, Scale, Utensils
} from 'lucide-react';

const CONTACT_EMAIL = "info@localdigitalmarketing.us";
const CONTACT_PHONE = "+1 (781) 805-0003";
const ADDRESS = "177 Huntington Ave Ste 1703, Boston, MA 02115, United States";

// ----- ANIMATION VARIANTS -----
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// ----- COMPONENTS -----

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">LD</span>
            </div>
            <span className={`font-heading font-bold text-xl tracking-tight ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
              Local<span className={isScrolled ? 'text-brand-600' : 'text-blue-300'}>Digital</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className={`text-sm font-medium hover:text-brand-600 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>Services</a>
            <a href="#process" className={`text-sm font-medium hover:text-brand-600 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>Process</a>
            <a href="#portfolio" className={`text-sm font-medium hover:text-brand-600 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>Industries</a>
            <a href="#testimonials" className={`text-sm font-medium hover:text-brand-600 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>Reviews</a>
            <a 
              href="#contact" 
              className="bg-accent-500 hover:bg-accent-500/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-accent-500/25 flex items-center gap-2"
            >
              Get Free Quote
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 -mr-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-3"
          >
            <div className="flex flex-col px-4 pt-2 pb-6 space-y-4">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium py-2">Services</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium py-2">Process</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium py-2">Reviews</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium py-2">Pricing</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-brand-600 text-white text-center py-3 rounded-lg font-semibold mt-2">Book a Call</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-brand-900">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506501139174-099022df5260?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-medium mb-6">
              <MapPin size={14} className="text-accent-500" />
              <span>Boston's Top-Rated Web & Local SEO Agency</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Websites That Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent-500">As Hard As You Do.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Stop losing customers to competitors. We build high-converting professional website design for small business and drive local traffic that turns into ready-to-buy leads.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-xl shadow-accent-500/20">
                Get Your Free Quote <ChevronRight size={20} />
              </a>
              <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`} className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                <Phone size={20} /> Book a Strategy Call
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex items-center gap-6 text-sm text-slate-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client avatar" className="w-10 h-10 rounded-full border-2 border-brand-900" />
                ))}
              </div>
              <div>
                <div className="flex gap-1 text-accent-500 mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p>Trusted by 500+ local businesses</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustBanner = () => {
  return (
    <div className="bg-white border-b border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">As featured on & trusted by</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
          {/* Faking logos with pure CSS/typography for the demo */}
          <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><span className="w-8 h-8 rounded bg-blue-600"></span> Google Partner</div>
          <div className="flex items-center gap-2 font-serif font-bold text-xl text-slate-800"><div className="w-8 h-8 rounded-full border-4 border-slate-800"></div> Clutch</div>
          <div className="flex items-center gap-2 font-black text-xl italic text-slate-800"><span className="text-2xl text-red-500">Yelp</span> Verified</div>
          <div className="flex items-center gap-2 font-bold text-xl text-slate-800 py-1 px-2 border-2 border-slate-800">BBB A+</div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: "web-design",
      title: "Website Design & Redesign",
      description: "As a custom website design company, we don't use cookie-cutter templates. We build fast, mobile-friendly sites structured to convert visitors into paying clients.",
      icon: <MonitorSmartphone size={32} className="text-brand-600" />,
      tag: "Conversion-Focused"
    },
    {
      id: "local-seo",
      title: "Dominating Local SEO",
      description: "If they can't find you, they can't hire you. Our local SEO strategies put your business at the top of Google when Boston customers are actively searching for your services.",
      icon: <Search size={32} className="text-brand-600" />,
      tag: "Traffic Generation"
    },
    {
      id: "gmb",
      title: "Google My Business",
      description: "We fully optimize your GMB profile to capture the 'Map Pack' real estate. Get more calls and direct traffic directly from Google Maps without paying for ads.",
      icon: <Store size={32} className="text-brand-600" />,
      tag: "Local Authority"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-brand-900 mb-6"
          >
            Digital Services That Drive <span className="text-brand-600">Actual Revenue</span>
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-lg text-slate-600"
          >
            When searching for "website design services near me", you don't just want a pretty digital brochure. You need a lead-generation machine. Here is how we do it:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
              }}
              className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-50 rounded-bl-3xl">
                <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">{service.tag}</span>
              </div>
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueProposition = () => {
  const values = [
    {
      title: "12 Years of Local Expertise",
      desc: "We are proudly based in Boston. We understand the local market, the competition, and what it takes to stand out in Massachusetts.",
      icon: <Target size={24} className="text-brand-600" />
    },
    {
      title: "Obsessed with ROI",
      desc: "We don't measure success by clever animations. We measure it by how many new leads, calls, and sales your new website generates.",
      icon: <BarChart3 size={24} className="text-brand-600" />
    },
    {
      title: "Fast, In-House Execution",
      desc: "No offshore outsourcing. When you hire a website designer from our agency, you work directly with experts providing fast turnaround times.",
      icon: <Zap size={24} className="text-brand-600" />
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-amber-100 rounded-3xl transform rotate-3 -z-10 blur-lg opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Boston Web Design Team Collaboration" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100 flex items-center gap-4">
              <div className="text-4xl font-black text-brand-600">12+</div>
              <div className="text-sm font-bold text-slate-700 leading-tight">
                Years Setting the<br/>Standard in Boston
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
                Why Boston Businesses Choose Us Over The Rest
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-10">
                Finding the best web design agency in Boston isn't about finding the flashiest portfolio—it's about finding a partner who understands your business goals.
              </motion.p>
              
              <div className="space-y-8">
                {values.map((val, idx) => (
                  <motion.div variants={fadeUp} key={idx} className="flex gap-4">
                    <div className="mt-1 bg-blue-50 w-12 h-12 shrink-0 rounded-full flex items-center justify-center">
                      {val.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{val.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Discovery", desc: "We analyze your local competitors, map out your ideal customer profile, and strategize the structure." },
    { title: "Design & Build", desc: "We draft custom, high-converting layouts targeting 'web development services Boston' local queries and beyond." },
    { title: "Launch", desc: "Rigorous testing for speed (<2s load times), responsive mobile behaviors, and technical SEO structure." },
    { title: "Growth", desc: "Post-launch, we aggressively optimize your Google My Business and build local backlinks to drive continuous traffic." }
  ];

  return (
    <section id="process" className="py-24 bg-brand-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Predictable 4-Step Process</h2>
          <p className="text-slate-400 text-lg">We've refined our delivery process over a decade to be completely hands-off for busy owners.</p>
        </div>

        <div className="div flex flex-col md:flex-row relative z-10 justify-between">
          <div className="hidden md:block absolute top-10 w-full h-[2px] bg-slate-800 -z-10 mx-auto right-0" style={{width: 'calc(100% - 150px)', left: '75px'}}></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="flex flex-col items-center text-center relative w-full md:w-1/4 px-4 mb-12 md:mb-0"
            >
              <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-brand-900 flex items-center justify-center text-2xl font-black text-brand-500 mb-6 relative z-10 shadow-lg">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { name: "Real Estate & Agencies", icon: <Home size={32} /> },
    { name: "Medical & Dental Clinics", icon: <Stethoscope size={32} /> },
    { name: "Law Firms & Attorneys", icon: <Scale size={32} /> },
    { name: "Restaurants & Hospitality", icon: <Utensils size={32} /> },
    { name: "Home Services (HVAC/Plumbing)", icon: <Zap size={32} /> },
    { name: "Local Retailers", icon: <Store size={32} /> }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">Industries We Specialize In</h2>
          <p className="text-slate-600">While we work with various sectors, our SEO footprint and direct response design strategies are highly optimized for these local niches.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-slate-200 p-6 md:p-8 rounded-xl flex flex-col items-center text-center gap-4 hover:border-brand-300 hover:shadow-lg transition-all cursor-default"
            >
              <div className="text-brand-600 bg-blue-50 p-4 rounded-full">
                {ind.icon}
              </div>
              <h4 className="font-bold text-slate-800">{ind.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Marcus T.",
      role: "Owner, Boston HVAC Services",
      content: "We searched for 'best web design agency in Boston' and luckily found LocalDigital. Not only does the new site look incredibly professional, but we've seen a 40% jump in organic calls from Google Maps in just 3 months.",
      rating: 5
    },
    {
      name: "Sarah L.",
      role: "Partner, Downtown Law Firm",
      content: "Hiring a website designer who inherently understood strict legal compliance yet knew how to convert visitors was tough. They delivered beyond expectations. The ROI has been phenomenal.",
      rating: 5
    },
    {
      name: "James D.",
      role: "Manager, North End Restaurant",
      content: "Our old site took seconds to load, losing mobile customers on the go. The new lightning-fast custom site makes our menu pop and reservations have never been higher.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-4">Don't Just Take Our Word For It</h2>
          <p className="text-lg text-slate-600">See what other local business owners have achieved by partnering with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: idx * 0.1 } }
              }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
            >
              <div className="flex gap-1 text-accent-500 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-8 relative">
                <span className="text-4xl text-slate-300 absolute -top-4 -left-2 font-serif opacity-50">"</span>
                {review.content}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingTeaser = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent Local Pricing</h2>
              <p className="text-slate-300 text-lg mb-8">
                We believe in straightforward pricing. No hidden fees or bloated contracts. Start with a foundation built to rank and scale.
              </p>
              
              <ul className="space-y-4 mb-8">
                {['Custom UI Design (No Templates)', 'On-Page SEO Optimization', 'Mobile-Responsive & Fast (<2s)', 'Google Analytics Integration', 'Dedicated Boston-based Project Manager'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="text-accent-500" size={20} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full md:w-2/5 md:border-l md:border-white/20 md:pl-12 flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-slate-400 font-medium mb-2 uppercase tracking-wide">Business Starter Sites</p>
              <div className="flex items-baseline gap-2 mb-6 text-white text-5xl font-black">
                Starting at <br className="hidden md:block" /> <span className="text-accent-500">$2,499</span>
              </div>
              <p className="text-sm text-slate-400 mb-8 max-w-[200px] md:max-w-none">
                Payment plans available. Need custom portals or e-commerce? We quote custom solutions directly.
              </p>
              <a href="#contact" className="w-full text-center bg-white text-brand-900 hover:bg-slate-100 font-bold py-4 px-6 rounded-xl transition-colors">
                Request Detailed Pricing
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 bg-brand-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Ready To Upgrade Your Online Presence?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop letting your outdated website cost you leads. Let's build a foundation for sustainable digital growth today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
            <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`} className="bg-white text-brand-600 text-lg font-bold py-4 px-8 rounded-full hover:bg-slate-100 transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl">
              <Phone size={24} /> Call {CONTACT_PHONE}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="bg-brand-900 border border-brand-900 hover:border-white text-white text-lg font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2">
              <Mail size={24} /> Email Our Team
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-blue-200">
            <CheckCircle2 size={18} />
            <span>Limited availability for new projects this month. Call now.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-600 rounded flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">LD</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Local<span className="text-brand-600">Digital</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Boston's premier digital local agency combining stunning custom website design with ruthless local SEO to explode your lead pipeline.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer text-white">in</div>
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer text-white">fb</div>
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer text-white">ig</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Custom Website Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Local SEO Boston</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Google My Business Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Website Performance Audit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WordPress Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent-500 shrink-0 mt-1" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent-500 shrink-0" />
                <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`} className="hover:text-white transition-colors">{CONTACT_PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent-500 shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">info@localdigitalmarketing.us</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-slate-900 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} LocalDigital Boston. All rights reserved.</p>
          <div className="text-slate-500 text-xs text-right">
            Designed for Boston Business Owners.
          </div>
        </div>
      </div>
    </footer>
  );
};


export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustBanner />
        <Services />
        <ValueProposition />
        <Process />
        <Industries />
        <Testimonials />
        <PricingTeaser />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

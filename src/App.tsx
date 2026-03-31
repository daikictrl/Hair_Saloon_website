import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronsLeftRight, 
  MapPin, 
  Instagram, 
  MessageCircle, 
  Twitter,
  Star,
  Menu,
  X,
  Upload,
  ImagePlus,
  Phone,
  Check
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'bg-[#C08552]/10 backdrop-blur-md border-b border-[#C08552]/20 py-0' : 'bg-transparent border-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className={`font-serif text-xl md:text-2xl tracking-tighter font-semibold transition-colors duration-300 ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
          ETS BRAIDS HAIRSTYLE
        </a>

        <div className="hidden md:flex items-center gap-8">
          <div className={`flex items-center gap-8 transition-colors duration-300 ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
            <a href="#" className="text-sm font-medium hover:text-brand-gold transition-colors">Home</a>
            <a href="#services" className="text-sm font-medium hover:text-brand-gold transition-colors">Services</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-brand-gold transition-colors">Reviews</a>
          </div>

          <a href="#booking" className={`px-6 py-2.5 rounded-full text-xs font-sans uppercase tracking-widest transition-all shadow-lg ${isScrolled ? 'bg-brand-dark text-brand-bg hover:bg-brand-gold shadow-brand-dark/10' : 'bg-white text-brand-dark hover:bg-brand-gold hover:text-white shadow-black/10'}`}>
            Book Now
          </a>
        </div>

        <button className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-brand-dark' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-bg border-b border-brand-border py-4 px-6 flex flex-col gap-4 shadow-xl text-brand-dark">
          <a href="#" onClick={() => setIsOpen(false)} className="text-sm font-medium">Home</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-sm font-medium">Services</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-sm font-medium">Reviews</a>
          <a href="#booking" onClick={() => setIsOpen(false)} className="px-6 py-3 bg-brand-dark text-brand-bg rounded-full text-xs font-sans uppercase tracking-widest text-center mt-2">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { local: '/hero1.jpg', fallback: 'https://images.unsplash.com/photo-1615280825886-fa817c0a06cc?auto=format&fit=crop&q=80&w=2000' },
    { local: '/hero2.jpg', fallback: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=2000' },
    { local: '/hero3.jpg', fallback: 'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?auto=format&fit=crop&q=80&w=2000' },
    { local: '/hero4.jpg', fallback: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=2000' },
    { local: '/hero5.jpeg', fallback: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=2000' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center px-6 overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Blurred background to fill empty space on desktop */}
            <img 
              src={images[currentImage].local}
              onError={(e) => { e.currentTarget.src = images[currentImage].fallback; }}
              alt=""
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
            />
            {/* Main image contained properly */}
            <motion.img 
              src={images[currentImage].local}
              onError={(e) => { e.currentTarget.src = images[currentImage].fallback; }}
              alt={`Luxury Braids ${currentImage + 1}`}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-contain"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-bg"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto text-center mt-20"
      >
        <span className="font-script text-4xl md:text-6xl text-brand-gold mb-4 block drop-shadow-md">
          Elegance in every braid
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white mb-6 drop-shadow-lg">
        Looking Good is<br/>Good Business
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed font-light drop-shadow">
          Experience the ultimate luxury in protective styling. We craft flawless, pain-free braids that celebrate your natural beauty.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#booking" className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-white rounded-full text-sm font-medium uppercase tracking-widest hover:bg-brand-gold-dark transition-all shadow-xl shadow-brand-gold/20">
            Book Appointment
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const [selectedImage, setSelectedImage] = useState<{img: string, fallback: string, title: string} | null>(null);

  const services = [
    {
      title: "Stitch Braid",
      desc: "Sleek, precise, and perfectly parted cornrows for a clean aesthetic.",
      img: "/stitch-braid.jpeg",
      fallback: "https://images.unsplash.com/photo-1615280825886-fa817c0a06cc?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Box Braid",
      desc: "Classic, versatile, and protective styling for any occasion.",
      img: "/box-braid.jpeg",
      fallback: "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Boho Braid",
      desc: "A beautiful mix of braids and curly leave-outs for a goddess vibe.",
      img: "/boho-braid.jpeg",
      fallback: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cornrows Braid",
      desc: "Traditional, elegant, and long-lasting protective styling.",
      img: "/Cornrows-braid.jpeg",
      fallback: "https://images.unsplash.com/photo-1615280825886-fa817c0a06cc?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "French Curls",
      desc: "Voluminous, bouncy curls that add a touch of romance and glamour.",
      img: "/French-curls.jpeg",
      fallback: "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Fulani Braid",
      desc: "Intricate patterns and beads inspired by traditional African artistry.",
      img: "/Fulani-braid.jpeg",
      fallback: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Kids Braid",
      desc: "Gentle, fun, and creative styles perfect for the little ones.",
      img: "/Kids-braid.jpeg",
      fallback: "https://images.unsplash.com/photo-1615280825886-fa817c0a06cc?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Wig Installation",
      desc: "Flawless, natural-looking wig installations that protect your natural hair.",
      img: "/Wig-Installation.jpeg",
      fallback: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-sans text-xs uppercase tracking-widest text-brand-gold mb-3 block font-semibold">
          Our Expertise
        </span>
        <h2 className="text-4xl md:text-5xl tracking-tight text-brand-dark mb-4">
          Signature Styles
        </h2>
        <p className="text-brand-muted max-w-2xl mx-auto">
          We specialize in premium protective styles tailored to your hair texture and lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(s)}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-lg">
              <img 
                src={s.img} 
                onError={(e) => { e.currentTarget.src = s.fallback; }}
                alt={s.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl text-brand-dark mb-2">{s.title}</h3>
            <p className="text-sm text-brand-muted leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.img}
                onError={(e) => { e.currentTarget.src = selectedImage.fallback; }}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[90vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  return (
    <section id="transformations" className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-border">
      <div className="text-center mb-16">
        <span className="font-sans text-xs uppercase tracking-widest text-brand-gold mb-3 block font-semibold">
          Transformations
        </span>
        <h2 className="text-4xl md:text-5xl tracking-tight text-brand-dark mb-4">
          Real Results
        </h2>
        <p className="text-brand-muted max-w-2xl mx-auto">
          Slide to see the magic. We take pride in delivering flawless, long-lasting styles.
        </p>
      </div>

      <div className="relative w-full max-w-xl mx-auto aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl bg-brand-pink">
        {/* After Image (Base) */}
        <img 
          src="/after.jpg" 
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=1200"; }}
          alt="After" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center" 
        />
        
        {/* Before Image (Clipped) */}
        <img 
          src="/before.jpg" 
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=1200"; }}
          alt="Before" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center" 
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        />

        {/* Slider Handle Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-none">
            <ChevronsLeftRight className="w-5 h-5 text-brand-dark" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-dark shadow-sm">
          Before
        </div>
        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-dark shadow-sm">
          After
        </div>

        {/* Invisible Range Input */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition} 
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
        />
      </div>
    </section>
  );
};

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    hairType: 'Afro-textured',
    length: 'Shoulder length',
    size: 'Medium',
    location: 'Home Service',
    date: '',
    time: '',
    phone: '',
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*NEW BOOKING REQUEST* 📅

*TYPE OF HAIR:* ${formData.hairType}

*LENGTH OF BRAID:* ${formData.length}

*SIZE OF BRAIDS:* ${formData.size}

*WHATSAPP NUMBER:* ${formData.phone}

*RESERVATION DATE:* ${formData.date}

*PREFERRED TIME:* ${formData.time}

*LOCATION PREFERENCE:* ${formData.location}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/32465496546?text=${encoded}`, '_blank');
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-24 px-6 max-w-7xl mx-auto bg-brand-pink/30 rounded-[3rem] my-12">
      <div className="text-center mb-16">
        <span className="font-sans text-xs uppercase tracking-widest text-brand-gold mb-3 block font-semibold">
          Reservations
        </span>
        <h2 className="text-4xl md:text-5xl tracking-tight text-brand-dark mb-4">
          Book Your Session
        </h2>
        <p className="text-brand-muted max-w-2xl mx-auto">
          Fill out the details below to request an appointment. We will confirm your booking via WhatsApp.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl shadow-brand-dark/5 border border-brand-border overflow-hidden">
        <div className="p-8 md:p-12">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 space-y-6"
            >
              <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <Check className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold text-brand-dark tracking-tight">Booking Request Sent!</h3>
              <p className="text-brand-muted max-w-md mx-auto text-lg leading-relaxed">
                Thank you for your request. Your booking request has been received. We will review the details and get back to you shortly via WhatsApp. If you need any further assistance feel free to reach out.
              </p>
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    hairType: 'Afro-textured',
                    length: 'Shoulder length',
                    size: 'Medium',
                    location: 'Home Service',
                    date: '',
                    time: '',
                    phone: '',
                  });
                }}
                className="mt-8 px-8 py-4 bg-brand-dark text-white rounded-full font-sans uppercase tracking-widest text-xs font-semibold hover:bg-brand-gold transition-all shadow-lg hover:-translate-y-1"
              >
                Book Another Session
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
              
              <div className="space-y-2">
                <label className="block text-[10px] font-sans uppercase tracking-widest text-brand-gold-dark font-semibold">
                  Type of Hair
                </label>
                <select 
                  name="hairType"
                  value={formData.hairType}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-brand-border py-3 focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer text-brand-dark font-medium"
                >
                  <option value="Afro-textured">Afro-textured</option>
                  <option value="Straight">Straight</option>
                  <option value="Wavy">Wavy</option>
                  <option value="Curly">Curly</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-sans uppercase tracking-widest text-brand-gold-dark font-semibold">
                  Length of Braid
                </label>
                <select 
                  name="length"
                  value={formData.length}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-brand-border py-3 focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer text-brand-dark font-medium"
                >
                  <option value="Bob length">Bob length</option>
                  <option value="Shoulder length">Shoulder length</option>
                  <option value="Waist length">Waist length</option>
                  <option value="Thigh length">Thigh length</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-sans uppercase tracking-widest text-brand-gold-dark font-semibold">
                  Size of Braids
                </label>
                <select 
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-brand-border py-3 focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer text-brand-dark font-medium"
                >
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="Jumbo">Jumbo</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-sans uppercase tracking-widest text-brand-gold-dark font-semibold">
                  WhatsApp Number
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 8900" 
                  className="w-full bg-transparent border-b border-brand-border py-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-dark placeholder:text-brand-muted/50 font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-sans uppercase tracking-widest text-brand-gold-dark font-semibold">
                  Reservation Date
                </label>
                <input 
                  type="date" 
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-brand-border py-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-dark font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-sans uppercase tracking-widest text-brand-gold-dark font-semibold">
                  Preferred Time
                </label>
                <input 
                  type="time" 
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-brand-border py-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-dark font-medium"
                />
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <label className="block text-[10px] font-sans uppercase tracking-widest text-brand-gold-dark font-semibold">
                Location Preference
              </label>
              <div className="flex gap-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="location" 
                    value="Home Service" 
                    checked={formData.location === 'Home Service'}
                    onChange={handleChange}
                    className="hidden peer" 
                  />
                  <div className="w-5 h-5 rounded-full border-2 border-brand-border peer-checked:border-brand-gold peer-checked:bg-brand-gold flex items-center justify-center transition-all">
                    <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm text-brand-dark font-medium group-hover:text-brand-gold transition-colors">
                    Home Service
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="location" 
                    value="Displacement" 
                    checked={formData.location === 'Displacement'}
                    onChange={handleChange}
                    className="hidden peer" 
                  />
                  <div className="w-5 h-5 rounded-full border-2 border-brand-border peer-checked:border-brand-gold peer-checked:bg-brand-gold flex items-center justify-center transition-all">
                    <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm text-brand-dark font-medium group-hover:text-brand-gold transition-colors">
                    Displacement (Salon)
                  </span>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-5 mt-4 bg-brand-dark text-white rounded-2xl font-sans uppercase tracking-widest text-xs font-semibold hover:bg-brand-gold hover:-translate-y-1 transition-all shadow-xl shadow-brand-dark/10"
            >
              Confirm Booking Request
            </button>
          </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      text: "Absolutely in love with my knotless braids! They are so neat and completely painless. The best stylist I've ever been to.",
      img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Michelle O.",
      text: "Professional, fast, and the environment is so relaxing. My boho braids lasted over 6 weeks and still looked fresh.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Chloe Davis",
      text: "I booked a home service and it was incredibly convenient. The quality of work is unmatched. Highly recommend!",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-border">
      <div className="text-center mb-16">
        <h2 className="text-4xl tracking-tight text-brand-dark mb-4">
          Client Love
        </h2>
        <p className="text-brand-muted">
          Don't just take our word for it. Hear from our beautiful clients.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-border/50 hover:shadow-xl hover:border-brand-gold/30 transition-all">
            <div className="flex gap-1 text-brand-gold mb-6">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-brand-dark leading-relaxed mb-8 font-medium">
              "{r.text}"
            </p>
            <div className="flex items-center gap-4">
              <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <p className="text-sm font-bold text-brand-dark">{r.name}</p>
                <p className="text-xs text-brand-muted">Verified Client</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-serif text-3xl tracking-tighter text-brand-dark font-semibold mb-6 block">
              ETS BRAIDS HAIRSTYLE
            </a>
            <p className="text-brand-muted max-w-sm mb-8 leading-relaxed">
              Elevating the art of braiding. We provide luxury protective styling that celebrates your natural crown.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/32465496546" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-brand-dark hover:bg-[#25D366] hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-dark mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-brand-gold transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-dark mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-gold" />
                123 Beauty Lane, NY 10001
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold" />
                +32 465 49 65 46
              </li>
              <li>
                <a 
                  href="https://wa.me/32465496546" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-6 py-2 bg-[#25D366] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1DA851] transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-border pt-8">
          <p className="text-xs text-brand-muted">
            © {new Date().getFullYear()} ETS BRAIDS HAIRSTYLE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <BookingForm />
      <Testimonials />
      <Footer />
    </div>
  );
}

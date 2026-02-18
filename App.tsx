
import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Zap, MapPin, Check, Star, Download,
  FileText, Phone, Mail, ChevronRight, Send, MessageCircle, Bot,
  CreditCard, Smartphone, User
} from 'lucide-react';
import { ACTIVITIES, ZONES, TEAM, PARTNERS } from './constants';
import { askAssistant } from './services/gemini';

// REPLACE THIS WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyu8N-0TtPJqayRti4p2Ot1IN8wW45YHF7oTyC4JlvGsCw9rFU2HN2i1QGCpJbjb6SnmQ/exec";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Idea', href: '#idea' },
    { name: 'Activities', href: '#activities' },
    { name: 'Zones', href: '#zones' },
    { name: 'Tickets', href: '#tickets' },
    { name: 'Partners', href: '#partners' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-fs-dark/95 backdrop-blur-md border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <img
              src="/fitstreet-logo-high-res.png"
              alt="Fitstreet 2026"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-white/70 hover:text-fs-orange transition-colors">
                {link.name}
              </a>
            ))}
            <a href="https://drive.google.com/file/d/1iqouHJpOv7v35VpW6NGMvcG96lq5pKeH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold bg-fs-orange text-white px-5 py-2.5 rounded-full hover:bg-fs-orange/80 transition-all hover:scale-105">
              <FileText className="w-4 h-4" />
              View Deck
            </a>
          </div>
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-fs-dark border-b border-white/5 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-white/70 hover:text-fs-orange border-b border-white/5">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-fs-dark via-fs-dark/20 to-fs-dark z-10 pointer-events-none" />
      <div className="absolute inset-0 z-0 opacity-60">
        <iframe
          src="https://www.youtube.com/embed/ipux3varins?autoplay=1&mute=1&loop=1&playlist=ipux3varins&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Fitstreet HEATWAVE 2026"
          className="absolute top-1/2 left-1/2 w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2 pointer-events-none border-none"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="relative z-10 w-full max-w-[550px] mx-auto mb-8 flex flex-col gap-2">
          <img
            src="/360-logo.png"
            alt="360 Health & Wellness Festival"
            className="w-full drop-shadow-2xl"
          />
        </div>
        <div className="mb-8 relative z-10">
          <img
            src="/heatwave-logo.png"
            alt="HEATWAVE"
            className="h-32 md:h-48 mx-auto drop-shadow-2xl"
          />
        </div>
        <p className="text-xl sm:text-2xl font-bold text-white/80 mb-2">2 DAYS. 1 CITY.</p>
        <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
          Thousands moving as one. 0 dead spots. The Coachella of Wellness.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-10 py-6 hover:border-fs-orange/50 transition-colors">
            <p className="text-xs font-bold text-fs-orange tracking-[0.2em] uppercase mb-1">Date</p>
            <p className="text-3xl font-black text-white">MAY 9-10, 2026</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-10 py-6 hover:border-fs-pink/50 transition-colors">
            <p className="text-xs font-bold text-fs-pink tracking-[0.2em] uppercase mb-1">Location</p>
            <p className="text-3xl font-black text-white">BGC, MANILA</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#tickets" className="px-10 py-4 bg-gradient-to-r from-fs-orange to-fs-pink text-white font-bold rounded-full text-lg hover:scale-105 transition-all shadow-lg shadow-fs-orange/20 animate-pulse-glow flex items-center justify-center">
            Get Your Pass
          </a>
          <a href="https://drive.google.com/file/d/1iqouHJpOv7v35VpW6NGMvcG96lq5pKeH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors">
            Presentation Deck
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-fs-orange" />
        </div>
      </div>
    </section>
  );
};

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Hey! I'm your Heatwave Guide. Ask me anything about Fitstreet 2026!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await askAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', text: response || "" }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-fs-gray border border-white/10 w-80 md:w-96 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
          <div className="p-4 bg-fs-orange flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="text-white" />
              <span className="font-bold">Heatwave Guide</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="text-white" /></button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${m.role === 'user' ? 'bg-fs-orange text-white' : 'bg-white/10 text-white/90'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-white/90 px-4 py-2 rounded-2xl text-sm animate-pulse">Thinking...</div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t border-white/5 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about tickets, schedule..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-fs-orange"
            />
            <button
              onClick={handleSend}
              className="bg-fs-orange text-white p-2 rounded-full hover:scale-105 transition-transform"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-fs-orange p-4 rounded-full shadow-lg shadow-fs-orange/30 hover:scale-110 transition-all animate-bounce"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
};

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'free' | 'vip';
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, type }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    ageRange: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({ name: '', email: '', phone: '', gender: '', ageRange: '' });
      setPaymentMethod('');
      setError('');
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (type === 'vip' && step === 1) {
      setStep(2);
    } else {
      setIsSubmitting(true);
      try {
        if (!GOOGLE_SCRIPT_URL) {
          throw new Error("Please configure the Google Script URL in the code.");
        }

        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify({
            ...formData,
            type: type,
            paymentMethod: type === 'vip' ? paymentMethod : 'N/A',
            timestamp: new Date().toISOString()
          }),
        });

        if (response.ok) {
          setStep(3);
          setTimeout(() => {
            onClose();
            setStep(1);
          }, 3000);
        } else {
          throw new Error('Submission failed');
        }
      } catch (err) {
        console.error(err);
        setError('Something went wrong. Please try again or contact support.');
        // For demonstration purposes if URL is missing, enabling mock success to verify UI
        if ((err as Error).message.includes("configure")) {
          alert("Data would be sent to Google Sheets here. Please deploy the script and update GOOGLE_SCRIPT_URL.");
          setStep(3);
          setTimeout(() => {
            onClose();
            setStep(1);
          }, 3000);
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-fs-dark border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="p-6 bg-gradient-to-r from-fs-orange/20 to-fs-pink/20 border-b border-white/10 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-black italic tracking-tighter text-white uppercase">
              {step === 3 ? 'YOU\'RE IN!' : type === 'vip' ? 'VIP ACCESS' : 'GET YOUR PASS'}
            </h3>
            <p className="text-sm text-white/60 font-medium">
              {step === 3 ? 'See you at the HEATWAVE.' : type === 'vip' ? 'Unlock the full experience.' : 'Join the movement.'}
            </p>
          </div>
        </div>
        <button onClick={onClose} disabled={isSubmitting} className="p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50">
          <X className="w-5 h-5 text-white" />
        </button>


        <div className="p-8">
          {step === 3 ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-500" />
              </div>
              <h4 className="text-2xl font-bold text-white">Registration Complete!</h4>
              <p className="text-white/60">Check your email for your ticket details.</p>
            </div>
          ) : step === 2 && type === 'vip' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label className="block text-sm font-bold text-white/40 uppercase tracking-widest">Select Payment Method</label>
                <div className="grid gap-3">
                  {[
                    { id: 'maya', name: 'Maya', icon: <Smartphone className="w-5 h-5" /> },
                    { id: 'gcash', name: 'GCash', icon: <Smartphone className="w-5 h-5" /> },
                    { id: 'card', name: 'Credit / Debit Card', icon: <CreditCard className="w-5 h-5" /> }
                  ].map((method) => (
                    <label key={method.id} className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === method.id ? 'bg-fs-orange/20 border-fs-orange' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="hidden"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === method.id ? 'border-fs-orange' : 'border-white/30'}`}>
                        {paymentMethod === method.id && <div className="w-2.5 h-2.5 rounded-full bg-fs-orange" />}
                      </div>
                      <div className="text-white font-bold flex items-center gap-3">
                        {method.icon}
                        {method.name}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {error && <p className="text-red-500 text-sm text-center font-bold">{error}</p>}

              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setStep(1)} disabled={isSubmitting} className="flex-1 py-4 rounded-xl font-bold text-white/60 hover:text-white hover:bg-white/5 transition-colors disabled:opacity-50">
                  Back
                </button>
                <button type="submit" disabled={!paymentMethod || isSubmitting} className="flex-[2] py-4 bg-gradient-to-r from-fs-orange to-fs-pink rounded-xl font-black text-white hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100 shadow-lg shadow-fs-orange/20 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      PROCESSING...
                    </>
                  ) : 'COMPLETE PAYMENT'}
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-fs-orange uppercase tracking-widest">Full Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fs-orange focus:ring-1 focus:ring-fs-orange placeholder:text-white/20"
                  placeholder="Juan Dela Cruz"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-fs-orange uppercase tracking-widest">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fs-orange focus:ring-1 focus:ring-fs-orange placeholder:text-white/20"
                    placeholder="juan@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-fs-orange uppercase tracking-widest">Phone</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fs-orange focus:ring-1 focus:ring-fs-orange placeholder:text-white/20"
                    placeholder="0917 123 4567"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-fs-orange uppercase tracking-widest">Gender</label>
                  <select
                    required
                    value={formData.gender}
                    onChange={e => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fs-orange focus:ring-1 focus:ring-fs-orange appearance-none"
                  >
                    <option value="" className="text-black">Select...</option>
                    <option value="male" className="text-black">Male</option>
                    <option value="female" className="text-black">Female</option>
                    <option value="non-binary" className="text-black">Non-binary</option>
                    <option value="prefer-not-to-say" className="text-black">Prefer not to say</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-fs-orange uppercase tracking-widest">Age Range</label>
                  <select
                    required
                    value={formData.ageRange}
                    onChange={e => setFormData({ ...formData, ageRange: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fs-orange focus:ring-1 focus:ring-fs-orange appearance-none"
                  >
                    <option value="" className="text-black">Select...</option>
                    <option value="under-18" className="text-black">Under 18</option>
                    <option value="18-24" className="text-black">18-24</option>
                    <option value="25-34" className="text-black">25-34</option>
                    <option value="35-44" className="text-black">35-44</option>
                    <option value="45-54" className="text-black">45-54</option>
                    <option value="55-64" className="text-black">55-64</option>
                    <option value="65+" className="text-black">65+</option>
                  </select>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm text-center font-bold">{error}</p>}

              <button type="submit" disabled={isSubmitting} className="w-full py-4 mt-4 bg-white text-fs-dark rounded-xl font-black text-lg hover:bg-fs-orange hover:text-white transition-all shadow-lg shadow-white/10 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-fs-dark/30 border-t-fs-dark rounded-full animate-spin" />
                    REGISTERING...
                  </>
                ) : type === 'vip' ? 'CONTINUE TO PAYMENT' : 'REGISTER NOW'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div >
  );
};

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'free' | 'vip'>('free');

  const openModal = (type: 'free' | 'vip') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* The Idea */}
      <section id="idea" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-fs-orange bg-fs-orange/10 px-4 py-1.5 rounded-full">The Vision</span>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none pr-4">
              THINK <span className="gradient-text">BIG</span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-fs-orange/10 border border-fs-orange/20 rounded-full px-5 py-2">
              <Zap className="w-4 h-4 text-fs-orange" />
              <span className="text-sm font-bold text-fs-orange">Vibe: COACHELLA of Wellness</span>
            </div>
            <p className="text-xl text-white/80 leading-relaxed">
              Train with world-class certified coaches. Move through immersive zones. Feel the energy that keeps you going long after the weekend ends.
            </p>
            <p className="text-lg text-white/60 italic leading-relaxed">
              Fitstreet is designed as a <span className="text-fs-cyan font-bold not-italic">BODY + LIFESTYLE Journey</span> through a city-wide surge of movement and energy.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-fs-orange/40 to-fs-purple/40 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="bg-fs-gray/50 border border-white/10 rounded-[2.5rem] p-10 glow-border relative overflow-hidden">
              <div className="space-y-8 relative z-10">
                {[
                  { icon: "🏋️", text: "World-class certified coaches" },
                  { icon: "🎯", text: "Immersive fitness zones" },
                  { icon: "🔥", text: "City-wide movement energy" },
                  { icon: "🎶", text: "Music, lights & wellness fusion" },
                  { icon: "💪", text: "All fitness levels welcome" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group/item">
                    <span className="text-4xl transition-transform group-hover/item:scale-125">{item.icon}</span>
                    <span className="text-lg text-white/90 font-bold group-hover/item:text-white transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="py-32 px-4 bg-fs-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-fs-pink bg-fs-pink/10 px-4 py-1.5 rounded-full">What Awaits</span>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter pr-4">THE <span className="gradient-text">ACTIVITIES</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTIVITIES.map((act, i) => (
              <div key={i} className="group relative bg-fs-gray/50 border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${act.gradient} opacity-0 group-hover:opacity-[0.03] rounded-3xl transition-opacity`} />
                <div className="relative z-10 space-y-6">
                  <span className="text-5xl block mb-6 transition-transform group-hover:scale-110">{act.icon}</span>
                  <h3 className="text-2xl font-black text-white tracking-tight uppercase group-hover:text-fs-orange transition-colors">{act.title}</h3>
                  <p className="text-white/60 leading-relaxed line-clamp-3">{act.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attendee Journey / Zones */}
      <section id="zones" className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-fs-cyan bg-fs-cyan/10 px-4 py-1.5 rounded-full">The Layout</span>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none pr-4">THE <span className="gradient-text">ZONES</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ZONES.map((zone, idx) => (
              <div key={idx} className="relative flex flex-col bg-fs-gray/50 border border-white/5 rounded-[2rem] p-8 hover:border-white/20 transition-all group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-current opacity-20" style={{ color: zone.color }} />
                <div className="absolute -right-8 -top-8 w-32 h-32 blur-3xl opacity-10 rounded-full" style={{ backgroundColor: zone.color }} />
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black opacity-20" style={{ color: zone.color }}>{zone.id}</span>
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest" style={{ color: zone.color }}>
                    <MapPin className="w-3 h-3" />
                    {zone.location}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">{zone.name}</h3>
                <p className="text-sm text-white/60 mb-8 flex-1 leading-relaxed">{zone.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {zone.features.map((f, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-wider bg-white/5 px-3 py-1.5 rounded-full text-white/40 border border-white/5">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tickets */}
      <section id="tickets" className="py-32 px-4 bg-fs-gray/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-fs-yellow bg-fs-yellow/10 px-4 py-1.5 rounded-full">The Passes</span>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter pr-4">CHOOSE YOUR <span className="gradient-text">LEVEL</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free */}
            <div className="bg-fs-gray/50 border border-white/10 rounded-[2.5rem] p-12 hover:border-fs-cyan/30 transition-all flex flex-col">
              <div className="mb-10">
                <span className="text-xs font-black tracking-widest text-fs-cyan uppercase bg-fs-cyan/10 px-3 py-1 rounded-full">Basic Access</span>
                <p className="text-6xl font-black text-white mt-6">FREE</p>
                <p className="text-white/40 mt-2 font-medium">2 Days Festival Pass</p>
              </div>
              <ul className="space-y-4 flex-1">
                {["Full festival access", "Explore all color-coded zones", "Modular format", "Free workout classes", "Brand activities"].map((p, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/70">
                    <Check className="w-5 h-5 text-fs-cyan shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{p}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => openModal('free')} className="w-full mt-10 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">Select Pass</button>
            </div>
            {/* VIP */}
            <div className="relative bg-fs-gray/50 border border-fs-orange/30 rounded-[2.5rem] p-12 overflow-hidden flex flex-col shadow-2xl shadow-fs-orange/10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-fs-orange/5 via-transparent to-fs-pink/5 opacity-50" />
              <div className="absolute top-6 right-8">
                <Star className="w-8 h-8 text-fs-yellow fill-fs-yellow animate-pulse" />
              </div>
              <div className="relative z-10">
                <div className="mb-10">
                  <span className="text-xs font-black tracking-widest text-fs-orange uppercase bg-fs-orange/10 px-3 py-1 rounded-full">VIP Heatwave Pass</span>
                  <div className="flex items-baseline gap-2 mt-6">
                    <span className="text-2xl text-white/40 font-bold">P</span>
                    <span className="text-6xl font-black text-white">1,000</span>
                  </div>
                  <p className="text-sm text-fs-yellow mt-3 font-black uppercase tracking-widest">Early Bird Rate</p>
                </div>
                <ul className="space-y-4 mb-10">
                  {["Exclusive VIP check-in", "Dedicated VIP lounge access", "Priority slots for classes", "VIP Swag Bag", "Premium vouchers"].map((p, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/80">
                      <Check className="w-5 h-5 text-fs-orange shrink-0 mt-0.5" />
                      <span className="text-sm font-bold">{p}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => openModal('vip')} className="w-full py-4 bg-gradient-to-r from-fs-orange to-fs-pink rounded-2xl font-black text-white hover:scale-[1.02] transition-all shadow-xl shadow-fs-orange/20">Upgrade to VIP</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-fs-purple bg-fs-purple/10 px-4 py-1.5 rounded-full">Partnership</span>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none pr-4">BE OUR <span className="gradient-text">PARTNER</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTNERS.map((partner, i) => (
              <div key={i} className="bg-fs-gray/50 border border-white/5 rounded-3xl p-10 hover:border-white/20 transition-all flex flex-col group">
                <div className="mb-8">
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-white/5 mb-4 inline-block" style={{ color: partner.color }}>{partner.tier}</span>
                  <h3 className="text-2xl font-black text-white group-hover:text-white/100 transition-colors leading-tight">{partner.title}</h3>
                  <p className="text-xs text-white/40 mt-1 font-bold">{partner.slots}</p>
                </div>
                <div className="rounded-2xl px-5 py-4 mb-8" style={{ backgroundColor: `${partner.color}15` }}>
                  <p className="text-sm font-black text-white leading-tight">{partner.price}</p>
                </div>
                <ul className="space-y-3 flex-1">
                  {partner.perks.map((perk, pi) => (
                    <li key={pi} className="text-xs text-white/50 flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: partner.color }} />
                      <span className="font-medium">{perk}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-10 w-full py-3 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all">Request Kit</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-fs-orange/5 via-transparent to-transparent opacity-30" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-fs-orange bg-fs-orange/10 px-4 py-1.5 rounded-full">The People</span>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter pr-4">OUR <span className="gradient-text">TEAM</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="bg-fs-gray/50 border border-white/5 rounded-3xl p-8 text-center hover:border-white/15 transition-all group hover:-translate-y-2">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative" style={{ backgroundColor: `${member.color}20`, border: `2px solid ${member.color}66` }}>
                  <div className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: member.color }} />
                  <span className="text-2xl font-black relative z-10" style={{ color: member.color }}>{member.initials}</span>
                </div>
                <h3 className="text-xl font-black text-white mb-1 uppercase tracking-tight">{member.name}</h3>
                <p className="text-sm font-black mb-4 uppercase tracking-widest" style={{ color: member.color }}>{member.role}</p>
                <p className="text-xs text-white/50 leading-relaxed font-medium">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Goal */}
      <section className="py-40 px-4 relative overflow-hidden bg-fs-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-fs-orange/10 via-fs-pink/5 to-fs-purple/10 opacity-30" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-black tracking-[0.4em] uppercase text-fs-cyan mb-8 block">Our Vision</span>
          <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter leading-none mb-10 pr-4">
            Position the Philippines as <span className="gradient-text uppercase">The Health & Wellness Hub</span> in Asia Pacific.
          </h2>
          <p className="text-2xl md:text-3xl text-white/60 leading-relaxed font-bold tracking-tight">
            With <span className="text-white">Bonifacio Global City</span> at the heart of the movement.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-black tracking-[0.3em] uppercase text-fs-pink bg-fs-pink/10 px-4 py-1.5 rounded-full">Connect</span>
          <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mt-8 pr-4">GET IN <span className="gradient-text uppercase">TOUCH</span></h2>
          <div className="mt-16 bg-fs-gray/50 border border-white/10 rounded-[3rem] p-10 md:p-16 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-fs-orange/10 blur-3xl rounded-full" />
            <div className="relative z-10 space-y-10">
              <div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">KARLA KANGLEON</h3>
                <p className="text-fs-orange font-black uppercase tracking-[0.2em] text-sm mt-1">Festival Director</p>
              </div>
              <div className="space-y-6">
                <a href="tel:+639277557753" className="flex items-center justify-center gap-4 text-white/70 hover:text-fs-orange transition-all text-xl font-bold group">
                  <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  +63 9277 55 7753
                </a>
                <a href="mailto:CONNECT@T2MCO.COM" className="flex items-center justify-center gap-4 text-white/70 hover:text-fs-orange transition-all text-xl font-bold group">
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  CONNECT@T2MCO.COM
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex-1 w-full">
                  <p className="text-[10px] font-black uppercase tracking-widest text-fs-orange mb-1 text-left">Date</p>
                  <p className="text-xl font-black text-white text-left">MAY 9-10, 2026</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex-1 w-full">
                  <p className="text-[10px] font-black uppercase tracking-widest text-fs-pink mb-1 text-left">Location</p>
                  <p className="text-xl font-black text-white text-left">BONIFACIO HIGH ST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 px-4 bg-fs-dark">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-2">
              <img
                src="/fitstreet-logo-high-res.png"
                alt="Fitstreet 2026"
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex items-center gap-6">
                <img src="/360-logo.png" alt="360 Health & Wellness Festival" className="h-10 w-auto object-contain" />
                <span className="h-4 w-[1px] bg-white/10 hidden md:block" />
                <span className="text-sm font-bold text-white/30 uppercase tracking-widest">Hosted by T2M Co.</span>
              </div>
              <a href="https://drive.google.com/file/d/1iqouHJpOv7v35VpW6NGMvcG96lq5pKeH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-black text-fs-orange bg-fs-orange/10 px-6 py-3 rounded-full hover:bg-fs-orange/20 transition-all">
                <Download className="w-4 h-4" />
                DOWNLOAD PDF
              </a>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-white/20 font-medium uppercase tracking-[0.2em]">Fitstreet HEATWAVE 2026 - Bonifacio High Street</p>
            <div className="flex gap-8">
              {['Instagram', 'Facebook', 'TikTok'].map(social => (
                <a key={social} href="#" className="text-xs font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} />

      {/* Gemini Powered Assistant */}
      <AIChatAssistant />
    </div>
  );
};

export default App;

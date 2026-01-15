import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Building2, Briefcase, Factory, Utensils, ShoppingBag, Cpu, Wifi, Mail, Phone, MapPin, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('defense');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const industries = [
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Whether you're looking for new products or cost saving technology, our relationships let you stay ahead of the curve."
    },
    {
      icon: Briefcase,
      title: "Corporate",
      description: "With us as your business partner you get early access to new technologies across markets and industries."
    },
    {
      icon: Factory,
      title: "Enterprise",
      description: "Our solutions are effective for large scale organizations, who can truly leverage growth & efficiency with new products."
    }
  ];

  const technologies = {
    defense: {
      title: "Defense Technology",
      description: "Sellonet invests in cutting-edge defense technologies and industrial companies, bridging innovation with strategic defense applications. We connect advanced tech companies with defense sector opportunities, facilitating partnerships that drive national security and technological advancement.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    food: {
      title: "Food Technology",
      description: "From mobile applications to new food categories, our emerging startups have plenty to offer. Sellonet understands your needs and finds the right solutions, connecting you with leaders in the industry so you can benefit from new products, strategic partnerships and business opportunities.",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80"
    },
    retail: {
      title: "Retail Innovation",
      description: "Innovative retail technologies from AR, robotics and artificial intelligence, to shipping platforms and payment systems — our startups deliver cutting edge solutions which transform businesses and directly improve your bottom line.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    },
    smart: {
      title: "Smart Platforms",
      description: "From intelligent data platforms to green tech, energy efficiency and indoor pollution control, Sellonet connects you with incredible technologies focused on enhancing business objectives and increasing consumer satisfaction.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"
    },
    connected: {
      title: "Connected Devices",
      description: "The next generation of IoT - the internet of things - is here and powering our every day lives. Learn how connected systems can improve both your homes and businesses with smart sensors and connected infrastructure.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696935c87c268bcdcff700ea/9de3d8a2b_Sellonetwhitelogo.png" 
              alt="Sellonet" 
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('industries')} className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Industries</button>
            <button onClick={() => scrollToSection('technologies')} className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Technologies</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Contact</button>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-900 p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-4">
                <button onClick={() => scrollToSection('industries')} className="block w-full text-left text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium py-2">Industries</button>
                <button onClick={() => scrollToSection('technologies')} className="block w-full text-left text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium py-2">Technologies</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium py-2">About</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium py-2">Contact</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3a5f] via-[#2d4a6f] to-[#1a3050] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e3a5f]/50 to-[#1e3a5f]"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[#c9a227] text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            Discover new game changing technologies
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-8"
          >
            Give Your Company
            <span className="block font-semibold">The Innovative Edge</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              onClick={() => scrollToSection('industries')}
              className="bg-[#c9a227] hover:bg-[#b8922a] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a227]/20"
            >
              Explore More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={() => scrollToSection('industries')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">Find High Impact Startups</p>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900">
              Leverage New <span className="font-semibold">Opportunities</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="group h-full bg-white hover:bg-[#1e3a5f] border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#1e3a5f]/10 group-hover:bg-white/10 flex items-center justify-center mb-6 transition-colors duration-500">
                      <industry.icon className="h-8 w-8 text-[#1e3a5f] group-hover:text-[#c9a227] transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-white mb-4 transition-colors duration-500">
                      {industry.title}
                    </h3>
                    <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors duration-500">
                      {industry.description}
                    </p>
                    <Button 
                      variant="link" 
                      onClick={() => scrollToSection('contact')}
                      className="mt-6 p-0 text-[#c9a227] hover:text-[#b8922a] group-hover:text-[#c9a227]"
                    >
                      Contact Us <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">Connect with Innovation That Works For You</p>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900">
              Get A Headstart On <span className="font-semibold">Success</span>
            </h2>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent mb-12 h-auto">
              {[
                { value: 'defense', label: 'Defense Technology', icon: Building2 },
                { value: 'food', label: 'Food Technology', icon: Utensils },
                { value: 'retail', label: 'Retail Innovation', icon: ShoppingBag },
                { value: 'smart', label: 'Smart Platforms', icon: Cpu },
                { value: 'connected', label: 'Connected Devices', icon: Wifi }
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="px-6 py-3 rounded-full data-[state=active]:bg-[#1e3a5f] data-[state=active]:text-white data-[state=inactive]:bg-slate-100 data-[state=inactive]:text-slate-600 transition-all duration-300"
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(technologies).map(([key, tech]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div className="order-2 md:order-1">
                    <h3 className="text-3xl font-semibold text-slate-900 mb-6">{tech.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">{tech.description}</p>
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={tech.image} 
                        alt={tech.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/40 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
            Learn how <span className="font-semibold">SELLONET</span> can help your business
          </h2>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#c9a227] hover:bg-[#b8922a] text-white px-8 py-6 text-lg rounded-full"
          >
            Connect With Us
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">About Sellonet</p>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Bringing Cutting Edge Technology <span className="font-semibold">To Your Door</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Bridging new technologies, investment and various markets and industries, Sellonet helps companies launch new solutions and leverage technology for growth.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-slate-600 leading-relaxed">
                Sellonet is a boutique company founded in 2006 by Bezalel Gleiser, MBA, utilizing an extensive global network and a deep understanding of technology and international trade to bridge between startups with cutting edge technologies and companies that have developed unique and innovative products to large corporates and retail companies.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="text-center">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696935c87c268bcdcff700ea/bfa835285_Screenshot2026-01-15at212905.png" 
                  alt="Bezalel Gleiser - Founder & CEO" 
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-[#c9a227]/20"
                />
                <p className="text-slate-900 font-semibold text-lg">Bezalel Gleiser</p>
                <p className="text-slate-600">Founder & CEO</p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-slate-50 border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-6">What Can Sellonet Do For You?</h3>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#c9a227]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#c9a227]"></div>
                      </div>
                      Scout for technologies according to specific needs of large corporates
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#c9a227]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#c9a227]"></div>
                      </div>
                      Identify corporates that need unique technologies from our deal flow
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#c9a227]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#c9a227]"></div>
                      </div>
                      Facilitate from initial presentations through pilots to full implementation
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#c9a227]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#c9a227]"></div>
                      </div>
                      Help companies raise funds through our global investor network
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">Get Started On The Right Track</p>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900">
              Let Us Know How We Can <span className="font-semibold">Help</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Contact Numbers</h4>
                  <p className="text-slate-600">Office: +972-72-211-7888</p>
                  <p className="text-slate-600">Mobile: +972-52-3062828</p>
                  <p className="text-slate-600">US: +1-914-294-3369</p>
                  <p className="text-slate-600">UK: +44-203-807-7925</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Sellonet HQ</h4>
                  <p className="text-slate-600">Fikus 11, Nir Galim</p>
                  <p className="text-slate-600">MP Evtach 79245, Israel</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Email</h4>
                  <p className="text-slate-600">bezalel@sellonet.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Sellonet Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
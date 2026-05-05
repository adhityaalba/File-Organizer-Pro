import { motion } from "framer-motion";
import { Link } from "wouter";
import heroImg from "@assets/Screenshot_2026-05-06_at_00.49.16_1778003359155.png";
import callImg from "@assets/image_1778003374031.png";

export default function Landing() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* 1. Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-primary">TEDx</span>TheHague
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/events" className="hover:text-white transition-colors">Events</Link>
            <Link href="/partners" className="hover:text-white transition-colors">Partners</Link>
            <Link href="/team" className="hover:text-white transition-colors">Team</Link>
            <Link href="/speakers" className="hover:text-white transition-colors">Speakers</Link>
            <Link href="/newsletter" className="hover:text-white transition-colors">Newsletter</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* 2. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-16 lg:pt-0 overflow-hidden">
          <div className="absolute inset-0 z-0 hidden lg:block w-1/2 left-0 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 left-0 w-[150%] h-full text-primary/20 -translate-x-1/4 scale-150 rotate-12">
              <path d="M0,0 L100,0 L80,100 L-20,100 Z" fill="currentColor" />
            </svg>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp}
                className="max-w-2xl"
              >
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-6">
                  <span className="block text-white">Ideas Change</span>
                  <span className="block text-primary">Everything.</span>
                </h1>
                <p className="text-lg md:text-xl text-[#A8A8A8] font-light max-w-lg mb-8 leading-relaxed">
                  Gathering the most brilliant minds in The Hague to celebrate bold ideas, 
                  diverse perspectives, and stories that spark meaningful change.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all hover:scale-105 active:scale-95">
                    Attend 2026
                  </button>
                  <button className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all">
                    Watch Talks
                  </button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[60vh] lg:h-[80vh] w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10 lg:hidden" />
                <img 
                  src={heroImg} 
                  alt="Speaker on TEDx stage" 
                  className="w-full h-full object-cover object-center rounded-sm grayscale-[20%] contrast-125"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Call for Speakers Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={callImg} 
              alt="Audience" 
              className="w-full h-full object-cover grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="max-w-3xl"
            >
              <div className="text-sm font-bold tracking-[0.2em] text-white/70 uppercase mb-4">
                Call for Speakers 2026
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
                <span className="block text-white">SHARE YOUR</span>
                <span className="block text-primary">IDEA.</span>
              </h2>
              <p className="text-xl text-white/90 max-w-xl leading-relaxed">
                Have an idea that could change the way people see the world? We are looking for 
                visionaries, innovators, and storytellers for our upcoming event.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4. What We're Looking For Section */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                <span className="block text-white">What We're</span>
                <span className="block text-primary mt-2">Looking For</span>
              </h2>
              <p className="mt-6 text-[#A8A8A8] max-w-2xl mx-auto text-lg">
                We curate a diverse lineup of speakers. Here is what makes a great TEDx talk.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                { title: "BOLD IDEAS", desc: "Ideas that challenge the status quo, offer new paradigms, or present groundbreaking research." },
                { title: "POWERFUL STORYTELLING", desc: "Personal narratives that connect deeply, evoke emotion, and drive the core message home." },
                { title: "DIVERSE PERSPECTIVES", desc: "Voices from all walks of life, representing unique experiences, cultures, and disciplines." }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  variants={fadeUp}
                  className="bg-[#141414] p-8 border-t-2 border-primary hover:bg-[#1a1a1a] transition-colors group"
                >
                  <h3 className="text-2xl font-black tracking-tight uppercase mb-4 text-white group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#A8A8A8] leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. How to Apply Section */}
        <section className="py-32 bg-white text-black">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase inline-block">
                <span className="border-b-4 border-black pb-2 mr-4">HOW TO</span>
                <span className="text-primary">APPLY</span>
              </h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12"
            >
              {[
                { num: "01", title: "Fill the Form", desc: "Complete the speaker application form with your details." },
                { num: "02", title: "Share Your Idea", desc: "Tell us about your talk topic and why it matters." },
                { num: "03", title: "Upload Video", desc: "Provide a video link of your previous speaking experience." },
                { num: "04", title: "Get Selected", desc: "Our team will review and reach out to selected speakers." }
              ].map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="relative group">
                  <div className="text-7xl font-black text-primary/20 group-hover:text-primary transition-colors absolute -top-10 -left-4 -z-10 select-none">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 6. Final CTA Section */}
        <section className="py-32 bg-primary text-white text-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
                READY TO INSPIRE?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed font-medium">
                Applications are open until May 1, 2026. Don't miss your chance to share your idea on the TEDxTheHague stage.
              </p>
              <button className="bg-black hover:bg-black/80 text-white px-10 py-5 rounded-full text-lg font-bold tracking-wide transition-all hover:scale-105 active:scale-95 shadow-2xl">
                Apply as Speaker →
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black tracking-tight">
            <span className="text-primary">TEDx</span>TheHague
          </div>
          <p className="text-sm text-[#A8A8A8] font-medium">
            © 2026 TEDxTheHague. This independent TEDx event is operated under license from TED.
          </p>
        </div>
      </footer>
    </div>
  );
}

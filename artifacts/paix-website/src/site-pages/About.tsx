import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Puzzle, Handshake, ShieldAlert } from "lucide-react";
import { ContactCTA } from "@/components/layout/ContactCTA";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.27 },
};

const fadeLeft = {
  initial: { opacity: 0, x: -16 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.27 },
};

const fadeRight = {
  initial: { opacity: 0, x: 16 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.27 },
};

const values = [
  { num: "01", icon: Users, title: "Human-centric intelligence.", desc: "We amplify expertise, not replace it. Clinicians and operators are the experts. We provide clarity and automation so they can do their best work." },
  { num: "02", icon: Target, title: "Relentless focus on outcomes.", desc: "We measure ourselves by your results: time recovered, revenue unlocked, capacity created, care improved. If we're not moving those needles, we're not doing our job." },
  { num: "03", icon: Puzzle, title: "Simplicity over complexity.", desc: "Healthcare is complex enough. Our systems are intuitive, transparent, and built for ease of use. No black boxes." },
  { num: "04", icon: Handshake, title: "Partnership, not vendor.", desc: "We succeed when you succeed. Your feedback shapes our roadmap. Your challenges become our priorities." },
  { num: "05", icon: ShieldAlert, title: "Respect for the work.", desc: "Every feature we build saves time or makes work easier. We never add busywork." },
];

function AboutHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_65%_40%,rgba(0,60,160,0.3)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_15%,rgba(0,180,255,0.1)_0%,transparent_60%)]" />

      <svg className="absolute right-0 top-0 h-full w-[50%] opacity-50" viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="aboutGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#0044cc" stopOpacity="0.2"/>
          </linearGradient>
          <filter id="aboutGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Concentric rings — like a data target / radar */}
        {[200, 160, 120, 80, 40].map((r, i) => (
          <motion.circle
            key={i}
            cx="320" cy="260" r={r}
            stroke={`rgba(0,${150 + i * 20},255,${0.08 + i * 0.04})`}
            strokeWidth="1"
            fill="none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "320px 260px" }}
          />
        ))}

        {/* Cross hairs */}
        <motion.line x1="320" y1="80" x2="320" y2="440" stroke="rgba(0,180,255,0.12)" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}/>
        <motion.line x1="140" y1="260" x2="500" y2="260" stroke="rgba(0,180,255,0.12)" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}/>

        {/* Data points on rings */}
        {[
          [320, 100], [470, 220], [430, 400], [210, 370], [170, 160],
          [370, 140], [450, 300], [270, 430], [200, 270],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 4 : 3}
            fill={i % 3 === 0 ? "rgba(0,212,255,0.9)" : "rgba(0,100,220,0.7)"}
            filter="url(#aboutGlow)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: 1 }}
            transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, delay: 0.5 + i * 0.2 }}
          />
        ))}

        {/* Connecting arcs */}
        {[
          "M 320 100 Q 430 180 470 220",
          "M 470 220 Q 460 330 430 400",
          "M 430 400 Q 340 430 210 370",
          "M 210 370 Q 170 290 170 160",
          "M 170 160 Q 240 100 320 100",
        ].map((d, i) => (
          <motion.path
            key={i} d={d}
            stroke={`rgba(0,${150 + i * 15},255,0.25)`}
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.4 + i * 0.3 }}
          />
        ))}

        {/* Ambient particles */}
        {[[150, 100], [460, 130], [120, 350], [480, 460], [200, 500], [380, 50]].map(([cx, cy], i) => (
          <motion.circle key={i} cx={cx} cy={cy} r="1.5" fill="rgba(0,212,255,0.5)"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2.5 + i * 0.6, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,180,255,0.12) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-52 md:pb-32 bg-background relative overflow-hidden min-h-[80vh] flex items-center">
        <AboutHeroBg />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Our Story
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05]"
            >
              From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0066ff]">Friction</span>
              <br />to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0066ff]">Flow</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Hospitals are the beating heart of healthcare, but they are under relentless pressure. Clinicians are buried in administrative work instead of being at the bedside. PAIX was built to change that.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeLeft} className="space-y-6 text-lg text-muted-foreground">
              <p>
                At PAIX, we turn complexity into harmony, uniting every process around a single purpose — empowering hospitals and improving patient outcomes. We build intelligent systems that don't just automate tasks but elevate performance — freeing clinicians to focus on healing, surfacing hidden revenue, and giving leaders the clarity to act with confidence.
              </p>
              <p>
                Progress in healthcare isn't about working harder; it's about moving smarter — in harmony. Hospitals don't just need more technology; they need systems that think, adapt, and align every team toward one flow.
              </p>
              <p className="font-medium text-foreground text-xl border-l-2 border-primary pl-6 py-2">
                PAIX orchestrates hospital transformation — recovering hidden revenue, eliminating operational friction, and elevating patient care.
              </p>
            </motion.div>

            <motion.div {...fadeRight} className="bg-background rounded-3xl p-8 md:p-10 border border-border hover:border-primary/30 transition-colors">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Our Philosophy</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Hospitals thrive when human expertise and intelligent technology work in harmony. True progress comes not from replacing, but from orchestrating smarter — so that you give your teams back time, your organization back performance, and your patients back the care they deserve.
              </p>
              <div className="text-xl font-bold text-primary">
                Let's bring simplicity back to healthcare.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.04)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-lg text-muted-foreground">
              A partnership model designed for immediate impact and sustainable growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "We don't replace your systems",
                desc: "Your EHR and billing systems already have the data. Our solutions integrate seamlessly and start delivering value from the first month.",
              },
              {
                num: "2",
                title: "We keep humans in the loop",
                desc: "PAIX surfaces data and patterns; your teams decide. Start with one use case — denial management, scheduling, or supply chain — then expand.",
              },
              {
                num: "3",
                title: "We co-create with you",
                desc: "Your clinicians, operators, and IT team along with our experts shape how your system learns and evolves. This is a partnership.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.27, delay: i * 0.08 }}
                className="bg-card/50 border border-border p-8 rounded-2xl relative overflow-hidden hover:border-primary/40 hover:bg-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-7xl font-bold text-primary/8 absolute top-2 right-4 select-none">{step.num}</div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{step.title}</h3>
                <p className="text-muted-foreground relative z-10 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Values</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.27, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              >
                <Card className="h-full bg-background border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group cursor-default">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <v.icon className="w-6 h-6 text-primary opacity-80 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-primary/25 font-mono text-xl font-bold">{v.num}</span>
                    </div>
                    <h3 className="font-semibold text-xl mb-4 leading-tight">{v.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute left-0 top-0 w-1/3 h-1/2 bg-blue-600/4 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-bold mb-8">Our Vision for Hospitals</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.27, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12"
            >
              We believe the future belongs to hospitals where complexity becomes clarity and friction becomes flow. Where intelligent systems and human brilliance amplify each other. Where clinicians spend their time on what matters — patient care. Where operations flow effortlessly, revenue is predictable, and capacity exists for growth and mission.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.27, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400"
            >
              That's the hospital we're building toward. That's the future PAIX makes possible.
            </motion.p>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Ready to transform your hospital?"
        subtitle="Let's start with a conversation. Tell us about your challenges and we'll show you exactly what PAIX can do for your organization."
        ctaLabel="Talk to our team"
      />
    </Layout>
  );
}

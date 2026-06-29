import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Puzzle, Handshake, ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const values = [
  { num: "01", icon: Users, title: "Human-centric intelligence.", desc: "We amplify expertise, not replace it. Clinicians and operators are the experts. We provide clarity and automation so they can do their best work." },
  { num: "02", icon: Target, title: "Relentless focus on outcomes.", desc: "We measure ourselves by your results: time recovered, revenue unlocked, capacity created, care improved. If we're not moving those needles, we're not doing our job." },
  { num: "03", icon: Puzzle, title: "Simplicity over complexity.", desc: "Healthcare is complex enough. Our systems are intuitive, transparent, and built for ease of use. No black boxes." },
  { num: "04", icon: Handshake, title: "Partnership, not vendor.", desc: "We succeed when you succeed. Your feedback shapes our roadmap. Your challenges become our priorities." },
  { num: "05", icon: ShieldAlert, title: "Respect for the work.", desc: "Every feature we build saves time or makes work easier. We never add busywork." },
];

export default function About() {
  return (
    <Layout>
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              Our Story
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400"
            >
              From Friction to Flow
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              Hospitals are the beating heart of healthcare, but they are under relentless pressure. Clinicians are buried in administrative work instead of being at the bedside.
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-lg text-muted-foreground">
              <p>
                At PAIX, we turn complexity into harmony, uniting every process around a single purpose - empowering hospitals and improving patient outcomes. We build intelligent systems that don't just automate tasks but elevate performance - freeing clinicians to focus on healing, surfacing hidden revenue, and giving leaders the clarity to act with confidence.
              </p>
              <p>
                Progress in healthcare isn't about working harder; it's about moving smarter - in harmony. Hospitals don't just need more technology; they need systems that think, adapt, and align every team toward one flow.
              </p>
              <p className="font-medium text-foreground text-xl border-l-2 border-primary pl-6 py-2">
                PAIX orchestrates hospital transformation - recovering hidden revenue, eliminating operational friction, and elevating patient care.
              </p>
            </div>
            
            <div className="bg-background rounded-3xl p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Our Philosophy</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Hospitals thrive when human expertise and intelligent technology work in harmony. True progress comes not from replacing, but from orchestrating smarter so that you give your teams back time, your organization back performance, and your patients back the care they deserve.
              </p>
              <div className="text-xl font-bold text-primary">
                Let's bring simplicity back to healthcare.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-xl text-muted-foreground">
              A partnership model designed for immediate impact and sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 border border-border p-8 rounded-2xl relative overflow-hidden">
              <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4">1</div>
              <h3 className="text-xl font-bold mb-4 relative z-10">We don't replace your systems</h3>
              <p className="text-muted-foreground relative z-10">Your EHR and billing systems already have the data. Our solutions integrate seamlessly and start delivering value from the first month.</p>
            </div>
            <div className="bg-card/50 border border-border p-8 rounded-2xl relative overflow-hidden">
              <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4">2</div>
              <h3 className="text-xl font-bold mb-4 relative z-10">We keep humans in the loop</h3>
              <p className="text-muted-foreground relative z-10">PAIX surfaces data and patterns; your teams decide. Start with one use case, denial management, scheduling or supply chain and then expand.</p>
            </div>
            <div className="bg-card/50 border border-border p-8 rounded-2xl relative overflow-hidden">
              <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4">3</div>
              <h3 className="text-xl font-bold mb-4 relative z-10">We co-create with you</h3>
              <p className="text-muted-foreground relative z-10">Your clinicians, operators, and IT team along with our experts shape how your system learn and evolve. This is a partnership.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <Card key={i} className="bg-background border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <v.icon className="w-10 h-10 text-primary opacity-80 group-hover:scale-110 transition-transform" />
                    <span className="text-primary/30 font-mono text-xl font-bold">{v.num}</span>
                  </div>
                  <h3 className="font-semibold text-2xl mb-4 leading-tight">{v.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Vision for Hospitals</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
              We believe the future belongs to hospitals where complexity becomes clarity and friction becomes flow. Where intelligent systems and human brilliance amplify each other. Where clinicians spend their time on what matters—patient care. Where operations flow effortlessly, revenue is predictable, and capacity exists for growth and mission.
            </p>
            <p className="text-2xl font-bold text-primary mb-12">
              That's the hospital we're building toward. That's the future PAIX makes possible.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

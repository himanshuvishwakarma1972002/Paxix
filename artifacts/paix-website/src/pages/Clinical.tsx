import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { CheckCircle2, Stethoscope, HeartPulse, Shield, Smartphone, ArrowRight, BrainCircuit, FileText, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ContactCTA } from "@/components/layout/ContactCTA";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Clinical() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-52 md:pb-32 bg-background relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,100,255,0.12)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,200,200,0.07)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Clinical EHR Solutions
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              >
                <span className="text-foreground">Intuitive</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">clinical workflows</span>
                <br />
                <span className="text-foreground">for better care</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
              >
                Give clinicians an EHR that stays out of the way, streamlining documentation, surfacing the right data at the right moment, and connecting teams so they can deliver safer, faster, more personalized care.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full shadow-[0_0_25px_rgba(0,212,255,0.35)] hover:shadow-[0_0_40px_rgba(0,212,255,0.55)] transition-all h-13 px-8 font-semibold group"
                  >
                    Explore Our Solutions
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            {/* Right stat panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm p-8 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Advanced Healthcare Solutions</p>
                {[
                  { icon: Smartphone, label: "Mobile Check-in", desc: "Frictionless patient intake from any device" },
                  { icon: FileText, label: "Efficient Documentation", desc: "AI-assisted note taking that saves clinician time" },
                  { icon: Stethoscope, label: "Lab & Procedure Mgmt", desc: "Integrated order management at point of care" },
                  { icon: BrainCircuit, label: "Clinical Decision Support", desc: "Evidence-based recommendations without interruption" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl border border-white/8 bg-white/3 hover:border-primary/30 transition-colors">
                    <f.icon className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <div className="font-semibold text-sm text-foreground">{f.label}</div>
                      <div className="text-xs text-muted-foreground">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Healthcare Solutions */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Advanced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Healthcare Solutions</span>
            </h2>
          </motion.div>

          {/* Internal Medicine & Family Care */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div {...fadeUp}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Internal Medicine & Family Care</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Practice Management is a comprehensive hospital application that streamlines patient workflows, from mobile check-in to check-out. It simplifies intake, enables efficient note-taking, lab orders, and procedure management. With e-prescription, super bill integration, and robust security, it enhances patient care, improves operations, and supports providers in delivering high-quality, patient-centered care.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Mobile Check-in", icon: Smartphone },
                  { title: "Efficient Documentation", icon: FileText },
                  { title: "Lab & Procedure Mgmt", icon: Stethoscope },
                  { title: "E-Prescription", icon: Shield },
                  { title: "Robust Security", icon: Shield },
                  { title: "Patient-Centered Care", icon: HeartPulse },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-background hover:border-primary/40 hover:bg-primary/3 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-sm">{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <div className="bg-background border border-border rounded-3xl p-8 space-y-6">
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/15">
                  <blockquote className="text-muted-foreground text-base leading-relaxed italic mb-4">
                    "The AI-powered RCM system has transformed our revenue cycle operations. We've seen a 45% reduction in claim denials and our revenue collection time has decreased significantly. The automated workflows have freed up our staff to focus on patient care rather than administrative tasks."
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Chief Financial Officer</div>
                    <div className="text-xs text-muted-foreground">Metro Health System</div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-blue-600/5 border border-blue-400/15">
                  <blockquote className="text-muted-foreground text-base leading-relaxed italic mb-4">
                    "As a practicing physician, I appreciate how the clinical decision support system provides relevant, evidence-based recommendations without being intrusive. It has helped me catch potential issues early and improved my confidence in treatment decisions."
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Dr. Michael Chen</div>
                    <div className="text-xs text-muted-foreground">Chief Medical Officer, Regional Medical Center</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Emergency Care */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="order-2 lg:order-1">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Activity, title: "Real-Time Monitoring", desc: "Continuous vital tracking and alert management across every patient in the ED." },
                  { icon: BrainCircuit, title: "Clinical Decision Support", desc: "Evidence-based recommendations surface exactly when they're needed." },
                  { icon: FileText, title: "Rapid Documentation", desc: "Voice-assisted and template-driven notes that cut charting time in half." },
                  { icon: HeartPulse, title: "Care Coordination", desc: "Seamless handoffs between care teams with a complete, shared patient record." },
                ].map((item, i) => (
                  <Card key={i} className="bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-0.5">
                    <CardHeader className="pb-2">
                      <item.icon className="w-8 h-8 text-primary mb-2" />
                      <CardTitle className="text-base">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Emergency Care</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Built for the high-velocity demands of the emergency department — surfacing critical patient information instantly, supporting rapid clinical decisions, and connecting the entire care team in real time so that every second counts.
              </p>
              <ul className="space-y-3">
                {[
                  "Instant access to patient history, allergies, and medications",
                  "Integrated triage workflow with automated acuity scoring",
                  "One-click ordering for labs, imaging, and procedures",
                  "Seamless hand-off documentation to inpatient teams",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Clinical EHR, Reimagined"
        subtitle="Equip your clinicians with an intuitive EHR that streamlines documentation, surfaces the right data at the right time, and reduces clicks so they can focus on what matters most — patient care."
        ctaLabel="Talk to us about our clinical EHR"
      />
    </Layout>
  );
}

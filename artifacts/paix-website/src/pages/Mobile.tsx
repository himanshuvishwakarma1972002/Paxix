import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Smartphone, MessagesSquare, Calendar, UserCheck, ShieldAlert, Activity, ClipboardList, BellRing, ArrowRight, CheckCircle2, Globe, Zap } from "lucide-react";
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

const providerFeatures = [
  { icon: Smartphone, title: "Direct App-to-App Calls", desc: "Secure, encrypted voice calls between providers without leaving the platform." },
  { icon: MessagesSquare, title: "Encrypted Messaging", desc: "HIPAA-compliant messaging for seamless communication between doctors and nurses." },
  { icon: Calendar, title: "On-Call Schedules", desc: "Real-time on-call visibility to always know who's covering what." },
  { icon: Calendar, title: "Personalized Scheduler", desc: "Smart scheduling that adapts to individual provider workflows and preferences." },
  { icon: Activity, title: "Practice Management", desc: "Full practice oversight — patients, appointments, and financials at a glance." },
  { icon: ClipboardList, title: "Rounding & Patient Visits", desc: "Digital rounding lists, clinical notes, and order entry right at bedside." },
  { icon: BellRing, title: "Alert Handling", desc: "Prioritized clinical alerts that surface what's urgent and suppress the noise." },
  { icon: UserCheck, title: "Single Sign-On (SSO)", desc: "One login across every system, reducing friction and improving security." },
];

const patientFeatures = [
  { icon: Calendar, title: "Appointment Scheduling", desc: "Book, reschedule, or cancel appointments anytime from your phone." },
  { icon: MessagesSquare, title: "Secure Messaging", desc: "Message your care team securely without calling the front desk." },
  { icon: Globe, title: "Telehealth Visits", desc: "High-quality video visits with your provider from anywhere." },
  { icon: ClipboardList, title: "Health Records Access", desc: "View your medical history, test results, and care plans instantly." },
  { icon: BellRing, title: "Medication Reminders", desc: "Smart reminders for medications, follow-ups, and preventive care." },
  { icon: Zap, title: "Bill Pay & Estimates", desc: "Transparent cost estimates and simple digital bill payment." },
];

export default function Mobile() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-52 md:pb-32 bg-background relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,100,255,0.12)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,200,200,0.07)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Mobile Healthcare Platform
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              >
                <span className="text-foreground">Connected</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">mobile experiences</span>
                <br />
                <span className="text-foreground">for continuous care</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
              >
                Give patients and providers intuitive mobile tools to schedule, communicate, and access care from anywhere, reducing friction and keeping every step of the care journey connected.
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

            {/* Right quick features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Mobile Platform Solutions</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Smartphone, label: "App-to-App Calls" },
                    { icon: MessagesSquare, label: "Encrypted Messaging" },
                    { icon: Calendar, label: "Smart Scheduling" },
                    { icon: ShieldAlert, label: "Alert Handling" },
                    { icon: ClipboardList, label: "Rounding & Visits" },
                    { icon: UserCheck, label: "Single Sign-On" },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl border border-white/8 bg-white/3 hover:border-primary/30 transition-colors">
                      <f.icon className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-xs font-medium text-foreground">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Platform Solutions */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Mobile{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Platform Solutions</span>
            </h2>
          </motion.div>

          {/* Provider App */}
          <div className="mb-20">
            <motion.div {...fadeUp} className="mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
                For Providers
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Mobile Application for Providers</h3>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Our provider mobile platform is a comprehensive mobile app designed to optimize healthcare workflows which simplifies appointment tracking, patient round management, and offers a secure messaging system for seamless communication between doctors and nurses. Physicians can efficiently take notes, prescribe medications, and manage tests or procedures during rounds, while schedulers ensure smooth and effective planning.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {providerFeatures.map((feature, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.07 }}>
                  <Card className="h-full bg-background border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-sm font-semibold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-xs leading-relaxed">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Patient Engagement */}
          <div>
            <motion.div {...fadeUp} className="mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/5 text-blue-400 text-sm font-medium mb-4">
                For Patients
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Patient Engagement Mobile Platform</h3>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                A beautifully designed patient app that puts healthcare access in every pocket. From booking appointments to messaging care teams and viewing health records — patients stay connected and informed throughout their entire care journey.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {patientFeatures.map((feature, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}>
                  <div className="h-full flex gap-4 p-5 rounded-2xl border border-border bg-background hover:border-blue-400/40 hover:bg-blue-400/3 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center shrink-0 mt-0.5">
                      <feature.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm">{feature.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Mobile First */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mobile Experiences, Designed for Care</h2>
            <p className="text-lg text-muted-foreground">
              Give patients and providers intuitive mobile tools that make it easy to schedule, communicate, and access the information they need — anytime, anywhere.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Reduce Friction", desc: "Eliminate the phone tag and paperwork that slows down every touchpoint in the care journey.", icon: Zap },
              { title: "Enhance Engagement", desc: "Patients who are connected to their care are more compliant, more satisfied, and have better outcomes.", icon: UserCheck },
              { title: "Keep Care Moving", desc: "Real-time communication and mobile workflows so the next step in care never gets delayed.", icon: Activity },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <div className="text-center p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Mobile Experiences, Designed for Care"
        subtitle="Give patients and providers intuitive mobile tools that make it easy to schedule, communicate, and access the information they need—anytime, anywhere."
        ctaLabel="Talk to us about mobile experiences"
      />
    </Layout>
  );
}

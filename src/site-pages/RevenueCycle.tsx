import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldCheck, Zap, Activity, BrainCircuit, FileSearch, CheckCircle2,
  AlertCircle, FileText, PieChart, Settings, Calendar, UserCheck,
  ClipboardCheck, BarChart3, ArrowRight, TrendingUp, Users, Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ContactCTA } from "@/components/layout/ContactCTA";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.27, ease: [0.22, 1, 0.36, 1] },
};

export default function RevenueCycle() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-52 md:pb-32 bg-background relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.12)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,60,180,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Revenue Cycle Management
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              >
                <span className="text-foreground">Stop</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">revenue leakage.</span>
                <br />
                <span className="text-foreground">Turn lost revenue into</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">recovered cash.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
              >
                Transform everyday revenue leaks from process gaps into predictable cash. PAIX orchestrates your entire revenue cycle, automates manual work, flags coding risks before submission, and turns denial firefighting into scalable recovery.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full shadow-[0_0_25px_rgba(0,212,255,0.35)] hover:shadow-[0_0_40px_rgba(0,212,255,0.55)] transition-all h-13 px-8 font-semibold group"
                    data-testid="rc-hero-cta"
                  >
                    Schedule a Discovery Session
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Stats panel */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm p-8 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">We partner with you to attain</p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: ">95%", label: "Net Collections" },
                    { value: "<30", label: "Days in A/R" },
                    { value: ">97%", label: "First-Pass" },
                    { value: "5x", label: "ROI" },
                  ].map((s, i) => (
                    <div key={i} className="border border-white/8 rounded-2xl p-5 bg-white/3">
                      <div className="text-4xl font-bold text-foreground mb-1">{s.value}</div>
                      <div className="text-sm text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile stats */}
      <section className="lg:hidden py-12 border-y border-border bg-card/40">
        <div className="container mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6 text-center">We partner with you to attain</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: ">95%", label: "Net Collections" },
              { value: "<30", label: "Days in A/R" },
              { value: ">97%", label: "First-Pass" },
              { value: "5x", label: "ROI" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Key Challenges across <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Health Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">The Great Squeeze is On.</strong> With costs rising 8% and denials spiking, over four out of ten facilities now report critical negative financials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Pain points */}
            <motion.div {...fadeUp}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-destructive" />
                </span>
                Key Pain Points
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Manual Processes Leading to Errors", icon: Settings },
                  { label: "Staffing Shortages", icon: Users },
                  { label: "Delay in Cash Flow", icon: Clock },
                  { label: "Evolving Regulations", icon: ShieldCheck },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl hover:border-destructive/30 transition-colors">
                    <item.icon className="w-5 h-5 text-muted-foreground shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Reimbursement factors */}
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </span>
                Factors Behind Slow Reimbursement
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Complex Reimbursement Policies",
                  "Communication & Follow-up Issues",
                  "Incorrect Documentation",
                  "Coding Errors",
                  "Insurance Verification Errors",
                  "Claim Submission Errors",
                  "Claim Denials & Appeal",
                  "Prior Authorization Requirements",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border/50 bg-card/30 hover:border-primary/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">Secure Tomorrow's Growth Today.</strong> Revenue leaders must deploy proactive strategies that maximize collections, streamline administration, and elevate patient satisfaction—all without compromising clinical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Revenue Cycle Solutions Built for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Unique Challenges</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Every stage of the revenue cycle can become a bottleneck, from patient access to final payment. With PAIX, you get a purpose-built approach—no one-size-fits-all template—powered by deep expertise, smart innovation, and true partnership.
            </p>
          </motion.div>

          <Tabs defaultValue="front" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-background border border-border p-1 rounded-2xl mb-10">
              <TabsTrigger value="front" className="rounded-xl py-3.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Front-End Services
              </TabsTrigger>
              <TabsTrigger value="mid" className="rounded-xl py-3.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Mid-Cycle Services
              </TabsTrigger>
              <TabsTrigger value="back" className="rounded-xl py-3.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Back-End Services
              </TabsTrigger>
              <TabsTrigger value="consulting" className="rounded-xl py-3.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Consulting & Analytics
              </TabsTrigger>
            </TabsList>

            {/* Front-End */}
            <TabsContent value="front">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Calendar,
                    title: "Scheduling and access",
                    desc: "We streamline appointment scheduling for timely patient care and minimal no-shows.",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Eligibility and benefits",
                    desc: "We verify coverage and benefits for every patient, ensuring accurate bills and minimal claim denials.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Prior authorization",
                    desc: "We secure fast payer approvals for timely patient treatments—eliminating unnecessary delays or concern.",
                  },
                  {
                    icon: UserCheck,
                    title: "Registration and demographics",
                    desc: "We ensure accurate patient data for timely, error-free claims and billing.",
                  },
                ].map((item, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                    <Card className="bg-background border-border hover:border-primary/50 transition-colors h-full">
                      <CardHeader>
                        <item.icon className="w-10 h-10 text-primary mb-3" />
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Mid-Cycle */}
            <TabsContent value="mid">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Activity,
                    title: "Charge entry and charge audit",
                    desc: "We ensure every charge is entered accurately for precise bills and fast claim submission, minimizing lost revenue at the source.",
                  },
                  {
                    icon: FileSearch,
                    title: "Medical coding",
                    desc: "Our certified specialty coders ensure every treatment is accurately coded for smooth, error-free billing.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Coding audits",
                    desc: "We conduct targeted audits to identify costly errors and rework, reducing administrative spend on denied claims.",
                  },
                  {
                    icon: FileText,
                    title: "Clinical documentation improvement",
                    desc: "We partner with your team to ensure clinical documentation is clear and compliant, enabling accurate coding and fewer denials.",
                  },
                ].map((item, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                    <Card className="bg-background border-border hover:border-primary/50 transition-colors h-full">
                      <CardHeader>
                        <item.icon className="w-10 h-10 text-primary mb-3" />
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="back">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: BarChart3, title: "A/R Follow-up", desc: "Aggressive, systematic follow-up on all outstanding claims to accelerate cash collection." },
                  { icon: ShieldCheck, title: "Denial Management", desc: "Root-cause analysis and appeal workflows that turn denials into recovered revenue." },
                  { icon: PieChart, title: "Payment Posting", desc: "Accurate, timely posting of all payments, adjustments, and write-offs to your ledger." },
                  { icon: TrendingUp, title: "Patient Collections", desc: "Digital billing, flexible payment plans, and point-of-service tools to reduce bad debt." },
                ].map((item, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                    <Card className="bg-background border-border hover:border-primary/50 transition-colors h-full">
                      <CardHeader>
                        <item.icon className="w-10 h-10 text-primary mb-3" />
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="consulting">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: BrainCircuit, title: "RCM Strategic Advisory", desc: "Data-driven insights to align your people, processes, and technology for maximum financial performance." },
                  { icon: BarChart3, title: "Performance Analytics", desc: "Real-time dashboards and KPI tracking that surface every opportunity to improve collections." },
                  { icon: Settings, title: "Workflow Optimization", desc: "Process re-engineering to eliminate bottlenecks and accelerate the claim-to-cash timeline." },
                  { icon: ShieldCheck, title: "Compliance & Risk", desc: "Proactive compliance programs that protect revenue and reduce audit exposure." },
                ].map((item, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                    <Card className="bg-background border-border hover:border-primary/50 transition-colors h-full">
                      <CardHeader>
                        <item.icon className="w-10 h-10 text-primary mb-3" />
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute left-0 top-1/2 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">AI Services</h2>
            <p className="text-xl text-muted-foreground">
              Imagine a revenue cycle so well-orchestrated that your team spends less time chasing denials and more time on care. Intelligent systems streamline coding, billing, and eligibility, flag risky claims before denial, and give leaders real-time cash-flow insight.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Powered Coding & Claim Submission", desc: "Automate clinical documentation analysis for 95%+ coding accuracy, reducing errors and speeding up submissions.", metric: "> 97% Accuracy", icon: BrainCircuit },
              { title: "Prior Authorization Automation", desc: "Streamline workflows with intelligent tools that handle submissions, tracking, and approvals, minimizing delays.", metric: "Faster Processing", icon: Zap },
              { title: "Proactive Denial Management & Prevention", desc: "Use predictive AI to scrub claims, verify eligibility in real-time, and resolve up to 75% of routine denials autonomously.", metric: "75% Prevention", icon: ShieldCheck },
              { title: "Claim Scrubbing", desc: "Intelligent rules engine to catch errors and edit failures before submission — protecting clean claim rates.", metric: "Reduced Errors", icon: FileSearch },
              { title: "Eligibility Verify", desc: "Real-time automated eligibility verification across thousands of payers, instantly at intake.", metric: "Real-Time", icon: Activity },
              { title: "Auto Resolution", desc: "Self-healing workflows that autonomously resolve common administrative bottlenecks and routine denials.", metric: "Smart Analysis", icon: Settings },
            ].map((service, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}>
                <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <service.icon className="w-8 h-8 text-primary opacity-80" />
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{service.metric}</span>
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Our solutions adapt to every organization and specialty</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Who We Serve</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Hospitals", "Health Systems", "Community Health", "Physician Groups"].map((group, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="px-8 py-4 rounded-full bg-background border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all cursor-default"
              >
                {group}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Transformation — Empowering Financial Health */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/3 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Transformations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Remarkable turnarounds by hospitals, health systems, and physician groups that embraced our revenue cycle solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Case study card */}
            <motion.div {...fadeUp} className="bg-card border border-border rounded-3xl overflow-hidden">
              <div className="p-8 border-b border-border bg-gradient-to-br from-primary/5 to-transparent">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Case Study</span>
                <h3 className="text-2xl font-bold mt-2 mb-1">Empowering Financial Health</h3>
                <p className="text-muted-foreground">Leading US Health System</p>
                <p className="text-sm text-muted-foreground mt-3">
                  A community-focused regional medical center known for advanced acute and specialty care, strong clinical outcomes, and a mission-driven commitment to compassionate, culturally sensitive service for diverse patient populations.
                </p>
              </div>
              <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
                {[
                  { value: "85%", label: "Clean Claim Rate" },
                  { value: "32%", label: "Higher Productivity" },
                  { value: "100%", label: "Compliance" },
                ].map((m, i) => (
                  <div key={i} className="p-5 text-center">
                    <div className="text-2xl font-bold text-primary">{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="p-8">
                <blockquote className="text-base italic text-muted-foreground border-l-2 border-primary pl-4 mb-4">
                  "Our partnership unlocked game-changing results — improved numbers and new confidence for our entire team."
                </blockquote>
                <p className="text-sm font-semibold text-foreground">VP, Revenue Cycle</p>
              </div>
            </motion.div>

            {/* Challenge / Approach / Results */}
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="space-y-6">
              {[
                {
                  title: "Challenge",
                  color: "text-destructive",
                  border: "border-destructive/20",
                  bg: "bg-destructive/5",
                  items: [
                    "Rising denials from coding errors, data gaps, and strict payer edits",
                    "Payer complexity and frequent policy changes delayed cash flow",
                    "Short-staffed billing and coding teams caused backlogs",
                    "Higher patient financial responsibility complicated collections",
                    "Operating costs climbed while reimbursements stagnated",
                    "Fragmented systems hindered automation and real-time decisions",
                  ],
                },
                {
                  title: "Approach",
                  color: "text-blue-400",
                  border: "border-blue-400/20",
                  bg: "bg-blue-400/5",
                  items: [
                    "Proactive claim scrubbing and eligibility checks to prevent denials upfront",
                    "Standardized and automated payer workflows with rule engines",
                    "Specialized coding and billing teams backed by continual training",
                    "Digital billing, estimates, and flexible payment plans",
                    "Analytics to plug revenue leaks and lower cost-to-collect",
                    "Integrated systems for unified automation and real-time intelligence",
                  ],
                },
                {
                  title: "Results",
                  color: "text-primary",
                  border: "border-primary/20",
                  bg: "bg-primary/5",
                  items: [
                    "Denial rate: 28% reduction after automation and front-end fixes",
                    "Days in A/R: 18-day improvement from 55 days down to 37 days",
                    "Net collections: 10% uplift through cleaner claims and better follow-up",
                    "Cost-to-collect: 16% reduction driven by automation and lower rework",
                    "Bad debt: 15% reduction through accurate estimates and digital billing",
                  ],
                },
              ].map((section) => (
                <div key={section.title} className={`rounded-2xl border ${section.border} ${section.bg} p-5`}>
                  <h4 className={`font-bold text-sm uppercase tracking-wider ${section.color} mb-3`}>{section.title}</h4>
                  <ul className="space-y-1.5">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${section.color}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* RCM Transformation Timeline */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">RCM Transformation Timeline</h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology to seamlessly incorporate new systems, evaluate processes, and enhance efficiency for improved financial outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            {[
              { phase: "Assessment", time: "2-4 Weeks", desc: "Identify strengths and weaknesses to inform strategy development.", num: "01" },
              { phase: "Optimization", time: "6-8 Weeks", desc: "Analyze data to maximize revenue and reduce costs.", num: "02" },
              { phase: "Integration", time: "8-12 Weeks", desc: "Utilize technology to streamline operations and improve workflows.", num: "03" },
              { phase: "Continuous Improvement", time: "On-Going", desc: "Regularly review processes to ensure best practices are maintained.", num: "04" },
            ].map((step, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-primary bg-background mx-auto flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                  <span className="text-sm font-bold text-primary">{step.num}</span>
                </div>
                <div className="text-center bg-background border border-border p-6 rounded-2xl">
                  <h3 className="font-bold text-lg mb-1">{step.phase}</h3>
                  <div className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">{step.time}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground">
              You unlock a revenue cycle that works for you—delivering faster payments, fewer denials, and smoother experiences for patients and staff.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Seamless End-to-End Solutions", desc: "From patient registration to final payment, our technology-driven workflows reduce errors, eliminate delays, and maximize every reimbursement opportunity." },
              { title: "Tailor-Made Approach", desc: "We tailor our approach to your unique needs—proactively managing claims, preventing denials, and keeping your cash flow predictable and strong." },
              { title: "Transparent Partnership", desc: "With real-time analytics and ongoing insights, you're empowered to make informed decisions for your practice's financial future." },
              { title: "Unyielding Compliance & Trust", desc: "Rigorous adherence to the latest regulations, ensuring your revenue cycle is protected and secure at every step." },
              { title: "Customer Aligned Outcomes", desc: "PAIX clients consistently see faster payments, fewer denials, and improved patient experiences—all leading to increased profitability." },
            ].map((f, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="flex gap-4 p-6 rounded-2xl border border-border bg-card/30 hover:border-primary/40 hover:bg-card/60 transition-all">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Uncover your hidden revenue potential"
        subtitle="Every health system is different. We'd like to understand your situation and show you exactly how much revenue PAIX can recover—and how fast."
        ctaLabel="30 minutes with an RCM specialist"
      />
    </Layout>
  );
}

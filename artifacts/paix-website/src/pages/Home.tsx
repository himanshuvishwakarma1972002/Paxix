import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Activity, Shield, Users, Clock, CheckCircle2, ChevronRight, LineChart, Zap, Settings, ShieldCheck, FileSearch, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const stats = [
  { value: "100+", label: "Hospitals & Physician Groups" },
  { value: "1000+", label: "Physicians" },
  { value: "3M", label: "Patient Encounters" },
  { value: "100%", label: "Client Retention" },
];

function HeroGraphic() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(0,80,160,0.35)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_85%_20%,rgba(0,212,255,0.12)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_60%_70%,rgba(0,40,120,0.3)_0%,transparent_70%)]" />

      {/* Glow orbs */}
      <motion.div
        className="absolute top-16 right-24 w-80 h-80 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.18) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,80,255,0.15) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* SVG — DNA helix + bird silhouette */}
      <svg
        className="absolute right-0 top-0 h-full w-[55%] max-w-3xl opacity-70"
        viewBox="0 0 600 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="helixGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#0044cc" stopOpacity="0.4"/>
          </linearGradient>
          <linearGradient id="helixGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0066ff" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.2"/>
          </linearGradient>
          <linearGradient id="birdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a3080" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#0a1a50" stopOpacity="0.4"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Bird / dove silhouette */}
        <g opacity="0.55">
          <path d="M420 60 C380 80 320 100 280 140 C260 160 255 180 270 195 C285 210 310 205 330 190 C350 175 365 155 380 140 C420 105 470 95 510 80 C530 72 545 60 540 45 C535 30 500 35 480 40 C460 45 440 55 420 60Z" fill="url(#birdGrad)" />
          <path d="M310 195 C290 220 275 250 270 280 C268 295 272 310 280 318 C295 330 315 325 325 310 C340 290 340 265 335 245 C330 225 320 210 310 195Z" fill="url(#birdGrad)" opacity="0.7"/>
          <path d="M270 195 C240 185 210 175 185 165 C160 155 140 145 135 130 C130 115 145 100 165 95 C185 90 210 95 230 105 C250 115 260 130 270 145 C280 160 280 180 270 195Z" fill="url(#birdGrad)" opacity="0.8"/>
          {/* Wing detail strokes */}
          <path d="M280 140 C310 125 345 115 375 105" stroke="rgba(0,150,220,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M270 160 C300 148 335 140 365 132" stroke="rgba(0,150,220,0.25)" strokeWidth="1" strokeLinecap="round"/>
          <path d="M280 175 C305 165 330 158 355 152" stroke="rgba(0,150,220,0.2)" strokeWidth="1" strokeLinecap="round"/>
          {/* Leaf/branch at top right of wing */}
          <path d="M510 80 C525 68 540 60 550 50 C555 44 555 36 548 33" stroke="rgba(0,180,255,0.4)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M530 62 C538 55 545 50 550 43" stroke="rgba(0,180,255,0.3)" strokeWidth="1" strokeLinecap="round" fill="none"/>
          <circle cx="550" cy="32" r="3" fill="rgba(0,212,255,0.4)"/>
        </g>

        {/* DNA Helix — strand 1 (teal) */}
        <motion.path
          d="M380 200 C400 230 410 260 395 290 C380 320 360 340 355 370 C350 400 360 430 375 460 C390 490 400 520 385 550 C370 580 350 600 345 630"
          stroke="url(#helixGrad1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
        />

        {/* DNA Helix — strand 2 (blue) */}
        <motion.path
          d="M440 200 C420 230 410 260 425 290 C440 320 460 340 465 370 C470 400 460 430 445 460 C430 490 420 520 435 550 C450 580 470 600 475 630"
          stroke="url(#helixGrad2)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
        />

        {/* DNA Helix — cross-links */}
        {[230, 265, 300, 335, 370, 405, 440, 475, 510, 545, 580, 615].map((y, i) => {
          const t = (y - 200) / 430;
          const mid = 410;
          const spread = 28 * Math.sin(Math.PI * t * 6);
          const x1 = mid - 30 - spread;
          const x2 = mid + 30 + spread;
          return (
            <motion.line
              key={i}
              x1={x1} y1={y} x2={x2} y2={y}
              stroke={i % 2 === 0 ? "rgba(0,212,255,0.5)" : "rgba(0,100,220,0.35)"}
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
              style={{ transformOrigin: `${mid}px ${y}px` }}
            />
          );
        })}

        {/* Glowing nodes on helix */}
        {[240, 300, 360, 420, 480, 540].map((y, i) => (
          <motion.circle
            key={i}
            cx={i % 2 === 0 ? 375 : 445}
            cy={y}
            r="4"
            fill={i % 2 === 0 ? "rgba(0,212,255,0.9)" : "rgba(0,100,255,0.8)"}
            filter="url(#softGlow)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.6, 1, 0.6], scale: 1 }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

        {/* Ambient particle dots */}
        {[
          [200, 250], [500, 180], [170, 450], [530, 380], [220, 580], [490, 520],
          [160, 320], [550, 280], [310, 230], [470, 600],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx} cy={cy} r={i % 3 === 0 ? 2.5 : 1.5}
            fill="rgba(0,212,255,0.6)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}

        {/* Flowing curved lines for depth */}
        <motion.path
          d="M150 350 C220 300 310 310 380 280"
          stroke="rgba(0,100,200,0.2)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.path
          d="M140 480 C230 430 340 440 420 400"
          stroke="rgba(0,150,220,0.15)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
        />

        {/* Bright edge glow on right */}
        <ellipse cx="570" cy="350" rx="60" ry="180" fill="rgba(0,180,255,0.06)" filter="url(#softGlow)"/>
      </svg>

      {/* Scan line effect */}
      <motion.div
        className="absolute right-0 top-0 w-[55%] h-full pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.03) 50%, transparent 100%)",
          backgroundSize: "100% 4px",
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-52 md:pb-32 overflow-hidden min-h-[85vh] flex items-center">
        <HeroGraphic />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl lg:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Hospital-Grade Intelligence Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#0099ff] to-[#4466ff]">Intelligence</span>{" "}
              <span className="text-foreground">that</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#0099ff] to-[#4466ff]">Simplifies</span>{" "}
              <span className="text-foreground">care</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              Hospitals rely on people, processes, and systems that are constantly challenged to stay in sync. PAIX brings them together with hospital-grade intelligence, turning operational complexity into time, revenue, and capacity so teams can focus on better care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full bg-primary text-primary-foreground shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] transition-all h-13 px-8 text-base font-semibold group"
                  data-testid="hero-cta-primary"
                >
                  Schedule a Discovery Session
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-13 px-8 text-base border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25"
                  data-testid="hero-cta-secondary"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="py-16 border-y border-border bg-card/40 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center relative"
              >
                {i !== stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
                )}
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-primary uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Cards: Service / Technology */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/revenue-cycle" className="block">
                <Card className="h-full bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <LineChart className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Revenue Cycle Services</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Stop revenue leakage and turn lost revenue into recovered cash through intelligent automation and expert consulting.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-primary font-medium mt-4 group-hover:translate-x-2 transition-transform duration-300">
                      Explore Services <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/clinical" className="block">
                <Card className="h-full bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Settings className="w-7 h-7 text-blue-400" />
                    </div>
                    <CardTitle className="text-2xl">Clinical Technology</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Intuitive clinical workflows and mobile platforms that stay out of the way, so teams can focus on better care.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-blue-400 font-medium mt-4 group-hover:translate-x-2 transition-transform duration-300">
                      Explore Technology <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.03)_0%,transparent_100%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Great Squeeze is On.</h2>
            <p className="text-xl text-muted-foreground">
              With costs rising 8% and denials spiking, over four out of ten facilities now report critical negative financials.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Manual Processes Leading to Errors", icon: Activity },
              { title: "Staffing Shortages", icon: Users },
              { title: "Delay in Cash Flow", icon: Clock },
              { title: "Evolving Regulations", icon: Shield },
            ].map((challenge, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <challenge.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-semibold text-xl leading-snug">{challenge.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Cycle Solutions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Revenue Cycle Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Every stage of the revenue cycle can become a bottleneck, from patient access to final payment. With PAIX, you get a purpose-built approach—no one-size-fits-all template.
            </p>
          </div>

          <Tabs defaultValue="mid" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto bg-card border border-border p-1 rounded-2xl mb-12">
              <TabsTrigger value="front" className="rounded-xl py-4 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Front-End Services</TabsTrigger>
              <TabsTrigger value="mid" className="rounded-xl py-4 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Mid-Cycle Services</TabsTrigger>
              <TabsTrigger value="back" className="rounded-xl py-4 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Back-End Services</TabsTrigger>
              <TabsTrigger value="consulting" className="rounded-xl py-4 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Consulting & Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mid" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/50 border-border backdrop-blur-sm">
                  <CardHeader>
                    <Activity className="w-8 h-8 text-primary mb-3" />
                    <CardTitle className="text-xl">Charge entry and charge audit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">We ensure every charge is entered accurately for precise bills and fast claim submission.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border backdrop-blur-sm">
                  <CardHeader>
                    <FileSearch className="w-8 h-8 text-primary mb-3" />
                    <CardTitle className="text-xl">Medical coding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Our certified specialty coders ensure every treatment is accurately coded for smooth, error-free billing.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border backdrop-blur-sm">
                  <CardHeader>
                    <ShieldCheck className="w-8 h-8 text-primary mb-3" />
                    <CardTitle className="text-xl">Coding audits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">We conduct targeted audits to identify costly errors and rework, reducing administrative spend on denied claims.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border backdrop-blur-sm">
                  <CardHeader>
                    <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                    <CardTitle className="text-xl">Clinical documentation improvement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">We partner with your team to ensure clinical documentation is clear and compliant, enabling accurate coding and fewer denials.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="front">
              <div className="p-12 text-center text-muted-foreground bg-card/50 rounded-2xl border border-border backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Patient Access & Eligibility</h3>
                <p className="max-w-2xl mx-auto">Optimize front-end workflows from scheduling and registration to real-time eligibility verification, reducing downstream denials before they happen.</p>
              </div>
            </TabsContent>
            <TabsContent value="back">
              <div className="p-12 text-center text-muted-foreground bg-card/50 rounded-2xl border border-border backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-foreground mb-4">A/R & Denial Management</h3>
                <p className="max-w-2xl mx-auto">Aggressive follow-up, strategic appeals, and root-cause analysis to clear aging A/R and prevent future denials, turning lost revenue into recovered cash.</p>
              </div>
            </TabsContent>
            <TabsContent value="consulting">
              <div className="p-12 text-center text-muted-foreground bg-card/50 rounded-2xl border border-border backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Strategic RCM Advisory</h3>
                <p className="max-w-2xl mx-auto">Data-driven insights and workflow optimization to align your people, processes, and technology for maximum financial performance.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">AI Services</h2>
            <p className="text-xl text-muted-foreground">
              Imagine a revenue cycle so well-orchestrated that your team spends less time chasing denials and more time on care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Powered Coding & Claim Submission", desc: "95%+ accuracy. Automate clinical documentation analysis reducing errors and speeding up submissions." },
              { title: "Prior Authorization Automation", desc: "Streamline workflows with intelligent tools that handle submissions, tracking, and approvals." },
              { title: "Proactive Denial Management", desc: "75% prevention. Use predictive AI to scrub claims and resolve routine denials autonomously." },
              { title: "Claim Scrubbing", desc: "Intelligent rules engine to catch errors before submission." },
              { title: "Eligibility Verify", desc: "Real-time automated verification across thousands of payers." },
              { title: "Auto Resolution", desc: "Self-healing workflows for common administrative bottlenecks." },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full bg-background border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <Zap className="w-8 h-8 text-primary mb-2 opacity-80" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Transformation */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Client Transformations</h2>
              <h3 className="text-2xl text-primary font-medium mb-4">Accelerating Revenue Growth</h3>
              <p className="text-lg text-muted-foreground mb-8">Multi-Specialty Physician Group</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-bold text-foreground">12%</div>
                  <div className="text-sm text-muted-foreground mt-1">Decrease in Cost to Collect</div>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-bold text-foreground">93%</div>
                  <div className="text-sm text-muted-foreground mt-1">Clean Claim Rate</div>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-bold text-foreground">10 Days</div>
                  <div className="text-sm text-muted-foreground mt-1">Reduced Time to Payment</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/50 border border-border p-8 md:p-12 rounded-3xl backdrop-blur-sm relative">
              <div className="absolute -top-6 -left-6 text-6xl text-primary/20 font-serif">"</div>
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground font-medium italic relative z-10 mb-8">
                I never imagined our billing could be so seamless. Our collections are quicker than ever, and our growth finally shows in our bottom line.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Managing Partner</div>
                  <div className="text-muted-foreground">Multi-Specialty Physician Group</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RCM Transformation Timeline */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">RCM Transformation Timeline</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology to seamless incorporate new systems, evaluate processes, and enhance efficiency for improved financial outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border" />
            
            {[
              { phase: "Assessment", time: "2-4 Weeks", desc: "Identify strengths and weaknesses to inform strategy development." },
              { phase: "Optimization", time: "6-8 Weeks", desc: "Analyze data to maximize revenue and reduce costs." },
              { phase: "Integration", time: "8-12 Weeks", desc: "Utilize technology to streamline operations and improve workflows." },
              { phase: "Continuous", time: "On-Going", desc: "Regularly review processes to ensure best practices are maintained." },
            ].map((step, i) => (
              <div key={i} className="relative pt-12 md:pt-0">
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary mx-auto flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                  <span className="text-xl font-bold text-primary">{i+1}</span>
                </div>
                <div className="text-center bg-background border border-border p-6 rounded-2xl h-full">
                  <h3 className="font-bold text-xl mb-2">{step.phase}</h3>
                  <div className="text-primary text-sm font-medium mb-4 uppercase tracking-wider">{step.time}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground">
              We deliver faster payments, fewer denials, and smoother experiences powered by tailored workflows and real-time insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Seamless End-to-End Solutions", desc: "From patient registration to final payment, our technology-driven workflows reduce errors and maximize reimbursement." },
              { title: "Tailor-Made Approach", desc: "We proactively manage claims, prevent denials, and keep your cash flow predictable and strong." },
              { title: "Transparent Partnership", desc: "With real-time analytics, you're empowered to make informed decisions for your practice's financial future." },
              { title: "Unyielding Compliance", desc: "Rigorous adherence to the latest regulations, ensuring your revenue cycle is protected and secure." },
              { title: "Customer Aligned Outcomes", desc: "We measure our success by your success—increased profitability and less stress for your team." },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl hover:bg-card/50 transition-colors border border-transparent hover:border-border">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Who We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Hospitals', 'Health Systems', 'Community Health', 'Physician Groups'].map((group, i) => (
              <div key={i} className="px-8 py-4 rounded-full bg-background border border-border text-foreground font-semibold shadow-sm hover:border-primary/50 transition-colors cursor-default">
                {group}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

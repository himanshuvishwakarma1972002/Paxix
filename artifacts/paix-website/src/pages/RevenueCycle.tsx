import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Zap, Activity, BrainCircuit, FileSearch, CheckCircle2, ChevronRight, ActivitySquare, AlertCircle, FileText, PieChart, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function RevenueCycle() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Stop revenue leakage. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Turn lost revenue into recovered cash.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Transform everyday revenue leaks from process gaps into predictable cash. PAIX orchestrates your entire revenue cycle, automates manual work, flags coding risks before submission, and turns denial firefighting into scalable recovery.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="py-16 border-y border-border bg-card/40 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: ">95%", label: "Net Collections" },
              { value: "<30", label: "Days in A/R" },
              { value: ">97%", label: "First-Pass" },
              { value: "5x", label: "ROI" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center relative"
              >
                {i !== 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
                )}
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-primary uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Great Squeeze is On.</h2>
            <p className="text-xl text-muted-foreground">
              With costs rising 8% and denials spiking, over four out of ten facilities now report critical negative financials. Revenue leaders must deploy proactive strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Key Pain Points</h3>
              <div className="space-y-4">
                {[
                  "Manual Processes Leading to Errors",
                  "Staffing Shortages",
                  "Delay in Cash Flow",
                  "Evolving Regulations"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    <span className="font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Factors Behind Slow Reimbursement</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Complex Reimbursement Policies",
                  "Communication & Follow-up Issues",
                  "Incorrect Documentation",
                  "Coding Errors",
                  "Insurance Verification Errors",
                  "Claim Submission Errors",
                  "Claim Denials & Appeal",
                  "Prior Authorization Requirements"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border/50 bg-card/30">
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Revenue Cycle Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Every stage of the revenue cycle can become a bottleneck, from patient access to final payment. With PAIX, you get a purpose-built approach—no one-size-fits-all template.
            </p>
          </div>

          <Tabs defaultValue="mid" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto bg-background border border-border p-1 rounded-2xl mb-12">
              <TabsTrigger value="front" className="rounded-xl py-4 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Front-End Services</TabsTrigger>
              <TabsTrigger value="mid" className="rounded-xl py-4 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Mid-Cycle Services</TabsTrigger>
              <TabsTrigger value="back" className="rounded-xl py-4 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Back-End Services</TabsTrigger>
              <TabsTrigger value="consulting" className="rounded-xl py-4 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Consulting & Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mid" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <Activity className="w-10 h-10 text-primary mb-3" />
                    <CardTitle className="text-2xl">Charge entry and charge audit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">We ensure every charge is entered accurately for precise bills and fast claim submission, minimizing lost revenue at the source.</p>
                  </CardContent>
                </Card>
                <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <FileSearch className="w-10 h-10 text-primary mb-3" />
                    <CardTitle className="text-2xl">Medical coding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">Our certified specialty coders ensure every treatment is accurately coded for smooth, error-free billing that passes payer rules.</p>
                  </CardContent>
                </Card>
                <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <ShieldCheck className="w-10 h-10 text-primary mb-3" />
                    <CardTitle className="text-2xl">Coding audits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">We conduct targeted audits to identify costly errors and rework, reducing administrative spend on denied claims proactively.</p>
                  </CardContent>
                </Card>
                <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <FileText className="w-10 h-10 text-primary mb-3" />
                    <CardTitle className="text-2xl">Clinical documentation improvement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">We partner with your team to ensure clinical documentation is clear and compliant, enabling accurate coding and fewer denials.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="front">
              <div className="p-16 text-center bg-background rounded-3xl border border-border">
                <ActivitySquare className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">Front-End Services</h3>
                <p className="max-w-2xl mx-auto text-xl text-muted-foreground">Optimize workflows from scheduling and registration to real-time eligibility verification, reducing downstream denials before they happen.</p>
              </div>
            </TabsContent>
            <TabsContent value="back">
              <div className="p-16 text-center bg-background rounded-3xl border border-border">
                <PieChart className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">Back-End Services</h3>
                <p className="max-w-2xl mx-auto text-xl text-muted-foreground">Aggressive follow-up, strategic appeals, and root-cause analysis to clear aging A/R and prevent future denials, turning lost revenue into cash.</p>
              </div>
            </TabsContent>
            <TabsContent value="consulting">
              <div className="p-16 text-center bg-background rounded-3xl border border-border">
                <BrainCircuit className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">Consulting & Analytics</h3>
                <p className="max-w-2xl mx-auto text-xl text-muted-foreground">Data-driven insights and workflow optimization to align your people, processes, and technology for maximum financial performance.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute left-0 top-1/2 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">AI Services</h2>
            <p className="text-xl text-muted-foreground">
              Imagine a revenue cycle so well-orchestrated that your team spends less time chasing denials and more time on care. Intelligent systems streamline operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Powered Coding", desc: "95%+ accuracy. Automate clinical documentation analysis reducing errors.", icon: BrainCircuit },
              { title: "Prior Auth Automation", desc: "Streamline workflows with intelligent tools that handle submissions and tracking.", icon: Zap },
              { title: "Proactive Denial Management", desc: "75% prevention. Use predictive AI to scrub claims and resolve routine denials.", icon: ShieldCheck },
              { title: "Claim Scrubbing", desc: "Intelligent rules engine to catch errors before submission.", icon: FileSearch },
              { title: "Eligibility Verify", desc: "Real-time automated verification across thousands of payers.", icon: Activity },
              { title: "Auto Resolution", desc: "Self-healing workflows for common administrative bottlenecks.", icon: Settings },
            ].map((service, i) => (
              <Card key={i} className="bg-card/50 border-border hover:border-primary/50 transition-colors backdrop-blur-sm">
                <CardHeader>
                  <service.icon className="w-8 h-8 text-primary mb-3 opacity-80" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

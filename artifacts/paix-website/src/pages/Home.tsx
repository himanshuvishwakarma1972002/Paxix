import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Activity, Shield, Users, Clock, CheckCircle2, ChevronRight, BarChart3, LineChart, Globe, Zap, Settings, ShieldCheck, FileSearch, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const stats = [
  { value: "100+", label: "Hospitals & Physician Groups" },
  { value: "1000+", label: "Physicians" },
  { value: "3M", label: "Patient Encounters" },
  { value: "100%", label: "Client Retention" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,255,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,100,255,0.1)_0%,transparent_40%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            >
              Intelligence that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Simplifies
              </span> care
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl leading-relaxed"
            >
              Hospitals rely on people, processes, and systems that are constantly challenged to stay in sync. PAIX brings them together with hospital-grade intelligence, turning operational complexity into time, revenue, and capacity so teams can focus on better care.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="rounded-full shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all h-14 px-8 text-lg group">
                  Schedule a Discovery Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-border hover:bg-white/5">
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

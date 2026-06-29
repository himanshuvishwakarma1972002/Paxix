import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, FileBadge, CodeSquare, CheckCircle2, Briefcase, Users, ArrowRight, Trophy } from "lucide-react";
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

export default function Education() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-52 md:pb-32 bg-background relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.12)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(80,0,200,0.08)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Healthcare Education & Training
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              >
                <span className="text-foreground">Empower Your Team with</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Expert Healthcare</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Training</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
              >
                Comprehensive training programs designed to enhance skills, ensure compliance, and drive excellence in healthcare operations.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full shadow-[0_0_25px_rgba(0,212,255,0.35)] hover:shadow-[0_0_40px_rgba(0,212,255,0.55)] transition-all h-13 px-8 font-semibold group"
                  >
                    View Training Programs
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            {/* Right highlight */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { label: "Certifications Covered", value: "7+", icon: Trophy },
                { label: "Expert Trainers", value: "CPC/CCS", icon: GraduationCap },
                { label: "Training Programs", value: "4", icon: BookOpen },
                { label: "Career Paths", value: "Multiple", icon: Briefcase },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm p-6 text-center hover:border-primary/30 transition-colors">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3 opacity-80" />
                  <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transforming Graduates */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforming Graduates into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Healthcare Professionals
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Paix Services RCM Medical Coding Training is designed to create career-ready professionals for the global healthcare industry. We combine international-quality curriculum, hands-on learning, and expert mentorship to ensure students gain both knowledge and confidence to succeed in the HBPO sector.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our training philosophy is simple — <strong className="text-foreground">industry relevance, practical exposure, and career growth.</strong> Backed by certified trainers and modern learning methods, Paix Services equips graduates with the right skills to bridge the gap between education and employability.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="space-y-4">
              {[
                { icon: CheckCircle2, text: "International-quality curriculum aligned with global healthcare standards" },
                { icon: CheckCircle2, text: "Experienced trainers with CPC/CCS certifications and industry exposure" },
                { icon: CheckCircle2, text: "Hands-on training with real case files and practical coding exercises" },
                { icon: CheckCircle2, text: "Career-focused approach with guidance on certifications and skill development" },
                { icon: CheckCircle2, text: "Strong industry linkages with leading healthcare and HBPO organizations" },
                { icon: CheckCircle2, text: "Emphasis on continuous learning, adaptability, and future-ready skills" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-background/50 hover:border-primary/30 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore Programs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Our Programs</h2>
            <p className="text-lg text-muted-foreground">
              We offer specialized training programs that prepare you for high-demand roles in the healthcare BPO and RCM industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CodeSquare,
                title: "Medical Coding Training",
                desc: "Learn ICD, CPT, and HCPCS coding with real case studies.",
              },
              {
                icon: BookOpen,
                title: "RCM Training",
                desc: "End-to-end understanding of claims, billing, denials, and collections.",
              },
              {
                icon: FileBadge,
                title: "Medical Billing",
                desc: "Focused training on insurance processes, claim submissions, and revenue cycle workflows.",
              },
              {
                icon: GraduationCap,
                title: "Certification Preparation",
                desc: "Guidance for global certifications like CPC, CCS, and more.",
              },
            ].map((program, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <program.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{program.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prepare for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Industry-Recognized Certifications
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Certifications that boost your career prospects and demonstrate global competence in medical coding.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { code: "CPC", name: "Certified Professional Coder", num: "1" },
              { code: "CCA", name: "Certified Coding Associate", num: "2" },
              { code: "CCS", name: "Certified Coding Specialist", num: "3" },
              { code: "CCS-P", name: "Certified Coding Specialist – Physician-based", num: "4" },
              { code: "CPMA", name: "Certified Professional Medical Auditor", num: "5" },
              { code: "CPC-H", name: "Hospital Coding", num: "6" },
              { code: "CIC", name: "Certified Inpatient Coder", num: "7" },
            ].map((cert, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-background hover:border-primary/50 hover:bg-primary/3 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                  {cert.num}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{cert.code}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{cert.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Beyond Training */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Offer Beyond Training</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive services designed to support your professional journey every step of the way.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Skill Development Programs", desc: "Enhance technical and soft skills for professional growth." },
              { icon: Users, title: "Corporate Training", desc: "Customized training for healthcare BPOs and corporates." },
              { icon: GraduationCap, title: "Career Guidance & Mentorship", desc: "One-on-one sessions for certifications, interviews, and planning." },
              { icon: Briefcase, title: "Internship Opportunity", desc: "We offer internship opportunities as part of the training program." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Career Path Starts Here</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At Paix Services, we don't just train — we prepare you for long-term career success. Our programs make you industry-ready and confident for roles in:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Medical Coding", "Medical Billing", "RCM Operations", "Healthcare BPO roles"].map((role, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3.5 rounded-xl border border-border bg-background">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium text-sm">{role}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <div className="p-6 rounded-2xl bg-background border border-border mb-4">
                <h3 className="font-bold mb-4 text-foreground">Healthcare Pathway — We also provide guidance on:</h3>
                <ul className="space-y-3">
                  {[
                    "Resume building & interview preparation",
                    "Certification exam readiness (CPC/CCS)",
                    "Mapping career growth in healthcare & IT-enabled services",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-600/5 border border-primary/20 text-center">
                <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Enrollment Open Now</div>
                <div className="text-xs text-muted-foreground mb-4">Limited Seats Available</div>
                <Link href="/contact">
                  <Button size="sm" className="rounded-full px-6 group">
                    Step out of the classroom, into the industry
                    <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Revenue Cycle Education, Simplified"
        subtitle="Strengthen your team's revenue cycle expertise with targeted education services focused on front-end capture, coding, billing, denials, and collections workflows."
        ctaLabel="Talk to us about revenue cycle training"
      />
    </Layout>
  );
}

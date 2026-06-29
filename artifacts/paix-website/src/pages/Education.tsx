import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, FileBadge, CodeSquare, CheckCircle2, TrendingUp, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Education() {
  return (
    <Layout>
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Empower Your Team with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Expert Healthcare Training
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive training programs designed to enhance skills, ensure compliance, and drive excellence in healthcare operations. Transforming graduates into healthcare professionals.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Graduates into Professionals</h2>
            <p className="text-lg text-muted-foreground">
              PAIX Services RCM Medical Coding Training is designed to create career-ready professionals for the global healthcare industry. We combine international-quality curriculum, hands-on learning, and expert mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <CodeSquare className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Medical Coding Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Learn ICD, CPT, and HCPCS coding with real case studies.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">RCM Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">End-to-end understanding of claims, billing, denials, and collections.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <FileBadge className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Medical Billing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Focused training on insurance processes, claim submissions, and revenue cycle workflows.</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Certification Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Guidance for global certifications like CPC, CCS, CPMA, and more.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry-Recognized Certifications</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Prepare for global certifications that boost your career prospects and validate your expertise in the healthcare BPO and RCM industry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "CPC (Certified Professional Coder)",
                  "CCA (Certified Coding Associate)",
                  "CCS (Certified Coding Specialist)",
                  "CCS-P (Physician-based)",
                  "CPMA (Medical Auditor)",
                  "CPC-H (Hospital Coding)",
                  "CIC (Inpatient Coder)"
                ].map((cert, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border/50 bg-card/30">
                    <Trophy className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-sm text-foreground leading-tight mt-0.5">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card/50 border border-border p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-primary">Your Career Path Starts Here</h3>
              <p className="text-muted-foreground mb-6">
                At PAIX Services, we don't just train – we prepare you for long-term career success. Our programs make you industry-ready and confident for roles in:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Medical Coding</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Medical Billing</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> RCM Operations</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Healthcare BPO roles</li>
              </ul>
              <div className="pt-6 border-t border-border/50">
                <p className="font-medium text-foreground mb-2">We also provide guidance on:</p>
                <p className="text-sm text-muted-foreground">Resume building & interview preparation • Certification exam readiness • Mapping career growth in healthcare & IT-enabled services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

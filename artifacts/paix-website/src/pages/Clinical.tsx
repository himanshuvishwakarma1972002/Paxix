import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { CheckCircle2, Stethoscope, HeartPulse, Shield, Smartphone, ArrowRight, BrainCircuit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Clinical() {
  return (
    <Layout>
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,100,255,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Intuitive clinical workflows for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
                better care
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Give clinicians an EHR that stays out of the way, streamlining documentation, surfacing the right data at the right moment, and connecting teams so they can deliver safer, faster, more personalized care.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Healthcare Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Practice Management is a comprehensive hospital application that streamlines patient workflows, from mobile check-in to check-out. It simplifies intake, enables efficient note-taking, lab orders, and procedure management.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Mobile Check-in', icon: Smartphone },
                  { title: 'Efficient Documentation', icon: BrainCircuit },
                  { title: 'Lab & Procedure Mgmt', icon: Stethoscope },
                  { title: 'E-Prescription', icon: Shield },
                  { title: 'Robust Security', icon: Shield },
                  { title: 'Patient-Centered Care', icon: HeartPulse }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-background border-border relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <CardHeader>
                  <Stethoscope className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-2xl">Internal Medicine & Family Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    With e-prescription, super bill integration, and robust security, it enhances patient care, improves operations, and supports providers in delivering high-quality, patient-centered care.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                <CardHeader>
                  <HeartPulse className="w-10 h-10 text-blue-400 mb-2" />
                  <CardTitle className="text-2xl">Emergency Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    Fast, responsive workflows designed for high-stress environments where every second counts. Surface critical patient data instantly with critical alerts and real-time vitals sync.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card/50 border border-border p-8 md:p-12 rounded-3xl backdrop-blur-sm relative">
              <div className="absolute -top-6 -left-6 text-6xl text-primary/20 font-serif">"</div>
              <blockquote className="text-lg leading-relaxed text-foreground font-medium italic relative z-10 mb-8">
                The AI-powered RCM system has transformed our revenue cycle operations. We've seen a 45% reduction in claim denials and our revenue collection time has decreased significantly. The automated workflows have freed up our staff to focus on patient care rather than administrative tasks.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary">C</span>
                </div>
                <div>
                  <div className="font-semibold text-lg">Chief Financial Officer</div>
                  <div className="text-muted-foreground">Metro Health System</div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 border border-border p-8 md:p-12 rounded-3xl backdrop-blur-sm relative">
              <div className="absolute -top-6 -left-6 text-6xl text-primary/20 font-serif">"</div>
              <blockquote className="text-lg leading-relaxed text-foreground font-medium italic relative z-10 mb-8">
                As a practicing physician, I appreciate how the clinical decision support system provides relevant, evidence-based recommendations without being intrusive. It has helped me catch potential issues early and improved my confidence in treatment decisions. The interface is intuitive and doesn't slow down my workflow.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary">MC</span>
                </div>
                <div>
                  <div className="font-semibold text-lg">Dr. Michael Chen</div>
                  <div className="text-muted-foreground">Chief Medical Officer, Regional Medical Center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

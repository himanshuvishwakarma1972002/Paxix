import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Smartphone, MessagesSquare, Calendar, UserCheck, ShieldAlert, Activity, ClipboardList, BellRing } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Mobile() {
  return (
    <Layout>
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,100,255,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Connected mobile experiences for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                continuous care
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Give patients and providers intuitive mobile tools to schedule, communicate, and access care from anywhere, reducing friction and keeping every step of the care journey connected.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mobile Application for Providers</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our provider mobile platform is a comprehensive mobile app designed to optimize healthcare workflows which simplifies appointment tracking, patient round management, and offers a secure messaging system for seamless communication between doctors and nurses.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Direct App-to-App Calls", icon: Smartphone },
                  { title: "Encrypted Messaging", icon: MessagesSquare },
                  { title: "On-Call Schedules", icon: Calendar },
                  { title: "Personalized Scheduler", icon: Calendar },
                  { title: "Practice Management", icon: Activity },
                  { title: "Rounding & Visits", icon: ClipboardList },
                  { title: "Alert Handling", icon: BellRing },
                  { title: "Single Sign-On (SSO)", icon: ShieldAlert },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <UserCheck className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Patient Engagement Mobile Platform</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Empower patients with tools that make it easy to schedule, communicate, and access the information they need—anytime, anywhere. Enhance engagement, reduce friction, and keep care moving forward with experiences built for life on the go.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border">
                  <Calendar className="w-6 h-6 text-blue-400" />
                  <div className="font-medium text-lg">Self-Service Scheduling</div>
                </div>
                <div className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border">
                  <MessagesSquare className="w-6 h-6 text-blue-400" />
                  <div className="font-medium text-lg">Secure Provider Chat</div>
                </div>
                <div className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border">
                  <Activity className="w-6 h-6 text-blue-400" />
                  <div className="font-medium text-lg">Test Results & Health Records</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

// the Contact form itself is rendered globally at the bottom of Layout via ContactCTA. 
// However, the task asked for a Contact page with "full page with form on left and contact info on right".
// I'll re-implement the form here to match the spec specifically for the /contact route.

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  organization: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    window.setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll be in touch shortly.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 500);
  }

  return (
    <Layout>
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Form Side */}
            <motion.div 
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name..." className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name..." className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email address..." className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number..." className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your organization..." className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="min-h-[120px] bg-background resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    Send Message
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Info Side */}
            <motion.div 
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's talk about your revenue cycle.</h1>
                <p className="text-xl text-muted-foreground">
                  Get in touch with our team of experts. We're here to help you turn operational complexity into time, revenue, and capacity.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email us</h3>
                    <p className="text-muted-foreground">hello@paixservices.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">US Office</h3>
                      <p className="text-muted-foreground">3 University Plaza Dr 2nd Floor,<br/>Hackensack, NJ 07601, USA</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">India Office</h3>
                      <p className="text-muted-foreground">5th Floor, Olympia Cyberspace, 21/22,<br/>Alandur Rd, Guindy, Chennai, Tamil Nadu 600032</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 p-6 rounded-xl border border-border">
                <h4 className="font-semibold mb-2">What Happens Next?</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Quick review of your submission</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Short discovery call</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Tailored execution plan</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

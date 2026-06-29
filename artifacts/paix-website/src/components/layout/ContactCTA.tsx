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
import { ArrowRight, Sparkles } from "lucide-react";
import { useSubmitContact } from "@workspace/api-client-react";
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

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
}

export function ContactCTA({
  title = "Uncover your hidden revenue potential",
  subtitle = "Every health system is different. Your first-pass and denial patterns are unique. Your staff challenges are specific to you. We'd like to understand your situation and show you exactly how much revenue PAIX can recover—and how fast.",
  ctaLabel = "30 minutes with an RCM specialist",
}: ContactCTAProps = {}) {
  const { toast } = useToast();
  const submitContact = useSubmitContact();
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    submitContact.mutate(
      {
        data: {
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          phone: values.phone || null,
          organization: values.organization || null,
          message: values.message,
        },
      },
      {
        onSuccess: () => {
          toast({
            title: "Message sent!",
            description: "We'll be in touch shortly.",
          });
          form.reset();
          setIsSubmitting(false);
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        },
      }
    );
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Let's talk</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                {title}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              {subtitle}
            </p>
            
            <div className="pt-8 space-y-4">
              <p className="font-medium text-foreground">Email us directly</p>
              <a href="mailto:hello@paixservices.com" className="text-xl md:text-2xl font-semibold text-primary hover:text-primary/80 transition-colors">
                hello@paixservices.com
              </a>
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <FormLabel>How can we help you? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your challenges..." 
                          className="min-h-[120px] bg-background resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group rounded-xl"
                  disabled={isSubmitting}
                >
                  <span className="mr-2">{ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}

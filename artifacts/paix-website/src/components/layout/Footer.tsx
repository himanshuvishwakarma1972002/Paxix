import { Link } from "wouter";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight">PAIX</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              We turn hospital friction into flow - transforming operational complexity into time, revenue, and capacity to deliver better care.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>hello@paixservices.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/revenue-cycle" className="hover:text-primary transition-colors">Optimize Revenue Cycle</Link></li>
              <li><Link href="/revenue-cycle" className="hover:text-primary transition-colors">Comprehensive</Link></li>
              <li><Link href="/revenue-cycle" className="hover:text-primary transition-colors">Automation & Analytics</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Case Study</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Technology</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/clinical" className="hover:text-primary transition-colors">Clinical EHR</Link></li>
              <li><Link href="/clinical" className="hover:text-primary transition-colors">Clinical Healthcare</Link></li>
              <li><Link href="/mobile" className="hover:text-primary transition-colors">Mobile Platform</Link></li>
              <li><Link href="/mobile" className="hover:text-primary transition-colors">Mobile Healthcare</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Education</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/education" className="hover:text-primary transition-colors">Course</Link></li>
              <li><Link href="/education" className="hover:text-primary transition-colors">Technical</Link></li>
              <li><Link href="/education" className="hover:text-primary transition-colors">Medical Coder</Link></li>
              <li><Link href="/education" className="hover:text-primary transition-colors">Learning</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>Copyright © 2026 PAIX Services. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

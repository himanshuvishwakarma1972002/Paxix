import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

function PaixLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4C16 4 10 8 6 14C4 17 4 20 6 22C8 24 11 24 14 22L16 20L18 22C21 24 24 24 26 22C28 20 28 17 26 14C22 8 16 4 16 4Z" fill="url(#logoGrad)" opacity="0.9"/>
      <path d="M16 10L13 16L16 22L19 16L16 10Z" fill="white" opacity="0.6"/>
      <path d="M10 18C10 18 8 16 9 13" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 18C22 18 24 16 23 13" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round"/>
      <defs>
        <linearGradient id="logoGrad" x1="6" y1="4" x2="26" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00d4ff"/>
          <stop offset="100%" stopColor="#0066ff"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

const revenueCycleItems = [
  {
    href: "/revenue-cycle",
    label: "Services",
    desc: "End-to-end revenue cycle management solutions",
    icon: "⚡",
  },
  {
    href: "/education",
    label: "Education",
    desc: "Expert healthcare training & certification programs",
    icon: "🎓",
  },
];

const clinicalItems = [
  {
    href: "/clinical",
    label: "Clinical EHR",
    desc: "Intuitive EHR that streamlines clinical documentation",
    icon: "🏥",
  },
  {
    href: "/mobile",
    label: "Mobile Platform",
    desc: "Connected mobile experiences for providers & patients",
    icon: "📱",
  },
];

type DropdownItem = typeof revenueCycleItems[number];

function DropdownMenu({ items, onClose }: { items: DropdownItem[]; onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl border border-white/10 bg-[#060c20]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(0,212,255,0.06)] overflow-hidden z-50">
      <div className="p-2">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="flex items-start gap-3 px-4 py-3.5 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
            data-testid={`nav-dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <span className="text-lg mt-0.5 opacity-70">{item.icon}</span>
            <div>
              <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-none mb-1">{item.label}</div>
              <div className="text-xs text-muted-foreground leading-snug">{item.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (name: string) =>
    setActiveDropdown((prev) => (prev === name ? null : name));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <div
        ref={dropdownRef}
        className="relative w-full max-w-4xl rounded-full border border-white/10 bg-[#0a0f2e]/80 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(0,212,255,0.05)] flex items-center justify-between px-4 h-14"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0" data-testid="nav-logo">
          <PaixLogo />
          <span className="font-bold text-lg tracking-tight text-foreground">PAIX</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-white/5 transition-all"
            data-testid="nav-home"
          >
            Home
          </Link>

          {/* Revenue Cycle dropdown */}
          <div className="relative">
            <button
              onClick={() => toggle("revenue")}
              className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all",
                activeDropdown === "revenue"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
              data-testid="nav-revenue-cycle"
            >
              Revenue Cycle
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  activeDropdown === "revenue" && "rotate-180"
                )}
              />
            </button>
            {activeDropdown === "revenue" && (
              <DropdownMenu items={revenueCycleItems} onClose={() => setActiveDropdown(null)} />
            )}
          </div>

          {/* Clinical dropdown */}
          <div className="relative">
            <button
              onClick={() => toggle("clinical")}
              className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all",
                activeDropdown === "clinical"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
              data-testid="nav-clinical"
            >
              Clinical
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  activeDropdown === "clinical" && "rotate-180"
                )}
              />
            </button>
            {activeDropdown === "clinical" && (
              <DropdownMenu items={clinicalItems} onClose={() => setActiveDropdown(null)} />
            )}
          </div>

          <Link
            href="/about"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-white/5 transition-all"
            data-testid="nav-about"
          >
            About Us
          </Link>
        </nav>

        {/* Contact CTA */}
        <div className="hidden md:flex items-center shrink-0">
          <Link href="/contact" data-testid="nav-contact">
            <button className="px-5 py-2 text-sm font-semibold rounded-full border border-white/20 bg-white/5 text-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-200">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="nav-mobile-toggle"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 rounded-2xl border border-white/10 bg-[#0a0f2e]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-4 flex flex-col gap-1">
          <Link href="/" className="px-4 py-3 text-sm font-medium hover:bg-white/5 rounded-xl transition-colors" data-testid="nav-mobile-home">Home</Link>

          <div className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mt-1">Revenue Cycle</div>
          <Link href="/revenue-cycle" className="px-4 py-3 text-sm font-medium hover:bg-white/5 rounded-xl transition-colors pl-6" data-testid="nav-mobile-services">Services</Link>
          <Link href="/education" className="px-4 py-3 text-sm font-medium hover:bg-white/5 rounded-xl transition-colors pl-6" data-testid="nav-mobile-education">Education</Link>

          <div className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mt-1">Clinical</div>
          <Link href="/clinical" className="px-4 py-3 text-sm font-medium hover:bg-white/5 rounded-xl transition-colors pl-6" data-testid="nav-mobile-clinical-ehr">Clinical EHR</Link>
          <Link href="/mobile" className="px-4 py-3 text-sm font-medium hover:bg-white/5 rounded-xl transition-colors pl-6" data-testid="nav-mobile-mobile-platform">Mobile Platform</Link>

          <Link href="/about" className="px-4 py-3 text-sm font-medium hover:bg-white/5 rounded-xl transition-colors mt-1" data-testid="nav-mobile-about">About Us</Link>

          <div className="mt-2 pt-2 border-t border-white/10">
            <Link href="/contact" className="block w-full text-center px-4 py-3 text-sm font-semibold rounded-full border border-white/20 hover:border-primary/50 hover:text-primary transition-all" data-testid="nav-mobile-contact">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

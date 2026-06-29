import { Link, useLocation } from "wouter";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight">PAIX</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover/95 backdrop-blur-md border-border">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/revenue-cycle"
                        >
                          <Zap className="h-6 w-6 text-primary mb-4" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Revenue Cycle
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Stop revenue leakage. Turn lost revenue into recovered cash.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link href="/clinical" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Clinical EHR</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                          Intuitive clinical workflows for better care.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/mobile" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Mobile Platform</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                          Connected mobile experiences for continuous care.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/education" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Education</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                          Expert healthcare training programs.
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                  <Link href="/about">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/contact">
            <Button className="rounded-full shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-shadow">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border p-4 flex flex-col gap-4">
          <Link href="/" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">Home</Link>
          <Link href="/revenue-cycle" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">Revenue Cycle</Link>
          <Link href="/clinical" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">Clinical</Link>
          <Link href="/mobile" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">Mobile Platform</Link>
          <Link href="/education" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">Education</Link>
          <Link href="/about" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">About Us</Link>
          <div className="pt-4 border-t border-border">
            <Link href="/contact" className="w-full block">
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

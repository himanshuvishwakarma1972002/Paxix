"use client";

import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import NotFound from "@/site-pages/not-found";

import Home from "@/site-pages/Home";
import RevenueCycle from "@/site-pages/RevenueCycle";
import Clinical from "@/site-pages/Clinical";
import About from "@/site-pages/About";
import Education from "@/site-pages/Education";
import Mobile from "@/site-pages/Mobile";
import Contact from "@/site-pages/Contact";

const pageTransition = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
  transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
};

function AnimatedPage({ component: Component }: { component: React.ComponentType }) {
  return (
    <motion.div {...pageTransition}>
      <Component />
    </motion.div>
  );
}

function Router() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Switch key={location} location={location}>
        <Route path="/" component={() => <AnimatedPage component={Home} />} />
        <Route path="/revenue-cycle" component={() => <AnimatedPage component={RevenueCycle} />} />
        <Route path="/clinical" component={() => <AnimatedPage component={Clinical} />} />
        <Route path="/about" component={() => <AnimatedPage component={About} />} />
        <Route path="/education" component={() => <AnimatedPage component={Education} />} />
        <Route path="/mobile" component={() => <AnimatedPage component={Mobile} />} />
        <Route path="/contact" component={() => <AnimatedPage component={Contact} />} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;

"use client";


import { useState, useEffect } from "react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Zap, Code2, Rocket, ArrowRight, Github } from "lucide-react";

/**
 * Render the unauthenticated Loopie landing page.
 *
 * The component displays the full landing UI (navigation, hero, features, CTA, footer)
 * and includes a subtle parallax background accent driven by the page scroll position.
 * It also wires sign-up actions to Clerk's modal sign-up flow.
 *
 * @returns The React element for the Loopie landing page.
 */
export default function LoopieLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Coding",
      description:
        "Write code faster with intelligent completions and suggestions tailored to your style",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Optimized performance that keeps up with your thoughts, no lag, no waiting",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Multi-Language Support",
      description:
        "From Python to TypeScript, work seamlessly across all your favorite languages",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Ship Faster",
      description:
        "Build, iterate, and deploy at unprecedented speed with AI as your co-pilot",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1d2021] text-[#d4be98]">
      {/* Subtle background accent */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div
          className="absolute w-96 h-96 bg-[#d8a657] rounded-full blur-3xl opacity-10 top-1/4 right-1/4"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-[#3c3836] bg-[#282828]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-[#d8a657] rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <Sparkles className="w-5 h-5 text-[#1d2021]" />
            </div>
            <span className="text-2xl font-bold text-[#d8a657]">Loopie</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-[#d4be98] hover:text-[#d8a657] hover:bg-[#3c3836]"
            >
              Features
            </Button>
            <Button
              variant="ghost"
              className="text-[#d4be98] hover:text-[#d8a657] hover:bg-[#3c3836]"
            >
              Pricing
            </Button>
            <Button
              variant="ghost"
              className="text-[#d4be98] hover:text-[#d8a657] hover:bg-[#3c3836]"
            >
              Docs
            </Button>
            <SignUpButton mode="modal">
              <Button className="bg-[#d8a657] hover:bg-[#e9b95e] text-[#1d2021] border-0 font-semibold cursor-pointer">
                Get Started
              </Button>
            </SignUpButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3c3836] border border-[#504945] rounded-full text-sm">
            <Sparkles className="w-4 h-4 text-[#d8a657]" />
            <span className="text-[#d4be98]">The future of coding is here</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#d4be98]">
            Code at the
            <br />
            <span className="text-[#d8a657]">Speed of Thought</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#a89984] max-w-3xl mx-auto leading-relaxed">
            Loopie is the AI-powered code editor that transforms how you build.
            Write, iterate, and ship faster than ever before.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <SignUpButton mode="modal">
              <Button
                size="lg"
                className="bg-[#d8a657] hover:bg-[#e9b95e] text-[#1d2021] border-0 text-lg px-8 py-6 font-semibold cursor-pointer"
              >
                Start Building Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </SignUpButton>
            <Button
              size="lg"
              variant="outline"
              className="border-[#504945] text-[#d4be98] hover:bg-[#3c3836] text-lg px-8 py-6"
            >
              <Github className="mr-2 w-5 h-5" />
              <a href="https://github.com/Aneeshie/loopie">View on GitHub</a>
            </Button>
          </div>

          {/* Demo Preview */}
          <div className="pt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d2021] via-transparent to-transparent z-10 pointer-events-none" />
            <div className="relative rounded-lg overflow-hidden border border-[#3c3836] shadow-2xl bg-[#282828]">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#32302f] border-b border-[#3c3836]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ea6962]" />
                  <div className="w-3 h-3 rounded-full bg-[#d8a657]" />
                  <div className="w-3 h-3 rounded-full bg-[#a9b665]" />
                </div>
                <span className="text-sm text-[#a89984] ml-4">app.tsx</span>
              </div>
              <div className="p-8 font-mono text-sm text-left space-y-2">
                <div>
                  <span className="text-[#ea6962]">import</span>{" "}
                  <span className="text-[#d4be98]">React</span>{" "}
                  <span className="text-[#ea6962]">from</span>{" "}
                  <span className="text-[#a9b665]">'react'</span>;
                </div>
                <div className="text-[#7c6f64]">
                  // AI suggests next line...
                </div>
                <div>
                  <span className="text-[#ea6962]">
                    export default function
                  </span>{" "}
                  <span className="text-[#d8a657]">App</span>() {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-[#ea6962]">return</span>{" "}
                  <span className="text-[#89b482]">&lt;div&gt;</span>
                  <span className="text-[#d4be98]">Hello Loopie</span>
                  <span className="text-[#89b482]">&lt;/div&gt;</span>
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#d4be98]">
            Built for <span className="text-[#d8a657]">developers</span>
          </h2>
          <p className="text-xl text-[#a89984]">
            Everything you need to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-[#282828] border-[#3c3836] hover:border-[#d8a657] transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#d8a657] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-[#1d2021]">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#d4be98] group-hover:text-[#d8a657] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#a89984] leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-32">
        <Card className="bg-[#d8a657] border-0">
          <CardContent className="p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1d2021]">
              Ready to loop in?
            </h2>
            <p className="text-xl text-[#32302f] mb-8 max-w-2xl mx-auto">
              Join thousands of developers already building the future with
              Loopie
            </p>
            <SignUpButton mode="modal">
              <Button
                size="lg"
                className="bg-[#1d2021] text-[#d8a657] hover:bg-[#282828] text-lg px-8 py-6 font-semibold cursor-pointer"
              >
                Get Started for Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </SignUpButton>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#3c3836] bg-[#282828]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#d8a657] rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#1d2021]" />
              </div>
              <span className="text-lg font-bold text-[#d8a657]">Loopie</span>
            </div>
            <div className="text-[#a89984] text-sm">
              © 2026 Loopie. Built with Love, for developers.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
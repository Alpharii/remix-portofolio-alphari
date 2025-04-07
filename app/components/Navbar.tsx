"use client";

import {
  Menu,
  Home,
  User,
  Briefcase,
  Code,
  Settings,
  Mail,
} from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const NAV_ITEMS = [
  { label: "Home", href: "#home", icon: <Home size={20} /> },
  { label: "About", href: "#about", icon: <User size={20} /> },
  { label: "Experience", href: "#experience", icon: <Briefcase size={20} /> },
  { label: "Project", href: "#projects", icon: <Code size={20} /> },
  { label: "Tech Stack", href: "#techstack", icon: <Settings size={20} /> },
  { label: "Contact", href: "#contact", icon: <Mail size={20} /> },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background dark:bg-gray-900 z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Home size={24} className="text-primary" />
          <span className="font-bold text-lg">My Portfolio</span>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {NAV_ITEMS.map((item) => (
            <Button key={item.label} variant="ghost" asChild>
              <a href={item.href} className="flex items-center gap-2">
                {item.icon}
                <span>{item.label}</span>
              </a>
            </Button>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 mt-8">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 text-base hover:text-primary transition"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

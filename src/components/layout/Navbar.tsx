
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItemProps {
  title: string;
  items?: { title: string; href: string }[];
  href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, items, href }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  if (!items?.length) {
    return (
      <Link
        to={href || "#"}
        className="px-5 py-2 text-sm text-vercel-600 transition-colors hover:text-vercel-950"
      >
        {title}
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-1 px-5 py-2 text-sm text-vercel-600 transition-colors hover:text-vercel-950"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute left-0 z-50 mt-1 w-48 rounded-md border border-vercel-100 bg-white p-2 shadow-medium animate-fadeIn",
            isMobile && "relative w-full"
          )}
        >
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="block rounded-md px-4 py-2 text-sm text-vercel-600 transition-colors hover:bg-vercel-50 hover:text-vercel-950"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItemProps[] = [
    {
      title: "Features",
      items: [
        { title: "Previews", href: "#" },
        { title: "Analytics", href: "#" },
        { title: "Edge Functions", href: "#" },
        { title: "Infrastructure", href: "#" },
      ],
    },
    {
      title: "Templates",
      href: "#",
    },
    {
      title: "Integrations",
      items: [
        { title: "Vercel for GitHub", href: "#" },
        { title: "Vercel for GitLab", href: "#" },
        { title: "Vercel for Bitbucket", href: "#" },
      ],
    },
    {
      title: "Customers",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "glassmorphism py-3 shadow-subtle"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            {/* Vercel logo replacement */}
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black text-white">
              <span className="absolute text-lg font-bold">▲</span>
            </div>
            <span className="ml-2 text-xl font-semibold">Vercel</span>
          </Link>

          {!isMobile && (
            <div className="ml-10 hidden items-center space-x-1 md:flex">
              {navItems.map((item, idx) => (
                <NavItem
                  key={idx}
                  title={item.title}
                  items={item.items}
                  href={item.href}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!isMobile && (
            <>
              <Link
                to="#"
                className="px-5 py-2 text-sm text-vercel-600 transition-colors hover:text-vercel-950"
              >
                Contact
              </Link>
              <Link
                to="#"
                className="px-5 py-2 text-sm text-vercel-600 transition-colors hover:text-vercel-950"
              >
                Login
              </Link>
            </>
          )}
          
          <Button
            variant="glow" 
            className="hidden md:flex"
          >
            Start Deploying
          </Button>

          {isMobile && (
            <button
              className="ml-2 p-2 text-vercel-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full w-full animate-fadeIn bg-white px-4 py-5 shadow-medium">
          <div className="flex flex-col space-y-2">
            {navItems.map((item, idx) => (
              <NavItem
                key={idx}
                title={item.title}
                items={item.items}
                href={item.href}
              />
            ))}
            <div className="my-2 h-px w-full bg-vercel-100" />
            <Link
              to="#"
              className="py-2 text-sm text-vercel-600 transition-colors hover:text-vercel-950"
            >
              Contact
            </Link>
            <Link
              to="#"
              className="py-2 text-sm text-vercel-600 transition-colors hover:text-vercel-950"
            >
              Login
            </Link>
            <Button variant="glow" className="mt-2 w-full">
              Start Deploying
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

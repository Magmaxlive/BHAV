"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { TICKET_URL } from "@/lib/config";

const NAV_ITEMS = [
  { to: "about-bhav", label: "About BHAV" },
  { to: "about-shobana", label: "About Shobana" },
  { to: "experience", label: "The Experience" },
  { to: "about-ata", label: "ATA" },

];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-bhav-maroon transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(255,209,143,0.15)]" : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-[clamp(1.25rem,5vw,3rem)] py-5"
      >
        <Link
          to="hero"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer font-highlight text-[1.5rem] tracking-[0.08em] text-bhav-gold"
        >
          BHAV
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass="text-bhav-gold"
                className="cursor-pointer text-[0.9375rem] font-medium text-bhav-cream transition-colors hover:text-bhav-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bhav-gold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-on-dark"
            style={{ minHeight: "44px", padding: "0 1.25rem", fontSize: "0.875rem" }}
          >
            Book Your Tickets
          </a>
        </div>

        <button
          type="button"
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((v) => !v)}
          className="relative z-50 text-bhav-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bhav-gold lg:hidden"
        >
          {drawerOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {drawerOpen && (
        <div className="fixed inset-x-0 top-0 z-40 flex min-h-screen flex-col items-center justify-center gap-6 bg-bhav-maroon px-8 py-24 lg:hidden">
          <ul className="flex flex-col items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={closeDrawer}
                  className="cursor-pointer text-lg font-medium text-bhav-cream hover:text-bhav-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDrawer}
            className="btn btn-on-dark"
          >
            Book Your Tickets
          </a>
        </div>
      )}
    </header>
  );
}

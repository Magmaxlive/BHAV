"use client";

import { Link } from "react-scroll";
import { FaRegCalendar, FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { EVENT } from "@/lib/config";

const QUICK_LINKS = [
  { to: "about-bhav", label: "About BHAV" },
  { to: "about-shobana", label: "About Shobana" },
  { to: "experience", label: "The Experience" },
  { to: "about-ata", label: "ATA" },
];

const EVENT_DETAILS = [
  {
    icon: <FaRegCalendar size={15} />,
    label: EVENT.dateLong,
  },
  {
    icon: <FaRegClock size={15} />,
    label: EVENT.time,
  },
  {
    icon: <FaLocationDot size={16} />,
    label: (
      <>
        Bruce Mason Centre,
        <br />
        Takapuna, Auckland
      </>
    ),
    href: "https://www.google.com/maps/place/Bruce+Mason+Centre/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-bhav-maroon text-bhav-cream">
      <hr className="rule-gold" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-[clamp(1.25rem,5vw,3rem)] pt-[clamp(3rem,6vw,5rem)] pb-[clamp(2.5rem,5vw,4rem)]">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-20">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <span
              className="font-highlight text-bhav-gold"
              style={{
                fontSize: "2.5rem",
                letterSpacing: "0.08em",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              BHAV
            </span>
            <p
              className="max-w-[42ch] text-bhav-cream/85"
              style={{ fontSize: "0.9375rem", lineHeight: 1.8 }}
            >
              A live celebration of Bharatanatyam, Carnatic music and theatre with Padma Bhushan Shobana.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-3">
            <h2
              className="font-highlight text-bhav-gold"
              style={{ fontSize: "0.9375rem", letterSpacing: "0.22em", fontWeight: 500 }}
            >
              Explore
            </h2>
            <ul className="flex flex-col gap-4">
              {QUICK_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth
                    duration={500}
                    offset={-80}
                    className="cursor-pointer text-[0.9375rem] text-bhav-cream/90 transition-colors hover:text-bhav-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-4">
            <h2
              className="font-highlight text-bhav-gold"
              style={{ fontSize: "0.9375rem", letterSpacing: "0.22em", fontWeight: 500 }}
            >
              Event Details
            </h2>
            <ul className="flex flex-col gap-5">
              {EVENT_DETAILS.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-[3px] shrink-0 text-bhav-gold">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.9375rem] leading-relaxed text-bhav-cream/90 transition-colors hover:text-bhav-gold"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-[0.9375rem] leading-relaxed text-bhav-cream/90">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      <hr className="rule-gold" aria-hidden="true" style={{ opacity: 0.4 }} />
      <div className="mx-auto max-w-7xl px-[clamp(1.25rem,5vw,3rem)] py-6 text-center text-xs tracking-wider text-bhav-cream/70">
        © 2026 BHAV by SHOBANA. All rights reserved.
      </div>
    </footer>
  );
}

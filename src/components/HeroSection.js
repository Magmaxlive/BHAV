import Image from "next/image";
import { TICKET_URL, EVENT } from "@/lib/config";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-bhav-maroon text-bhav-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgb(151 6 1 / 0.35) 0%, rgb(83 0 0 / 0) 60%), radial-gradient(80% 60% at 50% 100%, rgb(0 0 0 / 0.35) 0%, rgb(83 0 0 / 0) 65%)",
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 items-center gap-12 px-[clamp(1.25rem,5vw,3rem)] py-[clamp(3rem,6vw,5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div className="bhav-hero-enter flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <h1 className="flex flex-col gap-3">
            <span
              className="font-highlight text-bhav-gold"
              style={{
                fontSize: "clamp(4.5rem, 14vw, 10rem)",
                lineHeight: 0.88,
                letterSpacing: "0.04em",
                fontWeight: 700,
              }}
            >
              BHAV
            </span>
            <span
              className="font-highlight italic text-bhav-cream"
              style={{
                fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              Bharatha’s 5th Vedha
            </span>
          </h1>

          <div className="flex w-full flex-col items-center gap-6 lg:items-start">
            <hr className="rule-gold" aria-hidden="true" style={{ maxWidth: "6rem" }} />
            <p
              className="font-highlight text-bhav-gold"
              style={{
                fontSize: "clamp(1.25rem, 2.4vw, 1.875rem)",
                lineHeight: 1.25,
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              Padma Bhushan Shobana
            </p>
          </div>

          <p
            className="max-w-[52ch] text-bhav-cream/95"
            style={{
              fontSize: "clamp(1.0625rem, 1.5vw, 1.1875rem)",
              lineHeight: 1.65,
            }}
          >
            Experience an extraordinary celebration of Indian classical arts with Shobana in BHAV, Bharatha’s 5th Vedha.
          </p>

          <ul className="flex flex-col items-center gap-2 text-bhav-cream lg:items-start">
            <li>
              <time
                dateTime={EVENT.dateISO}
                className="font-medium tracking-wide"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)" }}
              >
                {EVENT.dateLong} &nbsp;·&nbsp; {EVENT.time}
              </time>
            </li>
            <li
              className="font-medium tracking-wide text-bhav-cream/90"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)" }}
            >
              {EVENT.venue}
            </li>
          </ul>

          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-on-dark mt-2"
          >
            Book Your Tickets
          </a>
        </div>

        <figure className="relative order-first mx-auto w-full max-w-[520px] lg:order-last lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-bhav-crimson/20">
            <Image
              src="/images/shobana.jpg"
              alt="Padma Bhushan Shobana"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgb(83 0 0 / 0) 55%, rgb(83 0 0 / 0.55) 100%)",
              }}
            />
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-4 -right-4 hidden h-full w-full rounded-sm border border-bhav-gold/50 lg:block"
          />
        </figure>
      </div>

      <hr className="rule-gold relative z-10" aria-hidden="true" />
    </section>
  );
}

import Image from "next/image";

export default function ProductionSection() {
  return (
    <section id="about-shobana" className="bg-bhav-gold text-bhav-maroon">
      <div className="mx-auto max-w-7xl px-[clamp(1.25rem,5vw,3rem)] py-[clamp(3rem,6vw,5rem)]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
          <figure className="relative order-1 mx-auto w-full max-w-[440px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-bhav-cream">
              <Image
                src="/images/shobana.jpg"
                alt="Padma Bhushan Shobana"
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-center"
              />
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 -right-4 hidden h-full w-full rounded-sm border border-bhav-crimson/50 lg:block"
            />
          </figure>

          <div className="order-2 flex flex-col gap-8">
            <h2
              className="text-bhav-crimson"
              style={{
                fontSize: "clamp(2rem, 4.8vw, 3.5rem)",
                lineHeight: 1.05,
                fontWeight: 500,
              }}
            >
              Padma Bhushan Shobana
            </h2>
            <hr className="rule-crimson" aria-hidden="true" />

            <div className="flex flex-col gap-6">
              <p
                className="max-w-[80ch]"
                style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)", lineHeight: 1.75 }}
              >
                Padma Bhushan Shobana is one of India’s celebrated Bharatanatyam artistes, actresses and choreographers.
              </p>
              <p
                className="max-w-[80ch]"
                style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)", lineHeight: 1.75 }}
              >
                A two-time National Film Award winner, Shobana has built an acclaimed career across Indian cinema, classical dance and theatre. Her artistry has taken her to audiences across India and around the world.
              </p>
              <p
                className="max-w-[80ch]"
                style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)", lineHeight: 1.75 }}
              >
                Through her work in dance and theatre, she continues to bring the depth, beauty and expressive power of Indian classical arts to contemporary audiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

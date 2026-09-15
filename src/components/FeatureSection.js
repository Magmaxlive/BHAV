const items = [
  {
    title: "Bharatanatyam",
    description: "Experience the expressive power of classical Indian dance.",
  },
  {
    title: "Live Carnatic Music",
    description: "Be immersed in the energy and richness of live classical music.",
  },
  {
    title: "Theatre & Storytelling",
    description: "A distinctive performance bringing music, movement and theatre together.",
  },
];

export default function FeatureSection() {
  return (
    <section id="experience" className="relative bg-bhav-crimson text-bhav-cream">
      <div className="mx-auto max-w-7xl px-[clamp(1.25rem,5vw,3rem)] py-[clamp(3rem,6vw,5rem)]">
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center">
          <h2
            className="text-bhav-gold"
            style={{
              fontSize: "clamp(2rem, 4.8vw, 3.5rem)",
              lineHeight: 1.05,
              fontWeight: 500,
            }}
          >
            The BHAV Experience
          </h2>
          <hr
            aria-hidden="true"
            className="h-px w-16 border-0"
            style={{ backgroundColor: "rgb(255 209 143 / 0.6)" }}
          />
        </div>

        <ul className="mt-16 grid grid-cols-1 border-y border-bhav-gold/30 lg:mt-24 lg:grid-cols-3 lg:divide-x lg:divide-bhav-gold/30">
          {items.map((item, idx) => (
            <li
              key={item.title}
              className={`flex flex-col gap-4 px-2 py-10 text-center lg:px-10 lg:py-12 ${
                idx > 0 ? "border-t border-bhav-gold/30 lg:border-t-0" : ""
              }`}
            >
              <h3
                className="text-bhav-gold"
                style={{
                  fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                  lineHeight: 1.2,
                  fontWeight: 500,
                }}
              >
                {item.title}
              </h3>
              <p
                className="mx-auto max-w-[36ch] text-bhav-cream"
                style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)", lineHeight: 1.7 }}
              >
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

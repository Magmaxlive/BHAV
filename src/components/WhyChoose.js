export default function WhyChoose() {
  return (
    <section id="about-ata" className="bg-bhav-cream text-bhav-maroon">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-[clamp(1.25rem,5vw,3rem)] py-[clamp(3rem,6vw,5rem)] text-center">
        <div className="flex flex-col items-center gap-6">
          <h2
            className="text-bhav-crimson"
            style={{
              fontSize: "clamp(2rem, 4.8vw, 3.5rem)",
              lineHeight: 1.05,
              fontWeight: 500,
            }}
          >
            Auckland Tamil Association
          </h2>
          <hr className="rule-crimson" aria-hidden="true" />
          {/* TODO: add Auckland Tamil Association logo */}
        </div>

        <div className="flex max-w-[80ch] flex-col gap-6">
          <p style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)", lineHeight: 1.75 }}>
            Auckland Tamil Association (ATA) is committed to bringing the Tamil community together through culture, heritage, arts and community engagement.
          </p>
          <p style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)", lineHeight: 1.75 }}>
            Through its initiatives and events, ATA creates opportunities for people to celebrate Tamil identity, connect with one another and share the richness of Tamil culture with the wider Auckland community.
          </p>
          <p style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)", lineHeight: 1.75 }}>
            For BHAV, Auckland Tamil Association is proud to bring audiences together for an exceptional evening of Indian classical dance, music and theatre, featuring Padma Bhushan Shobana.
          </p>
        </div>
      </div>
    </section>
  );
}

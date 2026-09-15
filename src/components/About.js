export default function About() {
  return (
    <section id="about-bhav" className="bg-bhav-cream text-bhav-maroon">
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
            About BHAV
          </h2>
          <hr className="rule-crimson" aria-hidden="true" />
        </div>

        <div className="flex max-w-[80ch] flex-col gap-6">
          <p style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)", lineHeight: 1.75 }}>
            BHAV, Bharatha’s 5th Vedha brings together the expressive worlds of Bharatanatyam, Carnatic music and theatre in a unique live performance.
          </p>
          <p style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)", lineHeight: 1.75 }}>
            Rooted in the tradition of the Natya Shastra, BHAV explores the relationship between music and movement, bringing dance and live music together as one artistic experience.
          </p>
          <p style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)", lineHeight: 1.75 }}>
            Featuring celebrated Bharatanatyam artiste and actress Padma Bhushan Shobana, alongside world-renowned Carnatic vocalist Abhishek Raghuram, BHAV offers audiences an immersive celebration of Indian classical arts.
          </p>
        </div>

        <div className="mt-6 flex w-full flex-col items-center gap-6 border-t border-bhav-crimson/20 pt-12">
          <hr className="rule-crimson" aria-hidden="true" />
          <p
            className="font-highlight italic text-bhav-crimson"
            style={{
              fontSize: "clamp(1.5rem, 3.4vw, 2.5rem)",
              lineHeight: 1.3,
              fontWeight: 400,
              maxWidth: "28ch",
            }}
          >
            Where dance meets music, and music becomes movement.
          </p>
        </div>
      </div>
    </section>
  );
}

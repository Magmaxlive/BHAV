import Image from "next/image";

export default function Sponsors() {
  return (
    <section id="sponsor" className="bg-bhav-gold text-bhav-maroon">
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
            Title Sponsor
          </h2>
          <hr className="rule-crimson" aria-hidden="true" />
        </div>

        <div className="flex w-full max-w-[200px] items-center justify-center rounded-sm bg-bhav-cream p-6 shadow-[0_1px_0_rgba(151,6,1,0.12)]">
          <Image
            src="/images/kripalogo.svg"
            alt="Kripa Financial Solutions logo"
            width={200}
            height={100}
            className="h-auto w-full object-contain"
          />
        </div>

        <h3
          className="text-bhav-maroon"
          style={{
            fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
            lineHeight: 1.2,
            fontWeight: 500,
          }}
        >
          Kripa Financial Solutions
        </h3>

        <div className="flex max-w-[80ch] flex-col gap-6">
          <p style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)", lineHeight: 1.75 }}>
            Kripa Financial Solutions is proud to be the Title Sponsor of BHAV, supporting this special celebration of Indian art, culture and artistic excellence.
          </p>
          <p style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)", lineHeight: 1.75 }}>
            With a strong commitment to the community, Kripa Financial Solutions is delighted to support an event that brings people together and provides Auckland audiences with the opportunity to experience an acclaimed artist of Shobana’s stature live on stage.
          </p>
        </div>
      </div>
    </section>
  );
}

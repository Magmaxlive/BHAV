import QRCode from "qrcode";
import { TICKET_URL, EVENT } from "@/lib/config";

const isTicketPlaceholder = !TICKET_URL || TICKET_URL === "#";

async function getTicketQrSvg() {
  if (isTicketPlaceholder) return null;
  return QRCode.toString(TICKET_URL, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 2,
    color: {
      dark: "#530000",
      light: "#FCE2BE",
    },
  });
}

export default async function BookSection() {
  const qrSvg = await getTicketQrSvg();

  return (
    <section id="book" className="relative bg-bhav-maroon text-bhav-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 50% at 50% 0%, rgb(151 6 1 / 0.3) 0%, rgb(83 0 0 / 0) 60%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-[clamp(1.25rem,5vw,3rem)] py-[clamp(3rem,6vw,5rem)] text-center">
        <div className="flex flex-col items-center gap-6">
          <h2
            className="text-bhav-gold"
            style={{
              fontSize: "clamp(2rem, 4.8vw, 3.5rem)",
              lineHeight: 1.05,
              fontWeight: 500,
            }}
          >
            Be Part of BHAV
          </h2>
          <hr
            aria-hidden="true"
            className="h-px w-16 border-0"
            style={{ backgroundColor: "rgb(255 209 143 / 0.6)" }}
          />
        </div>

        <p
          className="max-w-[60ch] text-bhav-cream/95"
          style={{ fontSize: "clamp(1.0625rem, 1.6vw, 1.25rem)", lineHeight: 1.6 }}
        >
          Join us for an unforgettable evening with Padma Bhushan Shobana.
        </p>

        <div className="flex flex-col items-center gap-3">
          <p
            className="font-highlight text-bhav-cream"
            style={{
              fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
              lineHeight: 1.2,
              fontWeight: 500,
            }}
          >
            BHAV, Bharatha’s 5th Vedha
          </p>
          <time
            dateTime={`${EVENT.dateISO}T${EVENT.timeISO}+13:00`}
            className="font-medium tracking-wide text-bhav-gold"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", lineHeight: 1.5 }}
          >
            17 October 2026 &nbsp;|&nbsp; 6:00 PM
          </time>
          <p
            className="font-medium tracking-wide"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", lineHeight: 1.5 }}
          >
            {EVENT.venue}
          </p>
        </div>

        <div className="mt-4 flex flex-col items-center gap-8  lg:items-center lg:gap-12">
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-on-dark"
          >
            Book Your Tickets
          </a>

          {qrSvg ? (
            <div
              role="img"
              aria-label="QR code to book tickets for BHAV"
              className="h-[180px] w-[180px] overflow-hidden rounded-sm bg-bhav-cream p-2 [&>svg]:h-full [&>svg]:w-full"
              dangerouslySetInnerHTML={{ __html: qrSvg }}
            />
          ) : (
            <div
              aria-hidden="true"
              className="h-[180px] w-[180px] rounded-sm bg-bhav-cream"
            />
          )}
        </div>
      </div>
    </section>
  );
}

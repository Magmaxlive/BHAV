"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsApp() {
  return (
    <FloatingWhatsApp
      phoneNumber="+64221637881"
      accountName="7 entertainment"
      chatMessage="Hi 👋 How can we help you?"
      avatar="/images/logo.webp"
      className="text-black"
    />
  );
}

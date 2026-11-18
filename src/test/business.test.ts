import { describe, expect, it } from "vitest";
import { business, whatsappUrl, demoBookingUrl } from "@/lib/business";

describe("Business contact and demo handoff", () => {
  it("sends WhatsApp enquiries to the approved Malawi number", () => {
    expect(new URL(whatsappUrl("Hello")).pathname).toBe("/265990000358");
  });
  it("uses the approved email address", () => {
    expect(business.email).toBe("walutech360@gmail.com");
  });
  it("preserves the selected service in the demo handoff without claiming an appointment", () => {
    const url = new URL(demoBookingUrl("Knotless braids"));
    expect(url.searchParams.get("text")).toBe(
      "Hi WaluTech! I tried the Tapline demo and selected Knotless braids. I'd like a Tapline website for my business.",
    );
  });
});

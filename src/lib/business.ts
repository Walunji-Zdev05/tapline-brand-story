export const business = {
  phone: "265990000358",
  displayPhone: "+265 990 000 358",
  email: "walutech360@gmail.com",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

export const salonServices = [
  {
    id: "braids",
    name: "Knotless braids",
    category: "Braids",
    duration: "3–4 hours",
    price: 25000,
    detail: "Lightweight braids. A beautiful, natural finish.",
  },
  {
    id: "cornrows",
    name: "Classic cornrows",
    category: "Braids",
    duration: "1–2 hours",
    price: 10000,
    detail: "Neat, timeless rows styled your way.",
  },
  {
    id: "wash",
    name: "Wash & blow-dry",
    category: "Hair care",
    duration: "45 minutes",
    price: 8000,
    detail: "A fresh start, with a gentle wash and finish.",
  },
  {
    id: "cut",
    name: "Cut & shape",
    category: "Hair care",
    duration: "45 minutes",
    price: 6000,
    detail: "A tidy trim or a fresh new shape.",
  },
];

export function demoBookingUrl(serviceName: string) {
  return whatsappUrl(
    `Hi WaluTech! I tried the Tapline demo and selected ${serviceName}. I'd like a Tapline website for my business.`,
  );
}

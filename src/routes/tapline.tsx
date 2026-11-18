import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle, Clock, Scissors, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import salon from "@/assets/tapline-salon.jpg";
import { salonServices, demoBookingUrl, whatsappUrl } from "@/lib/business";

export const Route = createFileRoute("/tapline")({
  component: Tapline,
  head: () => ({
    meta: [
      { title: "Tapline Demo — Dzuwa Hair Studio | WaluTech" },
      {
        name: "description",
        content:
          "Explore a fictional salon website powered by Tapline. Browse services, select a style, and try the WhatsApp booking handoff.",
      },
      { property: "og:title", content: "Dzuwa Hair Studio — A Tapline Demo" },
      {
        property: "og:description",
        content: "Your salon. Your website. One tap to book. Try Tapline by WaluTech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Tapline() {
  const [category, setCategory] = useState("All services");
  const [selected, setSelected] = useState<string>();
  const selectedService = salonServices.find((service) => service.id === selected);
  return (
    <div className="salon-site">
      <div className="demo-banner">
        <Link to="/">
          <ArrowLeft size={14} /> WaluTech
        </Link>
        <span>FICTIONAL SALON · TAPLINE DEMO</span>
        <a
          href={whatsappUrl("Hi WaluTech! I’d like a Tapline website for my business.")}
          target="_blank"
          rel="noreferrer"
        >
          Get a website like this <ArrowUpRight size={14} />
        </a>
      </div>
      <header className="salon-header container">
        <a href="#" className="salon-logo">
          <Scissors size={23} />
          <span>
            dzuwa<span>HAIR STUDIO</span>
          </span>
        </a>
        <nav>
          <a href="#salon-services">Our services</a>
          <a href="#salon-about">The studio</a>
        </nav>
        <Button asChild variant="salon" size="touch">
          <a href="#salon-services">
            Find your next look <ArrowUpRight />
          </a>
        </Button>
      </header>
      <main>
        <section className="salon-hero">
          <img
            src={salon}
            alt="A woman with knotless braids in a sunlit salon"
            width={1536}
            height={1024}
          />
          <div className="salon-hero-shade" />
          <div className="container salon-hero-copy">
            <span className="eyebrow">YOUR HAIR. YOUR SUNSHINE.</span>
            <h1>
              Dzuwa
              <br />
              Hair Studio<span>.</span>
            </h1>
            <p>
              A fresh look. A little me-time.
              <br />
              Hair that feels as good as it looks.
            </p>
            <Button asChild variant="salon" size="touch">
              <a href="#salon-services">
                Explore our services <ArrowUpRight />
              </a>
            </Button>
          </div>
          <span className="salon-hero-caption">
            <Leaf size={15} />A little care. A lot of confidence.
          </span>
        </section>
        <section id="salon-services" className="section container">
          <div className="salon-section-heading">
            <span className="eyebrow">A LOOK THAT’S ALL YOU</span>
            <h2>Make time for yourself.</h2>
            <p>Pick your service. Your next good hair day starts here.</p>
          </div>
          <div className="salon-filters" aria-label="Filter services">
            {["All services", "Braids", "Hair care"].map((item) => (
              <Button
                key={item}
                variant={item === category ? "salon" : "ghost"}
                size="touch"
                aria-pressed={item === category}
                onClick={() => setCategory(item)}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="salon-services-grid">
            {salonServices
              .filter((service) => category === "All services" || service.category === category)
              .map((service) => (
                <article
                  className={`salon-service-card ${selected === service.id ? "selected" : ""}`}
                  key={service.id}
                >
                  <div className="salon-service-top">
                    <span>{service.category}</span>
                    <Scissors size={20} />
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.detail}</p>
                  <span className="service-duration">
                    <Clock size={14} />
                    {service.duration}
                  </span>
                  <div className="salon-price-row">
                    <strong>MK {service.price.toLocaleString("en-US")}</strong>
                    <Button
                      variant={selected === service.id ? "salon" : "outline"}
                      size="touch"
                      onClick={() => setSelected(service.id)}
                      aria-pressed={selected === service.id}
                    >
                      {selected === service.id ? (
                        <>
                          <Check />
                          Selected
                        </>
                      ) : (
                        <>
                          Select
                          <ArrowUpRight />
                        </>
                      )}
                    </Button>
                  </div>
                </article>
              ))}
          </div>
          <div className="booking-panel" aria-live="polite">
            <div>
              <small>YOUR NEXT GOOD HAIR DAY</small>
              <h3>{selectedService ? selectedService.name : "Choose a service above"}</h3>
              <p>
                {selectedService
                  ? `MK ${selectedService.price.toLocaleString("en-US")} · ${selectedService.duration}`
                  : "Select your look to try the WhatsApp handoff."}
              </p>
            </div>
            {selectedService ? (
              <Button asChild variant="whatsapp" size="touch">
                <a href={demoBookingUrl(selectedService.name)} target="_blank" rel="noreferrer">
                  Try WhatsApp booking
                  <MessageCircle />
                </a>
              </Button>
            ) : (
              <Button variant="whatsapp" size="touch" disabled>
                Try WhatsApp booking
                <MessageCircle />
              </Button>
            )}
          </div>
          <p className="salon-disclaimer">
            This is a fictional salon. All prices are examples. Demo booking messages go to
            WaluTech, not a salon; no appointment is made.
          </p>
        </section>
        <section id="salon-about" className="salon-about">
          <div className="container">
            <Leaf size={30} />
            <span className="eyebrow">THE DZUWA FEELING</span>
            <h2>
              A little sunshine.
              <br />A style that’s yours.
            </h2>
            <p>
              Thoughtful hair care, beautiful braids, and a moment to slow down.
              <br />A fictional studio created to show what your own Tapline website could be.
            </p>
            <Button asChild variant="salon" size="touch">
              <a
                href={whatsappUrl(
                  "Hi WaluTech! I saw the Dzuwa demo and would like a Tapline website.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                Make this yours <ArrowUpRight />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <footer className="salon-footer container">
        <span>dzuwa / hair studio</span>
        <Link to="/">
          Powered by <strong>Tapline</strong> · Made by WaluTech <ArrowUpRight size={14} />
        </Link>
      </footer>
    </div>
  );
}

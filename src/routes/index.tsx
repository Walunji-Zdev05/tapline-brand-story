import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Palette,
  Monitor,
  MessageCircle,
  Mail,
  MapPin,
  Check,
  Sparkles,
  Globe,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/theme";
import logo from "@/assets/walutech-logo.png.asset.json";
import salon from "@/assets/tapline-salon.jpg";
import { business, whatsappUrl } from "@/lib/business";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WaluTech — Digital work with personality." },
      {
        name: "description",
        content:
          "Web development, digital design and digital services in Blantyre, Malawi. Meet Tapline, your salon’s own WhatsApp booking website.",
      },
      { property: "og:title", content: "WaluTech — Digital work with personality." },
      {
        property: "og:description",
        content: "Thoughtful websites and design for growing businesses. Made in Blantyre, Malawi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const services = [
  {
    icon: Code2,
    title: "Web development",
    description:
      "A home for your business on the internet. Beautiful, easy to use, and built to look good on every phone.",
    tags: ["Business websites", "Portfolios", "Booking pages"],
    tone: "blue",
  },
  {
    icon: Palette,
    title: "Digital design",
    description:
      "Make a good first impression. Eye-catching visuals that feel like your brand, not everybody else’s.",
    tags: ["Flyers & posters", "Social media graphics", "Brand visuals"],
    tone: "violet",
  },
  {
    icon: Monitor,
    title: "Digital services",
    description:
      "A little help with the digital things. Practical support to get your business looking its best online.",
    tags: ["Business profiles", "Digital documents", "Online presence"],
    tone: "cyan",
  },
];

function Index() {
  return (
    <div className="studio-site">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand-logo" aria-label="WaluTech home">
            <img src={logo.url} alt="WaluTech W logo" width="44" height="44" />
            <span>
              Walu<span className="brand-text">Tech</span>
              <span className="brand-dot">.</span>
            </span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#tapline">
              Tapline
              <span className="nav-dot" />
            </a>
            <a href="#process">How it works</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <ThemeSwitch />
            <Button asChild variant="whatsapp" size="touch">
              <a
                href={whatsappUrl("Hi WaluTech! I’d like to talk about a project.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle />
                Let’s talk
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="studio-hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-content">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" /> A DIGITAL STUDIO IN BLANTYRE, MALAWI
            </div>
            <div className="hero-brand">WaluTech / CREATE. BUILD. GROW.</div>
            <h1>
              Digital work
              <br />
              with <span className="personality">personality.</span>
            </h1>
            <p>
              Websites, design, and a little digital magic.
              <br className="desktop-break" /> Helping your business look good and go further.
            </p>
            <div className="hero-actions">
              <Button asChild variant="brand" size="touch">
                <a
                  href={whatsappUrl("Hi WaluTech! I’d like a quote for my project.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Let’s build something <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="soft" size="touch">
                <Link to="/tapline">
                  Meet Tapline <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="hero-footnote">
              <span>
                <Check />
                Made for your business
              </span>
              <span>
                <Smartphone />
                Phone-first, always
              </span>
              <span>
                <MapPin />
                Locally built
              </span>
            </div>
          </div>
          <div className="hero-corner corner-left">
            <Code2 />
            <span>Ideas into websites.</span>
          </div>
          <div className="hero-corner corner-right">
            <Sparkles />
            <span>A little different. By design.</span>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">01 / WHAT WE DO</span>
                <h2>
                  Big ideas. <span className="muted-heading">Thoughtful execution.</span>
                </h2>
              </div>
              <p>
                Small business? Big ambition?
                <br />
                You’re in the right place.
              </p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, description, tags, tone }) => (
                <article className={`service-card service-${tone}`} key={title}>
                  <div className="service-top">
                    <div className="service-icon">
                      <Icon size={25} />
                    </div>
                    <ArrowUpRight size={20} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="service-tags">
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    className="text-link"
                    href={whatsappUrl(
                      `Hi WaluTech! I’m interested in ${title.toLowerCase()}. Can I get a quote?`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Let’s talk about it <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tapline" className="section tapline-section">
          <div className="container tapline-layout">
            <div className="tapline-copy">
              <span className="eyebrow">02 / MEET OUR FIRST PRODUCT</span>
              <div className="product-heading">
                <h2>
                  Tapline<span className="brand-dot">.</span>
                </h2>
                <span className="product-badge">BY WALUTECH</span>
              </div>
              <h3>
                Your salon. Your website.
                <br />
                One tap to book.
              </h3>
              <p>
                Give your salon or barbershop a proper place online. Your customers browse styles,
                see your prices, and book straight through WhatsApp.
              </p>
              <ul className="check-list">
                <li>
                  <Check />
                  Your own beautiful, mobile-friendly website
                </li>
                <li>
                  <Check />
                  Your services and prices, all in one place
                </li>
                <li>
                  <Check />
                  Bookings in the WhatsApp you already use
                </li>
              </ul>
              <div className="tapline-actions">
                <Button asChild variant="brand" size="touch">
                  <Link to="/tapline">
                    Explore the demo <ArrowUpRight />
                  </Link>
                </Button>
                <a
                  className="text-link"
                  href={whatsappUrl(
                    "Hi WaluTech! I’d like a Tapline website for my salon or barbershop.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get my Tapline <ArrowRight size={16} />
                </a>
              </div>
              <small>No new app. No complicated setup. Just your business.</small>
            </div>
            <div className="tapline-preview">
              <div className="preview-label">
                <span className="status-dot" /> A LITTLE PREVIEW OF WHAT’S POSSIBLE
              </div>
              <Link
                to="/tapline"
                className="browser-preview"
                aria-label="Open Dzuwa Hair Studio Tapline demo"
              >
                <div className="browser-bar">
                  <div className="browser-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>
                    <Globe size={11} /> dzuwa · powered by Tapline
                  </span>
                  <ArrowUpRight size={14} />
                </div>
                <div className="salon-preview-cover">
                  <img
                    src={salon}
                    alt="Braided hairstyle in the fictional Dzuwa salon"
                    width={1536}
                    height={1024}
                    loading="lazy"
                  />
                  <div>
                    <span>YOUR HAIR. YOUR SUNSHINE.</span>
                    <h4>
                      Dzuwa
                      <br />
                      Hair Studio
                    </h4>
                  </div>
                </div>
                <div className="preview-services">
                  <div>
                    <strong>A little self-care starts here.</strong>
                    <span>Find your next look</span>
                  </div>
                  <div className="preview-service">
                    <span>
                      Knotless braids<small>3–4 hours</small>
                    </span>
                    <strong>MK 25,000</strong>
                  </div>
                  <div className="preview-service">
                    <span>
                      Wash & blow-dry<small>45 minutes</small>
                    </span>
                    <strong>MK 8,000</strong>
                  </div>
                  <span className="preview-book">
                    Book on WhatsApp <MessageCircle size={15} />
                  </span>
                </div>
              </Link>
              <span className="demo-note">
                Dzuwa Hair Studio is a fictional demo. Prices are examples.
              </span>
            </div>
          </div>
        </section>

        <section id="process" className="section process-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">03 / FROM HELLO TO LAUNCH</span>
                <h2>
                  Good work. <span className="muted-heading">Simple process.</span>
                </h2>
              </div>
              <p>
                No jargon. No back-and-forth forever.
                <br />
                Just a friendly way to get things done.
              </p>
            </div>
            <div className="steps-grid">
              {[
                {
                  title: "Say hello",
                  text: "Send a WhatsApp message. Tell us about your business, your idea, and what you need.",
                },
                {
                  title: "We make it yours",
                  text: "We agree on a quote, then bring your idea to life. You take a look, and we fine-tune it together.",
                },
                {
                  title: "Go live. Get noticed.",
                  text: "Your website or design is ready. Share it with your customers and let your business shine.",
                },
              ].map((step, i) => (
                <div className="step" key={step.title}>
                  <span className="step-number">0{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
            <div className="quote-note">
              <MessageCircle size={17} />
              <span>Every business is different. Message us for a quote that fits yours.</span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-layout">
            <div>
              <span className="eyebrow">04 / YOUR NEXT GOOD IDEA STARTS HERE</span>
              <h2>
                Let’s make
                <br />
                something <span className="personality">yours.</span>
              </h2>
              <p>Have a project in mind? We’d love to hear it.</p>
              <span className="location">
                <MapPin size={15} />
                Blantyre, Malawi · Working with you, wherever you are.
              </span>
            </div>
            <div className="contact-options">
              <a
                href={whatsappUrl("Hi WaluTech! I have a project in mind.")}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">
                  <MessageCircle />
                </div>
                <div>
                  <small>MESSAGE US ON WHATSAPP</small>
                  <strong>{business.displayPhone}</strong>
                  <span>Let’s start a conversation</span>
                </div>
                <ArrowUpRight />
              </a>
              <a href={`mailto:${business.email}`} className="contact-item">
                <div className="contact-icon email-icon">
                  <Mail />
                </div>
                <div>
                  <small>MORE OF AN EMAIL PERSON?</small>
                  <strong>{business.email}</strong>
                  <span>Drop your idea in our inbox</span>
                </div>
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand-logo" href="#">
            <img src={logo.url} alt="" width="36" height="36" />
            <span>
              Walu<span className="brand-text">Tech</span>.
            </span>
          </a>
          <span>Digital work with personality.</span>
          <small>© 2026 WaluTech. Made with care in Malawi.</small>
          <a href="#" aria-label="Back to top">
            <ArrowUpRight size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}

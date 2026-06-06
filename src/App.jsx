import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  Instagram,
  Leaf,
  Menu,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  ShoppingBag,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import ProductCard from "./components/ProductCard";
import SectionHeading from "./components/SectionHeading";
import {
  businessInfo,
  navigationLinks,
  socialLinks,
  whatsappConfig,
} from "./config/site";
import { galleryImages, products, uspItems } from "./data/content";
import { useCart } from "./hooks/useCart";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const aboutPoints = [
  "Small-batch preparation",
  "Sweet items made with jaggery",
  "Fresh ingredients in every batch",
  "Careful and clean handling",
];

const contactCards = [
  { icon: Phone, title: "Phone", value: businessInfo.phone },
  { icon: MessageCircle, title: "WhatsApp", value: businessInfo.whatsapp },
  { icon: Instagram, title: "Instagram", value: businessInfo.instagram },
  { icon: Leaf, title: "Address", value: businessInfo.address, wide: true },
  { icon: Clock3, title: "Business Hours", value: businessInfo.hours },
];

const buildWhatsAppUrl = (cartItems, total) => {
  const lines = [
    "Hello Bodhana Home Foods,",
    "",
    "I would like to place an order:",
    "",
    ...cartItems.map((item) => `- ${item.name} x${item.quantity}`),
    "",
    `Total: ${formatCurrency(total)}`,
    "",
    "Please confirm availability.",
    "",
    "Thank you.",
  ];

  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const whatsappCheckoutUrl = useMemo(
    () => buildWhatsAppUrl(cartItems, totalPrice),
    [cartItems, totalPrice],
  );

  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-brown)]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(184,138,68,0.16),transparent_28%),linear-gradient(180deg,rgba(47,93,80,0.08),transparent_22%),linear-gradient(180deg,#faf7f2_0%,#f7f1e7_48%,#faf7f2_100%)]" />

      <header className="sticky top-0 z-50 border-b border-[rgba(95,75,58,0.08)] bg-[rgba(250,247,242,0.9)] supports-[backdrop-filter]:backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="max-w-[12rem] text-sm font-semibold tracking-[0.22em] text-[var(--color-green)] sm:max-w-none sm:text-base"
          >
            BODHANA HOME FOODS
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[rgba(95,75,58,0.8)] transition hover:text-[var(--color-green)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2 rounded-full border border-[rgba(47,93,80,0.12)] bg-white/90 px-4 py-2 text-sm font-semibold text-[var(--color-green)] shadow-[0_8px_20px_rgba(95,75,58,0.08)] transition hover:-translate-y-0.5"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-[var(--color-gold)] px-1.5 py-0.5 text-xs text-white">
                {totalItems}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex rounded-full border border-[rgba(47,93,80,0.12)] bg-white/80 p-2 text-[var(--color-green)] lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="border-t border-[rgba(95,75,58,0.08)] bg-[var(--color-cream)] lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-[var(--color-brown)] transition hover:bg-white/70 hover:text-[var(--color-green)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid max-w-7xl gap-7 px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-8 md:pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14 lg:px-8 lg:pb-18"
        >
          <div className="relative">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(47,93,80,0.1)] bg-white/80 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.14em] text-[var(--color-green)] shadow-sm sm:px-4 sm:py-2 sm:text-xs">
              <Sparkles className="h-4 w-4 text-[var(--color-gold)]" />
              Homemade • Fresh • Healthy
            </span>

            <h1 className="mt-5 max-w-xl text-[2.9rem] leading-[0.97] text-[var(--color-green)] sm:mt-6 sm:max-w-2xl sm:text-6xl lg:text-[5.25rem]">
              Homemade food with a simple, familiar taste.
            </h1>

            <p className="mt-4 max-w-lg text-[0.97rem] leading-7 text-[rgba(95,75,58,0.84)] sm:mt-5 sm:max-w-xl sm:text-lg sm:leading-8">
              Bodhana Home Foods makes sweets and snacks with jaggery, fresh
              ingredients, and no preservatives.
            </p>

            <div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-row">
              <a
                href="#products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-green)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(47,93,80,0.18)] transition hover:-translate-y-0.5 sm:px-6"
              >
                View Products
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:mt-10 sm:grid-cols-3 sm:gap-4">
              {[
                { label: "Made with jaggery", value: "100%" },
                { label: "Preservatives", value: "None" },
                { label: "Prepared fresh", value: "Regularly" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`rounded-[1.35rem] border border-[rgba(95,75,58,0.08)] px-4 py-3.5 shadow-sm sm:rounded-[1.6rem] sm:py-4 ${index === 1 ? "bg-[rgba(184,138,68,0.1)]" : "bg-white/82"}`}
                >
                  <p className="text-[1.55rem] font-semibold text-[var(--color-green)] sm:text-[1.8rem]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-[rgba(95,75,58,0.74)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-[rgba(184,138,68,0.14)] blur-2xl" />
            <div className="absolute -bottom-4 right-8 h-32 w-32 rounded-full bg-[rgba(47,93,80,0.12)] blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-[rgba(95,75,58,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,241,231,0.92))] p-2.5 shadow-[0_18px_40px_rgba(95,75,58,0.12)] sm:rounded-[2.3rem] sm:p-4 sm:shadow-[0_24px_60px_rgba(95,75,58,0.14)]">
              <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-[1.2fr_0.8fr] sm:gap-4">
                {" "}
                <div className="overflow-hidden rounded-[1.15rem] bg-white/80 p-2.5 shadow-sm sm:rounded-[1.5rem] sm:p-3">
                  <img
                    src={products[0].image}
                    alt={products[0].name}
                    className="hero-image h-70 w-full rounded-[0.85rem] object-cover sm:h-[24rem] sm:rounded-[1.15rem]"
                  />
                </div>
                <div className="grid gap-3 sm:gap-4">
                  <div className="overflow-hidden rounded-[1.15rem] bg-white/80 p-2.5 shadow-sm sm:rounded-[1.5rem] sm:p-3">
                    <img
                      src={products[2].image}
                      alt={products[2].name}
                      className="h-24 w-full rounded-[0.85rem] object-cover sm:h-32 sm:rounded-[1.15rem]"
                    />
                    <div className="mt-2.5 flex items-center justify-between gap-2.5 sm:mt-3 sm:gap-3">
                      <div></div>
                    </div>
                  </div>

                  <div className="rounded-[1.15rem] bg-[var(--color-green)] p-3 text-white shadow-sm sm:rounded-[1.5rem] sm:p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(250,247,242,0.78)]">
                      Easy Ordering
                    </p>
                    <p
                      className="mt-2 text-[0.98rem] leading-tight sm:mt-3 sm:text-2xl"
                      style={{ color: "var(--color-cream)" }}
                    >
                      Send your product list on WhatsApp and confirm the order.
                    </p>
                    <a
                      href="#products"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-green)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(47,80,80,0.18)] transition hover:-translate-y-0.5 sm:px-6"
                    >
                      Shop now
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block relative mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid gap-6 rounded-[1.6rem] border border-[rgba(95,75,58,0.08)] bg-white/70 px-4 py-5 shadow-sm sm:gap-8 sm:rounded-[2rem] sm:px-8 sm:py-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeading
              eyebrow="Why Bodhana"
              title="Made the way homemade food should be."
              description="The focus is simple: jaggery-based sweets, fresh ingredients, and clean preparation."
              className="max-w-xl"
            />

            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {uspItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`rounded-[1.25rem] border px-4 py-4 sm:rounded-[1.5rem] sm:px-5 sm:py-5 ${index === 0 ? "border-[rgba(47,93,80,0.16)] bg-[rgba(47,93,80,0.06)]" : "border-[rgba(95,75,58,0.08)] bg-white/75"}`}
                  >
                    <div className="inline-flex rounded-2xl bg-[rgba(184,138,68,0.12)] p-3 text-[var(--color-green)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[var(--color-green)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[rgba(95,75,58,0.74)]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="products"
          className="section-block mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
        >
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-8">
            <SectionHeading
              eyebrow="Products"
              title="Available now"
              description="Choose the items you want, add them to cart, and send the order on WhatsApp."
              className="max-w-xl"
            />

            <div className="grid gap-3 rounded-[1.35rem] border border-[rgba(95,75,58,0.08)] bg-[rgba(255,255,255,0.58)] px-4 py-4 text-sm text-[rgba(95,75,58,0.76)] shadow-sm sm:grid-cols-3 sm:gap-4 sm:rounded-[1.7rem] sm:px-5 sm:py-5">
              <div>
                <p className="font-semibold text-[var(--color-green)]">
                  Homemade
                </p>
                <p className="mt-1">Prepared in small batches.</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--color-green)]">
                  Jaggery sweets
                </p>
                <p className="mt-1">Sweet items made without refined sugar.</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--color-green)]">
                  WhatsApp orders
                </p>
                <p className="mt-1">Quick ordering with item list and total.</p>
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                formatCurrency={formatCurrency}
              />
            ))}
          </div>
        </section>

        <section
          id="about"
          className="section-block mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
        >
          <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
            <div className="relative">
              <div className="absolute -top-5 left-6 h-24 w-24 rounded-full bg-[rgba(184,138,68,0.14)] blur-2xl" />
              <div className="absolute bottom-10 -right-3 h-20 w-20 rounded-full bg-[rgba(47,93,80,0.12)] blur-xl" />

              <div className="relative grid gap-3 sm:gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                <div className="hidden overflow-hidden rounded-[1.6rem] shadow-[0_18px_40px_rgba(95,75,58,0.14)] sm:block sm:rounded-[2rem]">
                  <img
                    src={products[1].image}
                    alt={products[1].name}
                    className="h-[13.5rem] w-full object-cover object-center sm:h-[24rem]"
                  />
                </div>
                <div className="grid gap-3 sm:gap-4">
                  <div className="hidden overflow-hidden rounded-[1.15rem] border border-[rgba(95,75,58,0.08)] bg-white/80 p-2.5 shadow-sm sm:block sm:rounded-[1.6rem] sm:p-3">
                    <img
                      src={products[4].image}
                      alt={products[4].name}
                      className="h-20 w-full rounded-[0.9rem] object-cover object-center sm:h-36 sm:rounded-[1.2rem]"
                    />
                  </div>
                  <div className="rounded-[1.15rem] border border-[rgba(95,75,58,0.08)] bg-[rgba(47,93,80,0.05)] p-3.5 shadow-sm sm:rounded-[1.6rem] sm:p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gold)]">
                      What we focus on
                    </p>
                    <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                      {aboutPoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2.5 text-[0.92rem] text-[rgba(95,75,58,0.82)] sm:gap-3 sm:text-sm"
                        >
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[var(--color-green)] shadow-sm sm:h-6 sm:w-6">
                            <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="About Us"
                title="Homemade food from our kitchen to your home."
                description="Bodhana Home Foods makes sweets and snacks in small batches. We use jaggery in our sweet items, choose fresh ingredients, and keep our preparation clean and simple."
                className="max-w-xl"
              />

              <div className="mt-6 grid gap-4 sm:mt-7 sm:grid-cols-2">
                <div className="border-l-2 border-[rgba(184,138,68,0.45)] pl-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-green)]">
                    Small batches
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[rgba(95,75,58,0.76)]">
                    We keep quantities manageable so the food stays fresh and
                    consistent.
                  </p>
                </div>
                <div className="border-l-2 border-[rgba(184,138,68,0.45)] pl-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-green)]">
                    Straightforward ingredients
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[rgba(95,75,58,0.76)]">
                    Ragi, sesame, nuts, curry leaves, spices, and jaggery are at
                    the center of our menu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="section-block mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
        >
          <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:gap-8">
            <SectionHeading
              eyebrow="Gallery"
              title="A closer look at Bodhana products"
              description="Real product photos from the current menu."
              className="max-w-md lg:sticky lg:top-28"
            />

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image) => (
                <figure
                  key={image.title}
                  className="gallery-tile mb-6 break-inside-avoid overflow-hidden rounded-[1.35rem] border border-[rgba(95,75,58,0.08)] bg-white/80 shadow-sm sm:mb-5 sm:rounded-[1.7rem]"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`w-full object-cover ${
                      image.tall
                        ? "h-[10rem] sm:h-[27rem]"
                        : "h-[8rem] sm:h-[18rem]"
                    }`}
                  />
                  <figcaption className="px-4 py-4">
                    <p className="text-sm font-semibold text-[var(--color-green)]">
                      {image.title}
                    </p>
                    <p className="mt-1 text-sm text-[rgba(95,75,58,0.72)]">
                      {image.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="feedback"
          className="section-block mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
        >
          <div className="grid gap-5 rounded-[1.5rem] border border-[rgba(95,75,58,0.08)] bg-[linear-gradient(135deg,rgba(255,255,255,0.84),rgba(247,241,231,0.92))] px-4 py-5 shadow-sm sm:rounded-[2rem] sm:px-6 sm:py-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Feedback
              </p>
              <h2 className="mt-3 text-[1.9rem] leading-tight text-[var(--color-green)] sm:text-[2.2rem]">
                Send us your feedback on WhatsApp
              </h2>
              <p className="mt-3 text-sm leading-7 text-[rgba(95,75,58,0.75)]">
                If you ordered from us, you can share your feedback directly. It
                helps us improve and serve you better.
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
                `Hi Bodhana Home Foods,

I'd like to share my feedback.

Name:
Rating (1-5):
Feedback:
`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(47,93,80,0.14)] transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Send Feedback
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="section-block mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
        >
          <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6">
            <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(95,75,58,1),rgba(83,65,50,0.98))] p-5 text-white shadow-[0_22px_50px_rgba(95,75,58,0.18)] sm:rounded-[2rem] sm:p-8">
              <p className="text-sm font-semibold tracking-[0.2em] text-[rgba(250,247,242,0.78)]">
                CONTACT
              </p>
              <h2
                className="mt-4 max-w-md text-[2.15rem] leading-tight sm:text-[2.7rem]"
                style={{ color: "var(--color-cream)" }}
              >
                Place your order on WhatsApp.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-8 text-[rgba(250,247,242,0.86)]">
                For orders, availability, and quantity details, WhatsApp is the
                easiest way to reach us.
              </p>

              <div className="mt-7 rounded-[1.25rem] border border-[rgba(250,247,242,0.12)] bg-[rgba(250,247,242,0.06)] p-4 sm:mt-8 sm:rounded-[1.5rem]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[rgba(250,247,242,0.7)]">
                  Fastest way to order
                </p>
                <p className="mt-2 text-sm leading-7 text-[rgba(250,247,242,0.9)]">
                  Add items to cart, review the total, and send the order
                  summary directly on WhatsApp.
                </p>
              </div>

              <a
                href={`https://wa.me/${whatsappConfig.phoneNumber}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`rounded-[1rem] border border-[rgba(95,75,58,0.08)] bg-white/82 p-3 shadow-sm sm:rounded-[1.6rem] sm:p-6 ${item.wide ? "sm:col-span-2" : ""}`}
                  >
                    <div className="inline-flex rounded-xl bg-[rgba(184,138,68,0.12)] p-2 text-[var(--color-gold)] sm:p-3">
                      {" "}
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />{" "}
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-green)]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[rgba(95,75,58,0.78)]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-2 border-t border-[rgba(95,75,58,0.08)] bg-[rgba(255,255,255,0.5)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-7 sm:px-6 sm:py-8 lg:grid-cols-[1.25fr_0.75fr_0.75fr] lg:gap-8 lg:px-8">
          <div>
            <p className="text-2xl text-[var(--color-green)]">
              BODHANA HOME FOODS
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-[rgba(95,75,58,0.74)]">
              Homemade sweets and snacks made with jaggery and fresh
              ingredients.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
              Quick Links
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[rgba(95,75,58,0.74)] transition hover:text-[var(--color-green)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
              Social Links
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[rgba(95,75,58,0.74)] transition hover:text-[var(--color-green)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[rgba(95,75,58,0.08)] px-4 py-4 text-center text-sm text-[rgba(95,75,58,0.62)]">
          Copyright © {new Date().getFullYear()} BODHANA HOME FOODS. All rights
          reserved.
        </div>
      </footer>

      <aside
        className={`cart-panel fixed inset-y-0 right-0 z-[60] w-full max-w-md transform border-l border-[rgba(95,75,58,0.08)] bg-[var(--color-cream)] shadow-xl transition duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!isCartOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[rgba(95,75,58,0.08)] px-4 py-3.5 sm:px-5 sm:py-4">
            <div>
              <p className="text-base font-semibold text-[var(--color-green)] sm:text-lg">
                Your Cart
              </p>
              <p className="text-sm text-[rgba(95,75,58,0.68)]">
                {totalItems} item(s)
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="rounded-full p-2 text-[var(--color-brown)] transition hover:bg-white/70"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center rounded-[1.4rem] border border-dashed border-[rgba(95,75,58,0.16)] bg-white/70 p-6 text-center sm:rounded-[1.75rem] sm:p-8">
                <ShoppingBag className="h-8 w-8 text-[var(--color-gold)] sm:h-10 sm:w-10" />
                <p className="mt-3 text-base font-semibold text-[var(--color-green)] sm:mt-4 sm:text-lg">
                  Your cart is empty
                </p>
                <p className="mt-2 text-sm leading-6 text-[rgba(95,75,58,0.72)] sm:leading-7">
                  Add the items you want to order and send the list on WhatsApp.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-[1.2rem] border border-[rgba(95,75,58,0.08)] bg-white/85 p-3.5 shadow-sm sm:rounded-[1.5rem] sm:p-4"
                  >
                    <div className="flex gap-3 sm:gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 shrink-0 rounded-[1rem] object-cover sm:h-20 sm:w-20 sm:rounded-2xl"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-[var(--color-green)] sm:text-base">
                              {item.name}
                            </p>
                            <p className="mt-1 text-xs text-[rgba(95,75,58,0.72)] sm:text-sm">
                              {formatCurrency(item.price)}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="rounded-full p-2 text-[rgba(95,75,58,0.68)] transition hover:bg-[rgba(95,75,58,0.06)] hover:text-red-600"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-3 flex items-center justify-between sm:mt-4">
                          <div className="inline-flex items-center rounded-full border border-[rgba(47,93,80,0.12)] bg-[rgba(47,93,80,0.04)]">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity(item.id)}
                              className="rounded-full p-1.5 text-[var(--color-green)] transition hover:bg-white/80 sm:p-2"
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="min-w-10 text-center text-sm font-semibold text-[var(--color-brown)]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => increaseQuantity(item.id)}
                              className="rounded-full p-1.5 text-[var(--color-green)] transition hover:bg-white/80 sm:p-2"
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-xs font-semibold text-[var(--color-brown)] sm:text-sm">
                            {formatCurrency(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-[rgba(95,75,58,0.08)] bg-white/75 px-4 py-4 sm:px-5 sm:py-5">
            <div className="mb-3 flex items-center justify-between sm:mb-4">
              <span className="text-sm text-[rgba(95,75,58,0.72)]">
                Cart Total
              </span>
              <span className="text-lg font-semibold text-[var(--color-green)] sm:text-xl">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <a
              href={cartItems.length ? whatsappCheckoutUrl : "#products"}
              target={cartItems.length ? "_blank" : undefined}
              rel={cartItems.length ? "noreferrer" : undefined}
              onClick={() => !cartItems.length && setIsCartOpen(false)}
              className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${cartItems.length ? "bg-[var(--color-green)] text-white hover:-translate-y-0.5" : "bg-[rgba(95,75,58,0.1)] text-[rgba(95,75,58,0.6)]"}`}
            >
              <MessageCircle className="h-4 w-4" />
              {cartItems.length ? "Checkout via WhatsApp" : "Browse Products"}
            </a>
          </div>
        </div>
      </aside>

      {isCartOpen && (
        <button
          type="button"
          className="fixed inset-0 z-50 bg-[rgba(41,24,12,0.24)]"
          onClick={() => setIsCartOpen(false)}
          aria-label="Close cart overlay"
        />
      )}
    </div>
  );
}

export default App;

import { useEffect, useMemo, useState } from "react";
import {
  Clock3,
  HeartHandshake,
  Instagram,
  Leaf,
  Menu,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  ShoppingBag,
  Sparkles,
  Star,
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
import { galleryImages, products, reviews, uspItems } from "./data/content";
import { useCart } from "./hooks/useCart";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

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
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(200,138,42,0.18),transparent_48%),linear-gradient(180deg,rgba(15,77,28,0.08),rgba(248,242,232,0))]" />

      <header className="sticky top-0 z-50 border-b border-[rgba(74,44,23,0.08)] bg-[rgba(248,242,232,0.96)] supports-[backdrop-filter]:bg-[rgba(248,242,232,0.88)] supports-[backdrop-filter]:backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="max-w-[12rem] text-sm font-semibold tracking-[0.25em] text-[var(--color-green)] sm:max-w-none sm:text-base"
          >
            BODHANA HOME FOODS
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-brown)] transition hover:text-[var(--color-green)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2 rounded-full border border-[rgba(15,77,28,0.15)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--color-green)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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
              className="inline-flex rounded-full border border-[rgba(15,77,28,0.12)] p-2 text-[var(--color-green)] lg:hidden"
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
          <div className="border-t border-[rgba(74,44,23,0.08)] bg-[var(--color-cream)] lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
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
          className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-20"
        >
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[var(--color-green)] shadow-sm ring-1 ring-[rgba(15,77,28,0.08)]">
              <Sparkles className="h-4 w-4 text-[var(--color-gold)]" />
              HOMEMADE • FRESH • HEALTHY
            </span>

            <h1 className="mt-6 font-display text-5xl leading-none text-[var(--color-green)] sm:text-6xl lg:text-7xl">
              BODHANA HOME FOODS
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[rgba(74,44,23,0.82)] sm:text-lg">
              Traditional homemade foods prepared with pure jaggery, fresh
              ingredients, and no preservatives.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(15,77,28,0.22)] transition hover:-translate-y-0.5"
              >
                Shop Now
              </a>
              <a
                href={`https://wa.me/${whatsappConfig.phoneNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-gold)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--color-brown)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                <MessageCircle className="h-4 w-4 text-[var(--color-gold)]" />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: "Pure Jaggery", value: "100%" },
                { label: "Preservatives", value: "Zero" },
                { label: "Freshly Made", value: "Daily" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-sm"
                >
                  <p className="text-2xl font-semibold text-[var(--color-green)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-[rgba(74,44,23,0.72)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 h-20 w-20 rounded-full bg-[rgba(200,138,42,0.14)] blur-xl" />
            <div className="absolute -bottom-2 right-4 h-24 w-24 rounded-full bg-[rgba(15,77,28,0.12)] blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/88 p-5 shadow-[0_18px_42px_rgba(74,44,23,0.12)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {products.slice(0, 4).map((product) => (
                  <div
                    key={product.id}
                    className="rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(248,242,232,1),rgba(244,233,214,0.88))] p-4"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-36 w-full rounded-[1.25rem] object-cover"
                    />
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-green)]">
                          {product.name}
                        </p>
                        <p className="mt-1 text-xs text-[rgba(74,44,23,0.7)]">
                          {formatCurrency(product.price)}
                        </p>
                      </div>
                      <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[var(--color-gold)]">
                        Fresh
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-block mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Traditional goodness, made with mindful ingredients."
            description="Every batch is prepared with care using trusted recipes, premium jaggery, and fresh ingredients for a wholesome homemade experience."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {uspItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-[1.75rem] border border-white/60 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-2xl bg-[rgba(15,77,28,0.08)] p-3 text-[var(--color-green)] transition group-hover:bg-[var(--color-green)] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--color-green)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(74,44,23,0.74)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="products"
          className="section-block mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="Products"
            title="Freshly prepared favorites for every sweet and savory craving."
            description="Explore our handcrafted selection of traditional snacks and sweets, prepared with a premium homemade touch."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
          className="section-block mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(15,77,28,0.97),rgba(26,90,41,0.96))] p-8 text-white shadow-xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-[rgba(248,242,232,0.82)]">
                ABOUT US
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-cream)]">
                A homemade brand rooted in tradition and honest ingredients.
              </h2>
              <p className="mt-6 text-sm leading-8 text-[rgba(248,242,232,0.84)]">
                At BODHANA HOME FOODS, we prepare every item in small batches
                with the warmth of home kitchens and the discipline of clean,
                hygienic cooking. Our sweets are made with jaggery, our snacks
                use fresh ingredients, and our promise is simple: no shortcuts,
                no preservatives, only authentic flavor.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Small-batch freshness",
                  text: "Prepared in limited quantities to maintain quality, taste, and freshness.",
                },
                {
                  title: "Premium ingredients",
                  text: "Ragi, nuts, sesame, spices, curry leaves, and pure jaggery selected with care.",
                },
                {
                  title: "Hygienic preparation",
                  text: "Thoughtful kitchen practices with special attention to cleanliness and consistency.",
                },
                {
                  title: "Homemade trust",
                  text: "Traditional recipes that bring familiar comfort with a polished modern presentation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-[rgba(74,44,23,0.08)] bg-white/80 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[var(--color-green)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(74,44,23,0.74)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="section-block mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="Gallery"
            title="A glimpse into our handcrafted food story."
            description="Use these placeholders for now, and you can easily swap in your real product or kitchen photos later."
          />

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((image) => (
              <div
                key={image.title}
                className={`group relative overflow-hidden rounded-[1.75rem] ${image.className} ${image.tall ? "row-span-2 min-h-[25rem]" : "min-h-[12rem]"} shadow-lg`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(74,44,23,0.62))]" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-sm font-semibold">{image.title}</p>
                  <p className="mt-1 text-xs text-white/80">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          id="feedback"
          className="section-block mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
        >
          <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 text-center shadow-sm">
            <h2 className="font-display text-4xl text-[var(--color-green)]">
              We'd Love Your Feedback
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[rgba(74,44,23,0.75)]">
              Your feedback helps us improve and continue delivering fresh,
              homemade goodness. Tell us what you loved or what we can do
              better.
            </p>

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
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Send Feedback on WhatsApp
            </a>
          </div>
        </section>

        <section
          id="reviews"
          className="section-block mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="Customer Reviews"
            title="Loved for freshness, flavor, and that homemade feeling."
            description="Sample testimonials are included now so the section feels launch-ready from day one."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-sm"
              >
                <div className="flex items-center gap-1 text-[var(--color-gold)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-[rgba(74,44,23,0.76)]">
                  "{review.quote}"
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-[var(--color-green)]">
                    {review.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[rgba(74,44,23,0.52)]">
                    {review.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="section-block mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(74,44,23,1),rgba(100,61,32,0.96))] p-8 text-white shadow-xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-[rgba(248,242,232,0.8)]">
                CONTACT
              </p>
              <h2 className="mt-4 font-display text-4xl text-[var(--color-cream)]">
                Let’s make your next order special.
              </h2>
              <p className="mt-5 text-sm leading-8 text-[rgba(248,242,232,0.86)]">
                Reach out for orders, custom quantities, or product
                availability. WhatsApp is the fastest way to confirm your order.
              </p>
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

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Phone, title: "Phone", value: businessInfo.phone },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  value: businessInfo.whatsapp,
                },
                {
                  icon: Instagram,
                  title: "Instagram",
                  value: businessInfo.instagram,
                },
                { icon: Leaf, title: "Address", value: businessInfo.address },
                {
                  icon: Clock3,
                  title: "Business Hours",
                  value: businessInfo.hours,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-[rgba(74,44,23,0.08)] bg-white/85 p-6 shadow-sm"
                  >
                    <div className="inline-flex rounded-2xl bg-[rgba(200,138,42,0.12)] p-3 text-[var(--color-gold)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-[var(--color-green)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[rgba(74,44,23,0.76)]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[rgba(74,44,23,0.08)] bg-[rgba(255,255,255,0.52)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">
          <div>
            <p className="font-display text-2xl text-[var(--color-green)]">
              BODHANA HOME FOODS
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-[rgba(74,44,23,0.74)]">
              Homemade sweets and snacks crafted with jaggery, fresh
              ingredients, and a premium traditional touch.
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
                  className="text-sm text-[rgba(74,44,23,0.74)] transition hover:text-[var(--color-green)]"
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
                  className="text-sm text-[rgba(74,44,23,0.74)] transition hover:text-[var(--color-green)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[rgba(74,44,23,0.08)] px-4 py-4 text-center text-sm text-[rgba(74,44,23,0.62)]">
          Copyright © {new Date().getFullYear()} BODHANA HOME FOODS. All rights
          reserved.
        </div>
      </footer>

      <aside
        className={`cart-panel fixed inset-y-0 right-0 z-[60] w-full max-w-md transform border-l border-[rgba(74,44,23,0.08)] bg-[var(--color-cream)] shadow-xl transition duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!isCartOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[rgba(74,44,23,0.08)] px-5 py-4">
            <div>
              <p className="text-lg font-semibold text-[var(--color-green)]">
                Your Cart
              </p>
              <p className="text-sm text-[rgba(74,44,23,0.68)]">
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

          <div className="flex-1 overflow-y-auto px-5 py-5">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-[rgba(74,44,23,0.16)] bg-white/70 p-8 text-center">
                <ShoppingBag className="h-10 w-10 text-[var(--color-gold)]" />
                <p className="mt-4 text-lg font-semibold text-[var(--color-green)]">
                  Your cart is empty
                </p>
                <p className="mt-2 text-sm leading-7 text-[rgba(74,44,23,0.72)]">
                  Add your favorite homemade treats and snacks to start an
                  order.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-[1.5rem] border border-[rgba(74,44,23,0.08)] bg-white/85 p-4 shadow-sm"
                  >
                    <div className="flex gap-4">
                      <div
                        className={`h-20 w-20 shrink-0 rounded-2xl ${item.imageClass}`}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-semibold text-[var(--color-green)]">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm text-[rgba(74,44,23,0.72)]">
                              {formatCurrency(item.price)}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="rounded-full p-2 text-[rgba(74,44,23,0.68)] transition hover:bg-[rgba(74,44,23,0.06)] hover:text-red-600"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="inline-flex items-center rounded-full border border-[rgba(15,77,28,0.12)] bg-[rgba(15,77,28,0.04)]">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity(item.id)}
                              className="rounded-full p-2 text-[var(--color-green)] transition hover:bg-white/80"
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
                              className="rounded-full p-2 text-[var(--color-green)] transition hover:bg-white/80"
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-sm font-semibold text-[var(--color-brown)]">
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

          <div className="border-t border-[rgba(74,44,23,0.08)] bg-white/75 px-5 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-[rgba(74,44,23,0.72)]">
                Cart Total
              </span>
              <span className="text-xl font-semibold text-[var(--color-green)]">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <a
              href={cartItems.length ? whatsappCheckoutUrl : "#products"}
              target={cartItems.length ? "_blank" : undefined}
              rel={cartItems.length ? "noreferrer" : undefined}
              onClick={() => !cartItems.length && setIsCartOpen(false)}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${cartItems.length ? "bg-[var(--color-green)] text-white hover:-translate-y-0.5" : "bg-[rgba(74,44,23,0.1)] text-[rgba(74,44,23,0.6)]"}`}
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

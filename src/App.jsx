import { useEffect, useMemo, useState } from "react";
import ProductCard from "./components/ProductCard";
import SectionHeading from "./components/SectionHeading";
import {
  businessInfo,
  navigationLinks,
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
  { title: "Phone", value: businessInfo.phone },
  { title: "WhatsApp", value: businessInfo.whatsapp },
  { title: "Instagram", value: businessInfo.instagram },
  { title: "Address", value: businessInfo.address, wide: true },
  { title: "Business Hours", value: businessInfo.hours },
];

const buildWhatsAppUrl = (cartItems, total) => {
  const lines = [
    "Hello Bodhana Home Foods,",
    "",
    "I would like to place an order:",
    "",
    ...cartItems.map(
      (item) =>
        `- ${item.name}${item.weight ? ` (${item.weight})` : ""} x${item.quantity}`,
    ),
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
    <div className="min-h-screen bg-white text-black font-sans">
      <header className="sticky top-0 z-50 border-b-2 border-black bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="text-base font-black tracking-widest text-black uppercase"
          >
            BODHANA HOME FOODS
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-black hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-2 rounded-none border-2 border-black bg-black px-4 py-2 text-xs font-black text-white uppercase tracking-wider transition hover:bg-neutral-800 cursor-pointer"
              aria-label="Open cart"
            >
              <span>CART</span>
              <span className="inline-flex min-w-5 items-center justify-center rounded-none bg-white px-1.5 py-0.5 text-xs font-black text-black border border-black">
                {totalItems}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex rounded-none border-2 border-black bg-white p-2 text-xs font-black text-black uppercase lg:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? "[CLOSE]" : "[MENU]"}
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="border-t-2 border-black bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-3 text-xs font-bold uppercase tracking-wider text-black border-b border-neutral-200 hover:bg-black hover:text-white transition"
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
          className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-20"
        >
          <div>
            <span className="inline-block rounded-none border border-black bg-black px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
              HOMEMADE • FRESH • NO PRESERVATIVES
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-black uppercase tracking-tight text-black sm:text-6xl lg:text-7xl leading-tight">
              Homemade food with a simple, familiar taste.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-700">
              Bodhana Home Foods makes sweets and snacks with jaggery, fresh
              ingredients, and no preservatives.
            </p>

            <div className="mt-8 flex flex-row gap-4">
              <a
                href="#products"
                className="inline-flex min-h-12 items-center justify-center rounded-none border-2 border-black bg-black px-6 py-3 text-xs font-black uppercase tracking-widest text-white transition hover:bg-neutral-800"
              >
                VIEW PRODUCTS →
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { label: "Made with jaggery", value: "100%" },
                { label: "Preservatives", value: "NONE" },
                { label: "Prepared fresh", value: "REGULAR" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-none border-2 border-black bg-white px-4 py-4 text-center"
                >
                  <p className="text-xl font-black text-black sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4 border-2 border-black p-4 bg-white">
              <div className="border-2 border-black overflow-hidden bg-neutral-100">
                <img
                  src={products[0].image}
                  alt={products[0].name}
                  className="h-64 w-full object-cover rounded-none sm:h-96"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="border-2 border-black overflow-hidden bg-neutral-100">
                  <img
                    src={products[2].image}
                    alt={products[2].name}
                    className="h-32 w-full object-cover rounded-none sm:h-44"
                  />
                </div>

                <div className="rounded-none border-2 border-black bg-black p-5 text-white flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                      EASY ORDERING
                    </p>
                    <p className="mt-2 text-sm font-bold uppercase leading-tight sm:text-lg text-white">
                      Send your product list on WhatsApp and confirm the order.
                    </p>
                  </div>
                  <a
                    href="#products"
                    className="mt-4 inline-flex items-center justify-between rounded-none border border-white bg-white px-4 py-2.5 text-xs font-black uppercase text-black hover:bg-neutral-200 transition"
                  >
                    <span>SHOP NOW</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="border-2 border-black bg-white p-6 sm:p-10">
            <SectionHeading
              eyebrow="WHY BODHANA"
              title="Made the way homemade food should be."
              description="The focus is simple: jaggery-based sweets, fresh ingredients, and clean preparation."
              className="max-w-xl"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {uspItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-none border-2 border-black p-5 bg-white"
                >
                  <h3 className="text-sm font-black uppercase text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="products"
          className="section-block mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-black">
            <SectionHeading
              eyebrow="MENU"
              title="Available now"
              description="Choose the items you want, add them to cart, and send the order on WhatsApp."
              className="max-w-xl"
            />

            <div className="grid grid-cols-3 gap-3 border-2 border-black bg-neutral-100 p-3 text-center text-xs">
              <div>
                <p className="font-black uppercase text-black">Homemade</p>
                <p className="text-[10px] text-neutral-600">Small batches</p>
              </div>
              <div className="border-x border-neutral-300 px-2">
                <p className="font-black uppercase text-black">Jaggery</p>
                <p className="text-[10px] text-neutral-600">No refined sugar</p>
              </div>
              <div>
                <p className="font-black uppercase text-black">WhatsApp</p>
                <p className="text-[10px] text-neutral-600">Fast ordering</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          className="section-block mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="border-2 border-black bg-white p-6 sm:p-10 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-black overflow-hidden bg-neutral-100">
                <img
                  src={products[1].image}
                  alt={products[1].name}
                  className="h-48 w-full object-cover rounded-none sm:h-72"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="border-2 border-black overflow-hidden bg-neutral-100">
                  <img
                    src={products[4].image}
                    alt={products[4].name}
                    className="h-24 w-full object-cover rounded-none sm:h-36"
                  />
                </div>
                <div className="border-2 border-black bg-black p-4 text-white flex-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                    FOCUS
                  </p>
                  <ul className="mt-3 space-y-2 text-xs">
                    {aboutPoints.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="ABOUT US"
                title="Homemade food from our kitchen to your home."
                description="Bodhana Home Foods makes sweets and snacks in small batches. We use jaggery in our sweet items, choose fresh ingredients, and keep our preparation clean and simple."
                className="max-w-xl"
              />

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="border-l-4 border-black pl-4">
                  <p className="text-xs font-black uppercase tracking-wider text-black">
                    Small Batches
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                    We keep quantities manageable so the food stays fresh and
                    consistent.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <p className="text-xs font-black uppercase tracking-wider text-black">
                    Straightforward Ingredients
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600">
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
          className="section-block mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="GALLERY"
            title="A closer look at Bodhana products"
            description="Real product photos from the current menu."
            className="max-w-md mb-8"
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {galleryImages.map((image) => (
              <figure
                key={image.title}
                className="gallery-tile border-2 border-black bg-white rounded-none"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-44 w-full object-cover rounded-none sm:h-56"
                />
                <figcaption className="p-3 border-t border-black">
                  <p className="text-xs font-black uppercase text-black">
                    {image.title}
                  </p>
                  <p className="mt-1 text-[10px] text-neutral-600">
                    {image.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="feedback"
          className="section-block mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
        >
          <div className="border-2 border-black bg-black p-6 sm:p-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                FEEDBACK
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase text-white sm:text-3xl">
                Send us your feedback on WhatsApp
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-neutral-300">
                If you ordered from us, you can share your feedback directly. It
                helps us improve and serve you better.
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
                `Hi Bodhana Home Foods,\n\nI'd like to share my feedback.\n\nName:\nRating (1-5):\nFeedback:\n`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-center border-2 border-white bg-white text-black font-black uppercase text-xs px-6 py-3.5 hover:bg-neutral-200 transition shrink-0"
            >
              SEND FEEDBACK →
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="section-block mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="border-2 border-black bg-black p-6 sm:p-10 text-white flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                  CONTACT
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
                  Place your order on WhatsApp.
                </h2>
                <p className="mt-4 text-xs leading-relaxed text-neutral-300">
                  For orders, availability, and quantity details, WhatsApp is the
                  easiest way to reach us.
                </p>
              </div>

              <div className="mt-8 border border-neutral-700 bg-neutral-900 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                  FASTEST WAY TO ORDER
                </p>
                <p className="mt-1 text-xs text-neutral-200">
                  Add items to cart, review the total, and send the order summary directly on WhatsApp.
                </p>
              </div>

              <a
                href={`https://wa.me/${whatsappConfig.phoneNumber}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block text-center border-2 border-white bg-white text-black font-black uppercase text-xs px-6 py-3.5 hover:bg-neutral-200 transition"
              >
                CHAT ON WHATSAPP →
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((item) => (
                <div
                  key={item.title}
                  className={`border-2 border-black bg-white p-5 ${item.wide ? "sm:col-span-2" : ""}`}
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm font-bold text-black">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-black bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-xs text-black font-bold uppercase tracking-wider">
          Copyright © {new Date().getFullYear()} BODHANA HOME FOODS. All rights reserved.{" "}
          <a
            href="https://www.linkedin.com/in/bvchethan/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-neutral-600 ml-1"
          >
            dev-Chethan
          </a>
        </div>
      </footer>

      <aside
        className={`cart-panel fixed inset-y-0 right-0 z-[60] w-full max-w-md border-l-2 border-black bg-white shadow-2xl transition duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!isCartOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b-2 border-black p-4 sm:p-5">
            <div>
              <p className="text-base font-black uppercase text-black">
                YOUR CART
              </p>
              <p className="text-xs text-neutral-600">
                {totalItems} item(s)
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="border border-black bg-white px-3 py-1.5 text-xs font-black text-black hover:bg-black hover:text-white transition cursor-pointer"
              aria-label="Close cart"
            >
              [X] CLOSE
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center border-2 border-dashed border-neutral-300 p-8 text-center">
                <p className="text-base font-black uppercase text-black">
                  Your cart is empty
                </p>
                <p className="mt-2 text-xs text-neutral-600">
                  Add the items you want to order and send the list on WhatsApp.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-2 border-black p-4 bg-white"
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 shrink-0 object-cover border border-black"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-xs font-black uppercase text-black flex items-center flex-wrap gap-1">
                              {item.name}
                              {item.weight && (
                                <span className="border border-black bg-black text-white px-1.5 py-0.5 text-[9px] font-bold uppercase">
                                  {item.weight}
                                </span>
                              )}
                            </p>
                            <p className="mt-1 text-xs text-neutral-600 font-bold">
                              {formatCurrency(item.price)}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-[10px] font-black uppercase text-red-600 hover:underline cursor-pointer"
                            aria-label={`Remove ${item.name}`}
                          >
                            [DELETE]
                          </button>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center border border-black">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity(item.id)}
                              className="px-2 py-0.5 font-black text-xs hover:bg-black hover:text-white transition cursor-pointer"
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              -
                            </button>
                            <span className="min-w-8 text-center text-xs font-black px-1 border-x border-black">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => increaseQuantity(item.id)}
                              className="px-2 py-0.5 font-black text-xs hover:bg-black hover:text-white transition cursor-pointer"
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              +
                            </button>
                          </div>
                          <p className="text-xs font-black text-black">
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

          <div className="border-t-2 border-black bg-neutral-100 p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-black uppercase text-neutral-600">
                Cart Total
              </span>
              <span className="text-xl font-black text-black">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <a
              href={cartItems.length ? whatsappCheckoutUrl : "#products"}
              target={cartItems.length ? "_blank" : undefined}
              rel={cartItems.length ? "noreferrer" : undefined}
              onClick={() => !cartItems.length && setIsCartOpen(false)}
              className={`block w-full border-2 border-black py-3 text-center text-xs font-black uppercase tracking-wider transition ${
                cartItems.length
                  ? "bg-black text-white hover:bg-neutral-800"
                  : "bg-white text-neutral-400 cursor-not-allowed"
              }`}
            >
              {cartItems.length ? "CHECKOUT VIA WHATSAPP →" : "BROWSE PRODUCTS"}
            </a>
          </div>
        </div>
      </aside>

      {isCartOpen && (
        <button
          type="button"
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setIsCartOpen(false)}
          aria-label="Close cart overlay"
        />
      )}
    </div>
  );
}

export default App;

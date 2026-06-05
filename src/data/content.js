import {
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Wheat,
} from "lucide-react";

export const products = [
  {
    id: "dry-fruit-ragi-laddu",
    name: "Dry Fruit Ragi Laddu",
    description: "Made with ragi, dry fruits, nuts and jaggery.",
    price: 220,
    image: "/images/ragi-laddu.png",
    // imageClass:
    //   "bg-[linear-gradient(135deg,rgba(104,66,37,0.92),rgba(200,138,42,0.8)),radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_45%)]",
  },
  {
    id: "dry-fruit-sunni-unda",
    name: "Dry Fruit Sunni Unda",
    description: "Wholesome dry fruits, nuts and jaggery.",
    price: 240,
    image: "/images/dryfruit-sunni-unda.png",
  },
  {
    id: "nuvvula-unda",
    name: "Nuvvula Unda",
    description: "Traditional sesame sweet made with jaggery.",
    price: 180,

    image: "/images/nuvvula.png",
  },
  {
    id: "karam-bunddi",
    name: "Karam Bunddi",
    description: "Crunchy spicy snack with curry leaves and nuts.",
    price: 160,
    image: "/images/karambundi.png",
  },
];

export const uspItems = [
  {
    title: "100% Homemade",
    description:
      "Authentic recipes prepared in small batches for a true homemade taste.",
    icon: HeartHandshake,
  },
  {
    title: "Only Jaggery",
    description:
      "Our sweet products use jaggery for a richer, more natural sweetness.",
    icon: Sparkles,
  },
  {
    title: "No Preservatives",
    description:
      "Fresh preparation without preservatives, additives, or artificial shortcuts.",
    icon: ShieldCheck,
  },
  {
    title: "Fresh Ingredients",
    description:
      "Premium nuts, ragi, sesame, spices, and curry leaves chosen with care.",
    icon: Wheat,
  },
  {
    title: "Made with Love & Hygiene",
    description:
      "Prepared thoughtfully with hygiene, consistency, and warm homemade attention.",
    icon: Leaf,
  },
];

export const galleryImages = [
  {
    title: "Freshly Rolled Laddus",
    caption: "Warm tones for your product photography placeholder",
    className:
      "bg-[linear-gradient(180deg,rgba(200,138,42,0.7),rgba(74,44,23,0.78))]",
    tall: true,
  },
  {
    title: "Traditional Ingredients",
    caption: "Jaggery, nuts, sesame and handpicked pantry staples",
    className:
      "bg-[linear-gradient(180deg,rgba(15,77,28,0.74),rgba(200,138,42,0.55))]",
  },
  {
    title: "Homemade Process",
    caption: "Simple kitchen moments with a premium presentation",
    className:
      "bg-[linear-gradient(180deg,rgba(74,44,23,0.7),rgba(15,77,28,0.62))]",
  },
  {
    title: "Snack Collection",
    caption: "Savory and sweet items displayed for the grid",
    className:
      "bg-[linear-gradient(180deg,rgba(200,138,42,0.74),rgba(15,77,28,0.72))]",
    tall: true,
  },
  {
    title: "Packed with Care",
    caption: "A neat, delivery-ready placeholder composition",
    className:
      "bg-[linear-gradient(180deg,rgba(112,64,32,0.76),rgba(200,138,42,0.58))]",
  },
  {
    title: "Golden Jaggery Touch",
    caption: "Premium earthy palette for a polished brand mood",
    className:
      "bg-[linear-gradient(180deg,rgba(15,77,28,0.74),rgba(74,44,23,0.74))]",
  },
];

export const reviews = [
  {
    name: "Sowmya R.",
    location: "Hyderabad",
    quote:
      "The laddus tasted genuinely homemade and not overly sweet. You can really tell the jaggery and ingredients are fresh.",
  },
  {
    name: "Harsha K.",
    location: "Vijayawada",
    quote:
      "Karam Bunddi had the perfect crunch and spice. Beautiful packaging and a very clean, premium feel overall.",
  },
  {
    name: "Anitha M.",
    location: "Bengaluru",
    quote:
      "Loved the Nuvvula Unda. It reminded me of traditional homemade sweets from childhood, but with a refined finish.",
  },
];

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
    image: "/images/raggi-laddu.png",
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
  {
    id: "halwa",
    name: "Halwa",
    description: "Fresh halwa made in small batches.",
    price: 100,
    image: "/images/halwa.png",
  },
];

export const uspItems = [
  {
    title: "100% Homemade",
    description: "Prepared at home in small batches.",
    icon: HeartHandshake,
  },
  {
    title: "Only Jaggery",
    description: "Our sweet items are made with jaggery.",
    icon: Sparkles,
  },
  {
    title: "No Preservatives",
    description: "We do not add preservatives to our products.",
    icon: ShieldCheck,
  },
  {
    title: "Fresh Ingredients",
    description: "We use fresh ingredients like nuts, sesame, and spices.",
    icon: Wheat,
  },
  {
    title: "Clean Preparation",
    description: "Care is taken with hygiene while making every batch.",
    icon: Leaf,
  },
];

export const galleryImages = [
  {
    title: "Dry Fruit Ragi Laddu",
    caption: "Made with ragi, dry fruits, nuts and jaggery.",
    src: "/images/raggi-laddu.png",
    tall: true,
  },
  {
    title: "Dry Fruit Sunni Unda",
    caption: "A dry fruit sweet made with nuts and jaggery.",
    src: "/images/dryfruit-sunni-unda.png",
  },
  {
    title: "Nuvvula Unda",
    caption: "Traditional sesame sweet made with jaggery.",
    src: "/images/nuvvula.png",
  },
  {
    title: "Karam Bunddi",
    caption: "A crunchy snack with curry leaves and nuts.",
    src: "/images/karambundi.png",
    tall: true,
  },
  {
    title: "Halwa",
    caption: "Fresh halwa prepared in small batches.",
    src: "/images/halwa.png",
  },
];

export const whatsappConfig = {
  phoneNumber: "917892176357",
};

export const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Feedback", href: "#feedback" },
  { label: "Contact", href: "#contact" },
];

export const businessInfo = {
  phone: "8466041801",
  whatsapp: "8466041801",
  instagram: "@bodhana_home_foods",
  address: "Hyder nagar , Nizampet 5000072, Hyderabad",
  hours: "Orders need be to given one day before ",
};

export const socialLinks = [
  { label: "WhatsApp", href: `https://wa.me/${whatsappConfig.phoneNumber}` },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bodhana_home_foods?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  { label: "Call Us", href: `tel:${businessInfo.phone.replace(/\s+/g, "")}` },
];

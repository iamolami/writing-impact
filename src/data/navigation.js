const navLinks = [
  { text: "Home", link: "/" },
  {
    text: "Services",
    link: `/services`,
    arrow: "keyboard_arrow_down",
    dropdown: [
      { name: "Text Content", link: `/services/text-content` },
      { name: "Graphics", link: `/services/graphics`},
      { name: "Translations", link: `/services/translations` },
      { name: "Video", link: `/services/video` },
      { name: "Audio", link: `/services/audio` },
      { name: "Transcriptions", link: `/services/transcriptions` },
      { name: "Training & Consultations", link: `/services/traning-consultations`},
    ],
  },
  {
    text: "Products",
    link: `/products`,
    arrow: "keyboard_arrow_down",
    dropdown: [
      { name: "Digital Content Platform", link: "#digital-platform" },
      { name: "Managed Account", link: "#managed-account" },
      { name: "SEO Intelligence", link: "#seo-intelligence" },
      { name: "AI Copywriter", link: "#ai-copywriter" },
      { name: "Publishing", link: "#publishing" },
      { name: "Analytics", link: "#analytics" },
      { name: "Courses", link: "#courses" },
    ],
  },
  {
    text: "Resources",
    link: `/resources`,
    arrow: "keyboard_arrow_down",
    dropdown: [
      { name: "Content Samples", link: '/samples' },
      { name: "Blogs" },
      { name: "Glossary" },
      { name: "FAQs" }
    ],
  },
  { text: "Freelance", link: "/" },
];

export default navLinks;

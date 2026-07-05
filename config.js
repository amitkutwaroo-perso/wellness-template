/* ============================================================
   WELLNESS BOOKING TEMPLATE — CONFIGURATION
   Edit everything in this file. You should not need to touch
   index.html, style.css, or app.js for a normal setup.
   ============================================================ */

const SITE_CONFIG = {

  // ---------- Brand ----------
  brand: {
    name: "still",          // first part of the wordmark, plain color
    accent: "point",        // second part of the wordmark, accent color
    tagline: "Distance Reiki & Guided Meditation"
  },

  // ---------- Theme ----------
  // Change these 6 values and the entire look shifts.
  theme: {
    bg0: "#11141B",      // page background — dusk indigo
    bg1: "#171B24",      // panel background
    bg2: "#1F2430",      // raised panel / card background
    brass: "#C9A467",    // primary accent — candlelight brass
    ember: "#D98E73",    // secondary accent — warm ember
    ink: "#EDE9E2",      // primary text
    inkDim: "#9A9CA8",   // secondary / muted text
    fontDisplay: "Fraunces",
    fontBody: "Work Sans"
  },

  // ---------- Navigation ----------
  nav: [
    { label: "Sessions", href: "#sessions" },
    { label: "About", href: "#about" },
    { label: "Book", href: "#booking" }
  ],

  // ---------- Hero ----------
  hero: {
    eyebrow: "Sessions held over video, wherever you are",
    headline: "A quiet room, held open for you.",
    subhead: "Distance Reiki and guided meditation for people who need ten minutes of stillness before they can hear themselves think.",
    ctaPrimary: { label: "Book a session", href: "#booking" },
    ctaSecondary: { label: "How it works", href: "#sessions" },
    breathLabelIn: "breathe in",
    breathLabelHold: "hold",
    breathLabelOut: "breathe out"
  },

  // ---------- Sessions / services ----------
  sessions: {
    heading: "Ways to work together",
    sub: "Every session happens over video, at a time that fits your day.",
    items: [
      {
        name: "Single session",
        duration: "45 min",
        price: "$55",
        description: "One distance Reiki session. Good for a first visit or when you need one specific reset."
      },
      {
        name: "Three-session set",
        duration: "45 min each",
        price: "$150",
        description: "For working through something that won't resolve in a single sitting — grief, burnout, a hard transition."
      },
      {
        name: "Monthly rhythm",
        duration: "45 min, weekly",
        price: "$190/mo",
        description: "A standing weekly hour. Most people who keep this up for two months don't go back to sporadic sessions."
      }
    ]
  },

  // ---------- About ----------
  about: {
    heading: "Who's holding the session",
    paragraphs: [
      "I'm a Reiki practitioner working entirely by distance — no studio, no incense, just a video call and forty-five minutes that belong to you.",
      "Most people find me after trying meditation apps that felt like homework. This is closer to therapy in structure and closer to rest in feeling: you show up, you don't have to do anything, and we go from there."
    ],
    credentials: [
      "Reiki Master, Usui lineage",
      "500+ sessions held since 2021",
      "Trauma-aware, not medical advice"
    ]
  },

  // ---------- Testimonial ----------
  testimonial: {
    quote: "I didn't believe distance sessions could feel like anything. Twenty minutes in, my shoulders dropped for the first time in weeks.",
    attribution: "M., monthly client since 2024"
  },

  // ---------- Booking ----------
  booking: {
    heading: "Find a time",
    sub: "Pick a slot below — you'll get a video link by email right after.",
    // Paste a Calendly / Cal.com / Brisk link here to go live.
    embedUrl: "https://appointment.briskcloudware.com/book.html?r=t9MXXiac",
    // "iframe" = shows the calendar inline (Calendly/Cal.com allow this).
    // "button" = shows a "Book now" card that opens the link in a new tab
    // (use this for Brisk Appointment, which blocks inline embedding).
    embedType: "button",
    ctaLabel: "Book your session"
  },

  // ---------- Footer ----------
  footer: {
    email: "hello@stillpoint.example",
    location: "Sessions held worldwide, by video",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" }
    ],
    disclaimer: "Reiki is a complementary practice and is not a substitute for medical or mental health care."
  }
};

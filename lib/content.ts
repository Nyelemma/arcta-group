/* =============================================================================
   ARCTA GROUP — SITE CONTENT & IMAGE CONFIG
   -----------------------------------------------------------------------------
   Single source of truth for all copy + image slots across the website.

   TO ADD / SWAP IMAGES:
   1. Drop your file into the matching folder under /public/images/:
        - hero      -> /public/images/hero/
        - about     -> /public/images/about/
        - services  -> /public/images/services/
        - snagging  -> /public/images/snagging/
   2. Point the matching `image` field below at it, e.g.
        image: "/images/hero/hero.jpg"
   Until a real file exists, components render a premium gradient placeholder,
   so the site always looks finished.
   ========================================================================== */

export const SITE_URL = "https://arctagroup.ae";

export const business = {
  name: "Arcta Group",
  legalName: "Arcta Group",
  tagline: "Premium Property Services Across The UAE",
  shortTagline: "Where reliability meets professional service",
  region: "United Arab Emirates",
  city: "Dubai",
  phoneDisplay: "+971 50 554 0919",
  phoneHref: "tel:+971505540919",
  whatsapp: "https://wa.me/971505540919",
  whatsappMessage:
    "https://wa.me/971505540919?text=Hi%20Arcta%20Group%2C%20I%27d%20like%20to%20request%20a%20service%20for%20my%20property.",
  email: "info@arctagroup.ae",
  emailHref: "mailto:info@arctagroup.ae",
  instagramHandle: "arcta.ae",
  instagramUrl: "https://www.instagram.com/arcta.ae/",
  hours: "Sun–Sat, 24/7 emergency support",
  logo: "/images/logo/arcta-logo.png",
  logoLight: "/images/logo/arcta-logo-light.png",
  logoAlt: "Arcta Group — premium property services across the UAE",
} as const;

/* ---------- NAVIGATION ---------- */
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Deep Cleaning", href: "/deep-cleaning" },
  { label: "Water Filtration", href: "/water-filtration" },
  { label: "Snagging", href: "/snagging" },
  { label: "Annual Maintenance Contracts", href: "/contracts" },
] as const;

export const serviceNav = [
  { label: "AC Maintenance & Cleaning", href: "/ac-maintenance" },
  { label: "Duct & Coil Cleaning", href: "/duct-coil-cleaning" },
  { label: "Deep Cleaning", href: "/deep-cleaning" },
  { label: "Water Filtration", href: "/water-filtration" },
  { label: "Property Maintenance", href: "/property-maintenance" },
  { label: "Snagging Inspections", href: "/snagging" },
  { label: "Annual Maintenance Contracts", href: "/contracts" },
  { label: "Property Managers", href: "/property-managers" },
] as const;

/* ---------- HERO ---------- */
export const hero = {
  image: "/images/hero/hero.png",
  imageAlt:
    "Arcta Group technician in branded uniform servicing an air conditioning vent in a premium Dubai home",
  eyebrow: "UAE Property Services",
  headline: "Professional Property Services Across The UAE",
  highlight: ["Property", "Services"],
  subheadline:
    "Premium AC maintenance, duct cleaning, home sanitisation, water filtration and property services — helping families and property managers across the UAE create cleaner air, healthier homes and better living environments.",
  primaryCta: { label: "Request Service", href: "/#contact" },
  secondaryCta: { label: "View Services", href: "/#services" },
  trustIndicators: [
    { label: "24hr Response Time", icon: "clock" },
    { label: "UAE Wide Coverage", icon: "pin" },
    { label: "Fully Documented Jobs", icon: "clipboard" },
    { label: "Uniformed Technicians", icon: "badge" },
  ],
} as const;

/* ---------- TRUST / STATS BAR ---------- */
export type Stat = { value: number; suffix?: string; prefix?: string; label: string };

export const stats: Stat[] = [
  { value: 24, suffix: "hr", label: "Response time" },
  { value: 100, suffix: "%", label: "Jobs documented" },
  { value: 7, suffix: "", label: "Emirates covered" },
  { value: 1, prefix: "#", label: "Direct line to our team" },
];

/* ---------- ABOUT ---------- */
export const about = {
  eyebrow: "About Arcta Group",
  title: "Premium service, delivered with precision",
  paragraphs: [
    "Arcta Group was founded with a single, clear purpose — to bring a genuinely professional standard to property maintenance across the UAE. We exist because property managers, landlords and homeowners deserve a contractor they can actually rely on.",
    "Beyond AC and maintenance, we help create healthier homes — through cleaner air, professional sanitisation and filtered water that supports everyday family wellbeing.",
    "Every technician arrives in full uniform, communicates in English, documents every job with before and after photography, and leaves the property exactly as they found it. You deal directly with our founder — never a call centre, never an automated system.",
    "One call. One standard. Every time.",
  ],
  signature: "— Founder, Arcta Group",
  image: "/images/about/team.jpg",
  imageAlt: "Arcta Group founder and uniformed maintenance team in Dubai",
  pillars: [
    {
      number: "01",
      title: "Uniformed Professionals",
      description:
        "Every technician arrives branded, correctly presented, in the right footwear and ready to work. No excuses, no exceptions.",
      icon: "badge",
    },
    {
      number: "02",
      title: "English Communication",
      description:
        "We invest in our technicians. Clear English means every tenant and landlord interaction is professional and easy.",
      icon: "chat",
    },
    {
      number: "03",
      title: "Full Job Documentation",
      description:
        "Before and after photos on every single visit, with same-day reports sent straight to your inbox. Complete transparency.",
      icon: "clipboard",
    },
    {
      number: "04",
      title: "Direct Communication",
      description:
        "You always have a direct line to our team. Fast responses, no automated systems and no being passed around.",
      icon: "phone",
    },
  ],
} as const;

/* ---------- HOME WELLNESS (health-focused messaging) ---------- */
export const homeWellness = {
  eyebrow: "Healthier Homes",
  title: "Cleaner air. Cleaner water. Healthier living.",
  description:
    "Your home environment affects how you feel every day. Alongside our core AC and maintenance services, we help families and property owners improve indoor air quality, hygiene and water quality — creating spaces that are genuinely healthier to live in.",
  pillars: [
    {
      title: "Cleaner Air",
      description:
        "AC servicing, duct cleaning and chemical deep cleans remove dust, mould and bacteria — improving the air your family breathes.",
      icon: "ac",
    },
    {
      title: "Healthier Living Environments",
      description:
        "Regular maintenance and deep cleaning reduce contaminants, odours and allergens for a fresher, more comfortable home.",
      icon: "leaf",
    },
    {
      title: "Home Sanitisation",
      description:
        "Professional deep cleaning, ozone treatment, electrostatic spraying and steam cleaning for a thoroughly hygienic living space.",
      icon: "spray",
    },
    {
      title: "Cleaner Water",
      description:
        "Whole-home water filtration systems that improve water quality for drinking, cooking, bathing and everyday use.",
      icon: "filter",
    },
    {
      title: "Family Wellbeing",
      description:
        "From filtered water to sanitised surfaces and cleaner air — every service is designed to support the health of those who live in your home.",
      icon: "heart",
    },
  ],
} as const;

/* ---------- HOMEPAGE (concise) ---------- */
export const homeIntro = {
  eyebrow: "About Arcta Group",
  title: "Premium property services, delivered with precision",
  description:
    "Arcta Group is the UAE's trusted partner for AC maintenance, deep cleaning, water filtration and property care. We help families and property managers create cleaner air, healthier homes and better living environments — with uniformed technicians, full documentation and direct communication on every job.",
  cta: { label: "Learn more about us", href: "/about" },
} as const;

export type HomepageService = {
  title: string;
  short: string;
  icon: string;
  href: string;
};

export const homepageServices: HomepageService[] = [
  {
    title: "AC Maintenance & Cleaning",
    short:
      "Routine servicing, repairs and deep cleans that keep your cooling efficient and your indoor air healthier.",
    icon: "ac",
    href: "/ac-maintenance",
  },
  {
    title: "Deep Cleaning & Sanitisation",
    short:
      "Professional deep cleans, ozone treatment, electrostatic spraying and steam cleaning for a hygienic home.",
    icon: "spray",
    href: "/deep-cleaning",
  },
  {
    title: "Water Filtration",
    short:
      "Whole-villa filtration supply, installation and maintenance for cleaner drinking, cooking and bathing water.",
    icon: "filter",
    href: "/water-filtration",
  },
  {
    title: "Snagging Inspections",
    short:
      "Independent property inspections with detailed photographic reports before handover or purchase.",
    icon: "search",
    href: "/snagging",
  },
  {
    title: "Annual Maintenance Contracts",
    short:
      "Predictable annual contracts for homeowners, landlords and property portfolios across the UAE.",
    icon: "document",
    href: "/contracts",
  },
];

export const homeServicesSection = {
  eyebrow: "Our Services",
  title: "Everything your property needs",
  description:
    "Explore our services in detail — each delivered to the same professional standard, fully documented and backed by direct support from our team.",
} as const;

/* ---------- ABOUT PAGE (expanded) ---------- */
export const aboutPage = {
  hero: {
    eyebrow: "About Arcta Group",
    title: "Where reliability meets professional service",
    description:
      "Founded to bring a genuinely professional standard to property maintenance across the UAE, Arcta Group has become the trusted partner for property managers, landlords and homeowners who expect more from their contractor.",
  },
  mission:
    "Our mission is simple — to deliver property services that property managers and homeowners can actually rely on. One call, one standard, every time.",
  values: [
    {
      title: "Professional Standards",
      description:
        "Uniformed technicians, correct presentation and respectful workmanship on every property we enter.",
      icon: "badge",
    },
    {
      title: "Transparency",
      description:
        "Before-and-after photography and same-day reports on every visit — complete accountability you can pass to landlords.",
      icon: "clipboard",
    },
    {
      title: "Direct Communication",
      description:
        "You deal with our team directly. Clear English, fast responses and no call centres or automated systems.",
      icon: "phone",
    },
    {
      title: "Healthier Homes",
      description:
        "From cleaner air and filtered water to sanitised living spaces — we help create environments that support family wellbeing.",
      icon: "heart",
    },
  ],
  experience:
    "We work with villa communities, property management companies, holiday-home operators and homeowners across Dubai and the wider UAE — delivering the same consistent standard whether you manage one property or five hundred.",
} as const;

/* ---------- ANNUAL MAINTENANCE CONTRACTS / HOME HEALTH PLANS PAGE ---------- */
export const contractsPage = {
  hero: {
    eyebrow: "Annual Maintenance Contracts",
    title: "Annual maintenance contract in Dubai",
    description:
      "Home health plans designed to protect your family's health — not just maintain your home. Cleaner air, purer water and healthier surfaces under one annual plan, with 60-minute priority callouts and fully documented visits.",
    highlights: [
      "60-minute priority callouts",
      "Annual home health report",
      "Satisfaction guarantee",
    ],
  },
  plans: {
    eyebrow: "Our Home Health Plans",
    title: "Protect your family's health, not just your home",
    description:
      "Annual contracts designed to protect your family's health — not just maintain your home.",
  },
  whyArcta: {
    eyebrow: "Why Arcta?",
    title: "We protect what you can't see",
    paragraph:
      "Most maintenance companies clean what you can see. We protect what you can't — the air circulating through your ducts, the water coming out of your taps, the bacteria living on your surfaces. Our plans are built around your family's health, not just your property's appearance.",
  },
  whyYearly: [
    {
      title: "Cost Control",
      description:
        "A yearly plan converts unpredictable repair bills into one fixed annual cost. Early detection during scheduled visits stops small faults from becoming expensive failures.",
      icon: "tag",
    },
    {
      title: "Priority in Peak Season",
      description:
        "Contract holders are served first when demand spikes in summer. One-off callers wait longer — exactly when an AC failure is least bearable.",
      icon: "clock",
    },
    {
      title: "One Point of Contact",
      description:
        "No chasing separate vendors for AC, maintenance and repairs. One agreement, one team, one schedule — and you deal directly with us.",
      icon: "phone",
    },
    {
      title: "Longer Equipment Life",
      description:
        "Routine servicing keeps compressors, coils and drainage systems running efficiently for years longer than neglected units.",
      icon: "shield",
    },
  ],
  builtFor: [
    "Homeowners & villa residents",
    "Landlords & investors",
    "Property management companies",
    "Holiday home operators",
    "Real estate agencies",
  ],
} as const;

export const contractsFaqs: Faq[] = [
  {
    question: "What is an annual maintenance contract?",
    answer:
      "An annual maintenance contract is a 12-month agreement that bundles regular AC maintenance, property care and priority callouts into one plan. You get scheduled visits, documented reports and fixed pricing instead of paying separately for each repair and service.",
  },
  {
    question: "What does an Arcta Group home health plan include?",
    answer:
      "Our Essential Plan includes three full AC services a year, a full duct deep clean and sanitisation, a coil strip-down and internal restore, two professional deep cleans (steam, electrostatic and ozone), unlimited 60-minute priority callouts, written reports with before and after photos and an annual home health report. The Pure Home Plan adds whole-home water filtration supply and installation, your first filter replacement and priority scheduling.",
  },
  {
    question: "What is the difference between the Essential and Pure Home plans?",
    answer:
      "Both plans protect the air you breathe and the surfaces you touch with scheduled AC servicing, duct and coil care and professional deep cleans. The Pure Home Plan includes everything in Essential and adds whole-home water filtration — supply, installation, your first filter replacement and a water quality report before and after installation.",
  },
  {
    question: "Why choose a yearly plan over one-off repairs?",
    answer:
      "Dubai's climate puts constant strain on AC systems. Reactive, one-off repairs cost more and arrive slower — often during peak summer when every company is fully booked. A yearly plan gives you scheduled care, priority response and predictable costs.",
  },
  {
    question: "How is contract pricing determined?",
    answer:
      "Every property and portfolio is different. A villa with several AC units costs more to cover than a one-bedroom apartment. We assess your requirements and provide a transparent, itemised quote — free and returned within the hour.",
  },
  {
    question: "Are reports included with every contract visit?",
    answer:
      "Always. Every visit includes before-and-after photography and a same-day written report, giving you complete transparency and evidence for landlords and owners.",
  },
  {
    question: "Do you work with tenants, landlords and property managers?",
    answer:
      "Yes. We work with homeowners, tenants, landlords, property managers and real estate agencies. Each plan is matched to who is responsible for the property.",
  },
];

/* ---------- SERVICES SECTION HEADING ---------- */
export const servicesSection = {
  eyebrow: "What We Offer",
  title: "Complete property care, one trusted partner",
  description:
    "From routine AC maintenance and air quality improvements to deep sanitisation, water filtration and snagging inspections — every service delivered to one professional standard.",
} as const;

/* ---------- SERVICES ---------- */
export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
  featured?: boolean;
  featuredLabel?: string;
};

export const services: Service[] = [
  {
    slug: "ac-maintenance",
    title: "AC Maintenance & Cleaning",
    short: "Routine servicing that keeps cooling efficient and reliable.",
    description:
      "Comprehensive AC servicing recommended twice yearly — keeping your cooling efficient and reliable while improving indoor air quality through cleaner filters, coils and drainage.",
    icon: "ac",
    features: [
      "Filter cleaning",
      "Coil cleaning",
      "Drain flushing",
      "Fan inspections",
      "Indoor air quality checks",
    ],
    href: "/ac-maintenance",
  },
  {
    slug: "ac-repairs",
    title: "AC Repairs & Callouts",
    short: "Fast, fully documented diagnostics and emergency repairs.",
    description:
      "When a unit fails, we respond fast. Accurate diagnostics and fully documented repairs get your cooling back online with minimal disruption.",
    icon: "wrench",
    features: [
      "Refrigerant recharge",
      "Capacitor replacement",
      "PCB faults",
      "Emergency repairs",
      "Full diagnostics",
    ],
    href: "/ac-maintenance",
  },
  {
    slug: "chemical-deep-clean",
    title: "Chemical AC Deep Cleaning",
    short: "Intensive wash that restores performance and air quality.",
    description:
      "An intensive chemical wash for units with heavy buildup, mould or long service gaps — restoring full cooling performance and healthier air.",
    icon: "droplet",
    features: [
      "Improved air quality",
      "Better cooling performance",
      "Removal of mould and bacteria",
      "Restored airflow",
    ],
    href: "/ac-maintenance",
  },
  {
    slug: "duct-cleaning",
    title: "Duct & Ventilation Cleaning",
    short: "Cleaner air and better efficiency for dusty UAE environments.",
    description:
      "Full duct and vent system cleaning that removes accumulated dust and allergens — improving indoor air quality and system efficiency in the UAE's dusty climate.",
    icon: "duct",
    features: [
      "Air duct cleaning",
      "Vent cleaning",
      "Indoor air quality improvements",
      "Dust and debris removal",
    ],
    href: "/duct-coil-cleaning",
  },
  {
    slug: "coil-cleaning",
    title: "Coil Cleaning",
    short: "Lower energy bills and stronger, more efficient cooling.",
    description:
      "Dedicated evaporator and condenser coil cleaning that lowers energy consumption and restores strong, efficient cooling output.",
    icon: "coil",
    features: [
      "Energy savings",
      "Improved efficiency",
      "Better cooling output",
      "Extended equipment life",
    ],
    href: "/duct-coil-cleaning",
  },
  {
    slug: "home-sanitisation",
    title: "Deep Cleaning & Sanitisation",
    short: "Professional deep cleans and advanced sanitisation for healthier homes.",
    description:
      "Thorough deep cleaning and advanced sanitisation treatments that reduce bacteria, remove odours and create cleaner, more hygienic living spaces for your family.",
    icon: "spray",
    features: [
      "Deep home cleaning",
      "Ozone treatment",
      "Electrostatic spraying",
      "Steam cleaning",
      "Odour & bacteria removal",
    ],
    href: "/deep-cleaning",
  },
  {
    slug: "water-filtration",
    title: "Water Filtration",
    short: "Supply, installation and maintenance of whole-home filtration systems.",
    description:
      "Professional water filtration systems that improve water quality throughout your villa — for cleaner drinking water, better cooking and healthier everyday use.",
    icon: "filter",
    features: [
      "System supply & installation",
      "Whole-villa filtration",
      "Scheduled filter replacement",
      "Annual maintenance plans",
      "Improved water quality",
    ],
    href: "/water-filtration",
    featured: true,
    featuredLabel: "Whole-Home Solution",
  },
  {
    slug: "home-maintenance",
    title: "Home Maintenance",
    short: "Trusted handyman and upkeep across your property.",
    description:
      "Reliable handyman services and general repairs that keep your property in top condition — handled by trusted, uniformed professionals.",
    icon: "tools",
    features: [
      "Handyman services",
      "General repairs",
      "Property upkeep",
      "Preventative maintenance",
    ],
    href: "/property-maintenance",
  },
  {
    slug: "snagging-inspections",
    title: "Snagging Inspections",
    short: "Protect your investment with detailed property inspections.",
    description:
      "Detailed, independent property inspections that identify defects before you commit — with comprehensive photographic reporting you can act on.",
    icon: "search",
    features: [
      "New build snagging inspections",
      "Pre-handover inspections",
      "Resale inspections",
      "Detailed reporting",
      "Defect identification",
    ],
    href: "/snagging",
  },
];

/* ---------- DEEP CLEANING & SANITISATION (sub-page) ---------- */
export const sanitisation = {
  eyebrow: "Deep Cleaning & Sanitisation",
  title: "A cleaner, healthier home environment",
  intro:
    "Surface cleaning alone is not always enough. Our deep cleaning and advanced sanitisation services target bacteria, odours and contaminants — leaving your home genuinely cleaner and more hygienic for everyday family life.",
  methods: [
    {
      title: "Deep Home Cleaning",
      description:
        "A thorough, room-by-room deep clean that reaches areas routine cleaning misses — kitchens, bathrooms, fixtures and high-touch surfaces.",
      icon: "sparkle",
    },
    {
      title: "Ozone Treatment",
      description:
        "Ozone gas penetrates hard-to-reach areas to neutralise odours, bacteria and airborne contaminants — ideal after renovations or long vacancies.",
      icon: "bolt",
    },
    {
      title: "Electrostatic Spraying",
      description:
        "Fine-mist electrostatic application wraps disinfectant around surfaces for even, comprehensive coverage — including awkward and vertical areas.",
      icon: "spray",
    },
    {
      title: "Steam Cleaning",
      description:
        "High-temperature steam sanitises surfaces without harsh chemicals — effective on upholstery, tiles, grout and kitchen areas.",
      icon: "droplet",
    },
  ],
  benefits: [
    "Improved hygiene across the home",
    "Reduction of bacteria and contaminants",
    "Effective odour removal",
    "Cleaner, fresher living spaces",
    "Healthier indoor environments for families",
  ],
} as const;

export const sanitisationBenefits: Benefit[] = [
  {
    title: "Improved Hygiene",
    description: "Targeted treatments reduce bacteria and contaminants on surfaces throughout your home.",
    icon: "shield",
  },
  {
    title: "Odour Removal",
    description: "Ozone and deep cleaning neutralise persistent odours from cooking, moisture and long-term use.",
    icon: "sparkle",
  },
  {
    title: "Healthier Spaces",
    description: "Sanitised environments support family wellbeing — especially in kitchens, bathrooms and bedrooms.",
    icon: "heart",
  },
  {
    title: "Fully Documented",
    description: "Before-and-after photos and a same-day report on every visit, as with all Arcta Group services.",
    icon: "clipboard",
  },
];

export const sanitisationFaqs: Faq[] = [
  {
    question: "What is the difference between deep cleaning and regular cleaning?",
    answer:
      "Deep cleaning is a comprehensive, detailed clean that addresses built-up grime, hidden areas and high-touch surfaces that routine cleaning does not reach. It is ideal before move-in, after renovations or as a periodic refresh.",
  },
  {
    question: "What is ozone treatment used for?",
    answer:
      "Ozone treatment is an advanced sanitisation method that neutralises odours, bacteria and airborne contaminants. It is particularly effective after building work, in properties that have been vacant, or where persistent smells remain.",
  },
  {
    question: "Is electrostatic spraying safe for homes?",
    answer:
      "Yes. Our electrostatic spraying applies disinfectant as a fine, evenly distributed mist that wraps around surfaces. It is a professional-grade method used to achieve thorough coverage in residential properties.",
  },
  {
    question: "How often should a home be deep cleaned or sanitised?",
    answer:
      "We recommend a deep clean at least once or twice a year, or after renovations, tenancies or illness. Properties with children, pets or high footfall may benefit from more frequent sanitisation.",
  },
];

/* ---------- WATER FILTRATION (sub-page) ---------- */
export type FiltrationStage = {
  stage: string;
  title: string;
  description: string;
};

export const waterFiltration = {
  eyebrow: "Water Filtration",
  title: "Cleaner water for your entire home",
  intro:
    "Municipal water in the UAE can carry sediment, chlorine and impurities that affect taste, skin, hair and your plumbing. A professionally installed whole-villa filtration system delivers cleaner, safer water to every tap, shower and appliance in your home.",
  symptoms: [
    "Dry or irritated skin after showering",
    "Hair thinning or excessive dryness",
    "Unpleasant taste or odour from taps",
    "Scale buildup on fixtures and appliances",
    "Sediment visible in water",
  ],
  stages: [
    {
      stage: "Stage 1",
      title: "Sediment Filtration",
      description:
        "A high-capacity sediment filter captures sand, rust, dirt and larger particles from the water supply — protecting your plumbing, appliances and downstream filter stages from damage.",
    },
    {
      stage: "Stage 2",
      title: "Carbon Block Filtration",
      description:
        "A dense carbon block filter removes chlorine, chloramines and organic compounds. This improves taste and odour, protects skin and hair from chlorine exposure, and extends the life of your fixtures.",
    },
    {
      stage: "Stage 3",
      title: "Final Polishing Filter",
      description:
        "A final fine sediment filter captures any remaining particles, ensuring consistently clean, clear water reaches every point of use throughout your villa.",
    },
  ] as FiltrationStage[],
  services: [
    {
      title: "Supply",
      description:
        "We supply professionally specified filtration systems designed for UAE water conditions — sized correctly for your property.",
      icon: "filter",
    },
    {
      title: "Installation",
      description:
        "Experienced technicians install your system at the point of entry, ensuring every tap and shower receives filtered water from day one.",
      icon: "wrench",
    },
    {
      title: "Maintenance",
      description:
        "Scheduled filter replacements, system inspections and performance checks keep your filtration running at its best year after year.",
      icon: "calendar",
    },
  ],
  familyBenefits: [
    "Cleaner water for drinking and cooking",
    "Gentler on skin and hair during bathing",
    "Protection for appliances and plumbing",
    "Improved taste and odour from every tap",
    "Peace of mind for families with children",
  ],
} as const;

export const waterFiltrationBenefits: Benefit[] = [
  {
    title: "Better Drinking Water",
    description: "Filtered water tastes cleaner and is free from the chlorine and sediment common in UAE supplies.",
    icon: "droplet",
  },
  {
    title: "Healthier for Families",
    description: "Cleaner water for drinking, cooking and bathing supports everyday family wellbeing.",
    icon: "heart",
  },
  {
    title: "Protects Your Home",
    description: "Reduced sediment and scale extends the life of taps, showers, appliances and plumbing.",
    icon: "shield",
  },
  {
    title: "Professional Aftercare",
    description: "Annual maintenance plans with scheduled filter changes keep your system performing year-round.",
    icon: "clipboard",
  },
];

export const waterFiltrationFaqs: Faq[] = [
  {
    question: "Why do I need a water filtration system in Dubai?",
    answer:
      "Municipal water supplies in the UAE often contain sediment, chlorine and other impurities that can affect skin, hair, taste and plumbing. A whole-villa system filters water at the point of entry, so every tap and shower in your home receives cleaner water.",
  },
  {
    question: "Do you supply and install filtration systems?",
    answer:
      "Yes. We supply professionally specified systems, install them at the point of entry and provide ongoing maintenance — including scheduled filter replacements and system inspections.",
  },
  {
    question: "How often do filters need replacing?",
    answer:
      "Filter replacement schedules depend on your system and water usage, but typically filters are replaced annually. We offer maintenance plans to handle this on schedule so your system always performs at its best.",
  },
  {
    question: "Will filtered water improve skin and hair?",
    answer:
      "Many homeowners notice an improvement after installing filtration. Removing chlorine and sediment from bathing water can reduce dryness and irritation — a common concern with unfiltered UAE water.",
  },
];

/* ---------- WHY CHOOSE US ---------- */
export type Reason = { title: string; description: string; icon: string };

export const reasons: Reason[] = [
  {
    title: "Professional Standards",
    description:
      "Uniformed, correctly presented technicians who treat every property with respect — a standard rarely found in the UAE maintenance market.",
    icon: "badge",
  },
  {
    title: "English Communication",
    description:
      "Clear, fluent English on every job means tenant and landlord interactions are always professional and easy to follow.",
    icon: "chat",
  },
  {
    title: "Full Documentation",
    description:
      "Before and after reports on every visit, sent same day — everything you need to report back to landlords without chasing us.",
    icon: "clipboard",
  },
  {
    title: "Reliable Response Times",
    description:
      "We confirm every appointment, arrive when we say we will, and respond fast. Your tenants never have to wait and wonder.",
    icon: "clock",
  },
  {
    title: "Direct Contact",
    description:
      "One direct line to our team — no call centres, no automated systems, no being passed around. One message and it gets handled.",
    icon: "phone",
  },
  {
    title: "Quality Assurance",
    description:
      "Consistent standards on every visit — from AC servicing to sanitisation and water filtration — backed by documentation and personal accountability.",
    icon: "shield",
  },
];

/* ---------- PROPERTY MANAGERS ---------- */
export const propertyManagers = {
  eyebrow: "For Property Professionals",
  title: "A maintenance partner built for portfolios",
  intro:
    "Whether you manage 5 properties or 500, Arcta Group is the dependable, fully documented partner that makes you look good to your landlords and owners — from AC and maintenance to air quality, sanitisation and water filtration.",
  audiences: [
    "Property management companies",
    "Villa communities",
    "Holiday home & short-term rental operators",
    "Real estate agencies",
  ],
  features: [
    {
      title: "Annual Maintenance Contracts",
      description:
        "Fixed, transparent annual contracts tailored to your portfolio — predictable costs with no surprises.",
      icon: "document",
    },
    {
      title: "Maintenance Plans",
      description:
        "Scheduled preventative maintenance that keeps units healthy and reduces emergency callouts across your buildings.",
      icon: "calendar",
    },
    {
      title: "Reporting Systems",
      description:
        "Same-day photographic reports and monthly dashboards so you always have evidence ready for owners.",
      icon: "chart",
    },
    {
      title: "Dedicated Account Management",
      description:
        "A single, accountable point of contact who knows your portfolio and responds fast — every time.",
      icon: "headset",
    },
  ],
} as const;

/* ---------- ANNUAL MAINTENANCE CONTRACTS ---------- */
export type PricingTier = {
  name: string;
  tagline?: string;
  priceLabel: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  badge?: string;
};

export const pricing: PricingTier[] = [
  {
    name: "Essential Plan",
    tagline: "Clean Air. Healthy Home.",
    priceLabel: "Tailored Quote",
    priceNote: "based on your home",
    description:
      "Year-round protection for the air you breathe and the surfaces you touch.",
    features: [
      "3 × full AC service per year",
      "1 × full duct deep clean & sanitisation",
      "1 × full coil strip-down & internal restore",
      "2 × professional deep clean (steam, electrostatic & ozone)",
      "Unlimited priority callouts — 60 minute response",
      "Written report & before/after photos every visit",
      "Annual home health report",
      "20% discount on all additional services",
      "Satisfaction guarantee — we return free if you're not happy",
    ],
    cta: { label: "Get a Quote", href: "/#contact" },
  },
  {
    name: "Pure Home Plan",
    tagline: "Clean Air. Pure Water. Healthy Home.",
    priceLabel: "Tailored Quote",
    priceNote: "based on your home",
    description: "Everything in Essential, plus whole-home water filtration.",
    features: [
      "Everything in the Essential Plan",
      "Water filtration system supply & installation",
      "First filter replacement included",
      "Water quality report before & after installation",
      "Priority scheduling — your jobs booked first",
    ],
    cta: { label: "Get a Quote", href: "/#contact" },
    highlighted: true,
    badge: "Most Popular",
  },
];

/* ---------- SNAGGING ---------- */
export type SnaggingStat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** Use when the figure should not animate (e.g. "0"). */
  display?: string;
};

export const snaggingStats: SnaggingStat[] = [
  { value: 100, suffix: "+", label: "Defects found on a typical new villa" },
  { value: 7, suffix: "yr", label: "DLP developer liability period in the UAE" },
  { value: 0, prefix: "AED ", display: "0", label: "Cost to you when defects are fixed pre-handover" },
];

export const snagging = {
  eyebrow: "Snagging Inspections",
  title: "Protect your property investment",
  intro:
    "Before you take handover or complete a purchase, an independent snagging inspection uncovers the defects developers and sellers would rather you didn't see — saving you significant money and stress.",
  audiences: [
    { label: "Property Buyers", icon: "key" },
    { label: "Property Sellers", icon: "tag" },
    { label: "Real Estate Agencies", icon: "building" },
    { label: "Investors", icon: "chart" },
  ],
  types: [
    {
      title: "New Build Snagging",
      description:
        "Catch construction and finishing defects in newly built villas and apartments before they become your problem.",
    },
    {
      title: "Pre-Handover Inspections",
      description:
        "Independent inspection before you accept keys, so the developer fixes issues on their cost, not yours.",
    },
    {
      title: "Resale Inspections",
      description:
        "Know exactly what you're buying — a full condition report on resale properties before you commit.",
    },
    {
      title: "Detailed Reporting",
      description:
        "Every defect photographed, categorised and clearly described in a report you can hand straight to the developer.",
    },
  ],
  commonIssues: [
    "Poor paint and finishing",
    "Door and window misalignment",
    "AC and ventilation faults",
    "Plumbing and drainage leaks",
    "Electrical and socket faults",
    "Tiling and grouting defects",
    "Water damage and damp",
    "Joinery and cabinetry gaps",
  ],
  checklistTitle: "What we inspect",
  checklist: [
    { area: "Air Conditioning", items: ["Cooling performance", "Drainage", "Thermostat operation"] },
    { area: "Electrical", items: ["Sockets & switches", "Distribution board", "Lighting circuits"] },
    { area: "Plumbing", items: ["Water pressure", "Leaks & drainage", "Hot water system"] },
    { area: "Finishes", items: ["Paint & walls", "Tiling & grout", "Doors & windows"] },
    { area: "Joinery", items: ["Kitchen units", "Wardrobes", "Skirting & trims"] },
    { area: "External", items: ["Facade & render", "Balconies", "Waterproofing"] },
  ],
  image: "/images/snagging/inspection.jpg",
  imageAlt: "Arcta Group inspector documenting defects during a property snagging inspection in Dubai",
} as const;

/* ---------- PROCESS ---------- */
export type ProcessStep = { number: string; title: string; description: string; icon: string };

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Request Service",
    description:
      "Message us on WhatsApp, call, or send the form. You reach our team directly — no call centre.",
    icon: "phone",
  },
  {
    number: "02",
    title: "Schedule Visit",
    description:
      "We confirm a convenient appointment and a free, itemised quote, usually returned within the hour.",
    icon: "calendar",
  },
  {
    number: "03",
    title: "Inspection & Work",
    description:
      "Uniformed technicians arrive on time, carry out the work to a high standard, and respect your property.",
    icon: "wrench",
  },
  {
    number: "04",
    title: "Documentation",
    description:
      "Before and after photos plus a same-day written report land in your inbox. Complete transparency.",
    icon: "clipboard",
  },
  {
    number: "05",
    title: "Follow-Up Support",
    description:
      "We stay in touch, track recurring needs and keep your property covered all year round.",
    icon: "shield",
  },
];

/* ---------- TESTIMONIALS (CMS-ready placeholders) ---------- */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Finally a maintenance partner I don't have to chase. Reports arrive the same day and the technicians are always presentable. It makes reporting back to owners effortless.",
    name: "Property Manager",
    role: "Villa community, Dubai",
    rating: 5,
  },
  {
    quote:
      "Their snagging report saved us a fortune before handover. Every defect was photographed and clearly explained — the developer fixed everything at their cost.",
    name: "Homeowner",
    role: "New build villa, Dubai Hills",
    rating: 5,
  },
  {
    quote:
      "Professional, on time and genuinely reliable. The annual contract gives us predictable costs across the whole portfolio with zero surprises.",
    name: "Real Estate Agency",
    role: "Short-term rentals, Dubai Marina",
    rating: 5,
  },
  {
    quote:
      "After installing the whole-villa filtration system, the difference in water quality was noticeable straight away. Combined with their duct cleaning, the whole home feels fresher and healthier.",
    name: "Homeowner",
    role: "Villa, Arabian Ranches",
    rating: 5,
  },
];

/* ---------- SERVICE AREAS ---------- */
export type ServiceArea = { name: string; description: string };

export const serviceAreas: ServiceArea[] = [
  {
    name: "Dubai",
    description:
      "AC maintenance, duct cleaning, home sanitisation, water filtration and property services across Dubai's villa communities and residential towers.",
  },
  {
    name: "Abu Dhabi",
    description:
      "Reliable, documented property services for landlords and managers throughout the capital.",
  },
  {
    name: "Sharjah",
    description:
      "Professional AC servicing and home maintenance for Sharjah homeowners and portfolios.",
  },
  {
    name: "Ajman",
    description:
      "Trusted maintenance and inspection services for properties across Ajman.",
  },
  {
    name: "Ras Al Khaimah",
    description:
      "Premium AC and property care for villas and holiday homes in RAK.",
  },
  {
    name: "UAE Wide",
    description:
      "Whatever the emirate, Arcta Group delivers one consistent professional standard.",
  },
];

/* ---------- FAQ ---------- */
export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How often should AC units be serviced in the UAE?",
    answer:
      "We recommend a full service twice a year for every unit. The UAE's heat and dust place heavy demand on AC systems, and regular maintenance keeps them efficient, healthy and far less likely to fail when you need them most.",
  },
  {
    question: "What is a snagging inspection and why does it matter?",
    answer:
      "A snagging inspection is an independent survey of a property — usually a new build before handover — that identifies construction and finishing defects. Because UAE developers carry a liability period, raising defects before handover means they're typically fixed at the developer's cost rather than yours.",
  },
  {
    question: "Do you provide reports after every job?",
    answer:
      "Yes. Every visit includes before and after photography and a same-day written report sent straight to your inbox — complete transparency you can pass straight to landlords or owners.",
  },
  {
    question: "Which areas of the UAE do you cover?",
    answer:
      "We serve Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah and the wider UAE, delivering the same consistent professional standard across every emirate.",
  },
  {
    question: "Do you offer contracts for property managers?",
    answer:
      "Absolutely. We offer Standard, Premium and Enterprise annual maintenance contracts tailored to your portfolio, with fixed transparent pricing, priority response and dedicated account management.",
  },
  {
    question: "How quickly can you respond to an emergency?",
    answer:
      "We offer 24-hour response times and prioritised callouts for contract clients, with same-day attendance for urgent issues wherever possible.",
  },
  {
    question: "Do you offer deep cleaning and home sanitisation?",
    answer:
      "Yes. We provide professional deep home cleaning, ozone treatment, electrostatic spraying and steam cleaning — designed to improve hygiene, remove odours and create healthier indoor environments.",
  },
  {
    question: "Do you supply and install water filtration systems?",
    answer:
      "Yes. We supply, install and maintain whole-villa water filtration systems tailored to UAE water conditions — with scheduled filter replacements and annual maintenance plans available.",
  },
];

/* ---------- PAGE-SPECIFIC FAQs ---------- */
export const acFaqs: Faq[] = [
  {
    question: "How often should I service my AC in Dubai?",
    answer:
      "Twice a year is ideal for the UAE climate. Regular servicing keeps units efficient, lowers energy bills, improves air quality and dramatically reduces the chance of a breakdown during peak summer.",
  },
  {
    question: "What is included in an AC maintenance visit?",
    answer:
      "A full service covers filter cleaning, coil cleaning, drainage flushing, fan inspection and a complete system performance check — finished with a before-and-after photographic report.",
  },
  {
    question: "Do you offer emergency AC repairs?",
    answer:
      "Yes. We provide fast diagnostics and emergency callouts for issues like refrigerant loss, capacitor failure, PCB faults and drainage blockages, with same-day attendance wherever possible.",
  },
  {
    question: "What is chemical AC deep cleaning?",
    answer:
      "An intensive chemical wash of the indoor and outdoor units that removes mould, bacteria and stubborn buildup. It restores full cooling performance and noticeably improves indoor air quality — ideal for units with long service gaps.",
  },
];

export const ductFaqs: Faq[] = [
  {
    question: "Why is duct cleaning important in the UAE?",
    answer:
      "The UAE's dusty environment means ducts accumulate fine dust, debris and allergens quickly. Cleaning them improves indoor air quality, reduces strain on your system and helps it run more efficiently.",
  },
  {
    question: "What are the benefits of coil cleaning?",
    answer:
      "Clean evaporator and condenser coils transfer heat far more efficiently. The result is lower energy consumption, stronger cooling output and a longer lifespan for your equipment.",
  },
  {
    question: "How often should ducts and coils be cleaned?",
    answer:
      "We typically recommend duct and coil cleaning annually, or more frequently for properties with heavy use, pets, or located in particularly dusty areas.",
  },
];

export const propertyFaqs: Faq[] = [
  {
    question: "What home maintenance services do you offer?",
    answer:
      "We handle handyman services, general repairs, property upkeep and scheduled preventative maintenance — all carried out by uniformed, English-speaking professionals.",
  },
  {
    question: "Do you offer maintenance for property portfolios?",
    answer:
      "Yes. We work with property managers, landlords and holiday-home operators on tailored maintenance plans and annual contracts with fixed, transparent pricing.",
  },
  {
    question: "Will I receive reports after each job?",
    answer:
      "Always. Every visit includes before-and-after photography and a same-day written report, so you have complete transparency and evidence to pass to owners.",
  },
];

export const snaggingFaqs: Faq[] = [
  {
    question: "What is a snagging inspection?",
    answer:
      "A snagging inspection is an independent, detailed survey of a property — usually a new build before handover — that identifies construction, finishing and system defects so they can be rectified.",
  },
  {
    question: "When should I book a snagging inspection?",
    answer:
      "Ideally before you take handover of a new build, so defects are raised while the developer is still liable and obligated to fix them at their own cost. We also inspect resale properties before purchase.",
  },
  {
    question: "What happens after the inspection?",
    answer:
      "You receive a comprehensive photographic report with every defect categorised and clearly described. You can hand this straight to the developer or seller to have the issues resolved.",
  },
  {
    question: "Can the developer refuse to fix the defects?",
    answer:
      "In the UAE, developers carry a defects liability period after handover. A documented snagging report gives you the evidence needed to ensure legitimate defects are addressed.",
  },
];

/* ---------- SERVICE BENEFITS (sub-pages) ---------- */
export type Benefit = { title: string; description: string; icon: string };

export const acBenefits: Benefit[] = [
  {
    title: "Lower Energy Bills",
    description: "Clean, well-tuned units run more efficiently, cutting your cooling costs through the summer.",
    icon: "bolt",
  },
  {
    title: "Healthier Air",
    description: "Removing dust, mould and bacteria improves indoor air quality for tenants and families.",
    icon: "droplet",
  },
  {
    title: "Fewer Breakdowns",
    description: "Preventative servicing catches small issues before they become expensive emergency failures.",
    icon: "shield",
  },
  {
    title: "Documented Every Time",
    description: "Before-and-after photos and a same-day report on every single visit. Complete transparency.",
    icon: "clipboard",
  },
];

export const ductBenefits: Benefit[] = [
  {
    title: "Improved Air Quality",
    description: "Removes accumulated dust, allergens and debris from your duct and vent system.",
    icon: "droplet",
  },
  {
    title: "Energy Savings",
    description: "Clean coils and ducts let your system cool efficiently, reducing energy consumption.",
    icon: "bolt",
  },
  {
    title: "Better Cooling Output",
    description: "Unrestricted airflow and clean coils deliver stronger, more consistent cooling.",
    icon: "ac",
  },
  {
    title: "Extended Equipment Life",
    description: "Less strain on the system means your AC equipment lasts longer and performs better.",
    icon: "shield",
  },
];

/* ---------- SEO KEYWORDS ---------- */
export const seoKeywords = [
  "AC maintenance Dubai",
  "AC cleaning Dubai",
  "AC repair Dubai",
  "duct cleaning Dubai",
  "coil cleaning Dubai",
  "property maintenance Dubai",
  "home maintenance Dubai",
  "snagging inspection Dubai",
  "property snagging UAE",
  "building inspection Dubai",
  "AC maintenance UAE",
  "AC servicing Dubai",
  "annual maintenance contract Dubai",
  "annual service contract Dubai",
  "AMC Dubai",
  "home sanitisation Dubai",
  "deep cleaning Dubai",
  "ozone treatment Dubai",
  "water filtration Dubai",
  "villa water filter UAE",
  "indoor air quality Dubai",
  "property management maintenance UAE",
  "Arcta Group",
  "Arcta Group Dubai",
];

/* ---------- LEGAL / FOOTER ---------- */
export const legalLinks = [
  { label: "Privacy Policy", href: "/#" },
  { label: "Terms of Service", href: "/#" },
  { label: "Cookie Policy", href: "/#" },
] as const;

export const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Deep Cleaning", href: "/deep-cleaning" },
  { label: "Water Filtration", href: "/water-filtration" },
  { label: "Snagging", href: "/snagging" },
  { label: "Annual Maintenance Contracts", href: "/contracts" },
  { label: "Contact", href: "/#contact" },
] as const;

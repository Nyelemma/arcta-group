export type Faq = {
  question: string;
  answer: string;
  /** Optional follow-on link shown beneath the answer. */
  link?: { label: string; href: string };
};

export type Benefit = { title: string; text: string };

export type ServiceRecord = {
  slug: string;
  category: CategorySlug;
  name: string;
  headline: string;
  lede: string;
  paragraphs: string[];
  includes: string[];
  benefits: Benefit[];
  image: string;
  imageAlt: string;
  faqs: Faq[];
  /** Small uppercase line above the hero headline. */
  heroEyebrow?: string;
  /** Small line beneath the hero buttons. */
  heroNote?: string;
  /** Heading for the bottom quote form (otherwise the default). */
  quoteHeading?: string;
  /** Hero subline override (otherwise `lede`). */
  heroLede?: string;
  /** Drops the large hero image beside the text (it is still used on category pages). */
  hideHeroImage?: boolean;
  /** Photo shown beneath the hero buttons. */
  heroPhoto?: { src: string; alt: string };
  /** Replaces the hero subline and buttons with "Call now" + "WhatsApp us" and a small note beneath. */
  callHero?: { lede: string; note: string };
  /** Overrides the "Included" box heading, and adds a note beneath its list. */
  includesHeading?: string;
  includesNote?: string;
  /** Checklist section shown before "Why it matters". */
  signs?: { heading: string; items: string[] };
  /** Slugs from `recentWork` shown as before/after cards after "Why it matters". */
  beforeAfter?: string[];
  /** Prompt to the Annual Home Care page, shown before the FAQs. */
  annualCare?: string;
  seoTitle: string;
  seoDescription: string;
  adsSlug: string;
  adsH1: string;
  adsLede: string;
};

export type CategorySlug =
  | "ac-services"
  | "home-maintenance"
  | "upholstery-care";

export type CategoryRecord = {
  slug: CategorySlug;
  name: string;
  navCta: string;
  headline: string;
  lede: string;
  intro: string[];
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  layout: "alternating" | "indexed" | "editorial";
};

const technician = {
  image: "/images/technician.jpg",
  imageAlt:
    "Arcta Group technician in uniform servicing a ceiling air-conditioning vent",
};

const interior = {
  image: "/images/interior.jpg",
  imageAlt:
    "Open-plan living room with linear ceiling air diffusers and a pale sofa",
};

export const categories: CategoryRecord[] = [
  {
    slug: "ac-services",
    name: "AC Services",
    navCta: "Explore AC Services",
    headline: "Keep your home cool and properly maintained.",
    lede: "AC servicing, repairs, coil cleaning, duct cleaning and drain flushing.",
    intro: [
      "Dubai asks a lot of an air-conditioning system. Dust, long running hours and missed services show up as weak cooling, higher bills, leaks and air that does not feel fresh.",
      "Arcta Group looks after the system properly: a clear quote before work, uniformed technicians, and before-and-after documentation on the visit. Servicing is recommended 3 to 4 times a year in this climate. Emergency callouts are available around the clock.",
    ],
    ...technician,
    seoTitle: "AC Services Dubai | Servicing, Repairs & Duct Cleaning",
    seoDescription:
      "AC servicing, repairs, coil cleaning, duct cleaning and drain flushing across Dubai. Clear quotes, documented visits and 24/7 emergency support from Arcta Group.",
    layout: "alternating",
  },
  {
    slug: "home-maintenance",
    name: "Home Maintenance",
    navCta: "Explore Home Maintenance",
    headline: "Reliable help for the everyday issues around your home.",
    lede: "Plumbing, electrical, handyman work, water heater repair and replacement, and leak and ceiling repairs.",
    intro: [
      "Most homes do not need a different contractor for every small fault. Arcta Group handles the practical work that keeps a property comfortable — quoted first, carried out by uniformed technicians, and written up afterwards.",
      "The same standard applies whether it is a dripping line, a tired water heater, or a stain spreading across a ceiling. We look for the cause, not only the mark it left.",
    ],
    image: "/images/villa.jpg",
    imageAlt:
      "White contemporary villa with a shaded terrace, used to suggest a cared-for home",
    seoTitle: "Home Maintenance Dubai | Plumbing, Electrical & Handyman",
    seoDescription:
      "Plumbing, electrical fixes, handyman work, water heater repair and replacement, and leak and ceiling repairs in Dubai. Quoted, documented and handled directly.",
    layout: "indexed",
  },
  {
    slug: "upholstery-care",
    name: "Upholstery Care",
    navCta: "Explore Upholstery Care",
    headline: "Professional cleaning for the surfaces you use every day.",
    lede: "Sofas, mattresses, carpets and rugs.",
    intro: [
      "Furnishings collect dust, spills and the wear of daily life. Professional cleaning lifts that build-up, improves how a room feels, and helps sofas, mattresses, carpets and rugs last longer.",
      "Arcta presents the work the same way as every other visit: an agreed scope, careful work inside the home, and notes on what was done. We do not make claims the job itself cannot show you.",
    ],
    image: "/images/sofa.jpg",
    imageAlt: "A dark sofa seen through a pale arched opening in a quiet room",
    seoTitle: "Upholstery Care Dubai | Sofa, Mattress & Carpet Cleaning",
    seoDescription:
      "Professional sofa, mattress, carpet and rug cleaning in Dubai. Careful presentation, agreed scope and a focus on hygiene and the life of your furnishings.",
    layout: "editorial",
  },
];

export const services: ServiceRecord[] = [
  {
    slug: "ac-servicing",
    category: "ac-services",
    name: "AC Servicing",
    headline: "AC servicing in Dubai, done on a proper schedule.",
    lede: "Routine care that keeps cooling efficient and catches small faults before summer does.",
    paragraphs: [
      "A service visit covers the parts of the system that decide how it feels in the room: filters, grilles, drainage, fans and overall performance. With the dust levels in the UAE, we recommend servicing 3 to 4 times a year.",
      "A coil deep clean is a separate service. Where a unit has been left for a long time, or mould and heavy buildup are obvious, we may recommend one alongside your service. You see the scope and the price before anyone starts.",
    ],
    includes: [
      "Filter cleaning",
      "Drain flushing",
      "Fan inspections",
      "Indoor air quality checks",
      "System performance checks",
    ],
    benefits: [
      {
        title: "Lower running costs",
        text: "A clean, well-tuned unit doesn't have to work as hard, which can help keep your DEWA bill down in the months it never switches off.",
      },
      {
        title: "Fewer mid-summer failures",
        text: "Servicing is where small drainage and electrical faults show up, before they become a callout.",
      },
      {
        title: "Clearer air",
        text: "Dust buildup on filters and grilles is part of why a room can feel stale even when it is cold.",
      },
      {
        title: "A record of the visit",
        text: "Before-and-after photos and a written note mean you are not relying on memory.",
      },
    ],
    ...technician,
    signs: {
      heading: "Signs your AC needs a service",
      items: [
        "It takes longer to cool the room",
        "Dust around the vents or grilles",
        "A musty smell when it switches on",
        "Water dripping from the indoor unit",
        "Unusual noises",
        "It's been more than 3 months since the last service",
      ],
    },
    beforeAfter: ["filter-cleaning"],
    annualCare:
      "Need it 3 to 4 times a year? Annual Home Care schedules every service for you, so you never have to remember.",
    faqs: [
      {
        question: "How often should an AC be serviced in Dubai?",
        answer:
          "With the dust levels in the UAE, we recommend 3 to 4 times a year. Homes with pets, nearby construction, or units that run all day may need it more often.",
      },
      {
        question: "What is included in an AC service?",
        answer:
          "Filter and grille cleaning, drain tray cleaning and drain flushing, fan inspection, and checks on airflow and cooling performance. A coil deep clean is a separate service. If we find something outside the service scope, we quote it before doing it.",
      },
      {
        question: "What is a coil deep clean?",
        answer:
          "A thorough clean of the evaporator coil, and the condenser coil where there is an outdoor unit, to restore airflow and cooling. It is recommended for units with heavy buildup, mould, or a long gap since the last clean.",
        link: { label: "Read about the coil deep clean", href: "/services/coil-cleaning" },
      },
      {
        question: "How long does it take?",
        answer:
          "Around 30 to 45 minutes per unit, depending on its condition. We'll give you a time estimate when we confirm your booking.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "No. As long as we can get in, through building security, a concierge, a key or someone at home, you don't need to be there. Just let us know when you book, and we'll send you the photos and report afterwards.",
      },
      {
        question: "Why is there no price online?",
        answer:
          "It depends on how many units you have and their condition, so we quote properly once we know what's needed. The quote is free.",
      },
    ],
    seoTitle: "AC Servicing Dubai | Scheduled AC Maintenance",
    seoDescription:
      "Scheduled AC servicing in Dubai: filters, grilles, drains, fans and performance checks. Clear quotes and documented visits from Arcta Group.",
    adsSlug: "ac-servicing-dubai",
    adsH1: "AC servicing in Dubai",
    adsLede:
      "AC servicing for Dubai homes, 3 to 4 times a year: filters, grilles, drainage and a written record of the visit.",
  },
  {
    slug: "ac-repairs",
    category: "ac-services",
    name: "AC Repairs",
    headline: "AC repair in Dubai. The diagnosis comes first.",
    lede: "Emergency callouts and repairs, with the fault explained before the price is agreed.",
    hideHeroImage: true,
    callHero: {
      lede: "AC not cooling, leaking or tripping? We find the fault, explain it, and quote before any work starts.",
      note: "We respond within the hour.",
    },
    paragraphs: [
      "A unit that stops cooling, leaks, or trips is rarely a mystery for long. We diagnose the fault — refrigerant (gas), capacitor, board, or a blocked drain — and tell you what it will take to put it right.",
      "Need urgent help? We respond within the hour. Out-of-hours callouts are available subject to technician availability, at a higher call-out fee. Either way, you get a clear quote before work goes ahead, and photos and a report once it's finished.",
    ],
    includesHeading: "Common repairs we handle",
    includesNote: "Parts and repairs are quoted before any work starts.",
    includes: [
      "AC not cooling",
      "AC gas (refrigerant) top-up and leak repair",
      "Water leaking from the indoor unit",
      "Blocked drain lines",
      "Capacitor and fan motor faults",
      "PCB / control board faults",
      "AC tripping the breaker",
      "Strange noises or smells",
    ],
    benefits: [
      {
        title: "A named fault",
        text: "You should know what failed, not only that someone 'had a look'.",
      },
      {
        title: "Fast response",
        text: "We respond within the hour, with out-of-hours callouts available subject to technician availability.",
      },
      {
        title: "No surprise scope",
        text: "Repairs are quoted before they go ahead.",
      },
      {
        title: "Something you can forward",
        text: "Useful if a landlord, tenant or building manager needs the record.",
      },
    ],
    image: "/images/living.jpg",
    imageAlt: "A sunlit living room in a high-rise home, the kind of space an AC repair protects",
    annualCare: "Annual Home Care members pay no call-out fee and get priority booking for repairs.",
    faqs: [
      {
        question: "How quickly can you come out?",
        answer:
          "We respond within the hour and arrange a technician as quickly as possible. Out-of-hours callouts are available subject to technician availability.",
      },
      {
        question: "Is there a call-out fee?",
        answer:
          "Yes. A standard call-out fee applies, with a higher fee outside normal hours. Annual Home Care members pay no call-out fee. Any repair is quoted before work starts.",
      },
      {
        question: "My AC is running but not cooling. What's wrong?",
        answer:
          "It could be low gas, a blocked filter or coil, a faulty capacitor or a fan problem. We diagnose it on site and explain the fault before quoting.",
      },
      {
        question: "Why is my AC leaking water?",
        answer:
          "Usually a blocked drain line or a dirty drain tray. It's one of the most common and quickest fixes.",
      },
    ],
    seoTitle: "AC Repair Dubai | Emergency AC Callouts",
    seoDescription:
      "AC repairs and emergency callouts in Dubai. We respond within the hour, diagnose first, quote before work starts, and document the visit.",
    adsSlug: "ac-repair-dubai",
    adsH1: "AC repair in Dubai",
    adsLede:
      "Diagnosis, a clear quote and a response within the hour when a Dubai AC unit stops doing its job.",
  },
  {
    slug: "coil-cleaning",
    category: "ac-services",
    name: "Coil Cleaning",
    headline: "AC coil cleaning in Dubai. Stronger cooling.",
    lede: "Evaporator and condenser coil cleaning for systems that are working harder than they should.",
    hideHeroImage: true,
    heroLede: "A deep clean of your AC coils for units that are working harder than they should.",
    paragraphs: [
      "Coils are where heat actually moves. When they are packed with dust, the unit runs longer, cools less, and costs more to keep a room comfortable.",
      "We deep clean the evaporator coil inside the unit, and the condenser coil where there's an outdoor unit, then check that cooling performance has recovered. You see the scope and the price before anyone starts.",
    ],
    includes: [
      "Coil inspection before we start",
      "Evaporator coil deep clean",
      "Condenser coil clean (where there's an outdoor unit)",
      "Drain tray cleaned and drain line flushed",
      "Cooling performance check after cleaning",
      "Before and after photos sent to your WhatsApp",
    ],
    signs: {
      heading: "Signs your coils need cleaning",
      items: [
        "The AC runs but the room never gets properly cold",
        "It takes much longer to cool than it used to",
        "A musty smell when it switches on",
        "Visible dust or mould on the coil behind the filter",
        "Higher DEWA bills with no change in use",
        "It's been over a year since the coils were cleaned",
      ],
    },
    annualCare: "Complete Home Care includes one coil deep clean per AC unit every year.",
    benefits: [
      {
        title: "Cooling you can feel",
        text: "Restricted coils are a common reason a room never quite gets cold.",
      },
      {
        title: "Less wasted energy",
        text: "A clean coil lets the system move heat instead of fighting itself.",
      },
      {
        title: "Kinder to the equipment",
        text: "Units that short-cycle and overwork age faster than units that can breathe.",
      },
      {
        title: "Shown, not described",
        text: "The visit is photographed so the difference is on record.",
      },
    ],
    ...interior,
    faqs: [
      {
        question: "What is the benefit of coil cleaning?",
        answer:
          "Clean coils transfer heat properly. That restores cooling output and reduces how hard the system has to run.",
      },
      {
        question: "Is coil cleaning the same as a full AC service?",
        answer:
          "No. A coil deep clean is a separate service from a standard AC service. It can be booked on its own, or alongside a service when cooling has dropped or a coil is visibly fouled.",
      },
      {
        question: "How often should coils be cleaned in the UAE?",
        answer:
          "With the dust levels in the UAE, we recommend a coil deep clean at least once a year, alongside regular servicing. Homes with pets, nearby construction or units that run all day may need it more often.",
      },
      {
        question: "How long does it take?",
        answer:
          "Around 1 to 2 hours per unit, depending on its condition. We'll give you a time estimate when we confirm your booking.",
      },
      {
        question: "Is it messy?",
        answer: "No. We cover the area around the unit and clean up before we leave.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "No. As long as we can get in, through building security, a concierge, a key or someone at home, you don't need to be there. We'll send you the photos and report afterwards.",
      },
      {
        question: "Why is there no price online?",
        answer:
          "It depends on how many units you have and their condition, so we quote properly once we know what's needed. The quote is free.",
      },
    ],
    seoTitle: "AC Coil Cleaning Dubai | Coil Deep Clean",
    seoDescription:
      "Coil deep clean in Dubai: evaporator and condenser coils cleaned to restore cooling and ease the load on your AC. Documented by Arcta Group.",
    adsSlug: "coil-cleaning-dubai",
    adsH1: "AC coil cleaning in Dubai",
    adsLede:
      "A coil deep clean for Dubai homes where the AC runs, but the room does not get cold.",
  },
  {
    slug: "duct-cleaning",
    category: "ac-services",
    name: "Duct Cleaning",
    headline: "Duct cleaning in Dubai.",
    lede: "Duct and vent cleaning for homes where fine dust has settled inside the system.",
    heroLede:
      "The air you actually live in. Dust, debris and mould removed from your ducts and grilles, with before and after photos of every job.",
    hideHeroImage: true,
    quoteHeading: "Get a free duct cleaning quote",
    paragraphs: [
      "The UAE's dust does not stay outside. It collects in ducts, grilles and the path the air takes through the home. Cleaning them removes that buildup and lets the system move air as it was designed to.",
      "You get the scope and price in advance, and photographs of the work.",
    ],
    includes: [
      "Inspection of ducts and grilles before we start",
      "Duct cleaning through to each grille",
      "Supply and return grilles removed, cleaned and refitted",
      "Dust and debris removal",
      "Airflow check after cleaning",
      "Before and after photos sent to your WhatsApp",
    ],
    signs: {
      heading: "Signs your ducts need cleaning",
      items: [
        "Dust building up around the AC grilles",
        "A musty smell when the AC switches on",
        "Black spots or mould on the vents",
        "More dust in the home than usual",
        "It's been over a year since the last clean, or you've never had one",
      ],
    },
    beforeAfter: ["grille-cleaning", "duct-cleaning"],
    annualCare: "Complete Home Care includes one duct clean per AC unit every year.",
    benefits: [
      {
        title: "Less dust in the system",
        text: "Cleaning takes out the debris that ducts collect in this climate.",
      },
      {
        title: "Air that moves properly",
        text: "Blocked or lined ducts make fans work harder for a weaker result.",
      },
      {
        title: "A fresher-feeling home",
        text: "People notice stale air before they notice a dirty duct. Cleaning addresses the source.",
      },
      {
        title: "Suited to villas and apartments",
        text: "We clean the duct runs that serve the rooms you actually use.",
      },
    ],
    image: "/images/work/grille-after.jpg",
    imageAlt: "An AC supply grille after cleaning, its slats clear of dust and the frame white",
    faqs: [
      {
        question: "Why does duct cleaning matter in the UAE?",
        answer:
          "Fine dust and debris accumulate quickly. Cleaning improves how air moves through the home and reduces the load that buildup places on the system.",
      },
      {
        question: "Do you clean vents and grilles as well?",
        answer:
          "Yes. A duct clean includes the vents and grilles that open into the rooms, not only the hidden runs.",
      },
      {
        question: "How often should ducts be cleaned?",
        answer:
          "With the dust levels in the UAE, we recommend a duct clean at least once a year. Homes with pets, nearby construction or heavy use may need it more often. We'll tell you what we find on the day.",
      },
      {
        question: "How long does it take?",
        answer: "Around 45 minutes to 1 hour per unit.",
      },
      {
        question: "Is it messy?",
        answer: "No. We cover furniture and floors around each grille and clean up before we leave.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "No. As long as we can get in, through building security, a concierge, a key or someone at home, you don't need to be there. We'll send you the photos and report afterwards.",
      },
      {
        question: "Why is there no price online?",
        answer:
          "Every home is different. The number of units, duct length and condition all change the job, so we quote properly once we know what's needed. The quote is free.",
      },
    ],
    seoTitle: "Duct Cleaning Dubai | Air Duct & Vent Cleaning",
    seoDescription:
      "Duct, vent and grille cleaning in Dubai. Remove built-up dust, restore airflow and keep a documented record with Arcta Group.",
    adsSlug: "duct-cleaning-dubai",
    adsH1: "Duct cleaning in Dubai",
    adsLede:
      "Air duct, vent and grille cleaning for Dubai homes living with fine dust inside the system.",
  },
  {
    slug: "drain-flushing",
    category: "ac-services",
    name: "Drain Flushing",
    headline: "Stop the leak before it stains the ceiling.",
    lede: "Flushing and clearing AC condensate drains that have slowed or blocked.",
    hideHeroImage: true,
    heroEyebrow: "AC leaking water? · Dubai",
    heroLede:
      "AC leaking water in Dubai? We flush and clear blocked AC drain lines, find out why they blocked, and stop it happening again.",
    heroNote: "Leaking now? Send us a photo on WhatsApp.",
    annualCare:
      "Drain flushing is included in every scheduled service with Annual Home Care, so blockages get caught before they leak.",
    paragraphs: [
      "A blocked condensate drain is one of the most common reasons an AC leaks into a ceiling, a wardrobe or a hallway. The unit may still be cooling while water has nowhere to go.",
      "We flush the drain, check that condensate is leaving the unit, and look for the reason it blocked. If the ceiling has already been marked, minor leak and ceiling repairs can be quoted as part of the same conversation.",
    ],
    includes: [
      "Condensate drain flush",
      "Blockage clearing",
      "Flow check",
      "Notes on likely cause",
      "Advice on preventing a repeat",
    ],
    benefits: [
      {
        title: "Protects finishes",
        text: "Most AC water damage starts as a drain that was ignored for a season.",
      },
      {
        title: "Part of proper servicing",
        text: "Drain flushing sits inside a full service, and it can be booked on its own when a leak has started.",
      },
      {
        title: "Cause, not only symptom",
        text: "We look at why the line blocked, and what will keep it clear.",
      },
      {
        title: "Useful documentation",
        text: "Photographs help if a building manager or insurer asks what happened.",
      },
    ],
    image: "/images/kitchen.jpg",
    imageAlt: "A bright kitchen ceiling with an air vent, where condensate problems often show first",
    faqs: [
      {
        question: "What are the signs of a blocked AC drain?",
        answer:
          "Water from the indoor unit, a musty smell, the unit shutting itself off, or a new stain on the ceiling below. Any of these is a reason to stop waiting.",
      },
      {
        question: "Is drain flushing included in a service?",
        answer:
          "Yes. It is part of a standard AC service. Book it on its own if you already have a leak or a slow drain.",
      },
      {
        question: "Can you repair the ceiling as well?",
        answer:
          "Minor ceiling and leak repairs can be quoted separately. We will tell you if the damage is beyond that scope.",
      },
      {
        question: "How long does it take?",
        answer: "Usually around 30 minutes to 1 hour depending on how blocked the line is.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "No. As long as we can get in, through building security, a concierge, a key or someone at home, you don't need to be there. We'll send you the photos and report afterwards.",
      },
      {
        question: "How often should AC drains be flushed?",
        answer: "It's done as part of every AC service, so 3 to 4 times a year keeps most drains clear.",
      },
      {
        question: "Why is there no price online?",
        answer:
          "It depends on how many units you have and how blocked they are, so we quote properly once we know what's needed. The quote is free.",
      },
    ],
    seoTitle: "AC Drain Flushing Dubai | Condensate Drain Cleaning",
    seoDescription:
      "AC drain flushing in Dubai to clear blocked condensate lines and reduce leaks. Quoted and documented by Arcta Group.",
    adsSlug: "drain-flushing-dubai",
    adsH1: "AC drain flushing in Dubai",
    adsLede:
      "Condensate drain flushing for Dubai homes where an AC is leaking, smelling, or marking the ceiling.",
  },
  {
    slug: "plumbing",
    category: "home-maintenance",
    name: "Plumbing",
    headline: "Plumber in Dubai. Repairs without the chase.",
    lede: "Leaks, pressure, seals and the small faults that become damp if they wait.",
    heroLede: "Leaks, blocked drains, taps, water heaters and the small faults that become damp if they wait.",
    heroNote: "Leak right now? Send us a photo on WhatsApp.",
    hideHeroImage: true,
    annualCare:
      "Annual Home Care includes plumbing checks during scheduled visits, priority booking and discounted repair labour.",
    includesHeading: "Common jobs we handle",
    includesNote: "Parts and repairs are quoted before any work starts.",
    paragraphs: [
      "We take on plumbing repairs inside the home: leaks, tired seals, drainage that is slow, and fittings that no longer shut properly. You get a clear quote, and a technician who treats the property carefully.",
      "If a leak has a cause further back — a drain, a joint, a seal — we say so, and we quote only the work required.",
    ],
    includes: [
      "Leaking taps, pipes and joints",
      "Blocked sinks, showers and floor drains",
      "Leaking or running toilets and flush repairs",
      "Water heater repairs and replacement",
      "Shower mixers, hoses and fittings",
      "Resealing around baths, showers and sinks",
      "Low water pressure",
      "Minor pipework repairs",
    ],
    benefits: [
      {
        title: "Dealt with early",
        text: "A small leak is cheaper and cleaner than the stain it becomes.",
      },
      {
        title: "One point of contact",
        text: "No need to assemble a different contractor for every fault in the house.",
      },
      {
        title: "Quoted first",
        text: "Scope and price are agreed before tools come out.",
      },
      {
        title: "Noted afterwards",
        text: "You receive a record of what was found and what was repaired.",
      },
    ],
    image: "/images/kitchen.jpg",
    imageAlt: "Marble kitchen with a sink, a typical setting for everyday plumbing repairs",
    faqs: [
      {
        question: "What plumbing work do you take on?",
        answer:
          "Repairs and small works: leaks, taps, seals, slow drainage and related fittings. If a job needs a specialist beyond that, we will say so.",
      },
      {
        question: "Do you provide a quote before arriving to do the work?",
        answer:
          "We confirm the appointment and return an itemised quote, usually within the hour of understanding the job. Work starts once you agree.",
      },
      {
        question: "Can this be arranged for a rented property?",
        answer:
          "Yes. Landlords, tenants and property managers can book. Reports are written so they can be passed on.",
      },
      {
        question: "Do you handle emergency leaks?",
        answer:
          "Yes. Call or WhatsApp us and we'll respond within the hour. Out-of-hours callouts are available subject to technician availability, at a higher call-out fee.",
      },
      {
        question: "Is there a call-out fee?",
        answer:
          "Yes, a standard call-out fee applies, with a higher fee outside normal hours. Any repair is quoted before work starts.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "No. As long as we can get in, through building security, a concierge, a key or someone at home, you don't need to be there. We'll send you the photos and report afterwards.",
      },
      {
        question: "Why is there no price online?",
        answer: "Every job is different, so we quote properly once we know what's needed. The quote is free.",
      },
    ],
    seoTitle: "Plumbing Dubai | Home Plumbing Repairs",
    seoDescription:
      "Plumbing repairs in Dubai homes: leaks, taps, seals and drainage. Clear quotes and documented visits from Arcta Group.",
    adsSlug: "plumbing-dubai",
    adsH1: "Plumbing repairs in Dubai",
    adsLede:
      "Leak, tap and drainage repairs for Dubai homes, quoted before work and written up afterwards.",
  },
  {
    slug: "electrical",
    category: "home-maintenance",
    name: "Electrical",
    headline: "Electrician in Dubai. Small faults, handled properly.",
    lede: "Fixtures, switches and the everyday electrical fixes a home actually needs.",
    hideHeroImage: true,
    heroNote: "Power issue right now? Call or WhatsApp us.",
    includesHeading: "Common jobs we handle",
    includesNote: "Parts and repairs are quoted before any work starts.",
    annualCare:
      "Annual Home Care includes electrical checks during scheduled visits, priority booking and discounted repair labour.",
    paragraphs: [
      "We carry out electrical fixes: fittings that have failed, switches and sockets that need attention, and minor works agreed in advance. The visit is quoted, and the property is left as we found it.",
      "If something is outside safe, sensible home maintenance, we will tell you rather than force it into the visit.",
    ],
    includes: [
      "Lights or fittings not working",
      "Breaker keeps tripping",
      "Socket and switch repairs and replacement",
      "Light fitting, chandelier and ceiling fan installation",
      "Replacing faulty or burnt-out fixtures",
      "Making a fault safe until a full repair",
      "A written note and photos of the work",
    ],
    benefits: [
      {
        title: "Straight advice",
        text: "You hear what the fault is, and whether it belongs in this visit.",
      },
      {
        title: "Care inside the home",
        text: "Technicians arrive in uniform and work respectfully in occupied rooms.",
      },
      {
        title: "Agreed scope",
        text: "Nothing extra is added quietly to the job.",
      },
      {
        title: "A record",
        text: "Useful for landlords and for the next person who opens the same fitting.",
      },
    ],
    ...interior,
    faqs: [
      {
        question: "What electrical work is included?",
        answer:
          "Everyday fixes: lights, fittings, switches, sockets and similar minor repairs. Larger installation projects are quoted only if they sit within what we can do properly.",
      },
      {
        question: "Can you attend urgently?",
        answer:
          "Yes. Call or WhatsApp us and we'll respond within the hour. Out-of-hours callouts are available subject to technician availability, at a higher call-out fee. You'll get a quote before any work starts.",
      },
      {
        question: "Will the work be documented?",
        answer:
          "Yes. Visits include notes and photographs, consistent with every Arcta Group job.",
      },
      {
        question: "Is there a call-out fee?",
        answer:
          "Yes, a standard call-out fee applies, with a higher fee outside normal hours. Any repair is quoted before work starts.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "No. As long as we can get in, through building security, a concierge, a key or someone at home, you don't need to be there. We'll send you the photos and report afterwards.",
      },
      {
        question: "Why is there no price online?",
        answer: "Every job is different, so we quote properly once we know what's needed. The quote is free.",
      },
    ],
    seoTitle: "Electrical Services Dubai | Home Electrical Fixes",
    seoDescription:
      "Electrical fixes for Dubai homes: fittings, switches and minor repairs. Quoted clearly and documented by Arcta Group.",
    adsSlug: "electrical-dubai",
    adsH1: "Electrical repairs in Dubai",
    adsLede:
      "Minor electrical repairs for Dubai homes — fittings, switches and sockets, with the scope agreed first.",
  },
  {
    slug: "handyman",
    category: "home-maintenance",
    name: "Handyman",
    headline: "Handyman in Dubai. The list on the fridge, handled in one visit.",
    lede: "Mounting, assembly, minor carpentry and the odd jobs that never quite get booked.",
    hideHeroImage: true,
    heroNote: "Send us your list or a photo on WhatsApp.",
    includesHeading: "Common jobs we handle",
    annualCare:
      "Complete Home Care includes 2 handyman labour hours a year, plus priority booking and discounted labour on everything else.",
    paragraphs: [
      "Handyman work is the practical list: fittings, mounting, assembly, minor carpentry, doors that catch, and small installations. Send the list. We will quote it as a single, itemised visit where we can.",
      "It is the same standard as the rest of Arcta — uniformed, on time, and written up — not a different, casual service.",
    ],
    includes: [
      "TV and mirror mounting",
      "Curtain rails and blinds",
      "Shelves, pictures and wall fixings",
      "Furniture and flat-pack assembly",
      "Door handles, locks and hinges",
      "Doors and windows that stick or don't close",
      "Silicone and resealing",
      "Minor carpentry repairs",
    ],
    benefits: [
      {
        title: "One visit, several items",
        text: "A proper list is more useful than five separate callouts.",
      },
      {
        title: "Itemised",
        text: "You can see what is included before we arrive.",
      },
      {
        title: "Presentable",
        text: "Technicians arrive in uniform, in the right footwear, ready to work in an occupied home.",
      },
      {
        title: "Finished properly",
        text: "The property is left as it was found, aside from the work itself.",
      },
    ],
    image: "/images/villa.jpg",
    imageAlt: "Contemporary white villa exterior, the setting for careful in-home handyman work",
    faqs: [
      {
        question: "What counts as handyman work?",
        answer:
          "Fixtures, mounting, flat-pack and general assembly, minor carpentry, door and window adjustments, sealing and small installations.",
      },
      {
        question: "Can I send a list of jobs?",
        answer:
          "Yes. Send the list on WhatsApp or through the form. We will come back with what we can cover and a quote.",
      },
      {
        question: "Do you work in holiday homes?",
        answer:
          "Yes. Property managers and holiday-home operators use Arcta for exactly this kind of turnaround work, with a report after the visit.",
      },
      {
        question: "How do you charge for handyman work?",
        answer:
          "A fixed price per job. Send us your list and we'll quote each item before we arrive, so you know the total upfront with no hourly surprises.",
      },
      {
        question: "Do you bring the tools and materials?",
        answer:
          "Yes. We bring all the tools, plus screws, fixings and wall plugs. You just supply the item itself, such as the TV bracket, curtains or the furniture to be assembled.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "No. As long as we can get in, through building security, a concierge, a key or someone at home, you don't need to be there. We'll send you the photos and report afterwards.",
      },
    ],
    seoTitle: "Handyman Dubai | Home Repairs & Odd Jobs",
    seoDescription:
      "Handyman services in Dubai: mounting, assembly, minor carpentry and odd jobs. One itemised quote from Arcta Group.",
    adsSlug: "handyman-dubai",
    adsH1: "Handyman services in Dubai",
    adsLede:
      "Mounting, assembly, minor carpentry and the odd-job list — one quote, one careful visit.",
  },
  {
    slug: "water-heater-repair",
    category: "home-maintenance",
    name: "Water Heater Repair & Replacement",
    headline: "Water heater repair & replacement in Dubai.",
    lede: "Hot water, restored without drama. We repair water heaters where it makes sense, and replace them where it doesn't.",
    hideHeroImage: true,
    heroNote: "No hot water? Call or WhatsApp us.",
    paragraphs: [
      "When a water heater fails, the useful question is whether a repair is worth it or whether the unit should be replaced. We inspect it, explain what we find, and quote the replacement before anything is ordered or removed.",
      "Installation is documented, including the condition we found and the unit we leave in place.",
    ],
    includes: [
      "Inspection of the existing unit",
      "A clear replace-or-repair recommendation",
      "Repair of faults where a repair makes sense",
      "Supply and installation when replacement is agreed",
      "Making good the immediate work area",
      "Photographs and a service note",
    ],
    benefits: [
      {
        title: "Advice before a purchase",
        text: "You should not buy a new heater if a repair is the right answer — or the reverse.",
      },
      {
        title: "Quoted in full",
        text: "Supply and installation are priced before work starts.",
      },
      {
        title: "Tidy completion",
        text: "The area around the heater is left clean.",
      },
      {
        title: "A record for the property",
        text: "Helpful for owners who are not in the country on the day.",
      },
    ],
    signs: {
      heading: "Signs your water heater needs attention",
      items: [
        "No hot water, or it runs out quickly",
        "Water only gets lukewarm",
        "Water leaking from the tank or pipes",
        "Rusty or discoloured hot water",
        "Banging, popping or rumbling noises",
        "The heater keeps tripping the electrics",
      ],
    },
    image: "/images/kitchen.jpg",
    imageAlt: "A calm kitchen interior, representative of the homes where water heaters are repaired and replaced",
    faqs: [
      {
        question: "Do you repair water heaters as well as replace them?",
        answer:
          "We inspect the unit first. If a repair is sensible we will say so and quote it. Replacement is recommended when repair is not worthwhile.",
      },
      {
        question: "Can you supply the new heater?",
        answer:
          "Yes, when replacement is agreed. The quote covers supply and installation rather than leaving you to source a unit separately.",
      },
      {
        question: "How quickly can you attend?",
        answer:
          "Call or WhatsApp us and we'll respond within the hour. Out-of-hours callouts are available subject to technician availability, at a higher call-out fee.",
      },
      {
        question: "What size and type of heater do you install?",
        answer:
          "All sizes, for apartments and villas. We match the replacement to your existing setup, or advise on a better fit if your current one is too small.",
      },
      {
        question: "Is there a warranty?",
        answer:
          "Yes. Our installation comes with a 30-day workmanship warranty, and the new unit is covered by the manufacturer's warranty.",
      },
      {
        question: "How long does a replacement take?",
        answer:
          "Usually 1 to 3 hours for a standard swap. It can take longer if the new heater is a different size or position, or the pipework needs changing. If a leak has damaged the ceiling, that repair is quoted and done separately.",
      },
      {
        question: "Is there a call-out fee?",
        answer:
          "Yes, a standard call-out fee applies, with a higher fee outside normal hours. Any repair or replacement is quoted before work starts.",
      },
      {
        question: "Why is there no price online?",
        answer:
          "It depends on whether it's a repair or a replacement, and the size and type of heater, so we quote properly once we know what's needed. The quote is free.",
      },
    ],
    seoTitle: "Water Heater Repair & Replacement Dubai",
    seoDescription:
      "Water heater repair and replacement in Dubai. An honest recommendation, a clear quote, and documented installation.",
    adsSlug: "water-heater-repair-dubai",
    adsH1: "Water heater replacement in Dubai",
    adsLede:
      "Inspection, a straight recommendation, and quoted supply and installation when a water heater has failed.",
  },
  {
    slug: "leak-ceiling-repairs",
    category: "home-maintenance",
    name: "Leak & Ceiling Repairs",
    headline: "Leak repair in Dubai. Find the leak, then repair the ceiling.",
    lede: "Ceiling stains, damp patches and the leaks that cause them, traced, fixed and documented.",
    hideHeroImage: true,
    heroNote: "Water coming through now? Send us a photo on WhatsApp.",
    paragraphs: [
      "A ceiling stain is the end of the story, not the beginning. We look for the source — often an AC condensate line, a bathroom seal, or a small plumbing leak — and quote the repair of both the cause and the finish.",
      "If the damage is structural or widespread, we'll tell you upfront rather than dress it up.",
    ],
    includes: [
      "Leak tracing to find the source",
      "AC drain and plumbing causes checked",
      "Fixing the cause, or sealing where that's the fix",
      "Ceiling board repair and repainting",
      "Photographs of the cause and the repair",
    ],
    signs: {
      heading: "Signs of a hidden leak",
      items: [
        "Yellow or brown stains on the ceiling",
        "Bubbling or peeling paint",
        "Damp patches or a musty smell",
        "Water dripping from a light fitting or AC vent",
        "Sagging or soft ceiling board",
      ],
    },
    benefits: [
      {
        title: "Source first",
        text: "Painting over a live leak is how the same stain returns.",
      },
      {
        title: "Joined-up care",
        text: "AC, plumbing and the ceiling finish can be discussed in one visit.",
      },
      {
        title: "Honest limits",
        text: "If a job is bigger than a repair, such as structural damage, we'll tell you before any work starts.",
      },
      {
        title: "Evidence",
        text: "Before-and-after photographs show the stain, the cause and the repair.",
      },
    ],
    ...interior,
    faqs: [
      {
        question: "Do you only paint the ceiling?",
        answer:
          "No. We look for the leak first. Minor ceiling repairs are quoted alongside the cause, so the finish is not wasted.",
      },
      {
        question: "What if the leak is from the AC?",
        answer:
          "Blocked condensate drains are a frequent cause. Drain flushing and the ceiling repair can be arranged together.",
        link: { label: "Read about drain flushing", href: "/services/drain-flushing" },
      },
      {
        question: "Is major water damage included?",
        answer:
          "We handle leak repairs and ceiling repairs. If the damage is structural or widespread, we'll tell you before any work starts.",
      },
      {
        question: "What if the leak is coming from the apartment above?",
        answer:
          "We trace and document the source with photos, so you can send our report to building management or your landlord. Once it's fixed at the source, we can repair your ceiling.",
      },
      {
        question: "How long does a ceiling repair take?",
        answer:
          "Fixing the leak is usually done on the first visit. If the ceiling is wet, it needs to dry out before we repair and repaint it, so that part is often a second visit. We'll give you a timeline with the quote.",
      },
      {
        question: "Is there a warranty?",
        answer: "Yes, our work comes with a 30-day workmanship warranty.",
      },
      {
        question: "Do you handle emergency leaks?",
        answer:
          "Yes. Call or WhatsApp us and we'll respond within the hour. Out-of-hours callouts are available subject to technician availability, at a higher call-out fee.",
      },
      {
        question: "Why is there no price online?",
        answer:
          "It depends on the source of the leak and how much of the ceiling is affected, so we quote properly once we've seen it. The quote is free.",
      },
    ],
    seoTitle: "Leak & Ceiling Repairs Dubai | Leak Tracing & Ceiling Repair",
    seoDescription:
      "Leak and ceiling repairs in Dubai. We trace the cause, quote the work, and document the repair.",
    adsSlug: "leak-ceiling-repairs-dubai",
    adsH1: "Ceiling and leak repairs in Dubai",
    adsLede:
      "Minor ceiling repairs in Dubai, starting with the leak that caused the stain — not with a coat of paint.",
  },
  {
    slug: "sofa-cleaning",
    category: "upholstery-care",
    name: "Sofa Cleaning",
    headline: "Sofa cleaning in Dubai. A proper clean for the sofa you actually sit on.",
    lede: "Deep cleaning that lifts stains, dust and everyday grime from fabric sofas, done in your home.",
    heroNote: "Send us a photo of your sofa on WhatsApp for a quick quote.",
    hideHeroImage: true,
    annualCare:
      "Complete Home Care includes an AED 400 yearly credit for sofa, mattress, carpet or rug cleaning.",
    paragraphs: [
      "Sofas take the life of the room: skin, dust, food, and the slow greying of fabric that a cushion flip will not fix. A professional clean works into the upholstery rather than across the surface.",
      "We check the fabric first, then use steam or a gentler method depending on what it can take. We agree the scope before we start and leave a note of what was done.",
    ],
    includes: [
      "Fabric check before we start",
      "Thorough vacuuming, including crevices and under cushions",
      "Stain pre-treatment",
      "Deep clean and extraction (steam where the fabric suits it)",
      "Cushions, arms and backs cleaned",
      "Before and after photos sent to your WhatsApp",
    ],
    benefits: [
      {
        title: "Better hygiene",
        text: "A proper clean reaches the soiling that sits in the fabric, not only on it.",
      },
      {
        title: "A longer useful life",
        text: "Regular care is how upholstery stays presentable instead of being replaced early.",
      },
      {
        title: "Careful in the room",
        text: "The rest of the home is respected while the sofa is cleaned.",
      },
    ],
    image: "/images/sofa.jpg",
    imageAlt: "Dark sofa in a pale, architectural room",
    faqs: [
      {
        question: "Do you steam clean sofas?",
        answer:
          "Yes, where steam is appropriate for the fabric. If a covering needs a different approach, we say so before starting.",
      },
      {
        question: "Can every stain be removed?",
        answer:
          "No. Age, dye and fabric all limit what cleaning can do. We would rather tell you that than promise a result we cannot show.",
      },
      {
        question: "How do I book?",
        answer:
          "WhatsApp or the booking form. Tell us the sofa type and the area, and we will quote the visit.",
      },
      {
        question: "How long does the cleaning take?",
        answer: "Around 1 to 1.5 hours for a standard 3-seater. Larger or L-shaped sofas take longer.",
      },
      {
        question: "How long does it take to dry?",
        answer:
          "Fabric sofas usually take 4 to 6 hours to dry, often less with the AC or a fan on. Leather is ready to use much sooner.",
      },
      {
        question: "Is it safe for children and pets?",
        answer: "Yes. We use fabric-safe products, and the sofa can be used again once it's dry.",
      },
      {
        question: "Do you clean leather sofas?",
        answer:
          "Yes. Leather is cleaned and conditioned with products made for it, so it stays soft and doesn't dry out.",
      },
      {
        question: "Why is there no price online?",
        answer:
          "It depends on the size, number of seats and fabric, so we quote properly once we know what's needed. Send us a photo and the quote is free.",
      },
    ],
    seoTitle: "Sofa Cleaning Dubai | Professional Upholstery Cleaning",
    seoDescription:
      "Professional sofa cleaning in Dubai, including steam where the fabric allows. Agreed scope and careful work from Arcta Group.",
    adsSlug: "sofa-cleaning-dubai",
    adsH1: "Sofa cleaning in Dubai",
    adsLede:
      "Professional sofa cleaning for Dubai homes — fabric assessed first, scope agreed, work carried out with care.",
  },
  {
    slug: "mattress-cleaning",
    category: "upholstery-care",
    name: "Mattress Cleaning",
    headline: "Mattress cleaning in Dubai. The surface you spend the most hours on.",
    lede: "Deep cleaning that lifts dust, sweat stains and the build-up a sheet change leaves behind.",
    heroNote: "Send us a photo of the mattress on WhatsApp for a quick quote.",
    hideHeroImage: true,
    annualCare:
      "Complete Home Care includes an AED 400 yearly credit for sofa, mattress, carpet or rug cleaning.",
    paragraphs: [
      "A mattress is rarely cleaned properly, because it's awkward and easy to ignore. Over time it collects sweat, skin flakes, dust mites and stains that a sheet change doesn't touch. A professional clean works into the mattress, not just across the top.",
      "We agree access and timing so the room can be used again sensibly afterwards, and we document the visit in the same way as the rest of our work.",
    ],
    includes: [
      "Thorough vacuuming, including seams and edges",
      "Stain pre-treatment (sweat, spills and marks)",
      "Deep clean and extraction (steam where the fabric suits it)",
      "Sanitising and deodorising",
      "Both sides where the mattress can be lifted safely",
      "Before and after photos sent to your WhatsApp",
    ],
    benefits: [
      {
        title: "Hygiene where it counts",
        text: "Sheets are washed. Mattresses usually are not. This closes that gap.",
      },
      {
        title: "Extends usefulness",
        text: "Cleaning is a way to keep a sound mattress in service for longer.",
      },
      {
        title: "Discreet",
        text: "The work is done in the bedroom, carefully, and left tidy.",
      },
      {
        title: "Honest about limits",
        text: "Deep, old staining and damaged cores are not something a clean can undo.",
      },
    ],
    image: "/images/bedroom.jpg",
    imageAlt: "A dressed bed in a calm bedroom, the setting for mattress cleaning",
    faqs: [
      {
        question: "How long before the bed can be used?",
        answer:
          "Usually 4 to 6 hours, often less with the AC or a fan on. Booking in the morning means it's ready by bedtime.",
      },
      {
        question: "Do you clean both sides?",
        answer:
          "Where the mattress can be lifted safely, yes. We will not wrestle a mattress in a way that risks the room or the people in it.",
      },
      {
        question: "Is this suitable before a guest stay?",
        answer:
          "Yes. Holiday-home operators book mattress cleaning between stays. Tell us the turnaround and we will confirm whether the timing works.",
      },
      {
        question: "How long does the cleaning take?",
        answer: "Around 30 to 45 minutes per mattress, depending on size and condition.",
      },
      {
        question: "Can you remove urine or sweat stains?",
        answer:
          "We can usually lift fresh stains and greatly improve older ones. Very old or deep stains may not come out completely, and we'll tell you honestly before we start.",
      },
      {
        question: "Is it safe for children and pets?",
        answer: "Yes. We use fabric-safe products, and the mattress can be used again once it's dry.",
      },
      {
        question: "How often should a mattress be cleaned?",
        answer: "Every 6 to 12 months for most homes, or more often with children, pets or guests.",
      },
      {
        question: "Why is there no price online?",
        answer:
          "It depends on the size, number of mattresses and condition, so we quote properly once we know what's needed. Send us a photo and the quote is free.",
      },
    ],
    seoTitle: "Mattress Cleaning Dubai | Professional Mattress Care",
    seoDescription:
      "Professional mattress cleaning in Dubai. Careful work, agreed timing, and no unsupported claims — from Arcta Group.",
    adsSlug: "mattress-cleaning-dubai",
    adsH1: "Mattress cleaning in Dubai",
    adsLede:
      "Professional mattress cleaning for Dubai homes and guest stays, with timing and method agreed first.",
  },
  {
    slug: "carpet-rug-cleaning",
    category: "upholstery-care",
    name: "Carpet & Rug Cleaning",
    headline: "Carpet & rug cleaning in Dubai.",
    lede: "Deep cleaning for fitted carpets and rugs that lifts the sand, dust and stains vacuuming leaves behind, with extra care for delicate pieces.",
    hideHeroImage: true,
    heroNote: "Send us a photo of the carpet or rug on WhatsApp for a quick quote.",
    annualCare:
      "Complete Home Care includes an AED 400 yearly credit for sofa, mattress, carpet or rug cleaning.",
    paragraphs: [
      "Carpets and rugs hold dust, sand and spills at a level vacuuming never reaches. A professional clean refreshes the pile and helps the piece last, particularly in homes where shoes, pets and open doors are part of the day.",
      "Rugs with value or delicate fibres are discussed before any method is chosen. We would rather decline a method than damage a piece by rushing it.",
    ],
    includes: [
      "Fibre check before we start",
      "Thorough vacuuming to lift sand and grit",
      "Stain pre-treatment where it's realistic",
      "Deep clean and extraction, matched to the fibre",
      "Deodorising",
      "Advice on drying and when furniture can go back",
      "Before and after photos sent to your WhatsApp",
    ],
    benefits: [
      {
        title: "A fresher room",
        text: "Sand and fine dust sit deep in the pile. Cleaning is how they actually leave.",
      },
      {
        title: "Longer life",
        text: "Grit left in a carpet cuts the fibres every time someone walks on it.",
      },
      {
        title: "Method matched to the piece",
        text: "A fitted carpet and a delicate rug are not the same job.",
      },
      {
        title: "Documented",
        text: "You can see what was treated, which matters for landlords and furnished lets.",
      },
    ],
    image: "/images/rug.jpg",
    imageAlt: "A cream and gold patterned rug with a rolled edge and fringe",
    faqs: [
      {
        question: "Do you clean both rugs and fitted carpets?",
        answer:
          "Yes. Tell us which you have, the approximate size, and anything you know about the fibre.",
      },
      {
        question: "Can you remove every mark?",
        answer:
          "Not always. We treat spots where it is realistic and we will tell you when a mark is likely to remain.",
      },
      {
        question: "How should I prepare?",
        answer:
          "Clear small items from the floor if you can. We will confirm access, drying time and when furniture can return.",
      },
      {
        question: "How long does it take to dry?",
        answer:
          "Usually 4 to 8 hours, depending on the carpet and airflow. Running the AC or a fan speeds it up.",
      },
      {
        question: "Do you clean rugs at home or take them away?",
        answer:
          "Most carpets and rugs are cleaned in your home. Delicate or valuable rugs can be collected and cleaned off-site.",
      },
      {
        question: "Do you clean delicate rugs like silk or Persian?",
        answer:
          "We check the fibre first and only use a method it can take. If a rug needs specialist care, we'll tell you before we start.",
      },
      {
        question: "Is it safe for children and pets?",
        answer:
          "Yes. We use fibre-safe products, and the carpet can be walked on again once it's dry.",
      },
      {
        question: "How often should carpets be cleaned?",
        answer: "Every 6 to 12 months for most homes. With sand, pets or children, more often helps.",
      },
      {
        question: "Why is there no price online?",
        answer:
          "It depends on the size, fibre and condition, so we quote properly once we know what's needed. Send us a photo and the quote is free.",
      },
    ],
    seoTitle: "Carpet & Rug Cleaning Dubai",
    seoDescription:
      "Professional carpet and rug cleaning in Dubai. Method chosen for the piece, scope agreed first, work documented.",
    adsSlug: "carpet-cleaning-dubai",
    adsH1: "Carpet and rug cleaning in Dubai",
    adsLede:
      "Fitted carpets and loose rugs cleaned properly — scope and method agreed before we begin.",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceByAdsSlug(slug: string) {
  return services.find((service) => service.adsSlug === slug);
}

export function servicesIn(category: CategorySlug) {
  return services.filter((service) => service.category === category);
}

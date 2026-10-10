export type WorkPhoto = { src: string; alt: string };

export type WorkCard = {
  slug: string;
  /** Service label shown above the photos. */
  service: string;
  before: WorkPhoto;
  /** Leave undefined until the after photo is supplied; the card shows a placeholder. */
  after?: WorkPhoto;
  /** Short caption describing what the job found and what was done. */
  description?: string;
};

/**
 * Real job photography only. Add `after` and `description` as they arrive.
 * Order here is the order on the page.
 */
export const recentWork: WorkCard[] = [
  {
    slug: "grille-cleaning",
    service: "Supply grille",
    before: {
      src: "/images/work/grille-before.jpg",
      alt: "Before: an AC grille removed from the ceiling, its slats caked in dark dust",
    },
    after: {
      src: "/images/work/grille-after.jpg",
      alt: "After: the same AC grille cleaned, its slats back to black and the frame white",
    },
    description:
      "Mould spotted across the louvres, removed, deep cleaned and refitted.",
  },
  {
    slug: "coil-cleaning",
    service: "Evaporator coil",
    before: {
      src: "/images/work/coil-after.jpg",
      alt: "Before: AC evaporator coil fins clogged with grey dust and grime",
    },
    after: {
      src: "/images/work/coil-before.jpg",
      alt: "After: the AC coil fins cleaned and wet from washing, with the drain pan clear",
    },
    description:
      "Coil caked in dust and grime, restricting airflow. Chemically cleaned and rinsed so air passes freely again.",
  },
  {
    slug: "duct-cleaning",
    service: "Duct cleaning",
    before: {
      src: "/images/work/duct-before.jpg",
      alt: "Before: the inside of an AC duct coated in dust with dark mould-like spotting",
    },
    after: {
      src: "/images/work/duct-after.jpg",
      alt: "After: the inside of the AC duct cleaned back to bright galvanised metal",
    },
    description:
      "Dust and debris built up inside the duct. Cleaned through to the grille so clean air reaches the room.",
  },
  {
    slug: "filter-cleaning",
    service: "Filters",
    before: {
      src: "/images/work/filters-before.jpg",
      alt: "Before: two AC filters matted with grey dust and lint",
    },
    after: {
      src: "/images/work/filters-after.jpg",
      alt: "After: two washed AC filters with clear mesh, leaning to drip dry",
    },
    description:
      "Filters clogged with dust and lint. Washed, dried and refitted so the unit breathes properly.",
  },
];

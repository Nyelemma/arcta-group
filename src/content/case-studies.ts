export type CaseStudy = {
  slug: string;
  title: string;
  location: string;
  service: string;
  serviceSlug?: string;
  problem: string;
  work: string;
  result: string;
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
};

/**
 * Add a study by appending to this array.
 * When beforeImage and afterImage are both set, the site shows a comparison slider.
 * Use real job photography only.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "ac-cooling-issue-dubai-marina",
    title: "AC cooling issue",
    location: "Dubai Marina",
    service: "Coil cleaning",
    serviceSlug: "coil-cleaning",
    problem: "AC not cooling properly.",
    work: "Inspected the system, cleaned the coil and checked drainage and performance.",
    result: "Improved cooling performance and a cleaner system.",
  },
];

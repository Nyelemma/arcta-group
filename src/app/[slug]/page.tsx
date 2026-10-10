import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { FurtherView, LandingView } from "@/components/service-views";
import { furtherServices, getFurtherService } from "@/content/further-services";
import { getServiceByAdsSlug, services } from "@/content/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...services.map((service) => ({ slug: service.adsSlug })),
    ...furtherServices.map((service) => ({ slug: service.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const landing = getServiceByAdsSlug(slug);
  if (landing) {
    return pageMetadata({
      title: landing.adsH1,
      description: landing.adsLede,
      path: `/${landing.adsSlug}`,
    });
  }
  const further = getFurtherService(slug);
  if (!further) return {};
  return pageMetadata({
    title: further.seoTitle,
    description: further.seoDescription,
    path: `/${further.slug}`,
  });
}

export default async function FlexiblePage({ params }: Props) {
  const { slug } = await params;
  const landing = getServiceByAdsSlug(slug);
  if (landing) {
    return (
      <>
        <JsonLd
          data={[
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: landing.adsH1, path: `/${landing.adsSlug}` },
            ]),
            serviceSchema({
              name: landing.adsH1,
              description: landing.adsLede,
              path: `/${landing.adsSlug}`,
            }),
            faqSchema(landing.faqs),
          ]}
        />
        <LandingView service={landing} />
      </>
    );
  }

  const further = getFurtherService(slug);
  if (!further) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: further.name, path: `/${further.slug}` },
          ]),
          serviceSchema({
            name: further.name,
            description: further.seoDescription,
            path: `/${further.slug}`,
          }),
          faqSchema(further.faqs),
        ]}
      />
      <FurtherView service={further} />
    </>
  );
}

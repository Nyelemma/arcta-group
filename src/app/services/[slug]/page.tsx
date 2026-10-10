import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { CategoryView, ServiceView } from "@/components/service-views";
import { categories, getCategory, getService, services } from "@/content/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...categories, ...services].map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (category) {
    return pageMetadata({
      title: category.seoTitle,
      description: category.seoDescription,
      path: `/services/${category.slug}`,
    });
  }
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceRoute({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (category) {
    return (
      <>
        <JsonLd
          data={[
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: category.name, path: `/services/${category.slug}` },
            ]),
            serviceSchema({
              name: category.name,
              description: category.seoDescription,
              path: `/services/${category.slug}`,
            }),
          ]}
        />
        <CategoryView category={category} />
      </>
    );
  }

  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          serviceSchema({
            name: service.name,
            description: service.seoDescription,
            path: `/services/${service.slug}`,
          }),
          faqSchema(service.faqs),
        ]}
      />
      <ServiceView service={service} />
    </>
  );
}

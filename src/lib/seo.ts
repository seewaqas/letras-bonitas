import type { LandingFaq } from "../data/landings.ts";

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function pageGraph(options: {
  name: string;
  description: string;
  url?: string;
  faq: readonly LandingFaq[];
  crumbs: readonly { name: string; url?: string }[];
}): Record<string, unknown> {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "SoftwareApplication",
      name: options.name,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      inLanguage: "es",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      description: options.description,
      ...(options.url ? { url: options.url } : {}),
    },
  ];

  if (options.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: options.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  if (options.crumbs.every((crumb) => crumb.url)) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: options.crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

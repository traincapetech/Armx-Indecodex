import { ARMX_INDECODEX_ORG_INFO, getSameAsForTechnologies } from "../../schema/entities";
import { getTopicCluster } from "./clusterManager";

/**
 * Returns baseline organization schema.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${ARMX_INDECODEX_ORG_INFO.url}/#organization`,
    "name": ARMX_INDECODEX_ORG_INFO.name,
    "legalName": ARMX_INDECODEX_ORG_INFO.legalName,
    "url": ARMX_INDECODEX_ORG_INFO.url,
    "logo": {
      "@type": "ImageObject",
      "@id": `${ARMX_INDECODEX_ORG_INFO.url}/#logo`,
      "url": ARMX_INDECODEX_ORG_INFO.logo,
      "caption": ARMX_INDECODEX_ORG_INFO.name
    },
    "image": {
      "@id": `${ARMX_INDECODEX_ORG_INFO.url}/#logo`
    },
    "description": ARMX_INDECODEX_ORG_INFO.description,
    "telephone": ARMX_INDECODEX_ORG_INFO.telephone,
    "email": ARMX_INDECODEX_ORG_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ARMX_INDECODEX_ORG_INFO.address.streetAddress,
      "addressLocality": ARMX_INDECODEX_ORG_INFO.address.addressLocality,
      "addressRegion": ARMX_INDECODEX_ORG_INFO.address.addressRegion,
      "postalCode": ARMX_INDECODEX_ORG_INFO.address.postalCode,
      "addressCountry": ARMX_INDECODEX_ORG_INFO.address.addressCountry
    },
    "sameAs": ARMX_INDECODEX_ORG_INFO.sameAs
  };
}

/**
 * Returns local business schema for India headquarters.
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${ARMX_INDECODEX_ORG_INFO.url}/#localbusiness`,
    "name": ARMX_INDECODEX_ORG_INFO.name,
    "image": ARMX_INDECODEX_ORG_INFO.logo,
    "telephone": ARMX_INDECODEX_ORG_INFO.telephone,
    "email": ARMX_INDECODEX_ORG_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ARMX_INDECODEX_ORG_INFO.address.streetAddress,
      "addressLocality": ARMX_INDECODEX_ORG_INFO.address.addressLocality,
      "addressRegion": ARMX_INDECODEX_ORG_INFO.address.addressRegion,
      "postalCode": ARMX_INDECODEX_ORG_INFO.address.postalCode,
      "addressCountry": ARMX_INDECODEX_ORG_INFO.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": ARMX_INDECODEX_ORG_INFO.geo.latitude,
      "longitude": ARMX_INDECODEX_ORG_INFO.geo.longitude
    },
    "url": ARMX_INDECODEX_ORG_INFO.url,
    "priceRange": "$$",
    "parentOrganization": {
      "@id": `${ARMX_INDECODEX_ORG_INFO.url}/#organization`
    }
  };
}

/**
 * Returns website search action schema.
 */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${ARMX_INDECODEX_ORG_INFO.url}/#website`,
    "url": ARMX_INDECODEX_ORG_INFO.url,
    "name": ARMX_INDECODEX_ORG_INFO.name,
    "publisher": {
      "@id": `${ARMX_INDECODEX_ORG_INFO.url}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${ARMX_INDECODEX_ORG_INFO.url}/certifications?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Returns Breadcrumb schema.
 * @param {Array} crumbs - Array of { name, url }
 */
export function getBreadcrumbSchema(crumbs = []) {
  const itemListElement = crumbs.map((crumb, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "item": {
      "@id": crumb.url.startsWith("http") ? crumb.url : `${ARMX_INDECODEX_ORG_INFO.url}${crumb.url}`,
      "name": crumb.name
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };
}

/**
 * Service Entity Schema Builder.
 */
export function getServiceSchema(service) {
  if (!service) return null;

  const techSameAs = getSameAsForTechnologies(service.technologies || []);
  const cluster = getTopicCluster(service.slug || service.id);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${ARMX_INDECODEX_ORG_INFO.url}/services/${service.slug || service.id}/#service`,
    "name": service.title,
    "serviceType": "Information Technology Consulting",
    "description": service.shortDescription || service.longDescription,
    "provider": {
      "@id": `${ARMX_INDECODEX_ORG_INFO.url}/#organization`
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": (service.solutions || []).map((sol, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": sol
        }
      }))
    },
    "sameAs": techSameAs,
    "mentions": (cluster?.caseStudies || []).map(cs => ({
      "@type": "WebPage",
      "url": `${ARMX_INDECODEX_ORG_INFO.url}/case-studies/${cs}`
    }))
  };
}

/**
 * Product & SoftwareApplication Entity Schema Builder.
 */
export function getProductSchema(product) {
  if (!product) return null;

  const techSameAs = getSameAsForTechnologies(product.technologyStack || []);
  const cluster = getTopicCluster(product.slug || product.id);

  return {
    "@context": "https://schema.org",
    "@type": ["Product", "SoftwareApplication"],
    "@id": `${ARMX_INDECODEX_ORG_INFO.url}/products/${product.slug || product.id}/#product`,
    "name": product.name,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "description": product.shortDescription || product.description,
    "brand": {
      "@id": `${ARMX_INDECODEX_ORG_INFO.url}/#organization`
    },
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "description": "Bespoke deployments. Contact sales for customized commercial pricing plans."
    },
    "sameAs": techSameAs,
    "subjectOf": (cluster?.caseStudies || []).map(cs => ({
      "@type": "WebPage",
      "url": `${ARMX_INDECODEX_ORG_INFO.url}/case-studies/${cs}`
    }))
  };
}

/**
 * Course Entity Schema Builder.
 */
export function getCourseSchema(course) {
  if (!course) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${ARMX_INDECODEX_ORG_INFO.url}/certifications/${course.categorySlug}/${course.slug}/#course`,
    "name": course.title,
    "description": course.shortDescription,
    "provider": {
      "@id": `${ARMX_INDECODEX_ORG_INFO.url}/#organization`
    },
    "courseCode": course.slug,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "duration": course.duration || "P4W",
      "courseWorkload": "PT10H"
    }
  };
}

/**
 * FAQPage Schema Builder.
 */
export function getFAQSchema(faqs = []) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q || faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a || faq.answer
      }
    }))
  };
}

/**
 * Portfolio Project Schema Builder.
 */
export function getPortfolioProjectSchema(project) {
  if (!project) return null;

  const techSameAs = getSameAsForTechnologies(project.technologies || []);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${ARMX_INDECODEX_ORG_INFO.url}/portfolio/${project.slug}/#portfolio`,
    "name": project.title,
    "description": project.description,
    "creator": {
      "@id": `${ARMX_INDECODEX_ORG_INFO.url}/#organization`
    },
    "sameAs": techSameAs
  };
}

/**
 * Case Study Schema Builder.
 */
export function getCaseStudySchema(study) {
  if (!study) return null;

  const techSameAs = getSameAsForTechnologies(study.technologies || []);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${ARMX_INDECODEX_ORG_INFO.url}/case-studies/${study.slug}/#casestudy`,
    "name": study.title,
    "description": study.description,
    "publisher": {
      "@id": `${ARMX_INDECODEX_ORG_INFO.url}/#organization`
    },
    "about": {
      "@type": "Thing",
      "name": study.client,
      "description": `Custom software project deployed for ${study.client}.`
    },
    "sameAs": techSameAs
  };
}

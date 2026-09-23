import React from 'react';
import SEOHead from './SEOHead';

// Pre-configured SEO data for different page types
const pageSEOData = {
  about: {
    title: "About Us | Armx-Indecodex - IT Training & Certification",
    description: "Learn about Armx-Indecodex, a premier IT training and certification provider. Expert-led courses in AWS, CompTIA, Microsoft, Cisco, and more. Join thousands of successful IT professionals.",
    canonical: "https://www.Armx-Indecodextech.in/about-us",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Armx-Indecodex",
      "description": "Premier IT Training and Certification provider",
      "url": "https://www.Armx-Indecodextech.in/about-us",
      "mainEntity": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in",
        "logo": "https://www.Armx-Indecodextech.in/android-chrome-512x512.png",
        "description": "Premier IT Training and Certification provider",
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "India"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+916280281505",
          "contactType": "customer service"
        }
      }
    }
  },

  contact: {
    title: "Contact Us | Armx-Indecodex - Get in Touch",
    description: "Contact Armx-Indecodex for IT training and certification inquiries. Expert support for AWS, CompTIA, Microsoft, Cisco courses. Call +91 6280281505 or email us today.",
    canonical: "https://www.Armx-Indecodextech.in/contact-us",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Armx-Indecodex",
      "description": "Get in touch with our IT training experts",
      "url": "https://www.Armx-Indecodextech.in/contact-us",
      "mainEntity": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+916280281505",
          "contactType": "customer service",
          "availableLanguage": "English, Hindi"
        }
      }
    }
  },

  courses: {
    title: "IT Training Courses | AWS, CompTIA, Microsoft, Cisco | Armx-Indecodex",
    description: "Explore our comprehensive IT training courses: AWS, CompTIA, Microsoft, Cisco, PECB, IBM, Adobe, and more. Expert-led online certification programs for IT professionals.",
    canonical: "https://www.Armx-Indecodextech.in/courses",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "IT Training Courses",
      "description": "Comprehensive IT training and certification courses",
      "url": "https://www.Armx-Indecodextech.in/courses",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Course",
            "name": "AWS Certification Training",
            "description": "Amazon Web Services cloud computing certification courses",
            "provider": {
              "@type": "Organization",
              "name": "Armx-Indecodex"
            }
          },
          {
            "@type": "Course",
            "name": "CompTIA Certification Training",
            "description": "CompTIA IT fundamentals and professional certification courses",
            "provider": {
              "@type": "Organization",
              "name": "Armx-Indecodex"
            }
          },
          {
            "@type": "Course",
            "name": "Microsoft Certification Training",
            "description": "Microsoft Azure, Office 365, and other Microsoft certification courses",
            "provider": {
              "@type": "Organization",
              "name": "Armx-Indecodex"
            }
          },
          {
            "@type": "Course",
            "name": "Cisco Certification Training",
            "description": "Cisco networking and security certification courses",
            "provider": {
              "@type": "Organization",
              "name": "Armx-Indecodex"
            }
          }
        ]
      }
    }
  },

  training: {
    title: "Corporate Training | IT Skills Development | Armx-Indecodex",
    description: "Corporate IT training programs for organizations. Customized training solutions in AWS, Microsoft, Cisco, and more. Boost your team's IT skills with expert-led training.",
    canonical: "https://www.Armx-Indecodextech.in/training",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Corporate IT Training",
      "description": "Professional IT training services for organizations",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex"
      },
      "serviceType": "Corporate Training",
      "areaServed": "Worldwide"
    }
  },

  career: {
    title: "IT Career Opportunities | Join Armx-Indecodex",
    description: "Explore career opportunities at Armx-Indecodex. Join our team of IT training professionals. Current openings for instructors, developers, and support staff.",
    canonical: "https://www.Armx-Indecodextech.in/career",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "IT Training Professionals",
      "description": "Join our team of IT training experts",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Armx-Indecodex"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "India"
        }
      }
    }
  },

  faq: {
    title: "FAQ | Frequently Asked Questions | Armx-Indecodex",
    description: "Find answers to frequently asked questions about IT training, certifications, course schedules, and more. Get help with AWS, CompTIA, Microsoft, and Cisco courses.",
    canonical: "https://www.Armx-Indecodextech.in/faq",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What IT certifications do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer certifications in AWS, CompTIA, Microsoft, Cisco, PECB, IBM, Adobe, and more."
          }
        },
        {
          "@type": "Question",
          "name": "Are your courses online or in-person?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer both online and in-person training options to suit your needs."
          }
        }
      ]
    }
  },

  blogs: {
    title: "IT Training Blog | Latest Insights & Tips | Armx-Indecodex",
    description: "Stay updated with the latest IT training insights, certification tips, industry trends, and career advice. Expert articles on AWS, Microsoft, Cisco, and more.",
    canonical: "https://www.Armx-Indecodextech.in/blogs",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Armx-Indecodex Blog",
      "description": "IT training insights and industry updates",
      "url": "https://www.Armx-Indecodextech.in/blogs",
      "publisher": {
        "@type": "Organization",
        "name": "Armx-Indecodex"
      }
    }
  }
};

const PageSEO = ({ pageType, customData = {} }) => {
  const seoData = pageSEOData[pageType] || {};

  // Merge custom data with default data
  const finalData = {
    ...seoData,
    ...customData
  };

  return <SEOHead {...finalData} />;
};

export default PageSEO; 
import React from 'react';
import SEOHead from './SEOHead';

// Course-specific SEO data
const courseSEOData = {
  aws: {
    title: "AWS Certification Training | Cloud Computing Courses | Armx-Indecodex",
    description: "Master AWS cloud computing with our comprehensive certification training. Learn AWS Solutions Architect, Developer, SysOps, and more. Expert-led online courses with hands-on practice.",
    canonical: "https://www.Armx-Indecodextech.in/aws",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "AWS Certification Training",
      "description": "Comprehensive Amazon Web Services cloud computing certification training",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in"
      },
      "coursePrerequisites": "Basic IT knowledge",
      "educationalLevel": "Professional",
      "teaches": [
        "AWS Cloud Computing",
        "Amazon EC2",
        "Amazon S3",
        "AWS Lambda",
        "Cloud Architecture",
        "DevOps on AWS"
      ],
      "courseMode": "Online",
      "inLanguage": "English",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "inLanguage": "English"
      }
    }
  },

  microsoft: {
    title: "Microsoft Certification Training | Azure, Office 365, Security | Armx-Indecodex",
    description: "Excel in Microsoft technologies with our certification training. Master Azure, Office 365, Microsoft 365, Security, and more. Expert-led courses for IT professionals.",
    canonical: "https://www.Armx-Indecodextech.in/microsoft",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Microsoft Certification Training",
      "description": "Comprehensive Microsoft technology certification training",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in"
      },
      "coursePrerequisites": "Basic IT knowledge",
      "educationalLevel": "Professional",
      "teaches": [
        "Microsoft Azure",
        "Office 365",
        "Microsoft 365",
        "Microsoft Security",
        "Power Platform",
        "Microsoft Dynamics"
      ],
      "courseMode": "Online",
      "inLanguage": "English"
    }
  },

  cisco: {
    title: "Cisco Certification Training | CCNA, CCNP, CCIE | Armx-Indecodex",
    description: "Master Cisco networking with our certification training. CCNA, CCNP, CCIE courses for networking professionals. Expert-led training with hands-on labs and real-world scenarios.",
    canonical: "https://www.Armx-Indecodextech.in/cisco",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Cisco Certification Training",
      "description": "Comprehensive Cisco networking certification training",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in"
      },
      "coursePrerequisites": "Basic networking knowledge",
      "educationalLevel": "Professional",
      "teaches": [
        "Cisco Networking",
        "CCNA",
        "CCNP",
        "CCIE",
        "Network Security",
        "Routing and Switching"
      ],
      "courseMode": "Online",
      "inLanguage": "English"
    }
  },

  comptia: {
    title: "CompTIA Certification Training | A+, Network+, Security+ | Armx-Indecodex",
    description: "Build your IT foundation with CompTIA certifications. A+, Network+, Security+, Cloud+, and more. Expert-led training for IT professionals and beginners.",
    canonical: "https://www.Armx-Indecodextech.in/comptia",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "CompTIA Certification Training",
      "description": "Comprehensive CompTIA IT certification training",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in"
      },
      "coursePrerequisites": "Basic computer knowledge",
      "educationalLevel": "Beginner to Professional",
      "teaches": [
        "CompTIA A+",
        "CompTIA Network+",
        "CompTIA Security+",
        "CompTIA Cloud+",
        "IT Fundamentals",
        "Cybersecurity"
      ],
      "courseMode": "Online",
      "inLanguage": "English"
    }
  },

  pecb: {
    title: "PECB Certification Training | ISO Standards, Information Security | Armx-Indecodex",
    description: "Master ISO standards and information security with PECB certifications. ISO 27001, ISO 9001, ISO 45001, and more. Expert-led training for compliance professionals.",
    canonical: "https://www.Armx-Indecodextech.in/pecb",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "PECB Certification Training",
      "description": "Professional PECB ISO standards certification training",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in"
      },
      "coursePrerequisites": "Basic business knowledge",
      "educationalLevel": "Professional",
      "teaches": [
        "ISO 27001",
        "ISO 9001",
        "ISO 45001",
        "Information Security",
        "Quality Management",
        "Risk Management"
      ],
      "courseMode": "Online",
      "inLanguage": "English"
    }
  },

  ibm: {
    title: "IBM Certification Training | Cloud, AI, Data Science | Armx-Indecodex",
    description: "Master IBM technologies with our certification training. IBM Cloud, Watson AI, Data Science, and more. Expert-led courses for enterprise IT professionals.",
    canonical: "https://www.Armx-Indecodextech.in/ibm",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "IBM Certification Training",
      "description": "Comprehensive IBM technology certification training",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in"
      },
      "coursePrerequisites": "Basic IT knowledge",
      "educationalLevel": "Professional",
      "teaches": [
        "IBM Cloud",
        "Watson AI",
        "Data Science",
        "IBM Security",
        "Enterprise Software",
        "Cognitive Computing"
      ],
      "courseMode": "Online",
      "inLanguage": "English"
    }
  },

  adobe: {
    title: "Adobe Certification Training | Creative Cloud, Digital Media | Armx-Indecodex",
    description: "Master Adobe Creative Cloud with our certification training. Photoshop, Illustrator, InDesign, Premiere Pro, and more. Expert-led courses for creative professionals.",
    canonical: "https://www.Armx-Indecodextech.in/adobe",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Adobe Certification Training",
      "description": "Comprehensive Adobe Creative Cloud certification training",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in"
      },
      "coursePrerequisites": "Basic computer skills",
      "educationalLevel": "Beginner to Professional",
      "teaches": [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe InDesign",
        "Adobe Premiere Pro",
        "Digital Design",
        "Creative Media"
      ],
      "courseMode": "Online",
      "inLanguage": "English"
    }
  },

  autodesk: {
    title: "Autodesk Certification Training | AutoCAD, Revit, 3D Design | Armx-Indecodex",
    description: "Master Autodesk software with our certification training. AutoCAD, Revit, 3ds Max, and more. Expert-led courses for architects, engineers, and designers.",
    canonical: "https://www.Armx-Indecodextech.in/autodesk",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Autodesk Certification Training",
      "description": "Comprehensive Autodesk software certification training",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in"
      },
      "coursePrerequisites": "Basic computer skills",
      "educationalLevel": "Beginner to Professional",
      "teaches": [
        "AutoCAD",
        "Revit",
        "3ds Max",
        "Civil 3D",
        "Architectural Design",
        "3D Modeling"
      ],
      "courseMode": "Online",
      "inLanguage": "English"
    }
  },

  tally: {
    title: "Tally Certification Training | Accounting Software | Armx-Indecodex",
    description: "Master Tally ERP 9 with our certification training. Learn accounting, inventory management, GST, and more. Expert-led courses for accounting professionals.",
    canonical: "https://www.Armx-Indecodextech.in/tally",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Tally Certification Training",
      "description": "Comprehensive Tally ERP 9 accounting software training",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in"
      },
      "coursePrerequisites": "Basic accounting knowledge",
      "educationalLevel": "Beginner to Professional",
      "teaches": [
        "Tally ERP 9",
        "Accounting",
        "Inventory Management",
        "GST",
        "Financial Reporting",
        "Business Management"
      ],
      "courseMode": "Online",
      "inLanguage": "English"
    }
  },

  unity: {
    title: "Unity Certification Training | Game Development | Armx-Indecodex",
    description: "Master Unity game development with our certification training. Learn C#, 3D modeling, game design, and more. Expert-led courses for aspiring game developers.",
    canonical: "https://www.Armx-Indecodextech.in/unity",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Unity Certification Training",
      "description": "Comprehensive Unity game development certification training",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in"
      },
      "coursePrerequisites": "Basic programming knowledge",
      "educationalLevel": "Beginner to Professional",
      "teaches": [
        "Unity Engine",
        "C# Programming",
        "3D Modeling",
        "Game Design",
        "Game Physics",
        "Mobile Game Development"
      ],
      "courseMode": "Online",
      "inLanguage": "English"
    }
  },

  meta: {
    title: "Meta Certification Training | Digital Marketing, Social Media | Armx-Indecodex",
    description: "Master Meta platforms with our certification training. Facebook, Instagram, WhatsApp Business, and digital marketing. Expert-led courses for marketing professionals.",
    canonical: "https://www.Armx-Indecodextech.in/meta",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Meta Certification Training",
      "description": "Comprehensive Meta platform certification training",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in"
      },
      "coursePrerequisites": "Basic marketing knowledge",
      "educationalLevel": "Beginner to Professional",
      "teaches": [
        "Facebook Marketing",
        "Instagram Marketing",
        "WhatsApp Business",
        "Digital Marketing",
        "Social Media Management",
        "Meta Ads"
      ],
      "courseMode": "Online",
      "inLanguage": "English"
    }
  },

  pmi: {
    title: "PMI Certification Training | Project Management | Armx-Indecodex",
    description: "Master project management with PMI certifications. PMP, CAPM, and more. Expert-led training for project managers and professionals seeking PMI credentials.",
    canonical: "https://www.Armx-Indecodextech.in/pmi",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "PMI Certification Training",
      "description": "Comprehensive Project Management Institute certification training",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in"
      },
      "coursePrerequisites": "Project management experience",
      "educationalLevel": "Professional",
      "teaches": [
        "Project Management",
        "PMP",
        "CAPM",
        "Risk Management",
        "Stakeholder Management",
        "Project Planning"
      ],
      "courseMode": "Online",
      "inLanguage": "English"
    }
  },

  swift: {
    title: "Swift Certification Training | iOS Development | Armx-Indecodex",
    description: "Master Swift programming and iOS development with our certification training. Learn mobile app development, SwiftUI, and more. Expert-led courses for iOS developers.",
    canonical: "https://www.Armx-Indecodextech.in/swift",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Swift Certification Training",
      "description": "Comprehensive Swift programming and iOS development training",
      "provider": {
        "@type": "Organization",
        "name": "Armx-Indecodex",
        "url": "https://www.Armx-Indecodextech.in"
      },
      "coursePrerequisites": "Basic programming knowledge",
      "educationalLevel": "Beginner to Professional",
      "teaches": [
        "Swift Programming",
        "iOS Development",
        "SwiftUI",
        "Mobile App Development",
        "Xcode",
        "Apple Development"
      ],
      "courseMode": "Online",
      "inLanguage": "English"
    }
  }
};

const CourseSEO = ({ courseType, customData = {} }) => {
  const seoData = courseSEOData[courseType] || {};

  // Merge custom data with default data
  const finalData = {
    ...seoData,
    ...customData
  };

  return <SEOHead {...finalData} />;
};

export default CourseSEO; 
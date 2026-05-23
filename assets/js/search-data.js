// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Highlights of my professional and personal projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-graduated-with-b-e-in-software-engineering-from-southwest-university-chongqing",
          title: 'Graduated with B.E. in Software Engineering from Southwest University, Chongqing.',
          description: "",
          section: "News",},{id: "news-graduated-with-m-s-in-computer-science-from-washington-university-in-st-louis",
          title: 'Graduated with M.S. in Computer Science from Washington University in St. Louis.',
          description: "",
          section: "News",},{id: "news-joined-daxwell-as-a-software-developer-in-houston-tx",
          title: 'Joined Daxwell as a Software Developer in Houston, TX.',
          description: "",
          section: "News",},{id: "projects-distributed-erp-crm-platform",
          title: 'Distributed ERP/CRM Platform',
          description: "End-to-end distributed ERP/CRM platform on AWS EKS serving multi-team internal and B2B workflows with microservices, data pipelines, and event-driven architecture.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_erp_platform/";
            },},{id: "projects-real-time-streaming-amp-integration-layer",
          title: 'Real-Time Streaming &amp;amp; Integration Layer',
          description: "Streaming and integration layer linking IoT, logistics, CRM, and ERP data through Kafka and Flink for real-time synchronization and analytics ingestion into Databricks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_streaming_layer/";
            },},{id: "projects-xiaomi-618-flash-sale-system",
          title: 'Xiaomi 618 Flash Sale System',
          description: "High-performance flash sale system for Xiaomi&#39;s 618 Shopping Festival, handling massive concurrent traffic with Nginx load balancing and Redis caching.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_flash_sale/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/chris_qu_resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%72%69%73%71%75.%6A%6F%62@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Sirhc-uQ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chris-qu-936ab4250", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

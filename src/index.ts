const contributionsData = [
  {
    title: "The Turing way project",
    subTitle: "Infrastructure, Documentation",
    imageUrl: "/turing-way.png",
    modalData: {
      category: "Infrastructure / Technical Documentation",
      date: "2022 - 2023",
      technology: "Github Action, Javascript, Markdown",
      productLink: "https://the-turing-way.netlify.app/index.html",
      githubLink: "https://github.com/alan-turing-institute/the-turing-way",
      description: {
        main: "The Turing Way project is open source, open collaboration, and community-driven. We involve and support a diverse community of contributors to make data science accessible, comprehensible and effective for everyone. Our goal is to provide all the information that researchers and data scientists in academia, industry and the public sector need to ensure that the projects they work on are easy to reproduce and reuse.",
        paragraphs: [
          "Developed programs to automate attribution of contributors from the Crowdin project to Project organization, ensuring proper recognition and transparency for all contributors.",
          "Contributed to an open-source guide for reproducible data science, aimed at optimizing research practices and optimized the reproducibility of data0driven research.",
          "Collaborated with a team of contributors to enhance localization and translation efforts for the guide, resulting in 35% enhanced accessibility to a broader community of users.",
        ],
      },
    },
  },
  {
    title: "JSquarto",
    subTitle: "Tooling",
    imageUrl: "/js-quarto.png",
    modalData: {
      category: "Infrastructure / Technical Documentation",
      date: "2024",
      technology: "Typescript, Markdown, Crowdin, BabelQuarto",
      productLink: "https://jsquarto.netlify.app/",
      githubLink:
        "https://github.com/open-science-community-saydi-arabia/jsquarto",
      description: {
        main: "The purpose of JSQuarto is to streamline the process of generating API reference documentation for JavaScript packages with multilingual support. By leveraging Markdown and Quarto, developers can easily create and maintain comprehensive documentation for their JavaScript projects.",
        paragraphs: [
          "JSQuarto draws inspiration from various documentation tools and methodologies, including: ",
          "JSDoc: JSDoc is a popular tool for generating API documentation from JavaScript source code. ",
          "Quarto: Quarto is a versatile document authoring and publishing tool that supports Markdown, LaTeX, and R Sphinx: Sphinx is a documentation generation tool widely used in the Python community. ",
        ],
      },
    },
  },
  {
    title: "Open life science (Saudi Arabia)",
    subTitle: "API",
    imageUrl: "/ols-preview.png",
    modalData: {
      category: "API, Frontend, Documentation",
      date: "May 14 2022",
      technology: "NodeJS, Ci/CD, JSDoc, HTML, CSS, JS",
      productLink: "https://osc-ksa.com",
      githubLink:
        "https://github.com/open-science-community-saudi-arabia/moocs",
      description: {
        main: "Open Life Science (OLS) is a global community-driven program that aims to support and mentor individuals in developing open research and open source projects. OLS provides a structured program with mentorship, training, and resources to help participants in advancing their projects and fostering a culture of openness in research. ",
        paragraphs: [
          "Worked on fixes within the frontend website.",
          "Added modals for subsections to direct to external materials for the website.",
          "Collaborated with a diverse team of developers to design and implement backend API functionalities for an Online Course platform, this enabled seamless access and delivery of educational content.",
          "Wrote detailed documentation for the API endpoints and the technical guide for maintainers.",
        ],
      },
    },
  },
  {
    title: "Action crowdin contributors",
    subTitle: "Github Action",
    imageUrl: "/action-crowdin.png",
    modalData: {
      category: "Github Action bot",
      date: "2023",
      technology: "Typescript",
      githubLink:
        "https://github.com/andrii-bodnar/action-crowdin-contributors",
      description: {
        main: "A GitHub action to automate acknowledging translators and proofreaders to your projects ✨. ",
        paragraphs: [
          "Contributed to fixing bugs relating to data representation on the rendered layout",
        ],
      },
    },
  },
];

const portfolioData = [
  {
    title: "Accuvend",
    subTitle: "SAAS / Enterprise solution",
    imageUrl: "/accuvend.png",
    modalData: {
      category: "SAAS / Enterprise Solution",
      date: "2024",
      technology:
        "Typescript, Github CI/CD, Apache Kafka, PostgreSQL, Redis, Docker, Crowdin, BabelQuarto",
      productLink: "https://www.accuvend.ng",
      description: {
        main: "Accuvend.ng is a cutting-edge payment processing platform designed to facilitate seamless transactions across Nigeria's banking network. Leveraging a robust distributed system architecture and event-driven processes, Accuvend.ng ensures high availability and rapid transaction processing. The platform supports millions of transactions monthly, providing a reliable and scalable solution for financial institutions and enterprises. As a white-labeled SaaS solution, Accuvend.ng allows other companies to effortlessly integrate and customize the platform to meet their unique needs, driving efficiency and innovation in the payment processing industry.",
        keyFeatures: [
          {
            title: "Vending Services",
            text: "Facilitates the purchase of goods and services, including mobile top-ups, data bundles, and airtime.",
          },
          {
            title: "payment gateway integration",
            text: "Provides seamless integration for processing secure online payments across various platforms.",
          },
          {
            title: "utility bill payments",
            text: "Enables users to pay for utility bills such as electricity, water, and cable subscriptions.",
          },
          {
            title: "White-Labeled SaaS solutions",
            text: "Offers customizable software solutions for businesses to manage and streamline their payment processing needs.",
          },
          {
            title: "Event-Driven Architecture",
            text: "Utilizes a robust, distributed system to handle high transaction volumes with reliability and efficiency.",
          },
        ],
      },
    },
  },
  {
    title: "Veridux Pay",
    subTitle: "Utility Payment Solution",
    imageUrl: "/veridux_preview.png",
    modalData: {
      category: "End to end project",
      date: "Jul 2023 - Mar 2024",
      technology:
        "NodeJS, TypeScript, Docker, Google cloud platform, ReactJS, Apache Kafka",
      productLink:
        "https://play.google.com/store/apps/details?id=com.momastores.app.momastores",
      description: {
        main: "Introducing Veridux Pay, your comprehensive mobile payment solution. Simplify your financial life with our versatile app that covers all your needs. Key Features: Earn discounts & rewards on purchases for Airtime, Data and utility bills Introducing Veridux Pay, your comprehensive mobile payment solution. Simplify your financial life with our versatile app that covers all your needs.",
        keyFeatures: [
          {
            title: "bill payments",
            text: "Conveniently settle your utility bills with just a few taps. Veridux Pay supports a wide range of services, ensuring you can manage and pay all your bills in one place.",
          },
          {
            title: "mobile recharge",
            text: "Stay connected effortlessly. Top up your airtime and data directly from the app, eliminating the need for multiple transactions.",
          },
          {
            title: "cable TV management",
            text: "Enjoy uninterrupted entertainment. Easily manage and pay for your cable TV subscriptions within Veridux Pay.",
          },
          {
            title: "wallet top-up",
            text: "Keep your wallet ready for seamless transactions. Top up your Veridux Pay wallet securely and instantly, providing you with the flexibility to make quick payments.",
          },
          {
            title: "Peer-to-peer transfers",
            text: "Send money to friends and family with ease. Veridux Pay facilitates secure person-to-person transactions, making it simple to share funds whenever needed.",
          },
          {
            title: "Earn rewards",
            text: "Enjoy exclusive discounts on your purchases through Veridux Pay. Save money on every transaction and stretch your budget further.",
          },
          {
            title: "Referral bonuses",
            text: "Refer friends and family to Veridux Pay and earn exciting bonuses. Grow your rewards as you introduce others to the convenience and benefits of our app.",
          },
        ],
      },
    },
  },
  {
    title: "SwiftVia",
    subTitle: "Ride hailing app",
    imageUrl: "/swiftvia.png",
    modalData: {
      category: "ride hailing app",
      date: "2024",
      technology: "Typescript, Github CI/CD, WebSockets, MongoDB, Redis",
      productLink: "https://swiftvia.com",
      description: {
        main: "SwiftVIA is a ride-hailing app designed for delivery services. It allows users to request delivery of goods to their location using the app. The platform connects users with couriers who can deliver items efficiently and conveniently. SwiftVIA aims to streamline the delivery process by providing a user-friendly interface and reliable service for both individuals and businesses.",
        keyFeatures: [
          {
            title: "Real-Time location tracking",
            text: "Allows users to track the real-time location of their delivery couriers, ensuring transparencey and timely updates on delivery status.",
          },
          {
            title: "websocket integration for in-app chat",
            text: "Provides seamless in-app chat functionality between users and couriers, enhancing communication and coorination during the delivery process.",
          },
          {
            title: "map integration for navigation",
            text: "Incorporates advanced map integration to assist couriers with acccurate navigation and route optimization, improving delivery effiency and accuracy.",
          },
        ],
      },
    },
  },
  {
    title: "BlackAt",
    subTitle: "Social Platform",
    imageUrl: "/blackat.png",
    modalData: {
      category: "Frontend developement",
      date: "Jan 2024 - March 2024",
      technology: "NodeJs, Typescript, ReactJS",
      productLink: "https://blkat.io",
      description: {
        main: "Welcome to BlackAt Platform, where our mission is to revolutionize the way black executives and agencies connect, grow, and succeed in today's dynamic business world.",
        keyFeatures: [
          {
            text: "BlackAt is uniquely tailored for executives who are SVPs, CMOs, CEOs, but are pivotal to their organizations. We provide a structured pathway for personal and professional development, including the assignment of personal assistants, masterclasses led by experienced leaders, and opportunities for global mentorship. Our tiered system recognizes and nurtures talent at local, regional, and global levels. ",
          },
          {
            text: "Vendors have the unique opportunity to showcase their capabilities and attract new business. By creating a business page on BlackAt, vendors can interact with top executives, engage with brands, and leverage these relationships for mutual success.",
          },
          {
            text: "Our platform serves as a launchpad for creatives seeking growth. Whether you're an established professional or an emerging talent, BlackAt is your stage to connect with like-minded individuals and access exclusive events and opportunities.",
          },
        ],
      },
    },
  },
  {
    title: "Open innovation lab",
    subTitle: "API",
    imageUrl: "/open_innovation_lab.png",
    modalData: {
      category: "Backend API",
      date: "March 10 2023",
      technology: "NodeJs, Typescript, ExpressJS, Crowdin API, MongoDB",
      githubLink:
        "https://github.com/open-science-community-saudi-arabia/moocs",
      technicalDocumentationLink: "https://moocs-documentation.netlify.app",
      productLink: "https://moocs-client.netlify.app",
      description: {
        main: "Welcome to BlackAt Platform, where our mission is to revolutionize the way black executives and agencies connect, grow, and succeed in today's dynamic business world.",
        keyFeatures: [
          {
            title: "Bi-lingual support",
            text: "The contents of the platform can be presented in both English and Arabic, this was implemented using external Machin translation engines from Crowdin API.",
          },
          {
            title: "basic authentication",
            text: "It includes basic authentication flow for Login, Signup, Forgot password and Email verification.",
          },
          {
            title: "courses and materials",
            text: "Users can get access to course materials in form of videos, text materials in PDFs and other documents.",
          },
          {
            title: "quizzes",
            text: "Quizzes help the user track their understanding of the course contentst, these Quizzes are then saved for earning Certificates after course completion.",
          },
          {
            title: "Admin API",
            text: "The Admin API allows various admin functions, examples include course creation, course management, user management e.t.c.",
          },
        ],
      },
    },
  },
  {
    title: "Cruise (Ride-hailing API)",
    subTitle: "API",
    imageUrl: "/ride-hailing-applications.jpg",
    modalData: {
      category: "Backend API",
      date: "February, 2022",
      technology: "NodeJs, ExpressJS, MongoDB, Socket.io, Websockets",
      githubLink: "https://github.com/RealRichi3/cruise",
      technicalDocumentationLink:
        "https://documenter.getpostman.com/view/20633788/2s93JWPhRX",
      productLink: "https://moocs-client.netlify.app",
      description: {
        main: "The Ride-Hailing API is a backend service that allows users to book and pay for rided using a mobile app.",
        keyFeatures: [
          {
            title: "ride booking",
            text: "Users can easily book rides through the app, specifying their pick-up and drop-off locations, and the type of ride they need.",
          },
          {
            title: "driver matching",
            text: "The app uses location tracking to find nearby drivers and match them with riders who need a ride.",
          },
          {
            title: "Real-time location tracking",
            text: "The app tracks the real-time location of the rider and driver during the ride, allowing users to see the exact location of their driver and the estimated time of arrival.",
          },
          {
            title: "In-app payments",
            text: "The app allows users to pay for their rides directly through the app, using a variety of payment methods.",
          },
          {
            title: "Ratings and reviews",
            text: "Users can rate their drivers and leave reviews, helping to maintain high-quality service and ensuring the safety of all users.",
          },
          {
            title: "customer support",
            text: "The app provides a variety of customer support options, such as in-app chat or phone support, to address any issues or concerns users may have.",
          },
          {
            title: "driver management",
            text: "The app provides a dashboard for drivers to manage their rides and earnings, as well as access to features like navigation and turn-by-turn directions.",
          },
          {
            title: "trip history",
            text: "The app allows users to view their ride history and receipts, providing an easy way to keep track of expenses and past trips.",
          },
        ],
      },
    },
  },
  {
    title: "Timezones",
    subTitle: "project",
    imageUrl: "/time-zones.jpg",
    modalData: {
      category: "project",
      date: "May 14, 2022",
      technology: "HTML, CSS, JS",
      githubLink: "https://github.com/RealRichi3/timezones",
      productLink: "https://realrichi3.github.io/timezones",
      description: {
        main: "Full implementation countries-and-timezones npm package to get the time in any country or time-zone in the world.",
      },
    },
  },
];

const languagesData = [
  {
    name: "Typescript",
    value: 90,
  },
  {
    name: "Python",
    value: 90,
  },
  {
    name: "Java",
    value: 90,
  },
  {
    name: "JavaScript",
    value: 90,
  },
  {
    name: "CSS",
    value: 85,
  },
];

const frameworksData = [
  {
    name: "Node JS",
    value: 90,
  },
  {
    name: "Express JS",
    value: 90,
  },
  {
    name: "Mongo DB",
    value: 90,
  },
  {
    name: "PostgreSQL",
    value: 90,
  },
  {
    name: "Redis",
    value: 90,
  },
  {
    name: "Apache Kafka",
    value: 90,
  },
  {
    name: "Docker",
    value: 90,
  },
  {
    name: "Mocha and Chai",
    value: 90,
  },
  {
    name: "GIT",
    value: 90,
  },
];

const experienceData = [
  {
    year: "November 2023 - Present",
    title: "software engineer",
    subTitle: "accuvend",
    subTitleLink: "https://accuvend.ng",
    paragraphs: [
      "Led the architecture, design, developement and white labeling of an enterprise-grade payment processing SAAS solution, now serving as the core engine for some of Nigeria's largest banks.",
      "Architected a scalable distributed architecture using Docker and Apache Kafka which improved throughput to 3000 transactions per second.",
      "Authored detailed technical documentation for Accuvend's distributed system, streamlining developer onboarding and ensuring consistent client deployments, which reduced integration time by 200%.",
    ],
  },
  {
    year: "2022 - Present",
    title: "software engineer core contributor",
    subTitle: "open science community saudi arabia",
    subTitleLink: "https://osc-ksa.com",
    paragraphs: [
      "Co-ordinated open source contributions for the developement of backend API for an online educational platfom improving effective collaboration within peers.",
      "Implemented automated unit tests for test driven developement resulting in reduced cases of reported API vulnerabilities.",
      "Deployed and maintained backend API's for testing using cloud services.",
    ],
  },
  {
    year: "July 2023 - August 2024",
    title: "project lead / backend developer",
    subTitle: "veridux pay",
    subTitleLink: "https://veridux.com.ng",
    paragraphs: [
      "Led the design and developement for Veridux Pay providing a financial solution to pay utility bills, airtime, data and cable TV.",
      "Developed a delivery aggregator, consolidating multiple delivery services and optimizing pricing for product deliveries, resulting in a 25% reduction in delivery costs.",
      "Conducted code reviews and enforced best practices to ensure code quality and maintainability reducing bugs in production by 50%.",
    ],
  },
  {
    year: "July 2023 - Present",
    title: "lead  software engineer",
    subTitle: "swiftvia",
    subTitleLink: "https://swiftvia.com",
    paragraphs: [
      "Led the architecture, design and development of a ride hailing app.",
      "Implemented realtime location broadcasts, geo navigation and vehicle tracking using Websockets and WebRTC.",
      "Authored detailed technical documentation for Swiftvia's distributed system, streamlining developer onboarding and ensuring consistet client deployments, which reduced integration time by 20%.",
    ],
  },
  {
    year: "2023 ",
    title: "Backend-developer (contract)",
    subTitle: "Dixtrix Media",
    // subTitleLink: 'https://swiftvia.com',
    paragraphs: [
      "Conducted frequent code reviews to identify and address performance bottlenecks, resulting in 20% higher server speed.",
      "Developed user-friendly backend systems for all front-end applications, improving the functionality and resulting in a 20% increased user experience.",
    ],
  },
  {
    year: "may, 2021- july 2022 ",
    title: "Backend-developer",
    subTitle: "BOAYANT",
    // subTitleLink: 'https://swiftvia.com',
    paragraphs: [
      "Regularly inspect server code resulting for improved code optimization.",
      "Performed thorough automated unit tests for deployed applications and APIs resulting in improved code quality and easy integration.",
      "Collaborated closely with the product design team to understand better end user requirement resulting in improved user experience.",
    ],
  },
];

const educationData = [
  {
    year: "2024 - 2025 ",
    title: "masters degree",
    subTitle: "aston university, birmingham uk",
    paragraphs: ["Masters of Science, Robotics and Autonomous systems."],
  },
  {
    year: "2016 - 2022 ",
    title: "undergraduate degree",
    subTitle: "university of benin, benin city",
    paragraphs: ["Bachelor of Engineering, Mechanical Engineering."],
  },
  {
    year: "2022 ",
    title: "software engineering intern",
    subTitle: "outreachy",
    paragraphs: [
      "Collaborated with an agile team to develop the API for the Open source project which led to 20% increase in accessibility.",
      "Utilized Cloud technologies like Google Cloud Platform (GCP) to host the platform decreasing latency by 50%.",
      "Implemented bilingual support using external APIs, resulting in 50% improved accessibility to Arabic speaking countries.",
    ],
  },
];
const talksData = [
  {
    year: "August 2024",
    title: "POST conference 2024",
    subLink: "https://posit.co/conference",
    subTitle: "JSquarto: Bridging JavaScript Documentation with Quarto's Power",
    paragraphs: [
      "Delivered a lightning talk on how JSQuarto leverages the power of Quarto to streamline the process of generating and translating JavaScript documentation.",
      "Highlighted strategies for enhancing developer collaboration, improving accessibility, and automating documentation workflows.",
    ],
  },
  {
    year: "may 2023",
    title: "FORCE 11 conference 2023",
    subLink: "https://posit.co/conference",
    subTitle:
      "Documentation, Localisation and Open Infrastructure for Research Equity",
    paragraphs: [
      "Presented insights on the importance accessible documentation and localization in promoting research equity. Discussed how open infrastructure can bridge gaps in knowledge sharing and empower global research communities.",
    ],
  },
];

const blogsData = [
  {
    imageUrl: "/time-zones.png",
    title: "Tutorial : Timezones Project",
    date: "May 1, 2022",
    link: "https://medium.com/@molunorichie/time-zone-project-the-build-upp-process-7273db7d9295",
    paragraph:
      "A few weeks back i completed a project, it was a front-end design of a web page that allows you to check for the time in all time zones. For this project i used, Javascript, HTML, and CSS. ...",
  },
  {
    imageUrl: "/akudam.png",
    title: "Desgn of Movie streaming page",
    date: "April 5, 2022",
    link: "https://medium.com/@molunorichie/create-a-movie-streaming-web-page-html-and-css-5bbd236a4e81",
    paragraph:
      "Detailed documentation of the byildup process of the Movie streaming webpage. For this project i used HTML and CSS for the styling...",
  },
  {
    imageUrl: "/akudam.png",
    title: "Design of Movie streaming page",
    date: "April 5, 2022",
    link: "https://medium.com/@molunorichie/create-a-movie-streaming-web-page-html-and-css-5bbd236a4e81",
    paragraph:
      "Detailed documentation of the byildup process of the Movie streaming webpage. For this project i used HTML and CSS for the styling...",
  },
  {
    imageUrl: "/css_selectors.jpg",
    title: "CSS Selectors",
    date: "March 7, 2022",
    link: "https://dev.to/realrichi3/css-selectors-35b8",
    paragraph:
      "CSS selectors are components of the CSS rule set, they are implemented for selecting the content of your web page you wish to style. CSS selectors choose elements in HTML based on the class, type, attribute, id e.t.c ...",
  },
  {
    imageUrl: "/git_collab.png",
    title: "Git, Github and it's uses for Collabortion",
    date: "February 4, 2022",
    link: "https://medium.com/@molunorichie/git-github-and-its-uses-for-collaboration-to-fully-understand-github-we-must-first-have-35cfa6ed7b18",
    paragraph:
      "To fully understand Github, we must first have proper understanding of Git, starting with Git. Git is an open source version control system, it was created by Linus Torvalds, he’s the same person who created Linux OS. Git is a version control system (VCS)...",
  },
  {
    imageUrl: "/responsive_design.jpg",
    title: "Responsive and adaptive design",
    date: "February 23, 2022",
    link: "https://medium.com/@molunorichie/responsive-and-adaptive-designs-cc26ddbd432a",
    paragraph:
      "Responsive and adaptive design are basically two approaches applied in designing across the diverse range of devices. From the end users perspective, responsive and adaptive technologies probably ...",
  },
  {
    imageUrl: "/middlewares.png",
    title: "Middlewares",
    date: "March 29, 2022",
    link: "https://medium.com/@molunorichie/middlewares-65c80c9d7c28",
    paragraph:
      "A Middleware is a program or software that mediates between applications, programs, tools, databases and networks. It basically functions as a hidden translation layer which enables more efficient communication and data management between applications...",
  },
];

// const paletteColors = [
//   "#4169E1",
//   "#00CC99",
//   "#EA4343",
//   "#D8185C",
//   "#FFB100",
//   "#F05A66",
//   "#66B95C",
//   "#9161E0",
//   "F06292",
// ];
const paletteColors = [
  "blue",
  "green",
  "orange",
  "red",
  "yellow",
  "light-red",
  "lemon",
  "purple",
  "pink",
];
export {
  portfolioData,
  contributionsData,
  languagesData,
  frameworksData,
  experienceData,
  educationData,
  talksData,
  blogsData,
  paletteColors,
};

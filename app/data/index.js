import {
  appIcon,
  appImage1,
  appImage10,
  appImage11,
  appImage12,
  appImage13,
  appImage14,
  appImage15,
  appImage16,
  appImage17,
  appImage2,
  appImage3,
  appImage4,
  appImage5,
  appImage6,
  appImage7,
  appImage8,
  appImage9,
} from "@/public/assets/images";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { SlScreenSmartphone } from "react-icons/sl";
import android from "../../public/assets/images/icons/android.png";
import certificate from "../../public/assets/images/icons/certificate.png";
import web from "../../public/assets/images/icons/web.png";

const person = {
  educations: [
    {
      year: "2011 - 2015",
      institute: "american international university-bangladesh",
      title: "BSc. Computer Science",
    },
    {
      year: "2009 - 2011",
      institute: "govt. adamjeenagar m w college",
      title: "HSC (Science)",
    },
    {
      year: "2007 - 2009",
      institute: "m w high school",
      title: "SSC (Science)",
    },
  ],
  experiences: [
    {
      year: "Jan 2023 - Present",
      institute: "ACI Logistics Ltd.",
      title: "Software Engineer (Full Stack)",
    },
    {
      year: "Dec 2017 - Dec 2022",
      institute: "Storrea Ltd.",
      title: "Software Engineer (Frontend)",
    },
    {
      year: "Feb 2017 - Oct 2017",
      institute: "Ennvisio Digital Private Ltd.",
      title: "Software Engineer (Web Developer)",
    },
    {
      year: "Mar 2015 - Dec 2015",
      institute: "american international university-bangladesh",
      title: "Lab Assistant",
    },
  ],
  skills: {
    languages: [
      { name: "Javascript", label: "90%", width: "w-[90%]", focusable: true },
      { name: "TypeScript", label: "80%", width: "w-[80%]", focusable: true },
      { name: "ES6+", label: "90%", width: "w-[90%]", focusable: true },
      { name: "Python(Basic)", label: "50%", width: "w-[50%]" },
    ],
    js_frameworks: [
      { name: "React Js", label: "85%", width: "w-[85%]", focusable: true },
      {
        name: "React Native",
        label: "70%",
        width: "w-[70%]",
        focusable: false,
      },
      { name: "Next Js", label: "65%", width: "w-[65%]", focusable: true },
      { name: "Knockout Js", label: "90%", width: "w-[90%]", focusable: false },
    ],
    css_libraries: [
      {
        name: "Tailwind CSS",
        percentage: "90%",
        width: "w-[90%]",
        focusable: true,
      },
      {
        name: "Bootstrap",
        percentage: "95%",
        width: "w-[95%]",
        focusable: false,
      },
      {
        name: "Material UI",
        percentage: "80%",
        width: "w-[80%]",
        focusable: true,
      },
      {
        name: "Next UI",
        percentage: "85%",
        width: "w-[85%]",
        focusable: false,
      },
    ],
    backend: [
      {
        name: "Node Js",
        percentage: "75%",
        width: "w-[75%]",
        focusable: false,
      },
      {
        name: "Express Js",
        percentage: "75%",
        width: "w-[75%]",
        focusable: true,
      },
      {
        name: "Firebase",
        percentage: "85%",
        width: "w-[85%]",
        focusable: false,
      },
      {
        name: "Mongoose",
        percentage: "80%",
        width: "w-[80%]",
        focusable: true,
      },
    ],
    platforms: [
      { name: "Vercel", percentage: "95%", width: "w-[95%]", focusable: false },
      {
        name: "Netlify",
        percentage: "95%",
        width: "w-[95%]",
        focusable: false,
      },
      { name: "Render", percentage: "90%", width: "w-[90%]", focusable: false },
      {
        name: "App Center",
        percentage: "90%",
        width: "w-[90%]",
        focusable: false,
      },
    ],
    tools: [
      {
        name: "VS Code",
        percentage: "95%",
        width: "w-[95%]",
        focusable: false,
      },
      { name: "Github", percentage: "95%", width: "w-[95%]", focusable: true },
      { name: "Git", percentage: "95%", width: "w-[95%]", focusable: false },
      {
        name: "Postman",
        percentage: "75%",
        width: "w-[75%]",
        focusable: false,
      },
      { name: "Figma", percentage: "65%", width: "w-[65%]", focusable: true },
      {
        name: "Photoshop",
        percentage: "50%",
        width: "w-[50%]",
        focusable: false,
      },
      {
        name: "Zoho Sprint",
        percentage: "90%",
        width: "w-[90%]",
        focusable: true,
      },
      { name: "Notion", percentage: "90%", width: "w-[90%]", focusable: false },
      {
        name: "Chat GPT",
        percentage: "70%",
        width: "w-[70%]",
        focusable: true,
      },
    ],
    others: [
      {
        name: "RESTful APIs",
        percentage: "95%",
        width: "w-[95%]",
        focusable: true,
      },
      {
        name: "Chart Js",
        percentage: "90%",
        width: "w-[90%]",
        focusable: false,
      },
      {
        name: "Map API",
        percentage: "90%",
        width: "w-[90%]",
        focusable: true,
      },
      { name: "JSON", percentage: "90%", width: "w-[90%]", focusable: false },
      { name: "JWT", percentage: "90%", width: "w-[90%]", focusable: true },
      { name: "JQuery", percentage: "90%", width: "w-[90%]", focusable: false },
      { name: "AJAX", percentage: "90%", width: "w-[90%]", focusable: false },
      { name: "Axios", percentage: "90%", width: "w-[90%]", focusable: false },
      { name: "HTML5", percentage: "95%", width: "w-[95%]", focusable: false },
      { name: "CSS3", percentage: "95%", width: "w-[95%]", focusable: false },
    ],
  },
  certificates: [
    {
      image: certificate,
      date: "June 24, 2022",
      institute: "freecodecamp.org",
      title: "Responsive Web Design",
      link: "https://www.freecodecamp.org/certification/abu-sayed/responsive-web-design",
    },
    {
      image: certificate,
      date: "July 29, 2022",
      institute: "freecodecamp.org",
      title: "Front End Development",
      link: "https://www.freecodecamp.org/certification/abu-sayed/front-end-development-libraries",
    },
    {
      image: certificate,
      date: "July 17, 2022",
      institute: "freecodecamp.org",
      title: "JavaScript Algorithms and Data Structures",
      link: "https://www.freecodecamp.org/certification/abu-sayed/javascript-algorithms-and-data-structures",
    },
  ],
  projects: [
    {
      id: 1,
      icon: appIcon,
      images: [
        {
          small: appImage1,
          original: appImage1,
          large: appImage1,
        },
      ],
      name: "Operations App",
      description:
        "Product receiving from po & dn using app in dc, outlet, dark store with product shelving",
      url: "",
      platform: "android",
      platformIcon: android,
      tag: ["React Native", "Tailwind CSS", "Express Js", "MongoDB"],
    },
    {
      id: 2,
      icon: appIcon,
      images: [
        {
          small: appImage2,
          original: appImage2,
          large: appImage2,
        },
      ],
      name: "Shwapno App Store",
      description:
        "Shwapno app store contains a list of all current available applications that's used by the company",
      url: "https://apps.shwapno.net/",
      platform: "web app",
      platformIcon: web,
      tag: ["React js", "Next js", "Tailwind CSS"],
    },
    {
      id: 3,
      icon: appIcon,
      images: [
        {
          small: appImage3,
          original: appImage3,
          large: appImage3,
        },
      ],
      name: "B2B Admin Dashboard",
      description:
        "It’s a combination of B2B SR order and order delivery applications. It has many features that help admins or higher authorities monitor B2B SR orders and order delivery.",
      url: "https://b2badmin2023.netlify.app/",
      platform: "web app",
      platformIcon: web,
      tag: ["React js", "Tailwind CSS", "Express Js", "MongoDB"],
    },
    {
      id: 4,
      icon: appIcon,
      images: [
        {
          small: appImage4,
          original: appImage4,
          large: appImage4,
        },
      ],
      name: "Outlet Attendance System",
      description:
        "A web and mobile application that takes the attendance of the outlet employees. Admin can monitor the attendance of the outlet employees",
      url: "https://attendx.netlify.app/",
      platform: "web app",
      platformIcon: web,
      tag: ["React js", "Tailwind CSS", "Express Js", "MongoDB"],
    },
    {
      id: 5,
      icon: appIcon,
      images: [
        {
          small: appImage5,
          original: appImage5,
          large: appImage5,
        },
      ],
      name: "B2B SR Order App",
      description:
        "A platform that quickly onboard and take orders from new shops and generates daily and weekly reports of sales that measure SR sales performance. Also a handful of sales tracking systems for SR and higher authority",
      url: "",
      platform: "android",
      platformIcon: android,
      tag: ["React Native", "Tailwind CSS", "Express Js", "MongoDB"],
    },
    {
      id: 6,
      icon: appIcon,
      images: [
        {
          small: appImage6,
          original: appImage6,
          large: appImage6,
        },
      ],
      name: "AttendX",
      description:
        "It's the basically the android version of the outlet attendance system. All app features are same but the platform is different",
      url: "",
      platform: "android",
      platformIcon: android,
      tag: ["React js", "Tailwind CSS", "Express Js", "MongoDB"],
    },
    {
      id: 7,
      icon: appIcon,
      images: [
        {
          small: appImage7,
          original: appImage7,
          large: appImage7,
        },
      ],
      name: "B2B Delivery App",
      description:
        "We just simplified the process with some easy steps through the app. Now delivery men easily deliver orders through the app. Separate order list by zone. Quick and easy order list edit option for the delivery men. Payment receipt history system",
      url: "",
      platform: "android",
      platformIcon: android,
      tag: ["React js", "Tailwind CSS", "Express Js", "MongoDB"],
    },
    {
      id: 8,
      icon: appIcon,
      images: [
        {
          small: appImage8,
          original: appImage8,
          large: appImage8,
        },
      ],
      name: "B2B SR Order",
      description:
        "It's the basically the web version of the B2B SR Order. All app features are same but the platform is different",
      url: "https://b2b-web.netlify.app/",
      platform: "web",
      platformIcon: web,
      tag: ["React js", "Tailwind CSS", "Express Js", "MongoDB"],
    },
    {
      id: 9,
      icon: appIcon,
      images: [
        {
          small: appImage9,
          original: appImage9,
          large: appImage9,
        },
      ],
      name: "One step uk",
      description: "A clothing eCommerce website that business at UK",
      url: "https://www.nextdoorcollection.com/",
      platform: "web",
      platformIcon: web,
      tag: [
        "JavaScript",
        "JQuery",
        "knockout js",
        "Bootstrap",
        "HTML5",
        "CSS",
        "eCommerce",
      ],
    },
    {
      id: 10,
      icon: appIcon,
      images: [
        {
          small: appImage10,
          original: appImage10,
          large: appImage10,
        },
      ],
      name: "The Vape Cafe",
      description:
        "Established in 2015, The Vape Cafe stands as an industry leader in Bangladesh's vaping community of Bangladesh",
      url: "https://www.thevapecafe.com.bd/",
      platform: "web",
      platformIcon: web,
      tag: [
        "JavaScript",
        "JQuery",
        "knockout js",
        "Bootstrap",
        "HTML5",
        "CSS",
        "eCommerce",
      ],
    },
    {
      id: 11,
      icon: appIcon,
      images: [
        {
          small: appImage11,
          original: appImage11,
          large: appImage11,
        },
      ],
      name: "Gadget Monkey BD",
      description:
        "Gadget Monkey BD is currently one of the most trusted online and offline Mobile and Gadget stores in our country. Here you will find all the authentic devices and accessories at affordable prices. We have been providing the best services all over the country since 2016.",
      url: "https://www.gadgetmonkeybd.com/",
      platform: "web",
      platformIcon: web,
      tag: ["React Js", "Next Js", "Bootstrap", "eCommerce"],
    },
    {
      id: 12,
      icon: appIcon,
      images: [
        {
          small: appImage12,
          original: appImage12,
          large: appImage12,
        },
      ],
      name: "Apple Gadgets",
      description:
        "Apple Gadgets is a one-stop tech shop that offers tech enthusiasts authentic smartphones, gadgets, and accessories from renowned brands so they can have a first-hand experience with the real thing",
      url: "https://www.applegadgetsbd.com/",
      platform: "web",
      platformIcon: web,
      tag: ["React Js", "Next Js", "Tailwind CSS", "eCommerce"],
    },
    {
      id: 13,
      icon: appIcon,
      images: [
        {
          small: appImage13,
          original: appImage13,
          large: appImage13,
        },
      ],
      name: "Gadgets Store",
      description: "Gadgets eCommerce demo theme for storrea",
      url: "https://special.storrea.com/",
      platform: "web",
      platformIcon: web,
      tag: [
        "JavaScript",
        "JQuery",
        "knockout js",
        "Bootstrap",
        "HTML5",
        "CSS",
        "eCommerce",
      ],
    },
    {
      id: 14,
      icon: appIcon,
      images: [
        {
          small: appImage14,
          original: appImage14,
          large: appImage14,
        },
      ],
      name: "Grocery Store",
      description: "Grocery eCommerce demo theme for storrea",
      url: "https://grocery.storrea.com/",
      platform: "web",
      platformIcon: web,
      tag: [
        "JavaScript",
        "JQuery",
        "knockout js",
        "Bootstrap",
        "HTML5",
        "CSS",
        "eCommerce",
      ],
    },
    {
      id: 15,
      icon: appIcon,
      images: [
        {
          small: appImage15,
          original: appImage15,
          large: appImage15,
        },
      ],
      name: "Storrea Ltd.",
      description:
        "Storrea Limited is a technology company that enables multi-channel commerce for businesses",
      url: "https://www.storrea.com/",
      platform: "web",
      platformIcon: web,
      tag: [
        "Ruby on Rails",
        "JavaScript",
        "JQuery",
        "Bootstrap",
        "HTML5",
        "CSS",
        "company",
      ],
    },
    {
      id: 16,
      icon: appIcon,
      images: [
        {
          small: appImage16,
          original: appImage16,
          large: appImage16,
        },
      ],
      name: "Vape Circle BD",
      description:
        "VAPE CIRCLE is an online & retail chain Store specializing in the selling of Vaporizers. You are a beginner or pro, our friendly and knowledgeable staff will answer all your questions and make sure your vaping experience is right for you.",
      url: "https://vapecirclebd.storrea.com/",
      platform: "web",
      platformIcon: web,
      tag: [
        "JavaScript",
        "JQuery",
        "knockout js",
        "Bootstrap",
        "HTML5",
        "CSS",
        "eCommerce",
      ],
    },
    {
      id: 17,
      icon: appIcon,
      images: [
        {
          small: appImage17,
          original: appImage17,
          large: appImage17,
        },
      ],
      name: "Kraos Bangladesh",
      description:
        "KRAOS Bangladesh started its journey back in 2016 through the inception of our dream project Kraftz, with the aim of creating in-demand products that are unique, yet not readily available in our country; be it boardgames, collectibles, or bookmarks. Kraftz was followed by TOP, a brand specialized in customized packaging solution and brand development.",
      url: "https://www.kraosbangladesh.com/",
      platform: "web",
      platformIcon: web,
      tag: [
        "JavaScript",
        "JQuery",
        "knockout js",
        "Bootstrap",
        "HTML5",
        "CSS",
        "eCommerce",
      ],
    },
  ],
  languages: [
    {
      name: "Bengali (Native)",
      label: "",
      percentage: "100%",
      width: "w-[100%]",
    },
    { name: "English", label: "B2", percentage: "70%", width: "w-[70%]" },
    { name: "German", label: "A1", percentage: "17%", width: "w-[17%]" },
  ],
  social_media: [
    {
      icon: <FaFacebookSquare className="w-6 h-6" />,
      name: "facebook",
      link: "https://www.facebook.com/sayeed2011",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: "linkedin",
      link: "https://www.linkedin.com/in/sayed2017",
    },
    {
      icon: <FaGithubSquare className="w-6 h-6" />,
      name: "github",
      link: "https://github.com/ovi100",
    },
  ],
  contact: [
    {
      icon: <SlScreenSmartphone className="w-10 h-10 text-blue-400" />,
      name: "phone",
      text: "(+880) 1675600270",
    },
    {
      icon: <FiMapPin className="w-10 h-10 text-blue-400" />,
      name: "address",
      text: "Dhaka, Bangladesh",
    },
    {
      icon: <HiOutlineMail className="w-10 h-10 text-blue-400" />,
      name: "email",
      text: "sayeed.abu02@gmail.com",
    },
  ],
};

person.skills.all = [
  ...person.skills.languages,
  ...person.skills.js_frameworks,
  ...person.skills.css_libraries,
  ...person.skills.backend,
  ...person.skills.platforms,
  ...person.skills.others,
  ...person.skills.tools,
];

export { person };

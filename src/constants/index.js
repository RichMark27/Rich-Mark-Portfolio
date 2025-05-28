import { uiUx, responsiveDesign, webDevelopment } from "../assets/index";
import {
  figmaIcon,
  htmlIcon,
  cssIcon,
  javascriptIcon,
  reactIcon,
  tailwindIcon,
  nodejsIcon,
  mongodbIcon,
  gitIcon,
  githubIcon,
} from "../assets/index";
import { viberNumberIcon, locationIcon, gmailIcon } from "../assets/index";
import { balagtasyunaryoBg, balagtasyunaryoLogo } from "../assets/index";
import TodoBg from "../assets/projects/ToDo/Todo.png";

// navigation link
export const navList = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projecs" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

//can provide
export const CanProvideList = [
  {
    img_URL: uiUx,
    title: "Modern Web Design",
    textBody:
      "I craft modern, visually appealing web designs that not only reflect your brand's identity but also enhance user experience, ensuring every page is aesthetically aligned with your goals and values.",
  },
  {
    img_URL: responsiveDesign,
    title: "Responsive Layouts",
    textBody:
      "I create responsive, mobile-first designs that ensure your website delivers a flawless experience across all devices-whether it’s a desktop, tablet, or smartphone-providing consistent usability and accessibility for all users.",
  },
  {
    img_URL: webDevelopment,
    title: "Web Development",
    textBody:
      "I bring designs to life with clean, efficient, and scalable code, using the latest technologies and frameworks. I ensure your website runs smoothly, performs well, and is easy to maintain, while providing features that meet your business objectives.",
  },
];

//experiences
export const experienceList = [
  {
    date: "August 2024 - Present",
    workPosition: "Freelance Web Developer",
    companyName: "",
    textBody:
      "Designing a responsive UI/UX  for Clients, Developing the website with my front-end skills, Applying the software quality assurance for client satisfaction",
  },
  {
    date: "June 2023 - May 2024",
    workPosition: "Business Owner",
    companyName: "Arcie's Collection",
    textBody:
      "Managing the daily operations of the business, Putting up quality products and services for the people, Managing daily sales and expenses of the business Analyzing the data of the sales",
  },
  {
    date: "Jan 2023 - Jun 2023",
    workPosition: "Software Quality Assurance Engineer",
    companyName: "Logicore Innovative Solutions",
    textBody:
      "Checking the quality of different mobile applications, Assuring the quality of different systems in the software, Writing reports for the bug of the systems Ensuring the standards of quality of the mobile applications",
  },
  {
    date: "Jun 2022 - Aug 2022",
    workPosition: "Web Developer (Internship)",
    companyName: "MGHS",
    textBody:
      "Developing websites for businesses, Collaborating with the team to make a quality website for a certain business, Providing assurance in the standard of the different businesses, Collecting information on the new trends in producing websites, Designing websites supporting the standards of the business owners",
  },
];

//skills set
export const skillList = [
  { img_URL: figmaIcon, label: "Figma" },
  { img_URL: htmlIcon, label: "HTML" },
  { img_URL: cssIcon, label: "CSS" },
  { img_URL: javascriptIcon, label: "JavaScript" },
  { img_URL: reactIcon, label: "React.JS" },
  { img_URL: tailwindIcon, label: "Tailwind" },
  { img_URL: nodejsIcon, label: "node.JS" },
  { img_URL: mongodbIcon, label: "Mongodb" },
  { img_URL: gitIcon, label: "Git" },
  { img_URL: githubIcon, label: "Github" },
];

//conact
export const contactList = [
  { img_URL: viberNumberIcon, label: "+63 9XX XXX XXXX" },
  { img_URL: locationIcon, label: "Pampanga / Las Piñas" },
  { img_URL: gmailIcon, label: "my@gamil.com" },
];

//project
export const projectList = [
  {
    toVisit: "Website",
    bg_URL: balagtasyunaryoBg,
    img_URL: balagtasyunaryoLogo,
    title: "Balagtasyunaryo",
    textBody:
      "Balagtasyunaryo is an educational website in Filipino which aims to cater the teachers and students in discussing the Florante at Laura. The website contains words and summary that can be seen in the story which helps the learners to be more interactive during class discussion.",
    projectLink: "https://balagtasyunaryo-v1.onrender.com/",
    tools: ["UX/UI Design", "React", "Tailwind"],
  },
  {
    toVisit: "Github",
    bg_URL: "",
    img_URL: TodoBg,
    title: "Todo with Drag & Drop",
    textBody:
      "A drag-and-drop todo website is a digital to-do list application where users can reorder and organize tasks using the mouse, moving items from one place to another with a simple drag and release action.",
    projectLink: "https://github.com/RichMark27/ToDo-drag-and-drop",
    tools: ["UI Design", "React", "Tailwind", "JSON-server"],
  },
];

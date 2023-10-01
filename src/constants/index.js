import { alma, travellive, softfusion } from "../images";

const navLinks = [
  {
    id: "about",
    title: "About",
    linkTo: "#about",
  },
  {
    id: "proyects",
    title: "Proyects",
    linkTo: "#proyects",
  },
  {
    id: "contact",  
    title: "Contact",
    linkTo: "#contact",
  },
];

const projectsData = [
  {
    id: 1,
    title: "Videogame's Page",
    description:
      "Static web page of videogames with free games and some recommendations from my experience.",
    image: alma,
    tags: ["HTML", "CSS", "JavaScript"],
    pageUrl: "https://alma-videogame.netlify.app/",
  },
  {
    id: 2,
    title: "Travel & Tour Website",
    description:
      "Official Tourism website designed to help travelers explore exciting destinations around the world.",
    image: travellive,
    tags: ["React", "Tailwindcss"],
    pageUrl: "https://travelliveofficial.netlify.app/",
  },
  {
    id: 3,
    title: "SoftFusion Techonologies S.A.",
    description:
      "Official website of our company dedicated to the creation of web pages and software development.",
    image: softfusion,
    tags: ["React", "Tailwindcss", "ThreeJs"],
    pageUrl: "https://softfusion.netlify.app/",
  },
];

const achievementsList = [
  {
    metric: "Hours",
    value: "10000",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Coffes",
    value: "500",
  },
  {
    metric: "Programming Languages",
    value: "7",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "2",
  },
]




export {
  navLinks,
  projectsData,
  achievementsList
};

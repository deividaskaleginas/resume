import htmlIcon from "../assets/svg/htmlIcon.svg";
import cssIcon from "../assets/svg/cssIcon.svg";
import jsIcon from "../assets/svg/jsIcon.svg";
import reactIcon from "../assets/svg/reactIcon.svg";
import tsIcon from "../assets/svg/tsIcon.svg";
import figmaIcon from "../assets/svg/figmaIcon.svg";
import firebaseIcon from "../assets/svg/firebaseIcon.svg";
import gitHubIcon from "../assets/svg/gitHubIcon.svg";
import styledComponentsIcon from "../assets/svg/styledComponentsIcon.svg";
import sassIcon from "../assets/svg/sassIcon.svg";
import reduxIcon from "../assets/svg/redux.svg";
import restAPIIcon from "../assets/svg/restAPI.svg";
import nextIcon from "../assets/svg/nextjs.svg";
import mySqlIcon from "../assets/svg/mysql.svg";
import nodeJSIcon from "../assets/svg/nodejs.svg";

interface TechStackType {
  logo: string;
  text: string;
}

interface PackageType {
  logo: string;
  text: string;
}

export const PROGRAMING_LANGUAGES: TechStackType[] = [
  {
    logo: htmlIcon,
    text: "HTML",
  },
  {
    logo: cssIcon,
    text: "CSS",
  },
  {
    logo: jsIcon,
    text: "JavaScript",
  },
  {
    logo: reactIcon,
    text: "React JS",
  },
  {
    logo: tsIcon,
    text: "TypeScript",
  },
  {
    logo: nodeJSIcon,
    text: "Node JS",
  },
  {
    logo: nextIcon,
    text: "Next JS",
  },
  {
    logo: mySqlIcon,
    text: "MySQL",
  },
];

export const PACKAGES: PackageType[] = [
  { logo: figmaIcon, text: "Figma" },
  { logo: firebaseIcon, text: "Firebase" },
  { logo: gitHubIcon, text: "GitHub" },
  { logo: styledComponentsIcon, text: "Styled-components" },
  {
    logo: sassIcon,
    text: "Sass",
  },
  {
    logo: reduxIcon,
    text: "Redux",
  },
  {
    logo: restAPIIcon,
    text: "Rest API",
  },
];

// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";
// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"
import linkedinIcon from "@iconify/icons-fa-brands/linkedin";
// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import MovieDatabaseFetcherImage from "./images/moviemetadatafetcher.png";
import AgeCalculatorImage from "./images/age-calculator.png";
import JavaScriptFancyCalculatorImage from "./images/js-fancy-calculator.png";
import RockPaperScissorsImage from "./images/rock-paper-scissors.png";
import BattleshipGameImage from "./images/battleshipjsproject.png";
// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "spragginsdesigns";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon={linkedinIcon} />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Hello, I'm Austin Spraggins, a passionate and dedicated web developer and security analyst based in California. At 33, I find joy in the dynamic intersection of programming and cybersecurity. As a devoted husband and father of two amazing children aged 6 and 11, my commitment to excellence extends beyond my professional endeavors.I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  // Programming Languages
  {
    id: 1,
    skill: <Icon icon="logos:html-5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="devicon:css3-wordmark" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="skill-icons:javascript" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 12,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 16,
    skill: (
      <Icon icon="logos:typescript-icon" className="display-4" color="gray" />
    ),
    name: "TypeScript",
  },

  // Libraries and Frameworks
  {
    id: 4,
    skill: <Icon icon="devicon:bootstrap-wordmark" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="devicon:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="skill-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="logos:redux" className="display-4" />,
    name: "Redux",
  },

  {
    id: 18,
    skill: <Icon icon="logos:nextjs-icon" className="display-4" />,
    name: "Next.js",
  },
  {
    id: 19,
    skill: <Icon icon="logos:tailwindcss-icon" className="display-4" />,
    name: "Tailwind CSS",
  },

  // Tools
  {
    id: 8,
    skill: <Icon icon="devicon:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="icon-park:github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 14,
    skill: (
      <Icon icon="vscode-icons:file-type-vscode-test" className="display-4" />
    ),
    name: "Debugging and Testing",
  },

  // Operating Systems
  {
    id: 10,
    skill: <Icon icon="devicon:windows11" className="display-4" />,
    name: "Windows",
  },
  {
    id: 11,
    skill: <Icon icon="logos:linux-tux" className="display-4" />,
    name: "Linux",
  },

  {
    id: 17,
    skill: <Icon icon="simple-icons:kalilinux" className="display-4" />,
    name: "Kali Linux",
  },

  // Other Skills
  {
    id: 13,
    skill: <Icon icon="devicon:photoshop" className="display-4" />,
    name: "Adobe PhotoShop",
  },
  {
    id: 15,
    skill: <Icon icon="logos:youtube-icon" className="display-4" />,
    name: "YouTube Content Creator",
  },
];

// Resume link
export const resume =
  "https://drive.google.com/file/d/1MniYIMCKr6RST3gt8NQ3Bgghkts4nhX5/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names
*/
export const filteredProjects = [
  "movie-database-fetcher",
  "Age-Calculator",
  "JavaScript-Fancy-Calculator",
  "rock-paper-scissors",
  "Battleship-Game-JavaScript-IS30A-Final",
  // Add more repository names here...
];

export const projectCardImages = [
  {
    name: "movie-database-fetcher",
    image: MovieDatabaseFetcherImage,
  },
  {
    name: "Age-Calculator",
    image: AgeCalculatorImage, 
  },
  {
    name: "JavaScript-Fancy-Calculator",
    image: JavaScriptFancyCalculatorImage, 
  {
    name: "rock-paper-scissors",
    image: RockPaperScissorsImage, 
  },
  {
    name: "Battleship-Game-JavaScript-IS30A-Final",
    image: BattleshipGameImage, 
  },
];

/* Contact Info
 ************************************************************** 
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xleqrrnk";

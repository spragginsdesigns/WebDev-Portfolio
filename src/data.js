// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

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
export const Blog = <Icon icon="ph:link-bold" />;

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
    id: 8,
    skill: <Icon icon="devicon:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="icon-park:github" className="display-4" />,
    name: "GitHub",
  },

  // Skill for Windows
  {
    id: 10,
    skill: <Icon icon="icon-park:windows" className="display-4" />,
    name: "Windows",
  },

  // Skill for Linux
  {
    id: 11,
    skill: <Icon icon="logos:linux-tux" className="display-4" />,
    name: "Linux",
  },
  {
    id: 12,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
  },

  // Skill For Adobe PhotoShop
  {
    id: 13,
    skill: <Icon icon="devicon:photoshop" className="display-4" />,
    name: "Adobe PhotoShop",
  },

  // Skill for Debugging and Testing
  {
    id: 14,
    skill: <Icon icon="solar:bug-bold-duotone" className="display-4" />,
    name: "Debugging and Testing",
  },

  // Skill for YouTube Content Creator
  {
    id: 15,
    skill: <Icon icon="logos:youtube-icon" className="display-4" />,
    name: "YouTube Content Creator",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1Zs80xA6bpSxLpFi6PIYoAKyXceoi0FZJ/view?usp=sharing";


/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xleqrrnk";

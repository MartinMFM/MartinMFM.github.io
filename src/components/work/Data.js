import { storeMFM1, storeMFM2, storeMFM3 } from "../../assets/storeMFM";
import {
  moodly1,
  moodly2,
  moodly3,
  moodly4,
  moodly5,
  moodly6,
  moodly7,
} from "../../assets/moodly";
import {
  cookly1,
  cookly2,
  cookly3,
  cookly4,
  cookly5,
  cookly6,
} from "../../assets/Cookly";

export const projectsData = [
  {
    id: 1,
    mainImage: storeMFM1,
    title: "projects.storeMFM.title",
    category: "web",
    galleryImages: [storeMFM1, storeMFM2, storeMFM3],
    technologies: [
      "Next.js",
      "TypeScript",
      "Appwrite",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    id: 2,
    mainImage: moodly1,
    title: "projects.moodly.title",
    category: "app",
    galleryImages: [moodly2, moodly3, moodly4, moodly5, moodly6, moodly7],
    technologies: [
      "React Native",
      "TypeScript",
      "Supabase",
      "Node.js",
      "Gemini API",
    ],
  },
  {
    id: 3,
    mainImage: cookly1,
    title: "projects.cookly.title",
    category: "web",
    galleryImages: [cookly1, cookly2, cookly3, cookly4, cookly5, cookly6],
    technologies: ["Vue.js", "JavaScript", "Node.js", "Express.js", "Firebase"],
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
  {
    name: "design",
  },
];

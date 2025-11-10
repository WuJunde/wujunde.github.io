import { ExperienceCardProps, ProjectCardProps, BlogCardProps } from "./types";
import { getAllBlogPosts } from "./mdx";

export const experienceData: ExperienceCardProps[] = [
  {
    position: "PhD Student",
    company: "University of Oxford",
    dates: "Present",
    description: [
      "Conducting research in artificial intelligence and machine learning",
    ],
    link: "https://www.ox.ac.uk",
  },
  {
    position: "Senior Scientist",
    company: "Baidu",
    dates: "Previous",
    description: [
      "Led AI research and development initiatives",
    ],
    link: "https://www.baidu.com",
  },
  {
    position: "Tech Leader",
    company: "SenseTime",
    dates: "Previous",
    description: [
      "Led technical teams in AI and computer vision projects",
    ],
    link: "https://www.sensetime.com",
  },
  {
    position: "Co-founder",
    company: "Panoptes",
    dates: "Previous (Acquired)",
    description: [
      "Co-founded and led startup to successful acquisition",
    ],
    link: "#",
  },
];


export const projectData: ProjectCardProps[] = [
  {
    title: "AI Research",
    date: "Ongoing",
    description: "Research in artificial intelligence and machine learning at Oxford",
    link: "https://scholar.google.com/citations?user=FZSKG-AAAAAJ&hl=en",
  },
  {
    title: "Publications",
    date: "Various",
    description: "Academic publications in AI and machine learning",
    link: "https://scholar.google.com/citations?user=FZSKG-AAAAAJ&hl=en",
  },
];

export const blogData: BlogCardProps[] = getAllBlogPosts();

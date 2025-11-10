import ExperienceCard from "@/components/ExperienceCard";
import FancyLink from "@/components/FancyLink";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { experienceData, projectData, blogData } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center font-sans px-8">
      <div className="z-50 flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-md  md:w-3/4 lg:w-1/2">
        <section className="flex flex-col gap-8">
          <h2 className="font-bold">Hi, I&apos;m Junde Wu.</h2>
          <p>
            I&apos;m an AI Researcher currently pursuing my PhD at Oxford. Previously, I served as a Senior Scientist at Baidu
            and a Tech Leader at SenseTime, and co-founded Panoptes (acquired).
          </p>
          <p>
            My research focuses on artificial intelligence and machine learning. Here I share what I read, write, and compute.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <FancyLink
              href="https://github.com/WuJunde"
              className="text-accent-foreground/80"
            >
              GitHub
            </FancyLink>
            <FancyLink
              href="https://scholar.google.com/citations?user=FZSKG-AAAAAJ&hl=en"
              className="text-accent-foreground/80"
            >
              Google Scholar
            </FancyLink>
            <FancyLink
              href="mailto:jundewu@ieee.org"
              className="text-accent-foreground/80"
            >
              Email
            </FancyLink>
          </div>
        </section>

        <section className="flex w-full flex-col gap-8">
          <h1 className="text-xl font-bold text-accent-foreground">Work</h1>
          <div className="flex w-full flex-col gap-2">
            {experienceData.map((item, index) => (
              <ExperienceCard key={index} {...item} />
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-8">
          <h1 className="text-xl font-bold text-accent-foreground">Projects</h1>
          <div className="flex w-full flex-col gap-2">
            {projectData.map((item, index) => (
              <ProjectCard key={index} {...item} />
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-8">
          <h1 className="text-xl font-bold text-accent-foreground">Blog</h1>
          <div className="flex w-full flex-col gap-2">
            {blogData.map((item, index) => (
              <BlogCard key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

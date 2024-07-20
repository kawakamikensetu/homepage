import Marquee from "@/components/magicui/marquee";
import { PostCard } from "./components/post-card";
import { Metadata } from "next";
import { getProjects } from "@/lib/newt";

export const metadata: Metadata = {
  title: "奈良 川上建設",
  description: "実績",
};

export default async function Projects() {
  const projects = await getProjects();

  const firstRow = projects.slice(0, projects.length / 2);
  const secondRow = projects.slice(projects.length / 2);

  return (
    <div className="mt-24 px-4 md:px-24 mb-16">
      <h2 className="text-3xl font-bold mb-4">プロジェクトギャラリー</h2>
      <div className="relative flex h-5/6 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-4">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 md:w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 md:w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}

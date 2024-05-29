import AboutBlock from "@/components/AboutBlock";
import MyExpertArea from "@/components/MyExpertArea";
import RecentBlog from "@/components/RecentBlog";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <div className="mt-8 w-[90%] max-w-7xl mx-auto flex flex-col xl:grid grid-cols-3 grid-rows-3 gap-6">
      <AboutBlock />
      <MyExpertArea />
      <RecentProjects />
      <RecentBlog />
      <div className="bg-white rounded-xl shadow-[0_1px_5px_0px] shadow-zinc-300 min-h-72 p-5 col-span-2"></div>
      <div className="bg-white rounded-xl shadow-[0_1px_5px_0px] shadow-zinc-300 min-h-72 p-5"></div>
    </div>
  );
}

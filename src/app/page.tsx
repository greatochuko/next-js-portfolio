import AboutBlock from "@/components/AboutBlock";
import ContactBlock from "@/components/ContactBlock";
import MyExpertArea from "@/components/MyExpertArea";
import RecentBlog from "@/components/RecentBlog";
import RecentProjects from "@/components/RecentProjects";
import ServicesBlock from "@/components/ServicesBlock";

export default function Home() {
  return (
    <div className="mt-8 w-[90%] max-w-4xl lg:max-w-7xl mx-auto flex flex-col lg:grid grid-cols-3 grid-rows-3 gap-6">
      <AboutBlock />
      <MyExpertArea />
      <RecentProjects />
      <RecentBlog />
      <ServicesBlock />
      <ContactBlock />
    </div>
  );
}

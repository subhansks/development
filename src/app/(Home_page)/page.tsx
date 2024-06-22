import ScrollSlider from "@/components/homepage/custom_slider";
import HomePageContent from "@/components/homepage/homePage";
import Responsive_profile_name from "@/components/homepage/responsive_profile_name";
import Sidebar from "@/components/sidebar/sidebar";



export default function Home() {
  return (
    <main className="z-0 px-4  2xl:px-x-pad md:px-8 w-full mt-28 3xl:w-[1900px] 3xl:m-auto 3xl:mt-28">
      <Responsive_profile_name />

      <ScrollSlider />

      <div className=" grid grid-cols-1  md:gap-5  md:grid-cols-7   w-full mt-5">
        <HomePageContent />

        <Sidebar />
      </div>
    </main>
  );
}

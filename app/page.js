
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import RecentPostsSection from "./components/RecentPostsSection";
import ReelsSection from "./components/ReelsSection";
import Subscribe from "./components/Subscribe";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Featured />
      <RecentPostsSection />
      <ReelsSection />
      <Subscribe />
    </main>
  );
}

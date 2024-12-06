
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import RecentPostsSection from "./components/RecentPostsSection";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Featured />
      <RecentPostsSection />
    </main>
  );
}

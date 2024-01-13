import Welcome from "@/components/HomePage/Welcome/Welcome";
import Intro from "@/components/HomePage/Intro/Intro";
import TodayBooking from "@/components/HomePage/TodayBooking/TodayBooking";
import Deals from "@/components/HomePage/Deals/Deals";
import Banner from "@/components/Banner/Banner";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <Intro />
      <TodayBooking />
      <Welcome />
      <Deals />
    </main>
  );
}

import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedMovies from "../components/FeaturedMovies";
import OurServices from "../components/OurServices";
import PricingSection from "../components/PricingSection";

export default function Home() {
  const movies = useLoaderData();

  return (
    <>
      <Banner />
      <FeaturedMovies movies={movies} />
      <OurServices />
      <PricingSection />
    </>
  );
}

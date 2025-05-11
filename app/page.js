import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HotOffer from "./components/HotOffer";
import MedicalProducts from "./components/MedicalProducts";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import Offers from "./components/Offers";
import PopularProducts from "./components/PopularProducts";
import TopProducts from "./components/TopProducts";
import UpcomingProducts from "./components/UpcomingProducts";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Offers />
      <NewProducts />
      <PopularProducts />
      <TopProducts />
      <MedicalProducts />
      <UpcomingProducts />
      <HotOffer />
      <Footer />
    </>
  );
}

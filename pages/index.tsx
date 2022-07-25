import { HeaderSimple as Header } from '../components/Header';
import { HeroContentLeft as Hero } from '../components/Hero';
import { navLinks as Links } from '../data/_links';
import { SponsorCarousel as Carousel } from '../components/SponsorCarousel';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
    return (
    <>
      <Header links={Links} />
      <Hero />
      <Carousel />
      {/*<ColorSchemeToggle />*/}
    </>
  );
}

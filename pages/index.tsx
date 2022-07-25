import { Title } from '@mantine/core';
import { HeaderSimple as Header } from '../components/Header';
import { HeroContentLeft as Hero } from '../components/Hero';
import { navLinks as HeaderLinks, footerLinks as FooterLinks } from '../data/_links';
import { SponsorCarousel as Carousel } from '../components/SponsorCarousel';
import { FooterLinks as Footer } from '../components/Footer';
// import { Section } from '../components/Section';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
    // @ts-ignore
  return (
    <>
      <Header links={HeaderLinks} />
      <Hero />
      {/*TODO: Create section component for each, encapsulate Title + Carousel into Section*/}
      <Title order={3} pt="2rem" pb="2rem" style={{ textAlign: 'center' }}>Special thanks to our Partners: </Title>
      <Carousel />
      <Footer data={[]} />
      {/*<ColorSchemeToggle />*/}
    </>
  );
}

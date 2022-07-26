import { Title } from '@mantine/core';
import { HeaderSimple as Header } from '../components/Header';
import { HeroContentLeft as Hero } from '../components/Hero';
import { navLinks as HeaderLinks, footerLinks as FooterLinks } from '../data/_links';
import { FeaturesGrid as Sponsors } from '../components/Sponsors';
import { FooterLinks as Footer } from '../components/Footer';
// import { Section } from '../components/Section';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
    // @ts-ignore
  return (
    <>
      <Header links={HeaderLinks} />
      <Hero />
      <Sponsors />
      <Footer data={[]} />
      {/*<ColorSchemeToggle />*/}
    </>
  );
}

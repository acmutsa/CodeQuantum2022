import { HeaderSimple as Header } from '../components/Header';
import { HeroContentLeft as Hero } from '../components/Hero';
import { navLinks as HeaderLinks } from '../data/_data';
import { FeaturesGrid as Sponsors } from '../components/Sponsors';
import { FooterLinks as Footer } from '../components/Footer';

export default function HomePage() {
    return (
        <>
          <Header links={HeaderLinks} />
          <Hero />
          <Sponsors />
          <Footer data={[]} />
        </>
    );
}

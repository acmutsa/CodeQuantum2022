import { HeaderSimple as Header } from '../components/Header';
import { HeroContentLeft as Hero } from '../components/Hero';
import { navLinks as HeaderLinks } from '../data/_data';
import { FeaturesGrid as Sponsors } from '../components/Sponsors';
import { Section } from '../components/Section';
import { FooterLinks as Footer } from '../components/Footer';
import { useStyles } from '../css/style';
import { Container } from '@mantine/core';

export default function HomePage() {
    const { classes } = useStyles();

    return (
        <Container className={classes.page}>
            <Header links={HeaderLinks} />
            <Hero />
            <Section title={HeaderLinks[1].label} href={HeaderLinks[1].link}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                {/* eslint-disable-next-line max-len */}
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                {/* eslint-disable-next-line max-len */}
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                {/* eslint-disable-next-line max-len */}
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </Section>
            <Section title={HeaderLinks[2].label} href={HeaderLinks[2].link}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                {/* eslint-disable-next-line max-len */}
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                {/* eslint-disable-next-line max-len */}
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                {/* eslint-disable-next-line max-len */}
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </Section>
            <Section title={HeaderLinks[3].label} href={HeaderLinks[3].link}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                {/* eslint-disable-next-line max-len */}
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                {/* eslint-disable-next-line max-len */}
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                {/* eslint-disable-next-line max-len */}
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </Section>
            <Section title={HeaderLinks[4].label} href={HeaderLinks[4].link}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                {/* eslint-disable-next-line max-len */}
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                {/* eslint-disable-next-line max-len */}
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                {/* eslint-disable-next-line max-len */}
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </Section>
            <Sponsors />
            <Footer data={[]} />
        </Container>
    );
}

import { useState } from 'react';
import { navLinks as HeaderLinks } from '../data/_data';
import { Section } from '../components/Section';
import { useStyles } from '../css/style';
import {
    AppShell,
    Header,
    Container,
    Image,
    MediaQuery,
    Burger,
    Group,
    Modal
} from '@mantine/core';
import {
    Hero,
    Sponsors,
    Footer,
    CQHeader,
    CQModal
} from '../components';
import Link from 'next/link';

export default function HomePage() {
    const { classes, cx } = useStyles();
    const [opened, setOpened] = useState(false);
    const [active, setActive] = useState(HeaderLinks[0].link);

    const items = HeaderLinks.map((link) => (
        <Link
            key={link.label} 
            href={{
            pathname: "/",
            hash: `${link.link}`
        }}>
            <a className={cx(classes.navLink, { [classes.navLinkActive]: active === link.link })}>{link.label}</a>
        </Link>
    ));

    const modalItems = HeaderLinks.map((link) => (
        <Link 
            key={link.label}
            href={{
            pathname: "/",
            hash: `${link.link}`
        }}>
            <a className={cx(classes.modalLink, { [classes.navLinkActive]: active === link.link })}>{link.label}</a>
        </Link>
    ));

    return (
        <AppShell
            fixed
            navbarOffsetBreakpoint="sm"
            className={classes.page}
            header={
                <CQHeader/>
            }
            footer={
                <Footer data={[]} />
            }
        >
            <Hero/>
            {/* TEMP DATA */}
            <Section sectionData={1} content={<Sponsors/>} />
            <Section sectionData={2} content={<Sponsors/>} />
            <Section sectionData={3} content={<Sponsors/>} />
            {/* SPONSORS */}
            <Section sectionData={5} content={<Sponsors/>} />
        </AppShell>
    );
}

import { Section } from '../components/Section';
import { createStyles, AppShell } from '@mantine/core';
import {
    Hero,
    Sponsors,
    Footer,
    CQHeader,
    About,
    Team,
    FAQ
} from '../components';

const useStyles = createStyles((theme) => ({
    page: {
        backgroundColor: theme.colors.cqgreen,
    },
}))

export default function HomePage() {
    const { classes } = useStyles();

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
            <Section sectionData={1} content={<About/>} />
            <Section sectionData={3} content={<FAQ/>} />
            <Section sectionData={4} content={<Team/>} />
            <Section sectionData={5} content={<Sponsors/>} />
        </AppShell>
    );
}

import { Section } from '../components/Section';
import { createStyles, AppShell } from '@mantine/core';
import {
    Hero,
    Sponsors,
    Footer,
    CQHeader
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
            {/* TEMP DATA */}
            <Section sectionData={1} content={<Sponsors/>} />
            <Section sectionData={2} content={<Sponsors/>} />
            <Section sectionData={3} content={<Sponsors/>} />
            {/* SPONSORS */}
            <Section sectionData={5} content={<Sponsors/>} />
        </AppShell>
    );
}

import { createStyles, AppShell } from '@mantine/core';
import { Section } from '../components/Section';
import {
  Hero,
  Sponsors,
  Footer,
  CQHeader,
  About,
  Team,
  FAQ,
  Tracks,
  Challenges,
} from '../components';

const useStyles = createStyles((theme) => ({
  page: {
    backgroundColor: theme.colors.cqgreen,
  },
}));

export default function HomePage() {
  const { classes } = useStyles();

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      className={classes.page}
      header={<CQHeader />}
      footer={<Footer data={[]} />}
    >
      <Hero />
      <Section sectionData={1} content={<About />} />
      <Section sectionData={2} content={<Tracks />} />
      <Section optionalTitle="Challenges" content={<Challenges />} />
      <Section sectionData={3} content={<Team />} />
      <Section sectionData={4} content={<FAQ />} />
      <Section sectionData={5} content={<Sponsors />} />
    </AppShell>
  );
}

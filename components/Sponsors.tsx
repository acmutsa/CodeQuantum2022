import {
  ThemeIcon,
  Text,
  Title,
  Center,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
} from '@mantine/core';

export const sponsorList = [
  {
    imagePath: '/images/sponsors/google-cloud.png',
    altText: 'Google Cloud',
  },
  {
    imagePath: '/images/sponsors/H-E-B.png',
    altText: 'H-E-B',
  },
  {
    imagePath: '/images/sponsors/jpmorgan-chase-logo.png',
    altText: 'JPMorgan Chase',
  },
  {
    imagePath: '/images/sponsors/matrix.png',
    altText: 'Matrix',
  },
  {
    imagePath: '/images/sponsors/paycom.png',
    altText: 'Paycom',
  },
];

interface SponsorProps {
  imagePath: string;
  altText: string;
}

const useStyles = createStyles((theme) => ({
  image: {
    width: 200,
  },

  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 800,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },
}));

export function Sponsor({ imagePath, altText } : SponsorProps) {
  // const classes = useStyles();
  return (
    <div>
      <Center>
        <img src={imagePath} alt={altText} style={{ width: 200 }} />
      </Center>
    </div>
  );
}

interface FeaturesGridProps {
  data?: SponsorProps[];
}

export function FeaturesGrid({ data = sponsorList }: FeaturesGridProps) {
  const { classes, theme } = useStyles();
  const sponsors = data.map((sponsor, index) => <Sponsor {...sponsor} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Center>
        <Title className={classes.title}>Special thanks to our Partners:</Title>
      </Center>
      <SimpleGrid
        mt="3.5rem"
        cols={3}
        spacing={theme.spacing.xl * 0.25}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {sponsors}
      </SimpleGrid>
    </Container>
  );
}

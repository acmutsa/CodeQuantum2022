import {
  Center,
  Container,
  createStyles,
  SimpleGrid,
  useMantineTheme,
} from '@mantine/core';
import { sponsorList as Sponsors } from '../../data/_data';

const useStyles = createStyles((theme) => ({
    sponsorImageSize: {
      minWidth: 225,
      maxWidth: 250,
      minHeight: 225,
      maxHeight: 250,

      [theme.fn.smallerThan('md')]: {
        minWidth: 175,
        maxWidth: 200,
        minHeight: 175,
        maxHeight: 200,
      },

      [theme.fn.smallerThan('sm')]: {
        minWidth: 125,
        maxWidth: 150,
        minHeight: 125,
        maxHeight: 150,
      },
    }
}))

interface SponsorProps {
  imagePath: string;
  altText: string;
}

function Sponsor({ imagePath, altText } : SponsorProps) {
  const { classes } = useStyles();

  return (
      <Center>
        <img src={`/images/sponsors/${imagePath}`} alt={altText} className={classes.sponsorImageSize}/>
      </Center>
  );
}

interface FeaturesGridProps {
  data?: SponsorProps[];
}

export function FeaturesGrid({ data = Sponsors }: FeaturesGridProps) {
  const theme = useMantineTheme();
  const sponsors = data.map((sponsor, index) => <Sponsor {...sponsor} key={index} />);

  return (
    <Container>
      <SimpleGrid
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
        ]}
      >
        {sponsors}
      </SimpleGrid>
    </Container>
  );
}

import {
  Text,
  Title,
  Center,
  Container,
  SimpleGrid,
} from '@mantine/core';
import { sponsorList as Sponsors } from '../data/_data';
import { useStyles } from '../css/style';

interface SponsorProps {
  imagePath: string;
  altText: string;
}

export function Sponsor({ imagePath, altText } : SponsorProps) {
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

export function FeaturesGrid({ data = Sponsors }: FeaturesGridProps) {
  const { classes, theme } = useStyles();
  const sponsors = data.map((sponsor, index) => <Sponsor {...sponsor} key={index} />);

  return (
    <Container className={classes.sponsorWrapper}>
      <Center>
          <Title className={classes.sponsorTitle}>Special thanks to our{' '}
            <Text component="span" variant="gradient" gradient={{ from: 'pink', to: 'violet' }} inherit>Partners</Text>
          </Title>
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

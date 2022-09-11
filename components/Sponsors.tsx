import {
  Center,
  Container,
  SimpleGrid,
  useMantineTheme,
} from '@mantine/core';
import { sponsorList as Sponsors } from '../data/_data';

interface SponsorProps {
  imagePath: string;
  altText: string;
}

export function Sponsor({ imagePath, altText } : SponsorProps) {
  return (
      <Center>
        <img src={imagePath} alt={altText} style={{ width: 200 }} />
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

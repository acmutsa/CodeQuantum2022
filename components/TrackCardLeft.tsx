import { Container, createStyles, Text, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  image: {
    maxHeight: 150,
    maxWidth: 150,
    marginRight: 20,
    marginBottom: 0,
    marginTop: 5,
    float: 'left',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      height: 'auto',
      maxHeight: 'none',
      maxWidth: 'none',
      marginRight: 0,
      marginBottom: 0,
      marginTop: 5,
      float: 'none',
    },
  },

  trackCard: {
    marginTop: 25,
    marginBottom: 25,
    minHeight: '20vh',
    color: theme.white,
  },

  trackText: {
    textAlign: 'left',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      textAlign: 'center',
    },
  },
}));

interface TrackCardProps {
  trackTitle: string;
  trackInformation: string;
  imageFileName: string;
}

export function TrackCardLeft({ trackTitle, trackInformation, imageFileName }: TrackCardProps) {
  const { classes } = useStyles();

  return (
    <>
      <Container className={classes.trackCard}>
        <img
          className={classes.image}
          src={`/images/${imageFileName}`}
          alt={`${trackTitle} - ${imageFileName}`}
        />
        <Text className={classes.trackText} size="xl" mt="xl">
          <Title>{trackTitle}</Title>
          {trackInformation}
        </Text>
      </Container>
    </>
  );
}

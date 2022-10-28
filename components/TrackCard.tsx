import { Container, createStyles, useMantineTheme, Image, Spoiler, Text, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    trackCard: {
        marginTop: 25,
        marginBottom: 25,
        color: '#FFFFFF',
    }
}))

interface TrackCardProps {
    trackTitle: string;
    trackInformation: string;
    imageFileName: string;
    floatDirection: string;
}

export function TrackCard({ trackTitle, trackInformation, imageFileName, floatDirection }: TrackCardProps) {
    const { classes } = useStyles();
    const theme = useMantineTheme();

    return (
        <>
            <Container className={classes.trackCard}>
                {/* <Spoiler maxHeight={120} showLabel="Read more" hideLabel="Hide"> */}
                    <img
                        style={{
                            maxWidth: '100%',
                            height: '150px',
                            marginLeft: '20px',
                            marginBottom: '0px',
                            marginTop: '5px',
                            float: floatDirection,
                        }}
                        radius="md"
                        src={`/images/${imageFileName}`}
                        // src={`./images/fox.svg`}
                        alt={`${trackTitle} picture of ${imageFileName}`}
                    />
                    <Text style={{ textAlign: floatDirection }} size="xl" mt="xl">
                        <Title>{trackTitle}</Title>
                        {trackInformation}
                    </Text>
                {/* </Spoiler> */}
            </Container>
        </>
    );
}

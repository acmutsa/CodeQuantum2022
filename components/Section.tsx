import { Container, Title, Text, Anchor, Center } from '@mantine/core';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { createStyles } from '@mantine/core';
import { navLinks as HeaderLinks } from '../data/_data';

const useStyles = createStyles((theme) => ({
    section: {
        padding: theme.spacing.xl * 1.5,
    },

    sectionTitle: {
        fontSize: 25,
        underline: 'none',
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xs / 2,
        textAlign: 'center',
        color: theme.white
    },

    sponsorTitle: {
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 800,
        marginBottom: theme.spacing.md,
        textAlign: 'center',

        [theme.fn.smallerThan('sm')]: {
            fontSize: 28,
        },
    },
}))

export const Section = (props: { sectionData: number ; content: ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
    const { classes, theme } = useStyles();

    return (
        <Center>
            <Container className={classes.section} id={HeaderLinks[props.sectionData].link}>
                <Title className={classes.sponsorTitle}>
                    <Text
                        component="span" 
                        variant="gradient" 
                        gradient={{ from: theme.colors.cqorange[4], to: theme.colors.cqred[4] }} 
                        inherit
                    >
                        {HeaderLinks[props.sectionData].label}
                    </Text>
                </Title>

                {/* content after section title */}
                {props.content}
            </Container>
        </Center>
    );
};

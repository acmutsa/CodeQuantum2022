import { Container, Title, Text, Anchor, Center } from '@mantine/core';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { createStyles } from '@mantine/core';
import { navLinks as HeaderLinks } from '../data/_data';

const useStyles = createStyles((theme) => ({
    sectionTitle: {
        color: theme.white,
        marginTop: '75px', // height of our navigation bar
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 800,
        marginBottom: theme.spacing.md,
        textAlign: 'center',

        [theme.fn.smallerThan('sm')]: {
            fontSize: 28,
        },
    },
}))

interface SectionProps {
    sectionData?: number;
    optionalTitle?: string;
    content: ReactChild | ReactFragment | ReactPortal | null | undefined;
}

export const Section = ({ sectionData, content, optionalTitle }: SectionProps) => {
    const { classes, theme } = useStyles();
    const sectionValueLink = sectionData ? HeaderLinks[sectionData] : '';

    return (
        <Center>
            <Container id={sectionData ? HeaderLinks[sectionData].link : optionalTitle}>
                <Title className={classes.sectionTitle}>
                    <Text
                        component="span" 
                        variant="gradient" 
                        gradient={{ from: theme.colors.cqorange[4], to: theme.colors.cqred[4] }} 
                        inherit
                    >
                        {sectionData ? HeaderLinks[sectionData].label : optionalTitle}
                    </Text>
                </Title>

                {/* content after section title */}
                {content}
            </Container>
        </Center>
    );
};

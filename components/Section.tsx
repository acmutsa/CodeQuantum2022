import { Container, Title, Text, Anchor } from '@mantine/core';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { useStyles } from '../css/style';
import { navLinks as HeaderLinks } from '../data/_data';

// eslint-disable-next-line max-len
export const Section = (props: { sectionData: number ; content: ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
    const { classes, theme } = useStyles();

    return (
        <Container className={classes.section} id={HeaderLinks[props.sectionData].link}>
            {/* <Anchor href={HeaderLinks[props.sectionData].link} underline={false}> */}
                <Title className={classes.sponsorTitle}>
                    <Text
                        component="span" 
                        variant="gradient" 
                        gradient={{ from: theme.colors.cqorange[4], to: theme.colors.cqred[4] }} 
                        inherit
                        >{HeaderLinks[props.sectionData].label}
                    </Text>
                </Title>
            {/* </Anchor> */}
            {props.content}
        </Container>
    );
};

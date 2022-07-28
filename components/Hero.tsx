import React from 'react';
import { createStyles, Overlay, Container, Title, Button, Text, Chip } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        // backgroundImage:
        //     'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    outerContainer: {
        height: 700,
        maxWidth: '90%',
        minWidth: 1300,
        paddingRight: '5rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    container: {
        height: 700,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: theme.spacing.xl * 6,
        zIndex: 1,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
            height: 500,
            paddingBottom: theme.spacing.xl * 3,
        },
    },

    image: {
        width: 550,
        zIndex: 2,
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    title: {
        color: theme.black,
        fontSize: 60,
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 40,
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
            lineHeight: 1.3,
        },
    },

    subtitle: {
        color: theme.black,
        fontSize: 40,
        fontWeight: 700,
        lineHeight: 1.0,
        marginBottom: '2rem',

        [theme.fn.smallerThan('sm')]: {
            fontSize: 30,
            lineHeight: 1.1,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: 22,
            lineHeight: 1.1,
        },
    },

    boldHeading: {
        color: theme.black,
        fontSize: '1.75rem',
        fontWeight: 800,
        lineHeight: 1.0,
        marginBottom: '1rem',

        [theme.fn.smallerThan('sm')]: {
            fontSize: '1.5rem',
            lineHeight: 1.0,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: '1.25rem',
            lineHeight: 1.0,
        },
    },

    description: {
        color: theme.black,
        maxWidth: 600,

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            fontSize: theme.fontSizes.sm,
        },
    },

    control: {
        marginTop: theme.spacing.xl * 1.5,

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },
}));

export function HeroContentLeft() {
    const { classes } = useStyles();

    return (
        <div className={classes.hero}>
            {/*<Overlay*/}
            {/*  gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"*/}
            {/*  opacity={1}*/}
            {/*  zIndex={0}*/}
            {/*/>*/}
            <Container className={classes.outerContainer}>
                <Container className={classes.container}>
                    <Text component="span" variant="gradient" gradient={{ from: 'pink', to: 'violet' }} inherit>
                        <Title className={classes.title}>CodeQuantum 2022</Title>
                    </Text>
                    {/* eslint-disable-next-line max-len */}
                    <Title className={classes.subtitle} order={1}>November 5<sup>th</sup> - 6<sup>th</sup></Title>
                    <Text className={classes.description} size="xl" mt="xl">
                        <Title className={classes.boldHeading}>What is{' '}
                            <Text component="span" variant="gradient" gradient={{ from: 'pink', to: 'violet' }} inherit>CodeQuantum</Text>?
                        </Title>
                        CodeQuantum is San Antonio’s first 24-hour hackathon geared towards <a href="https://www.womenforpoliticalchange.org/appendix" rel="external">marginalized genders</a> to promote inclusivity and diversity! Organized by the ACM-W chapter at UTSA, CodeQuantum is dedicated to creating a safe hacking space for students in the tech field.
                    </Text>

                    {/*TODO: Implement registration button*/}
                    {/*<Button variant="gradient" gradient={{ from: 'pink', to: 'violet' }} size="xl" radius="xl" className={classes.control}>*/}
                    {/*    Register*/}
                    {/*</Button>*/}
                </Container>
                <img src="/images/placeholder.jpg" alt="Person at computer" className={classes.image} />
            </Container>
        </div>
    );
}

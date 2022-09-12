import React from 'react';
import { createStyles, 
    Button, 
    Container, 
    Title, 
    Text, 
    useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    hero: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    outerContainer: {
        // height: 700,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: 850,

        [theme.fn.smallerThan('md')]: {
            height: 'auto',
            alignText: 'center',
        },

        [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
            maxWidth: 1300,
        },
    },

    container: {
        // height: 700,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        // paddingBottom: theme.spacing.xl * 6,
        zIndex: 1,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
            height: 500,
            paddingBottom: theme.spacing.xl * 3,
            textAlign: 'center',
        },
        [theme.fn.largerThan('sm')]: {
            paddingRight: theme.spacing.xl,
        },
    },

    centerText: {
        width: '100%',
        textAlign: 'center',
    },

    heroTitle: {
        fontSize: 60,
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            textAlign: 'center',
            fontSize: 45,
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: 37,
            lineHeight: 1.3,
        },
    },

    subtitle: {
        color: theme.white,
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
        color: theme.white,
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

    heroDescription: {
        color: theme.white,
        maxWidth: 600,

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            fontSize: theme.fontSizes.md,
        },
    },

    registerButton: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        width: '60%',
        marginTop: '2rem',

        '&:hover': {
            backgroundColor: theme.colors.cqgreen[4],
        }
    },

    heroImage: {
        width: 550,
        zIndex: 2,
        [theme.fn.smallerThan('xl')]: {
            display: 'none',
        },
    },
    
    aLinks: {
        '&, &:visited': {
            color: theme.colors.cqorange[4],
            textDecoration: 'none',
    
            '&:hover, &:active': {
                color: theme.colors.cqyellow[4],
                textDecoration: 'underline',
            },
        }
    },
}))

export function HeroContentLeft() {
    const { classes } = useStyles();
    const theme = useMantineTheme();

    return (
        <div className={classes.hero}>
            <Container className={classes.outerContainer}>
                <Container className={classes.container}>
                    <div className={classes.centerText}>
                        <Text variant="gradient" gradient={{ from: theme.colors.cqorange[4], to: theme.colors.cqred[4] }} inherit>
                            <Title className={classes.heroTitle}>CodeQuantum 2022</Title>
                        </Text>
                        <Title className={classes.subtitle} order={1}>November 5<sup>th</sup> - 6<sup>th</sup></Title>
                    </div>
                    <Text className={classes.heroDescription} size="xl" mt="xl">
                        <Title className={classes.boldHeading}>What is{' '}
                            <Text component="span" variant="gradient" gradient={{ from: theme.colors.cqorange[4], to: theme.colors.cqred[4] }} inherit>CodeQuantum</Text>?
                        </Title>
                        CodeQuantum is San Antonio's first 24-hour hackathon geared towards <a className={classes.aLinks} href="https://www.womenforpoliticalchange.org/appendix" rel="external">marginalized genders</a> to promote inclusivity and diversity! Organized by the ACM-W chapter at UTSA, CodeQuantum is dedicated to creating a safe hacking space for students in the tech field.
                    </Text>

                    <div className={classes.centerText}>
                        <Button 
                            className={classes.registerButton} 
                            component="a"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://rowdyhacks.typeform.com/codequantum"
                            variant="gradient" 
                            gradient={{ from: theme.colors.cqorange[4], to: theme.colors.cqred[4] }} 
                            size="xl" 
                            radius="xl"
                        >
                            Register now!
                        </Button>
                    </div>
                </Container>
                <img src="/images/undraw_hiking_re_k0bc.svg" alt="Person at computer" className={classes.heroImage} />
            </Container>
        </div>
    );
}

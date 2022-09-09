import React from 'react';
import { Button, Container, Title, Text, useMantineTheme } from '@mantine/core';
import { useStyles } from '../css/style';

export function HeroContentLeft() {
    const { classes } = useStyles();
    const theme = useMantineTheme();

    return (
        <div className={classes.hero}>
            <Container className={classes.outerContainer}>
                <Container className={classes.container}>
                    <div className={classes.center}>
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

                    <div className={classes.center}>
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
                <img src="/images/undraw_hiking_re_k0bc.svg" alt="Person at computer" className={classes.image} />
            </Container>
        </div>
    );
}

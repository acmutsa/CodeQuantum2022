import React from 'react';
import { Button, Container, Title, Text } from '@mantine/core';
import { useStyles } from '../css/style';

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
                    <div className={classes.center}>
                        <Text component="span" variant="gradient" gradient={{ from: 'pink', to: 'violet' }} inherit>
                            <Title className={classes.heroTitle}>CodeQuantum 2022</Title>
                        </Text>
                        {/* eslint-disable-next-line max-len */}
                        <Title className={classes.subtitle} order={1}>November 5<sup>th</sup> - 6<sup>th</sup></Title>
                    </div>
                    <Text className={classes.heroDescription} size="xl" mt="xl">
                        <Title className={classes.boldHeading}>What is{' '}
                            <Text component="span" variant="gradient" gradient={{ from: 'pink', to: 'violet' }} inherit>CodeQuantum</Text>?
                        </Title>
                        CodeQuantum is San Antonio’s first 24-hour hackathon geared towards <a href="https://www.womenforpoliticalchange.org/appendix" rel="external">marginalized genders</a> to promote inclusivity and diversity! Organized by the ACM-W chapter at UTSA, CodeQuantum is dedicated to creating a safe hacking space for students in the tech field.
                    </Text>

                    {/* TODO: Implement registration button */}
                    <div className={classes.center}>
                        <Button variant="gradient" gradient={{ from: 'pink', to: 'violet' }} size="xl" radius="xl" className={classes.registerButton}>
                            Register now!
                        </Button>
                    </div>
                </Container>
                <img src="/images/placeholder.jpg" alt="Person at computer" className={classes.image} />
            </Container>
        </div>
    );
}

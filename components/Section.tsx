import { Container, Title, MantineProvider } from '@mantine/core';
import Link from 'next/link';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { UrlObject } from 'url';
import {useStyles} from '../css/style';

// eslint-disable-next-line max-len
export const Section = (props: { href: string | UrlObject; title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
    const { classes } = useStyles();

    return (
        <MantineProvider
          theme={{
                spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
                components: {
                    Container: {
                        defaultProps: {
                            sizes: {
                                xs: 540,
                                sm: 720,
                                md: 960,
                                lg: 1140,
                                xl: 1320,
                            },
                        },
                    },
                },
            }}
        >
            <Container className={classes.section}>
                <Link href={props.href}>
                    <a><Title className={classes.sectionTitle}>{props.title}</Title></a>
                </Link>
                <span className={classes.description}>{props.children}</span>
            </Container>
        </MantineProvider>
    );
};

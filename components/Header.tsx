import React, { useState } from 'react';
import { createStyles, Header, Container, Group, Modal } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        border: 'none',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
        width: '30px',
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
            color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
        },
    },
}));

interface HeaderSimpleProps {
    links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
    const [opened, toggleOpened] = useState(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();

    const items = links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={cx(classes.link, { [classes.linkActive]: active === link.link })}
          onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <Header height={75}>
            <Container className={classes.header}>
                <Image
                  priority
                  src="/images/cq-logo.png"
                  height={50}
                  width={50}
                  alt="CodeQuantum logo"
                />

                <Group spacing={30} className={classes.links}>
                    {items}
                </Group>

                <IconMenu2
                  onClick={() => toggleOpened(!opened)}
                  className={classes.burger}
                  size="sm"
                />
            </Container>
            <Modal
              opened={opened}
              onClose={() => toggleOpened(!opened)}
              title="CodeQuantum 2022"
              fullScreen
            >
                {items}
            </Modal>
        </Header>
    );
}

import React, { useState } from 'react';
import { Header, Container, Group, Modal, useMantineTheme } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';
import Image from 'next/image';
import { useStyles } from '../css/style';
import theme from '../data/mantineThemeOverride';

interface HeaderSimpleProps {
    links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
    const [opened, toggleOpened] = useState(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();
    const theme = useMantineTheme(); 

    const items = links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={cx(classes.navLink, { [classes.navLinkActive]: active === link.link })}
          onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    const modalItems = links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={cx(classes.modalLink, { [classes.navLinkActive]: active === link.link })}
          onClick={() => {
              setActive(link.link);
          }}
        >
            {link.label}
        </a>
    ));

    return (
        <Header height={75} className={classes.headerbg}>
            <Container className={classes.header}>
                <Image
                  priority
                  src="/images/CQ_Logo_2022.svg"
                  height={50}
                  width={50}
                  alt="CodeQuantum logo"
                />

                <Group spacing={30} className={classes.navLinks}>
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
            >
                {modalItems}
            </Modal>
        </Header>
    );
}

import React, { useState } from 'react';
import { Header, Container, Group, Modal } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';
import Image from 'next/image';
import { useStyles } from '../css/style';

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

    const modalItems = links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={cx(classes.modalLink, { [classes.linkActive]: active === link.link })}
          onClick={() => {
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
                {modalItems}
            </Modal>
        </Header>
    );
}

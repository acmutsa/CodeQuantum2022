import React, { useState } from 'react';
import {  
    Container, 
    Group, 
    useMantineTheme,
    Burger,
    MediaQuery,
    Modal,
    Header
} from '@mantine/core';
import Image from 'next/image';
import { useStyles } from '../css/style';
import Link from 'next/link'
import { navLinks as HeaderLinks } from '../data/_data';

export function HeaderSimple() {
    const { classes, cx } = useStyles();
    const [opened, setOpened] = useState(false);
    const [active, setActive] = useState(HeaderLinks[0].link);

    const items = HeaderLinks.map((link) => (
        <Link
            key={link.label} 
            href={{
            pathname: "/",
            hash: `${link.link}`
        }}>
            <a className={cx(classes.navLink, { [classes.navLinkActive]: active === link.link })}>{link.label}</a>
        </Link>
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
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        mr="xl"
                    />
                </MediaQuery>
                <div className={classes.navLinks}>
                    <Group spacing={30} className={classes.navLinks}>
                        {items}
                    </Group>
                </div>
            </Container>
            <ModalSimple active={active} opened={opened} setOpened={setOpened} />
        </Header>
    );
}

export function ModalSimple(props: { active: string; opened: boolean; setOpened: (arg0: (o: any) => boolean) => void; }) {
    const { classes, cx } = useStyles();

    const modalItems = HeaderLinks.map((link) => (
        <Link 
            key={link.label}
            href={{
            pathname: "/",
            hash: `${link.link}`
        }}>
            <a className={cx(classes.modalLink, { [classes.navLinkActive]: props.active === link.link })}>{link.label}</a>
        </Link>
    ));

    return (
        <Modal
            opened={props.opened}
            onClose={() => props.setOpened((o) => !o)}
        >
            {modalItems}
        </Modal>
    )
}

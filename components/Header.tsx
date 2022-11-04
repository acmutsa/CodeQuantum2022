import React, { useState } from 'react';
import { createStyles, Container, Group, Burger, MediaQuery, Modal, Header } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks as HeaderLinks } from '../data/_data';

const useStyles = createStyles((theme) => ({
  navLink: {
    display: 'block',
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.white,
    fontSize: theme.fontSizes.md,
    lineHeight: theme.fontSizes.md * 0.12,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colors.cqorange[7],
    },
  },

  modalLink: {
    display: 'flex',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.cqorange[0],
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,

    '&:hover': {
      backgroundColor: theme.colors.cqorange[7],
    },
  },

  navLinkActive: {
    '&, &:hover': {
      backgroundColor: theme.colors.cqorange[4],
      color: theme.white,
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    border: 'none',
  },

  headerbg: {
    backgroundColor: theme.colors.cqgreen[4],
    borderBottom: `1px solid ${theme.colors.cqorange[4]}`,
  },

  navLinks: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mlhBadge: {
    display: 'block',
    maxWidth: 100,
    minWidth: 60,
    position: 'fixed',
    right: 50,
    top: 75,
    width: '10%',
    zIndex: 10000,
  },

  mlhBadgeImage: {
    width: '100%',
  },
}));

export function ModalSimple(props: {
  active: string;
  opened: boolean;
  setOpened: (arg0: (o: any) => boolean) => void;
}) {
  const { classes, cx } = useStyles();

  const modalItems = HeaderLinks.map((link) => (
    <Link
      key={link.label}
      href={{
        pathname: '/',
        hash: `${link.link}`,
      }}
    >
      <a className={cx(classes.modalLink, { [classes.navLinkActive]: props.active === link.link })}>
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Modal opened={props.opened} onClose={() => props.setOpened((o) => !o)}>
      {modalItems}
    </Modal>
  );
}

export function HeaderSimple() {
  const { classes, cx } = useStyles();
  const [opened, setOpened] = useState(false);
  const [active] = useState(HeaderLinks[0].link);

  const items = HeaderLinks.map((link) => (
    <Link
      key={link.label}
      href={{
        pathname: '/',
        hash: `${link.link}`,
      }}
    >
      <a className={cx(classes.navLink, { [classes.navLinkActive]: active === link.link })}>
        {link.label}
      </a>
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
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" mr="xl" />
        </MediaQuery>
        <div className={classes.navLinks}>
          <Group spacing={30} className={classes.navLinks}>
            {items}
          </Group>
        </div>
      </Container>
      <Link href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=red">
        <a className={classes.mlhBadge}>
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-red.svg"
            alt="Major League Hacking 2023 Hackathon Season"
            className={classes.mlhBadgeImage}
          />
        </a>
      </Link>
      <ModalSimple active={active} opened={opened} setOpened={setOpened} />
    </Header>
  );
}

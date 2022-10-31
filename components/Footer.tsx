import { Text, Container, ActionIcon, Group, createStyles } from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const useStyles = createStyles((theme) => ({
  footerLink: {
    display: 'block',
    // color: theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  wrapper: {
    width: 160,
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.white,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  footer: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colors.cqgreen[7],
    borderTop: `1px solid ${theme.colors.cqorange[4]}`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  // NOT CURRENTLY USED
  description: {
    marginTop: 5,
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colors.cqorange[4]}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  afterFooterText: {
    color: theme.white,

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      textAlign: 'center',
    }
  },

  socials: {
    color: theme.white,
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },

  socialItems: {
    marginRight: '1rem',
    '&:hover': {
      backgroundColor: theme.colors.cqorange[7],
    },
  },

  socialImages: {
    color: theme.white,
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function FooterLinks({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.footerLink}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image
            priority
            src="/images/CQ_Logo_2022.svg"
            height={75}
            width={75}
            alt="CodeQuantum logo"
          />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text className={classes.afterFooterText} size="sm" align="left">
          CodeQuantum adheres to the 
          <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
            <a>
              Major League Hacking Code Of Conduct
            </a>
          </Link>
        </Text>

        <Group spacing={0} className={classes.socials} position="right" noWrap>
          <ActionIcon size="lg" className={classes.socialItems}>
            <Link href="https://twitter.com/CqHacks">
              <a>
                <IconBrandTwitter size={30} stroke={1.5} className={classes.socialImages} />
              </a>
            </Link>
          </ActionIcon>
          <ActionIcon size="lg" className={classes.socialItems}>
            <Link href="https://www.instagram.com/cqhacks/">
              <a>
                <IconBrandInstagram size={30} stroke={1.5} className={classes.socialImages} />
              </a>
            </Link>
          </ActionIcon>
          <ActionIcon size="lg" className={classes.socialItems}>
            <Link href="https://www.linkedin.com/company/acmw-code-quantum/">
              <a>
                <IconBrandLinkedin size={30} stroke={1.5} className={classes.socialImages} />
              </a>
            </Link>
          </ActionIcon>
          <ActionIcon size="lg" className={classes.socialItems}>
            <Link href="https://github.com/UTSA-ACM/CodeQuantum2022">
              <a>
                <IconBrandGithub size={30} stroke={1.5} className={classes.socialImages} />
              </a>
            </Link>
          </ActionIcon>
        </Group>

        <Text className={classes.afterFooterText} size="sm" align="right">
          © 2022 CodeQuantum // Designed with ♥ by the CodeQuantum Team
        </Text>
      </Container>
    </footer>
  );
}

import { Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useStyles } from '../css/style';
import theme from '../data/mantineThemeOverride';

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
              <div className={classes.groups}>
                  {groups}
              </div>
          </Container>
          <Container className={classes.afterFooter}>
              <Text className={classes.afterFooterText} size="sm">
                  © 2022 CodeQuantum // Designed with ♥ by the CodeQuantum Team
              </Text>

              <Group spacing={0} className={classes.socials} position="right" noWrap>
                  <ActionIcon size="lg" className={classes.socialItems}>
                      <Link href="https://twitter.com/CqHacks">
                          <a><IconBrandTwitter size={30} stroke={1.5} className={classes.socialImages}/></a>
                      </Link>
                  </ActionIcon>
                  <ActionIcon size="lg" className={classes.socialItems}>
                      <Link href="https://www.instagram.com/cqhacks/">
                          <a><IconBrandInstagram size={30} stroke={1.5} className={classes.socialImages}/></a>
                      </Link>
                  </ActionIcon>
                  <ActionIcon size="lg" className={classes.socialItems}>
                      <Link href="https://www.linkedin.com/company/acmw-code-quantum/">
                          <a><IconBrandLinkedin size={30} stroke={1.5} className={classes.socialImages}/></a>
                      </Link>
                  </ActionIcon>
                  <ActionIcon size="lg" className={classes.socialItems}>
                      <Link href="https://github.com/UTSA-ACM/CodeQuantum2022">
                          <a><IconBrandGithub size={30} stroke={1.5} className={classes.socialImages}/></a>
                      </Link>
                  </ActionIcon>
              </Group>
          </Container>
      </footer>
    );
}

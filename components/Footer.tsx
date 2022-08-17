import { Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandGithub, IconBrandInstagram } from '@tabler/icons';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useStyles } from '../css/style';

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
                    src="/images/cq-logo.png"
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
              <Text color="dimmed" size="sm">
                  © 2022 CodeQuantum // Designed with ♥ by the CodeQuantum Team
              </Text>

              <Group spacing={0} className={classes.social} position="right" noWrap>
                  <ActionIcon size="lg">
                      <Link href="https://twitter.com/codequantum22">
                          <a><IconBrandTwitter size={30} stroke={1.5} /></a>
                      </Link>
                  </ActionIcon>
                  <ActionIcon size="lg">
                      <Link href="https://www.instagram.com/codequantum22/">
                          <a><IconBrandInstagram size={30} stroke={1.5} /></a>
                      </Link>
                  </ActionIcon>
                  <ActionIcon size="lg">
                      <Link href="https://github.com/UTSA-ACM/CodeQuantum2022">
                          <a><IconBrandGithub size={30} stroke={1.5} /></a>
                      </Link>
                  </ActionIcon>
              </Group>
          </Container>
      </footer>
    );
}

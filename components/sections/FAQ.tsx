import { Accordion, createStyles, useMantineTheme } from '@mantine/core';
import { faqInformation } from '../../data/_FAQ_data';

const useStyles = createStyles((theme) => ({
  root: {
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    color: theme.white,
    borderRadius: theme.radius.sm,

    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      width: 750,
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: 500,
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: 350,
    },
  },

  item: {
    backgroundColor: 'unset',
    border: '1px solid transparent',
    position: 'relative',
    zIndex: 0,
    transition: 'transform 150ms ease',

    '&[data-active]': {
      transform: 'scale(1.03)',
      backgroundColor: 'unset',
      boxShadow: theme.shadows.md,
      border: '1px solid transparent',
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  faqTitle: {
    color: theme.white,
    fontSize: '1.2rem',
  },

  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(-90deg)',
    },
  },
}));

interface FAQProps {
  question: string;
  information: string;
}

function QuestionCard({ question, information }: FAQProps) {
  const { classes } = useStyles();

  return (
    <Accordion.Item value={question}>
      <Accordion.Control className={classes.faqTitle}>{question}</Accordion.Control>
      <Accordion.Panel>{information}</Accordion.Panel>
    </Accordion.Item>
  );
}

interface FeaturesGridProps {
  data?: FAQProps[];
}

export function FAQ({ data = faqInformation }: FeaturesGridProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const faq = data.map((faqInfo, index) => <QuestionCard {...faqInfo} key={index} />);

  return (
    <Accordion
      sx={{ maxWidth: theme.breakpoints.sm }}
      mx="auto"
      variant="filled"
      classNames={classes}
      className={classes.root}
    >
      {faq}
    </Accordion>
  );
}

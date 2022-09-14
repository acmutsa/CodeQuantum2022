import { Accordion, createStyles } from '@mantine/core'
import { faqInformation as faqInformation } from '../../data/_FAQ_data'

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
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
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    border: '1px solid transparent',
    position: 'relative',
    zIndex: 0,
    transition: 'transform 150ms ease',

    '&[data-active]': {
      transform: 'scale(1.03)',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(-90deg)',
    },
  },
}))

interface FAQProps {
    question: string,
    information: string,
}

function QuestionCard({ question, information }: FAQProps) {
    return (
        <Accordion.Item value={question}>
            <Accordion.Control>{question}</Accordion.Control>
            <Accordion.Panel>{information}</Accordion.Panel>
        </Accordion.Item>
    )
}

interface FeaturesGridProps {
  data?: FAQProps[];
}

export function FAQ({ data = faqInformation }: FeaturesGridProps) {
  const { classes } = useStyles();
  const faq = data.map((faqInfo, index) => <QuestionCard {...faqInfo} key={index} />);

  return (
    <Accordion
    //   sx={{ maxWidth: 700 }}
      mx="auto"
      variant="filled"
      classNames={classes}
      className={classes.root}
    >
        {faq}
    </Accordion>
  )
}
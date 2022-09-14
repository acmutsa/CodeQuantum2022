import { createStyles, 
    Title, 
    Text, 
    useMantineTheme 
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    boldHeading: {
        color: theme.white,
        fontSize: '1.75rem',
        fontWeight: 800,
        lineHeight: 1.0,
        marginBottom: '1rem',

        [theme.fn.smallerThan('sm')]: {
            fontSize: '1.5rem',
            lineHeight: 1.0,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: '1.25rem',
            lineHeight: 1.0,
        },
    },

    heroDescription: {
        color: theme.white,
        maxWidth: 600,

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            fontSize: theme.fontSizes.md,
        },
    },
    
    aLinks: {
        '&, &:visited': {
            color: theme.colors.cqorange[4],
            textDecoration: 'none',
    
            '&:hover, &:active': {
                color: theme.colors.cqyellow[4],
                textDecoration: 'underline',
            },
        }
    },
}))

export function SimpleAbout() {
    const { classes } = useStyles();
    const theme = useMantineTheme();

    return (
        <>
            <Text align="left" className={classes.heroDescription} size="xl" mt="xl">
                <Title className={classes.boldHeading}>What is{' '}
                    <Text 
                        component="span" 
                        variant="gradient" 
                        gradient={{ from: theme.colors.cqorange[4], to: theme.colors.cqred[4] }} 
                        inherit>CodeQuantum</Text>
                    ?
                </Title>
                CodeQuantum is San Antonio's first 24-hour hackathon geared towards <a className={classes.aLinks} href="https://www.womenforpoliticalchange.org/appendix" rel="external">marginalized genders</a> to promote inclusivity and diversity! Organized by the ACM-W chapter at UTSA, CodeQuantum is dedicated to creating a safe hacking space for students in the tech field.
            </Text>

            <Text align="left" className={classes.heroDescription} size="xl" mt="xl">
                <Title className={classes.boldHeading}>Who{' '}
                    <Text 
                        component="span" 
                        variant="gradient" 
                        gradient={{ from: theme.colors.cqorange[4], to: theme.colors.cqred[4] }} 
                        inherit>we</Text>
                    {' '}are
                </Title>
                <a className={classes.aLinks} href="https://acmutsa.org/suborg_acmw" rel="external">Association of Computing Machinery - Women's Chapter</a> at the University of Texas at San Antonio is an all-inclusive organization focused on creating an engaging academic, professional, and social network for women and minorities in technology. Our purpose is to connect students with leaders and encourage them to pursue career opportunities in computing fields and to mentor for academic and professional success.
            </Text>
        </>
    );
}

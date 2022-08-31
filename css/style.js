import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({

    // ---- Page (global) ----

    page: {
        backgroundColor: theme.colors.cqgreen,
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

    // ---- Header (Nav Bar) component ----

    headerbg:{ 
        backgroundColor: theme.colors.cqgreen[4],
        borderBottom: `1px solid ${theme.colors.cqorange[4]}`,
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        border: 'none',
    },

    navLinks: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    navLink: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.white,
        fontSize: theme.fontSizes.md,
        lineHeight: theme.fontSizes.md * .12,
        fontWeight: 500,

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

    burger: {
        cursor: 'pointer',
        color: theme.colors.cqorange[4],
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
        width: '30px',
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

    // ---- Hero component ----

    hero: {
        marginTop: '4rem',
        // position: 'relative',
        // backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
    },

    outerContainer: {
        // height: 700,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        [theme.fn.smallerThan('md')]: {
            height: 'auto',
            alignText: 'center',
        },

        [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
            maxWidth: 1300,
        },
    },

    container: {
        // height: 700,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        // paddingBottom: theme.spacing.xl * 6,
        zIndex: 1,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
            height: 500,
            paddingBottom: theme.spacing.xl * 3,
            textAlign: 'center',
        },
        [theme.fn.largerThan('sm')]: {
            paddingRight: theme.spacing.xl * 2,
        },
    },

    innerImage: {
        width: 500,
        margin: 'auto',
        [theme.fn.largerThan('xl')]: {
            display: 'none',
        },
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    image: {
        width: 550,
        zIndex: 2,
        [theme.fn.smallerThan('xl')]: {
            display: 'none',
        },
    },

    heroTitle: {
        fontSize: 60,
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            textAlign: 'center',
            fontSize: 45,
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: 37,
            lineHeight: 1.3,
        },
    },

    subtitle: {
        color: theme.white,
        fontSize: 40,
        fontWeight: 700,
        lineHeight: 1.0,
        marginBottom: '2rem',

        [theme.fn.smallerThan('sm')]: {
            fontSize: 30,
            lineHeight: 1.1,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: 22,
            lineHeight: 1.1,
        },
    },

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

    control: {
        marginTop: theme.spacing.xl * 1.5,

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },

    registerButton: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        width: '60%',
        marginTop: '2rem',

        '&:hover': {
            backgroundColor: theme.colors.cqgreen[4],
        }
    },

    center: {
        width: '100%',
        textAlign: 'center',
    },

    // ---- Section component ----

    section: {
        padding: theme.spacing.xl * 1.5,
    },

    sectionTitle: {
        fontSize: 25,
        underline: 'none',
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xs / 2,
        textAlign: 'center',
        color: theme.white
    },

    // ---- Sponsors component ----

    sponsorWrapper: {
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 4,
    },

    sponsorTitle: {
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 800,
        marginBottom: theme.spacing.md,
        textAlign: 'center',

        [theme.fn.smallerThan('sm')]: {
            fontSize: 28,
        },
    },

    // ---- Footer component ----

    footer: {
        marginTop: 120,
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

    description: {
        marginTop: 5,
        color: theme.white,

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    wrapper: {
        width: 160,
    },

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

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xs / 2,
        color: theme.white,
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
    }
}));

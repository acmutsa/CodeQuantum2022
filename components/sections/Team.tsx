import { 
    Avatar,
    Container,
    Card,
    Text, 
    Badge,
    Group,
    SimpleGrid,
    useMantineTheme,
    Center,
    createStyles,
    ActionIcon,
    MantineTheme,
    MediaQuery
} from '@mantine/core';
import { IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons'
import { teamPhotos as teamMembers } from '../../data/_data';

const useStyles = createStyles((theme) => ({
    textContent: {
        color: theme.white,

        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            textAlign: 'center',
        }
    },

    socialBadge: {
        '&:hover': {
            cursor: 'pointer'
        },
    },
}))

function renderIcon( value: string ) {
    switch(value.toLowerCase()) {
        case 'linkedin':
          return <IconBrandLinkedin size={16} />
        case 'instagram':
            return <IconBrandInstagram size={16} />
        default:
            return null;
    }
  }

function SocialLinks( value: string, social: string, link: string ) {
    const alt = `${social} Icon Logo`

    return !!value ? 
        <ActionIcon >
            <Avatar 
                component="a" 
                target="_blank" 
                rel="noopener noreferrer" 
                href={link}
                alt={alt}
                size={24} 
                color="orange"
            >
                {renderIcon(social)}
            </Avatar>
        </ActionIcon>
        :
        null
}

function InformationBadge( theme: MantineTheme, value: string ) {
    return !!value ?
        <Badge size="sm" variant="gradient" gradient={{ from: theme.colors.cqorange[4], to: theme.colors.cqred[4] }}>
            {value}
        </Badge>
        :
        null
}

interface TeamProps {
    name: string;
    title: string;
    classification: string;
    pronouns: string;
    photoPath: string;
    tree: string,
    linkedIn: string;
    instagram: string;
}

function AvatarCard({ name, title, classification, pronouns, tree, photoPath, linkedIn, instagram } : TeamProps) {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    const profilePhoto = photoPath ? `/images/team/${photoPath}` : '/images/team/default_profile.svg'
    const profilePhotoAlt = photoPath ? `Headshot of ${name}` : 'default profile picture with some foliage'
    const linkedInLink = linkedIn ? `https://www.linkedin.com/in/${linkedIn}` : ''
    const instagramLink = instagram ? `https://www.instagram.com/${instagram}` : ''

    return (
        <Card shadow="sm" p="lg" radius="md" style={{ backgroundColor: 'unset' }}>
            <Card.Section pt='sm'>
                <Center>
                    <Avatar alt={profilePhotoAlt} radius="xl" size="xl" src={profilePhoto}/>
                </Center>
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={900} className={classes.textContent}>{name}</Text>
            </Group>

            <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
                <Group mt="md" mb="xs">
                    {InformationBadge( theme, title )}
                    {InformationBadge( theme, pronouns )}
                    {InformationBadge( theme, classification )}
                    {InformationBadge( theme, tree )}
                </Group>
            </MediaQuery>

            <Group mt="mb" mb="xs">
                {SocialLinks( linkedIn, 'LinkedIn', linkedInLink )}
                {SocialLinks( instagram, 'Instagram', instagramLink )}
            </Group>
        </Card>
    )
}

interface FeaturesGridProps {
  data?: TeamProps[];
}

export function Team({ data = teamMembers }: FeaturesGridProps) {
    const theme = useMantineTheme();
    const team = data.map((teamMember, index) => <AvatarCard {...teamMember} key={index} />);

    return (
        <Container>
            <SimpleGrid
                cols={3}
                spacing={theme.spacing.xl * 2}
                breakpoints={[
                    { maxWidth: 980, cols: 3, spacing: 'md' },
                    { maxWidth: 755, cols: 2, spacing: 'sm' },
                ]}
                >
                {team}
            </SimpleGrid>
        </Container>
    )
}

import { 
    Avatar,
    Container,
    Card, 
    Image, 
    Text, 
    Badge, 
    Button, 
    Group, 
    SimpleGrid,
    useMantineTheme,
    Center,
    createStyles
} from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons'
import { teamPhotos as teamMembers } from '../../data/_data';

const useStyles = createStyles((theme) => ({
    linkedInBadge: {
        '&:hover': {
            cursor: 'pointer'
        },
    }
}))

interface TeamProps {
    name: string;
    title: string;
    classification: string;
    pronouns: string;
    photoPath: string;
    linkedIn: string;
}

function AvatarCard({ name, title, classification, pronouns, photoPath, linkedIn } : TeamProps) {
    const { classes } = useStyles();
    const theme = useMantineTheme();

    return (
        <Card shadow="sm" p="lg" radius="md" style={{ backgroundColor: 'unset'}}>
            <Card.Section pt='sm'>
                <Center>
                    <Avatar
                        radius="xl" 
                        size="xl" 
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                    />
                </Center>
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} style={{ color: theme.colors.white[0]}}>{name}</Text>
            </Group>

            <Group mt="md" mb="xs">
                <Badge variant="gradient" gradient={{ from: theme.colors.cqorange[4], to: theme.colors.cqred[4] }}>
                    {title}
                </Badge>
                <Badge variant="gradient" gradient={{ from: theme.colors.cqorange[4], to: theme.colors.cqred[4] }}>
                    {pronouns}
                </Badge>
                <Badge variant="gradient" gradient={{ from: theme.colors.cqorange[4], to: theme.colors.cqred[4] }}>
                    {classification}
                </Badge>
                {!!linkedIn ? 
                    <Badge 
                        component="a" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://google.com"
                        className={classes.linkedInBadge}
                        variant="gradient" 
                        gradient={{ from: theme.colors.cqorange[4], to: theme.colors.cqred[4] }}
                    >
                        LinkedIn
                    </Badge>
                    :
                    null
                }
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
                    { maxWidth: 755, cols: 1, spacing: 'sm' },
                ]}
                >
                {team}
            </SimpleGrid>
        </Container>
    )
}
